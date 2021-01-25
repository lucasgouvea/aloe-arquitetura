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
    width: "20vw",
  },
  img: {
    src:
      "https://static.wixstatic.com/media/846469_671b46f603774f7f9bfa06114c377116~mv2.jpg/v1/fill/w_1249,h_813,al_c,q_85,usm_0.66_1.00_0.01/846469_671b46f603774f7f9bfa06114c377116~mv2.webp",
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
