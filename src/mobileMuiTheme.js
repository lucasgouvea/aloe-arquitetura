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
  },
  faBarsIcon: {
    position: "absolute",
    right: 40,
    top: 30,
    alignSelf: "flex-end",
  },
  drawer: {
    width: "80vw",
  },
  img: {
    src: "https://i.ibb.co/HHGgNLG/aaaa.png",
    height: "100%",
    width: "100%",
  },
  footer: {
    visibility: "hidden",
  },
});

export default mobileMuiTheme;
