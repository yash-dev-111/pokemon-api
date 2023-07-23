import React from "react";
import "./Navigation.css"

const Logo = ({ collapsed }) => {
  return (
    <img
      src={collapsed ? "./assets/logo-sm.png" : "./assets/logo.png"}
      alt="Emilus"
      className={collapsed ? "collapsed small-icon" : "not-collapsed"}
    />
  );
};

export default Logo;
