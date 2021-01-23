import React,{useState} from "react";
import Head from "next/head";
import { Drawer, Button  } from "@material-ui/core"
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (drawerOpen) => {
    setIsDrawerOpen(drawerOpen);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
          <Button onClick={() => toggleDrawer(true)}>RIGHT</Button>
          <Drawer anchor={'right'} open={isDrawerOpen} onClose={() =>toggleDrawer(false)}>
            Drawer
          </Drawer>
      </React.Fragment>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aloê<a href="https://nextjs.org"> Arquitetura</a>
        </h1>
      </main>
    </div>
  );
}
