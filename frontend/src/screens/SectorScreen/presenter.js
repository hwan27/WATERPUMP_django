import React from "react";
import styles from "./styles.module.scss";
import SectorComponent from "components/SectorComponent";
import Navigation from "components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { withScriptjs, withGoogleMap, GoogleMap, Marker }from 'react-google-maps'
import {PopupboxContainer} from 'react-popupbox'
import Popup from "reactjs-popup"

const SectorMap = withScriptjs(withGoogleMap(props => (
    <GoogleMap 
        defaultZoom = {15} 
        defaultCenter = {{lat: props.lat, lng: props.lng}}
        >
          <Marker position = {{lat:props.lat, lng: props.lng}}/> 
    </GoogleMap>)))


const SectorScreen = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else if (props.sector) {
    return (
      <div className={styles.container}>
        
        <Navigation {...props} title={props.sector.title} />
    
        <div className={styles.feed}>
          
          <div className={styles.row}>
            <div className={styles.modemName}>
              모뎀번호 : {props.sector.modem_number}
            </div>
              <div className={styles.mapButton} onClick={props.mapClick}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </div> 
             
    
            <div className={styles.connectBox}>
              <div className={styles.connect}>
                접속상태:{" "}
                {props.isRefreshing ? (
                  <span className={styles.connecting}>접속중</span>
                ) : (
                  <span className={styles.connectEnd}>접속종료</span>
                )}
              </div>
              <div onClick={props.refreshInterval} className= {props.isRefreshing ? styles.connectGray : styles.connectPlz}>
                접속요청
              </div>
            </div>
          </div>
          {props.mapShowing? (
          <SectorMap 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzFmTApAtUAeTAsF_7gCom-w9Et1xnApc&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%`, width: '75%' }} />}
                containerElement={<div style={{ height: `300px`, marginLeft: '25%' }} />}
                mapElement={<div style={{ height: `100%`, width: '75%' }} />}
                lat={parseFloat(props.sector.lat)}
                lng={parseFloat(props.sector.lon)}
                />): null }
          <div className={styles.box}>
            <div className={styles.row1}>
              {props.sector.suction_pressure == "00.00" ? null : (
                <div className={styles.row2}>
                  <div className={styles.boxFont}>흡입압력:</div>
                  <div className={styles.boxValue}>
                    {props.sector.suction_pressure} Bar
                  </div>
                </div>
              )}
              {props.sector.discharge == "0000" ? null : (
                <div className={styles.row2}>
                  <div className={styles.boxFont}>유량:</div>
                  <div className={styles.boxValue}>
                    {props.sector.discharge} m^3/s
                  </div>
                </div>
              )}
            </div>
            <div className={styles.row1}>
              <div className={styles.boxFont}>토출압력:</div>
              <div className={styles.boxValue}>
                {props.sector.discharge_pressure} Bar
              </div>
              
              <div className={styles.boxFont}>설정압력:</div>             
              <div className={styles.boxValue3}>
                {props.sector.set_pressure} Bar
              </div>
              <form onSubmit={props.handleClick} className={styles.boxValueInput1}>
              
                <input                 
                  value={props.setPressure}                  
                  onChange={props.set_pressure}
                  //onKeyDown={props.handleEnter}
                  className={styles.boxValueInput}
                  //onSubmit={props.handleClick}             
                                 
                />
                
           
              {/* <span className={styles.boxValue2}>Bar</span> */}
              
              <button className={styles.boxButton} type='submit'>
                <FontAwesomeIcon icon={faEdit} />
              </button>
             
              
              </form>
       
              {/* <div onClick={props.handleClick} className={styles.boxButton}>
                <FontAwesomeIcon icon={faEdit} />
              </div> */}
              {/* <Popup trigger = {
              <div onClick={props.update_pressure} className={styles.boxButton}>
                <FontAwesomeIcon icon={faEdit} />
              </div>}>
                {close=>(
                  <div>
                  설정압력을 {props.setPressure}Bar 로 변경합니다
                  <div>
                  <div onClick={props.update_pressure}>
                  네
                </div>
                <div onClick={close}>
                  아니요
                </div></div></div>)}
              </Popup> */}
            </div>
    
            <div className={styles.updateBox}>
              <div className={styles.updateTitle}>최종 업데이트 :</div>
              <div className={styles.updateDate}>
                {props.sector.updated_at.slice(0, 4)}년{" "}
                {props.sector.updated_at.slice(5, 7)}월{" "}
                {props.sector.updated_at.slice(8, 10)}일{" "}
                {props.sector.updated_at.slice(11, 19)}
              </div>
            </div>
          </div>
          <div className={styles.sectorComponent}>
            <SectorComponent {...props} />
          </div>
        </div>
      </div>
    ); 
    //<RenderFeed {...props} />;
  }
};

const LoadingFeed = () => null;


const RenderFeed = props => (
  <div className={styles.container}>
    <Navigation {...props} title={props.sector.title} />

    <div className={styles.feed}>
      <div className={styles.row}>
        <div className={styles.modemName}>
          모뎀번호 : {props.sector.modem_number}
        </div>
         <div className={styles.mapButton}>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </div> 
        <sectorMap 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzFmTApAtUAeTAsF_7gCom-w9Et1xnApc&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />

        <div className={styles.connectBox}>
          <div className={styles.connect}>
            접속상태:{" "}
            {props.isRefreshing ? (
              <span className={styles.connecting}>접속중</span>
            ) : (
              <span className={styles.connectEnd}>접속종료</span>
            )}
          </div>
          <div onClick={props.refreshInterval} className= {props.isRefreshing ? styles.connectGray : styles.connectPlz}>
            접속요청
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          {props.sector.suction_pressure == "00.00" ? null : (
            <div className={styles.row2}>
              <div className={styles.boxFont}>흡입압력:</div>
              <div className={styles.boxValue}>
                {props.sector.suction_pressure} Bar
              </div>
            </div>
          )}
          {props.sector.discharge == "0000" ? null : (
            <div className={styles.row2}>
              <div className={styles.boxFont}>유량:</div>
              <div className={styles.boxValue}>
                {props.sector.discharge} m^3/s
              </div>
            </div>
          )}
        </div>
        <div className={styles.row1}>
          <div className={styles.boxFont}>토출압력:</div>
          <div className={styles.boxValue}>
            {props.sector.discharge_pressure} Bar
          </div>

          <div className={styles.boxFont}>설정압력:</div>
          <form className={styles.boxValueInput}>         
            <input
              value={props.setPressure}
              onChange={props.set_pressure}
              className={styles.boxValueInput}

            />
          </form>
          <div className={styles.boxValue2}>Bar</div>
          <div onClick={props.update_pressure} className={styles.boxButton}>
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </div>

        <div className={styles.updateBox}>
          <div className={styles.updateTitle}>최종 업데이트 :</div>
          <div className={styles.updateDate}>
            {props.sector.updated_at.slice(0, 4)}년{" "}
            {props.sector.updated_at.slice(5, 7)}월{" "}
            {props.sector.updated_at.slice(8, 10)}일{" "}
            {props.sector.updated_at.slice(11, 19)}
          </div>
        </div>
      </div>
      <div className={styles.sectorComponent}>
        <SectorComponent {...props} />
      </div>
    </div>
  </div>
);

export default SectorScreen;
