import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import styles from "./ResetUser.module.scss";
import BackTitle from "@/components/back-title/BackTitle";
import Title from "@/components/title/Title";
import BackIcon from "../../../../public/BackArrow.svg";

const ResetUser = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post("/users/reset", { username });
    console.log(res.data);
    
    if(res.success){
      setMessage(res.data.message);
    }
    else{
      setMessage(res.data.message)
    }
  };

  return (
    <div className={styles.container}>
      <BackTitle text="Reset User" />
      <div className={styles.headingContainer}>
        <Title
          mainTitle="Enter the username to reset"
          subTitle=""
          style={{ fontSize: "2vw", fontWeight: "200", color: "var(--color-dark)" }}
        />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.fileInput}
          placeholder="Username"
        />
        <button type="submit" className={styles.uploadButton}>
          <img
            className={styles.forwardArrow}
            src={BackIcon}
            alt="ForwardIcon"
          />
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default ResetUser;
