import React from "react";
import styles from "./Styles.module.css";
import PhoneCard from "../components/PhoneCard/PhoneCard";

const Home = ({items}) => {
    const phoneItem = items.map((item) => (
        <PhoneCard key={item.id} item={item} />
    ));

    return (
        <>
            <div>Phone Catalog</div>
            <div>{phoneItem}</div>
        </>
    );
};

export default Home;