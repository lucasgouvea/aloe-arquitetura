import React, { useState } from "react";
import Head from "next/head";
import { StyledContainer, StyledDrawer } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@material-ui/core/styles";

export async function getServerSideProps({ req }) {
  const userAgent = req.headers["user-agent"];
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return {
    props: {
      isMobile,
    },
  };
}

export default function Home() {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (drawerOpen) => {
    setIsDrawerOpen(drawerOpen);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledContainer theme={theme}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => toggleDrawer(true)}
          color="white"
          style={{ ...theme.faBarsIcon }}
        />
        <StyledDrawer
          anchor={"right"}
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
          BackdropProps={{ invisible: true }}
          theme={theme}
        >
          Drawer
        </StyledDrawer>
        <img
          src={theme.img.src}
          height={theme.img.height}
          width={theme.img.width}
        />
        <div style={{ ...theme.footer }} />
      </StyledContainer>
    </React.Fragment>
  );
}
