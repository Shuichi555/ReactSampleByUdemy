import React from "react";

//component
// #69 Add css
const ImageList = ({ urlList }) => {
  const list = urlList.map(url => {
    return (
      <li className="item" key={url}>
        <img className="image" src={url} alt="" />
      </li>
    );
  });
  return <ul className="list">{list}</ul>;
};

export default ImageList;
