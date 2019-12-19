import React, { Component } from "react";
import { translate } from "react-i18next";
import "../../scss/form.scss";

const Form = ({ submit, t, name, onChange }) => {
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        placeholder={t("wpisz miasto")}
        onChange={onChange}
      />
      <button>{t("wyszukaj miasto")}</button>
    </form>
  );
};

export default translate(["search"])(Form);
