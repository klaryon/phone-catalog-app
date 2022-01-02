import React, { useState } from "react";
import styles from "./Styles.module.css";
import formatterNumber from "../../helpers/utils";

const PhoneCard = ({ item }) => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = (selectedItem) => {
    setShowModal(!showModal);
  };

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
        <img
          src={imageFileName}
          alt={name}
          className={styles.image}
          onClick={() => toggleModal(item)}
        />
      </div>

      {!showModal ? (
        <div className={styles.modal}>
          <div className={styles.titleAlignment}>
            <div className={styles.modalTitle}>{name}</div>
            <div className={styles.xModal} onClick={toggleModal}>
              X
            </div>
          </div>
          <div className={styles.modalText}>{manufacturer}</div>
          <div className={styles.modalDescription}>{description}</div>
          <div className={styles.modalText}>Color: {color}</div>
          <div className={styles.modalText}>Screen: {screen}</div>
          <div className={styles.modalText}>Processor: {processor}</div>
          <div className={styles.modalText}>Ram: {ram}</div>
          <div className={styles.modalPrice}>
            Price: {formatterNumber(price)}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PhoneCard;
