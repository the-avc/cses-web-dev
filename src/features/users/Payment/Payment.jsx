import styles from "./Payment.module.scss"; // Import SCSS module
import BackTitle from "@/components/back-title/BackTitle";
import Title from "@/components/title/Title";
import payment from "../../../../public/payment.jpeg";
import BackIcon from "../../../../public/BackArrow.svg";

const Payment = () => {
  return (
    <div className={styles.paymentContainer}>
      <BackTitle text="Payment" />
      <div className={styles.headingContainer}>
        <Title
          mainTitle="Pay your annual CSES Subscription Fees"
          subTitle=""
          style={{
            fontSize: "2vw",
            fontWeight: "200",
            color: "var(--color-dark)",
          }}
        />
        <img className={styles.paymentQR} src={payment} alt="Payement" />
      </div>
      <div className={styles.formLink}>
        <a
          href="https://forms.gle/GVDZEh3PvUi5gLt46"
          target="_blank"
          rel="noreferrer"
        >
          Fill Google Form Link
        </a>
        <a
          href="https://forms.gle/GVDZEh3PvUi5gLt46"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.forwardArrow}
            src={BackIcon}
            alt="Forward Arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default Payment;
