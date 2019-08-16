import React from "react";
import styles from "./styles.module.scss";

const Sector = props => (
  <div id="pattern">
    <ul className={styles.list}>
      {props.sectors.map(sector => (
        <Town title={sector.title} key={sector.id} />
      ))}
    </ul>
  </div>
);

const Town = props => (
  <li>
    <div className={styles.listText}>
      <span>{props.title}</span>
    </div>
  </li>
);

export default Sector;
