import React from "react";
import styles from "./Styles.module.css";
import formatterNumber from "../../helpers/utils";

const PhoneCard = ({item}) => {
    const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = item;
    return (
        <>
            <div>{id}</div>
            <div>{name}</div>
            <div>{manufacturer}</div>
            <div>{description}</div>
            <div>{color}</div>
            <div>{price}</div>
            <img src={imageFileName} alt={name} />
            <div>{screen}</div>
            <div>{processor}</div>
            <div>{ram}</div>
        </>
    );
};

export default PhoneCard;
