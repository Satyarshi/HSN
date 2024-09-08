import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBox = () => {
  return (
    <div className="searchBoxWrapper">
      <Search
        placeholder="Enter IFSC Code"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: "100%", maxWidth: "900px", paddingLeft: "0px" }}
      />
    </div>
  );
};

export default SearchBox;
