import mediaQuery from "css-mediaquery";
import { createMuiTheme } from "@material-ui/core/styles";

const mobileSSRMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    width: "0px",
  }),
});

const mobileMuiTheme = createMuiTheme({
  props: {
    MuiUseMediaQuery: { ssrMatchMedia: mobileSSRMatchMedia },
  },
  container: {
    marginTop: 0,
    maxWidth: "100%",
    paddingLeft: 0,
    paddingRight: 0,
  },
  faBarsIcon: {
    position: "absolute",
    right: 40,
    top: 30,
    alignSelf: "flex-end",
  },
  drawer: {
    width: "80vw",
    paddingTop: 150,
    item: {
      display: "flex",
      justifyContent: "flex-start",
      paddingLeft: 40,
      paddingTop: 36,
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  footer: {
    visibility: "hidden",
  },
});

export default mobileMuiTheme;
