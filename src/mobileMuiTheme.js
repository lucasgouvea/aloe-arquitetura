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
  drawer: {
    width: "80vw",
  },
});

export default mobileMuiTheme;
