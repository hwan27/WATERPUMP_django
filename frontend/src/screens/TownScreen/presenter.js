import React from "react";
import styles from "./styles.module.scss";
import Navigation from "components/Navigation";
import TownComponent from "components/TownComponent";

const TownScreen = props => {
    if (props.loading) {
        return <LoadingFeed />;
    } else if (props.town) {
        return <RenderFeed {...props} />;
    }
};

const LoadingFeed = () => null;

const RenderFeed = props => (
    <div className={styles.container}>
        <Navigation {...props} title={props.town.title} />

        <div className={styles.feed}>
            {props.town.sector_set.map(town => (
                <TownComponent
                    {...town}
                    key={town.id}
                    history={props.history}
                />
            ))}
        </div>
    </div>
);

export default TownScreen;
