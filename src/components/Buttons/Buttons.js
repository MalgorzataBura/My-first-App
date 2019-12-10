import React, { Component } from "react";
import i18n from "../../i18";

class Languages extends Component {
  handleOnClick = e => {
    i18n.changeLanguage(e.target.id);
   
  };
  render() {
    return (
      <>
        <button
          type="button"
          id="pl"
          onClick={this.handleOnClick}
          className="btn"
        >
          Pl
        </button>
        <button
          type="button"
          id="en"
          onClick={this.handleOnClick}
          className="btn"
        >
          En
        </button>
        <button
          type="button"
          id="de"
          onClick={this.handleOnClick}
          className="btn"
        >
          De
        </button>
      </>
    );
  }
}
export default Languages;
