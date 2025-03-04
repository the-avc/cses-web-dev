import { useState } from "react";
import styles from "./BulkRegister.module.scss";
import axiosInstance from "@/api/axiosInstance";
import Title from "@/components/title/Title";
import BackTitle from "@/components/back-title/BackTitle";
import BackIcon from "../../../../public/BackArrow.svg";
import Loader from "../../../../public/loader.png";

const BulkRegister = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("filename.xlsx");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setMessage("");

    try {
      const {
        data: { message },
      } = await axiosInstance.post("/users/bulk-register", formData);
      setMessage(message);
    } catch (error) {
      setMessage("An error occurred while uploading the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <BackTitle text="Bulk Register" />

      <div className={styles.headingContainer}>
        <Title
          mainTitle="Attach excel File from your computer"
          subTitle=""
          style={{ fontSize: "2vw", fontWeight: "200", color: "var(--color-dark)" }} // Inline style to override
        />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fileInput}>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            id="fileUpload"
            style={{ display: "none" }}
          />
          <span
            className={styles.fileName}
            onClick={() => document.getElementById("fileUpload").click()}
          >
            {fileName}
          </span>
        </div>
        <button
          type="submit"
          className={styles.uploadButton}
          disabled={loading}
        >
          {loading ? (
            <img className={styles.loader} src={Loader} alt="LoaderIcon" />
          ) : (
            <img
              className={styles.forwardArrow}
              src={BackIcon}
              alt="ForwardIcon"
            />
          )}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default BulkRegister;
