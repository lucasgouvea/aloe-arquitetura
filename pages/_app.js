import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import desktopMuiTheme from "../src/desktopMuiTheme";
import mobileMuiTheme from "../src/mobileMuiTheme";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  let theme = desktopMuiTheme;
  if (pageProps.isMobile) {
    theme = mobileMuiTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
