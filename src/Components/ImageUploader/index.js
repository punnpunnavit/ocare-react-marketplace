import React from "react";

export default function ImageUploader() {
  return (
    <div>
      <UploadImageWrapper
      >
        <div style={{ width: "100px" }}>
          <div
            style={{
              fontSize: "15px",
              color: "rgba(168, 168, 168, 1)",
            }}
          >
            Upload your image here
          </div>
          <div>
            <RiFileLine
              style={{
                fontSize: "25px",
                color: "rgba(168, 168, 168, 1)",
              }}
            />
          </div>
        </div>
        {fileUrl && (
          <img
            style={{
              width: "200px",
              maxHeight: "200px",
              objectFit: "cover",
            }}
            src={fileUrl}
            alt="Preview"
          />
        )}
      </UploadImageWrapper>
      <input
        onChange={pickImageHandler}
        style={{ display: "none" }}
        ref={fileRef}
        type="file"
        accept=".jpg,.jpeg,.png"
      />
    </div>
  );
}
