// log
import axios from "axios";
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let name = await store
        .getState()
        .blockchain.smartContract.methods.name()
        .call();
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.balanceOf(account)
        .call();
      let cost = "";
      let tokenIds = await store
        .getState()
        .blockchain.smartContract.methods.walletOfOwner(account)
        .call();
      let tokenUrls = []
      for ( var index = 0 ; index<tokenIds.length; index++){
        let temp = await store
          .getState()
          .blockchain.smartContract.methods.tokenURI(tokenIds[index])
          .call();
        tokenUrls.push(temp);
      }
      let tokenData = []
      for (var index = 0 ; index<tokenUrls.length; index++){
        let temp = await axios.get(tokenUrls[index])
          .then((res) => {
              return res.data;
          })
        tokenData.push(temp);
      }
      dispatch(
        fetchDataSuccess({
          name,
          totalSupply,
          cost,
          tokenIds,
          tokenData, 
          tokenUrls
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
