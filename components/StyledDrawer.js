import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";

const styles = (theme) => {
  return {
    drawer: {
      position: "absolute",
      overflowX: "hidden",
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: theme.drawer.width,
      boxShadow: "none",
      paddingTop: theme.drawer.paddingTop,
      display: "flex",
    },
    drawerClose: {
      overflowX: "hidden",
      width: 0,
    },
  };
};

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    ${({ theme, open }) => {
      const classes = styles(theme);
      return open ? classes.drawerOpen : classes.drawerClose;
    }}
  }
`;

export default StyledDrawer;
