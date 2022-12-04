import React from "react";
import VariantItem from "./VariantItem";
import { Link } from "react-router-dom";

const VariantList = ({ variants, correctAnswer }) => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          padding: "20px 10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {variants.map((variant) => (
          <VariantItem
            variants={variants}
            key={variant.id}
            {...variant}
            isCorrect={correctAnswer === variant.id}
          />
        ))}
      </ul>
      {variants.length > 2 && (
        <Link to={"/question"} style={{ textDecoration: "none" }}>
          Confirm
        </Link>
      )}
    </div>
  );
};

export default VariantList;
