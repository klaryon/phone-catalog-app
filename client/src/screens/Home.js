import React from "react";
import styles from "./Styles.module.css";
import PhoneCard from "../components/PhoneCard/PhoneCard";

const Home = ({ items }) => {
  const phoneItem = items.map((item) => (
    <PhoneCard key={item.id} item={item} />
  ));

  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>Phones Catalog</div>
      <div className={styles.gallery}>{phoneItem}</div>
    </div>
  );
};

export default Home;
