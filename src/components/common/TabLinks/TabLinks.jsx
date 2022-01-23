import React from "react";
import { Link } from "react-router-dom";
import tabLinksStyles from "./TabLinks.module.css";

const TabLinks = ({ tabs }) => {
  return (
    <ul className={tabLinksStyles.tabLinks}>
      {tabs.map((tab, index) => (
        <li className={tabLinksStyles.linkContainer} key={tab.name}>
          <Link
            className={`${tabLinksStyles.link} ${
              tab.isActive && tabLinksStyles.active
            }`}
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
