import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const FeedComponent = props => {
    return (
        <div id="pattern">
            <ul className={styles.list}>
                <li>
                    <div onClick={props.click} className={styles.listText}>
                        {props.title}
                    </div>
                </li>
            </ul>
        </div>
    );
};

FeedComponent.propTypes = {
    title: PropTypes.string.isRequired,
    sector_set: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            pump_set: PropTypes.arrayOf(
                PropTypes.shape({ title: PropTypes.string })
            )
        })
    )
};

export default FeedComponent;
