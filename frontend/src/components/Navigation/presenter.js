import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener, faHandHolding } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




const Navigation = (props, history) => (
    <div className={styles.header_top}>
        <div className={styles.header_column1}>
            <div onClick={props.gohome}>
                <FontAwesomeIcon icon={faHome} />
                <div className={styles.logoutFontText}>홈</div> 
            </div>
        </div>
        <div className={styles.header_column1}>
            <div onClick={props.back}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className={styles.logoutFontText}>뒤로가기</div> 
        </div>
        <div className={styles.header_column2}>
            {props.title ? (
                <div className={styles.header_title}>{props.title}</div>
            ) : (
                "상수도 가압장 관측 제어 설비"
            )}
        </div>
        <div className={styles.logoutFont}>            
        <div onClick={props.refresh} >
                             
                <FontAwesomeIcon icon={faSync} />
                                       
        </div>
        <div className={styles.logoutFontText}>새로고침</div>   
        </div>    
        <div className={styles.logoutFont}>
            <div onClick={props.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <div className={styles.logoutFontText}>로그아웃</div>
        </div>
    </div>
);

export default Navigation;
