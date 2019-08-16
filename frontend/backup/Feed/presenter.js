import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import FeedCity from "components/FeedCity";

const Feed = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else if (props.feed) {
    return <RenderFeed {...props} />;
  }
};

const LoadingFeed = props => null;

const RenderFeed = props => (
  <div className={styles.feed}>
    {props.feed.town_set.map(city => (
      <FeedCity {...city} key={city.id} />
    ))}
  </div>
);

Feed.propTypes = {
  loading: PropTypes.bool.isRequired
};
// const Feed = props => {
//   return <LoadingFeed />;
// };

// const LoadingFeed = props => (
//   <div className={styles.feed}>
//     <Loading />
//   </div>
// );

// Feed.PropTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Feed;
