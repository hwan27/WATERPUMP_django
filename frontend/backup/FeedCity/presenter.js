import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import styles from "./styles.module.scss";
import Sector from "components/Sector";

const FeedCity = props => {
  //   if (!props.clicked) {
  //     return (
  //       <div id="pattern">
  //         <ul className={styles.list}>
  //           <li>
  //             <div className={styles.listText}>
  //               <span onClick={props.click}>{props.title} </span>
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   } else if (props.clicked) {
  //     return <Sector sectors={props.sector_set} />;
  //   }
  // };
  if (props.clicked) {
    return <FeedSector key={2} {...props} />;
  } else if (!props.clicked) {
    return <FeedTown key={1} {...props} />;
  }
};

const FeedTown = props => {
  return (
    <div id="pattern">
      <ul className={styles.list}>
        <li>
          <div className={styles.listText}>
            <span onClick={props.click}>{props.title} </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

const FeedSector = props => (
  <div className={styles.feed}>
    {props.sector_set.map(sector => (
      <Sector {...sector} key={sector.id} sectors={props.sector_set} />
    ))}
  </div>
);
// const FeedSector = props => <Sector sectors={props.sector_set} />;

const _clicked = props => {
  Sector.props = props;
  //this.props.sets;
  console.log(Sector.props.sector_set);
};

FeedCity.propTypes = {
  title: PropTypes.string.isRequired,
  sector_set: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pump_set: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string }))
    })
  )
};

export default FeedCity;
