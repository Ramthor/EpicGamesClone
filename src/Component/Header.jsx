import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <>
      <header className="global-header">
        <div className="global-header__flyout-wrapper">
          <div>
            <button className="nav-flyout-toggle">
              <img src="assets/logo.png" alt="logo" />
              <span className="icon">
                <ExpandMoreIcon className="ExpandMoreIcon" />
              </span>
            </button>
          </div>

          <nav className="global-header__nav">
            <hr />
            <div className="store-txt">
              <h2>STORE</h2>
            </div>

            <div className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__list-item">Discribution</li>
                <li className="main-nav__list-item">Support</li>
                <li className="main-nav__list-item">Unreal Engine</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="toolbar">
          <button className="toolbar-btn">
            <img src="assets/person-w.png" alt="" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
