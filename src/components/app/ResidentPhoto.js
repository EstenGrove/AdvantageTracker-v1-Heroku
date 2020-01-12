import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyVal } from "../../helpers/utils_types";
import styles from "../../css/app/ResidentPhoto.module.scss";
import sprite from "../../assets/resident.svg";

const ResidentPhoto = ({ imgSrc, imgAlt, imgSize }) => {
  const handleDimensions = size => {
    switch (size) {
      case "SM":
        if (isEmptyVal(imgSrc)) {
          return (
            <div className={styles.ResidentPhoto_SM}>
              <svg className={styles.ResidentPhoto_fallback_SM} title={imgAlt}>
                <use xlinkHref={`${sprite}#icon-user-solid-circle`}></use>
              </svg>
            </div>
          );
        }
        return (
          <div className={styles.ResidentPhoto_SM}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className={styles.ResidentPhoto_image_SM}
            />
          </div>
        );
      case "MD":
        if (isEmptyVal(imgSrc)) {
          return (
            <div className={styles.ResidentPhoto_MD}>
              <svg className={styles.ResidentPhoto_fallback_MD} title={imgAlt}>
                <use xlinkHref={`${sprite}#icon-user-solid-circle`}></use>
              </svg>
            </div>
          );
        }
        return (
          <div className={styles.ResidentPhoto_MD}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className={styles.ResidentPhoto_image_MD}
            />
          </div>
        );
      case "LG":
        if (isEmptyVal(imgSrc)) {
          return (
            <div className={styles.ResidentPhoto_LG}>
              <svg className={styles.ResidentPhoto_fallback_LG} title={imgAlt}>
                <use xlinkHref={`${sprite}#icon-user-solid-circle`}></use>
              </svg>
            </div>
          );
        }
        return (
          <div className={styles.ResidentPhoto_LG}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className={styles.ResidentPhoto_image_LG}
            />
          </div>
        );
      default:
        return (
          <div className={styles.ResidentPhoto}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className={styles.ResidentPhoto_image_MD}
            />
          </div>
        );
    }
  };

  return handleDimensions(imgSize);
};

export default ResidentPhoto;

ResidentPhoto.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgSize: PropTypes.string.isRequired
};
