import React, { useMemo } from "react";

import styles from "@/app/components/layout/Background.module.css";
import classNames from "classnames";
import { Fade } from "react-bootstrap";

export type BackgroundProps = {
  src: string;
  children?: React.ReactNode;
  containerProps?: React.HTMLProps<HTMLDivElement>;
};

export default function Background({
  src,
  children,
  containerProps = {},
}: BackgroundProps) {
  const { className, ...restContainerProps } = containerProps;

  const backgroundMedia = useMemo(
    () =>
      src.split(".")[1] == "mp4" ? (
        <video autoPlay loop muted className={styles.video} src={src} />
      ) : (
        <></>
      ),
    [src]
  );

  return (
    <div
      className={classNames(styles.background, className)}
      {...restContainerProps}
    >
      <Fade in appear>
        {backgroundMedia}
      </Fade>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
