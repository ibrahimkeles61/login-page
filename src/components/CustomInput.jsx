import React, { useState } from "react";
import styled from "styled-components";
import "../styles/CustomInput.css";

function CustomInput({ customPlaceHolder }) {
  const [value, setValue] = useState("");

  const handleTyping = (e) => setValue(e.target.value);

  const isInputFilled = () => (value == "" ? false : true);

  return (
    <div className="customInput--container">
      <input
        type="text"
        className="customInput--input"
        value={value}
        onChange={(e) => handleTyping(e)}
      />
      <CustomPlaceHolder isInputFilled={isInputFilled()}>
        {customPlaceHolder}
      </CustomPlaceHolder>
    </div>
  );
}

export default CustomInput;

const CustomPlaceHolder = styled.p`
  position: absolute;
  left: 20px;
  top: 21px;

  text-align: left;
  font-family: "sf-pro-display-regular";
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #6b778c;
  opacity: 1;

  ${({ isInputFilled }) => {
    if (isInputFilled) {
      return `
      top: 11px;
      font-size: 12px;
      line-height: 14px;
      color: #1676F8;
      `;
    }
  }}

  transition: all .1s ease;
`;
