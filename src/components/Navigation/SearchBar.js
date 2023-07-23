import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  return (
    <Input
      prefix={<SearchOutlined className="search-icon" />}
      placeholder="Search..."
      className="search"
    />
  );
};

export default SearchBar;
