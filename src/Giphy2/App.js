import React from "react";

import ImageList from "./containers/ImageList";

// ~#66 components/SearchのSearchを使用
//import Search from "./components/Search";

// #67~ containers/Search.jsに処理を移した
import Search from "./containers/Search";

const App = () => {
  return (
    <div>
      App
      <Search />
      <ImageList />
    </div>
  );
};

export default App;
