import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledContainer>
        <main className={styles.main}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={() => toggleDrawer(true)}
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
          <h1 className={styles.title}>
            Aloê<a href="https://nextjs.org"> Arquitetura</a>
          </h1>
        </main>
      </StyledContainer>
    </div>
  );
}
