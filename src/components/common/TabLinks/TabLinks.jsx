import React from "react";
import { Link } from "react-router-dom";
import TabLinksStyles from "./TabLinks.module.css";

const TabLinks = ({ tabs }) => {
  return (
    <ul className={TabLinksStyles.tabLinks}>
      {tabs.map((tab, index) => (
        <li className={TabLinksStyles.linkContainer} key={index}>
          <Link
            className={
              TabLinksStyles.link + ` ${tab.isActive && TabLinksStyles.active}`
            }
            to={tab.path}
          >
            {tab.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TabLinks;
