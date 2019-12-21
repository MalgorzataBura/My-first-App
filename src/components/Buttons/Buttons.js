import React, { Component } from "react";
import i18n from "../../i18";
import "../../scss/buttons.scss";
import { NavLink } from "react-router-dom";

class Languages extends Component {
  handleOnClick = e => {
    i18n.changeLanguage(e.target.id);
  };
  render() {
    return (
      <>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button
          type="button"
          id="pl"
          onClick={this.handleOnClick}
          className="btn btn-secondary active"
        >Pl
        </button>
        <button
          type="button"
          id="en"
          onClick={this.handleOnClick}
          className="btn btn-secondary"
        >En
        </button>
        <button
          type="button"
          id="de"
          onClick={this.handleOnClick}
          className="btn btn-secondary"
        >De
        </button>
        <NavLink to="/attractions"  className="btn btn-secondary">
            City Guide
          </NavLink>
        </div>
       </div>
      </>
    );
  }
}
export default Languages;
