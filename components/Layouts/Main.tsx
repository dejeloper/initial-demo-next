import * as React from "react";
import Head from "next/head";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Main.module.css";

type Props = {
  children?: React.ReactNode;
};

export const MainLayouts: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Dejeloper</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
