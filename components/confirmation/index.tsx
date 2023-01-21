import styles from "./Confirmation.module.css";

const index = () => {
  return (
    <>
      <div className={styles.location}>
        <h1 className={styles.cityTitle}>RSVP</h1>

        <div className={styles.locationInternal}>
          <div style={{ borderRadius: "15px" }}></div>
        </div>
      </div>
    </>
  );
};

export default index;
