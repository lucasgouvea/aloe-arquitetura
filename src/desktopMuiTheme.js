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
  drawer: {
    width: "20vw",
  },
});

export default desktopMuiTheme;
