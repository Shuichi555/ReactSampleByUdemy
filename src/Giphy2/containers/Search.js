//change ref. name from ImageList to Search

import Search from "../components/Search";
import { connect } from "react-redux";

import getUrls from "../actions/getUrls";

// #68 for buttonText
const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

// getUrls をして　dispatch　として　return
const mapDispatchToProps = dispatch => {
  return {
    getUrls: word => {
      dispatch(getUrls(word));
    }
  };
};

/* #67~では使用しないため削除
const mapStateToProps = state => {
  return {
    urlList: state.imageUrls
  };
};
*/

// #68
export default connect(mapStateToProps, mapDispatchToProps)(Search);

// for#67 dispatchは今回なしのためnull(最後に自分自身をexport)
//export default connect(null, mapDispatchToProps)(Search);

// #67~ mapStateToProps は使わない
//export default connect(mapStateToProps, null)(Search);
