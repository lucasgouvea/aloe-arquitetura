import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";

const DrawerItem = ({ text }) => {
  const {
    drawer: { item },
  } = useTheme();
  return (
    <div style={{ ...item }}>
      <a style={{ fontSize: 20 }}>{text}</a>
    </div>
  );
};

export default DrawerItem;
