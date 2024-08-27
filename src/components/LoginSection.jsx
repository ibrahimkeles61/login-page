import React from "react";
import styled from "styled-components";
import "../styles/LoginSection.css";
import CustomInput from "./CustomInput";

function LoginSection() {
  return (
    <div className="loginSection">
      <img
        className="loginSection--glomilLogo"
        src="/assets/images/Group 7847@2x.png"
      />

      <p className="loginSection--mainTitle">Oturum Aç</p>

      <p className="loginSection--infoText">
        Aşağıdaki bilgileri doldurarak giriş yapabilirsiniz.
      </p>

      <div className="loginSection--inputs">
        <CustomInput customPlaceHolder="E-Posta" />
        <CustomInput customPlaceHolder="Şifre" />
      </div>

      <button className="loginSection--loginButton">
        <p>Giriş Yap</p>
      </button>

      <div>
        <p className="loginSection--linkText">
          Henüz bir hesabınız yok mu?<span>Üye Ol</span>
        </p>

        <p className="loginSection--linkText">Şifremi Unuttum</p>
      </div>
    </div>
  );
}

export default LoginSection;

const CustomPlaceHolder = styled.div``;
