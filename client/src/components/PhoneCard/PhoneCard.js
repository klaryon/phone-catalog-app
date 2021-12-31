import React from "react";
import styles from "./Styles.module.css";
// import formatterNumber from "../../helpers/utils";

const PhoneCard = ({ item }) => {
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = item;
  return (
    <div className={styles.phoneCardContainer}>
      <div className={styles.phoneName}>{name}</div>
      <div className={styles.imageContainer}>
        <img src={imageFileName} alt={name} className={styles.image} />
      </div>
      {/* <div>{manufacturer}</div>
      <div>{description}</div>
      <div>{color}</div>
      <div>{price}</div>
      <div>{screen}</div>
      <div>{processor}</div>
      <div>{ram}</div> */}
    </div>
  );
};

export default PhoneCard;
