import React from "react";
import styles from "./styles.module.scss";
import FeedComponent from "components/FeedComponent";
import Navigation from "components/Navigation";

const FeedScreen = props => {
    if (props.loading) {
        return <LoadingFeed />;
    } else if (props.feed) {
        return <RenderFeed {...props} />;
    }
};

const LoadingFeed = props => null;

const RenderFeed = props => (
    <div>
        <Navigation {...props} />

        <div className={styles.feed}>
            {props.feed.town_set.map(city => (
                <FeedComponent
                    {...city}
                    key={city.id}
                    history={props.history}
                />
            ))}
        </div>
    </div>
);

export default FeedScreen;
