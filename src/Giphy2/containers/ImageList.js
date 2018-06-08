import ImageList from "../components/ImageList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    urlList: state.imageUrls
  };
};

//dispatchは今回なしのためnull
export default connect(mapStateToProps, null)(ImageList);
