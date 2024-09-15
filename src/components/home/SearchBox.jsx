import React, { useState } from "react";
import { Input, Table, Spin, Alert } from "antd";
import axios from "axios";
const { Search } = Input;

const SearchBox = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Table columns
  const columns = [
    {
      title: "HSN Code",
      dataIndex: "code",
      key: "code",
      align: "center",
      width: "30%",
      render: (text) => <span className="hsn-code">{text}</span>, // Custom class for HSN code
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "left",
      render: (text) => <span className="description">{text}</span>, // Custom class for Description
    },
  ];

  // Function to handle the search
  const handleSearch = async (value) => {
    if (!value) {
      setSearchResults([]);
      setError("Please enter an HSN code to search.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get("/api/hsn", {
        params: {
          code: value, // Sending the entered HSN code as query param
        },
      });

      if (response.data && response.data.length > 0) {
        setSearchResults(response.data);
      } else {
        setSearchResults([]);
        setError("No results found for the provided HSN code.");
      }
    } catch (error) {
      setSearchResults([]);
      setError("An error occurred while fetching HSN data.");
    }

    setLoading(false);
  };

  return (
    <div className="searchBoxWrapper">
      <div className="container-fluid">
        <div className="textHolder">
          <Search
            placeholder="Enter HSN Code"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
            style={{ width: "100%", maxWidth: "900px", paddingLeft: "0px" }}
          />

          {/* Display loading spinner */}
          {loading && (
            <div style={{ marginTop: "20px" }}>
              <Spin size="large" />
            </div>
          )}

          {/* Display error message */}
          {error && !loading && (
            <Alert message={error} type="error" style={{ marginTop: "20px" }} />
          )}

          {/* Display search results in a table */}
          {!loading && searchResults.length > 0 && (
            <Table
              columns={columns}
              dataSource={searchResults.map((item, index) => ({
                key: index,
                code: item.hsn,
                description: item.description,
              }))}
              pagination={false}
              style={{
                marginTop: "20px",
                width: "100%",
                maxWidth: "900px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
