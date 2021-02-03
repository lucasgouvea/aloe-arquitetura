import mediaQuery from "css-mediaquery";
import { createMuiTheme } from "@material-ui/core/styles";

const desktopSSRMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    width: "1024px",
  }),
});

const desktopMuiTheme = createMuiTheme({
  props: {
    MuiUseMediaQuery: { ssrMatchMedia: desktopSSRMatchMedia },
  },
  container: {
    marginTop: 35,
  },
  faBarsIcon: {
    position: "absolute",
    right: 70,
    top: 55,
    alignSelf: "flex-end",
  },
  drawer: {
    width: "34vw",
    paddingTop: "22%",
    item: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 24,
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  footer: {
    backgroundColor: "white",
    height: 35,
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default desktopMuiTheme;
