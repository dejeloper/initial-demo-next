import * as React from "react";
import styles from "./Dark.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Dark: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h3> Dark Layouts</h3>
      <div>{children}</div>
    </div>
  );
};
