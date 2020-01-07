import React from "react";
import { withRouter } from "react-router-dom";
import { themeColors } from "../../helpers/utils_styles";
import Button from "./Button";

const RedirectButton = ({ route, history }) => {
  const redirectTo = e => {
    e.preventDefault();
    return history.push(route);
  };
  return (
    <Button
      text="Visit Repo"
      addIcon={true}
      icon="archive"
      bgcolor={themeColors.mainBlackBlue}
      handleClick={redirectTo}
    />
  );
};

export default withRouter(RedirectButton);
