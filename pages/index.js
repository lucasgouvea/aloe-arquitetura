import React, { useState, useRef } from "react";
import Head from "next/head";
import { StyledContainer, StyledDrawer, Uploader } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@material-ui/core/styles";
import AloeBackofficeService from "../services/aloe-backoffice-service";
export async function getServerSideProps({ req }) {
  const userAgent = req.headers["user-agent"];
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  let base64 = null;
  if (isMobile) {
    base64 = await AloeBackofficeService.downloadBackgroundMobile();
  } else {
    base64 = await AloeBackofficeService.downloadBackgroundDesktop();
  }

  return {
    props: {
      isMobile,
      base64,
    },
  };
}

export default function Home({ base64, isMobile }) {
  const theme = useTheme();
  const uploadDesktopInputRef = useRef();
  const uploadMobileInputRef = useRef();
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
        {isMobile === false && (
          <div
            style={{
              display: "flex",
              width: "85%",
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <Uploader
              ref={uploadDesktopInputRef}
              text="Escolha uma foto no formato PNG - Desktop"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(uploadDesktopInputRef.current);
                const file = uploadDesktopInputRef.current.files[0];
                AloeBackofficeService.uploadBackgroundDesktop(file);
              }}
            />
            <Uploader
              ref={uploadMobileInputRef}
              text="Escolha uma foto no formato PNG - Mobile"
              onSubmit={(e) => {
                e.preventDefault();
                const file = uploadMobileInputRef.current.files[0];
                AloeBackofficeService.uploadBackgroundMobile(file);
              }}
            />
          </div>
        )}

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
          src={`data:image/png;base64,${base64}`}
          height={theme.img.height}
          width={theme.img.width}
        />

        <div style={{ ...theme.footer }} />
      </StyledContainer>
    </React.Fragment>
  );
}
