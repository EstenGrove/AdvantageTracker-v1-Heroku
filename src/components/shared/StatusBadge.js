import React from "react";
import { PropTypes } from "prop-types";
import { statusColors } from "../../helpers/utils_styles";
import Badge from "./Badge";

const StatusBadge = ({ size = "SM", status = "PENDING", children }) => {
  const custom = statusColors[status.toLowerCase()];

  return (
    <Badge size={size} customStyles={custom}>
      {children}
    </Badge>
  );
};

export default StatusBadge;

StatusBadge.defaultProps = {
  size: "SM",
  status: "PENDING"
};

StatusBadge.propTypes = {
  size: PropTypes.string,
  status: PropTypes.string,
  children: PropTypes.any // used for the text content
};
