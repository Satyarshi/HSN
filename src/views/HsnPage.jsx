import React from "react";
import { Button, Input, Upload, message } from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Dragger } = Upload;

const HsnPage = () => {
  const props = {
    name: "file",
    multiple: false,
    action: "/upload.do", // Update this with your file upload endpoint
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="hsn-page">
      <div className="hsn-page-container">
        <h2 style={{ color: "#31AACC", fontWeight: "500" }}>HSN SAC module</h2>

        <div className="hsn-page-actions">
          <Button type="primary" icon={<PlusOutlined />} className="add-button">
            Add
          </Button>

          <Input
            placeholder="Enter HSN/SSC Code or Keyword"
            prefix={<SearchOutlined />}
            className="search-input"
            allowClear
          />
        </div>

        <div className="upload-section">
          <label style={{ marginRight: "50px" }}>Upload CSV file</label>
          <Dragger {...props} className="upload-box">
            <p className="ant-upload-drag-icon">
              <img src="/assets/upload-cloud.svg" alt="upload csv" />
            </p>
            <p className="ant-upload-text" style={{ color: "#E4E4E4" }}>
              Upload Template
            </p>
          </Dragger>
        </div>

        <Button type="primary" className="update-button">
          Update
        </Button>
      </div>
    </div>
  );
};

export default HsnPage;
