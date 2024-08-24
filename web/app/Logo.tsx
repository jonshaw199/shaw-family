import React, { useMemo } from "react";
//import "./HandwritingAnimation.css";
import styles from "@/app/Logo.module.css";

type LogoProps = {
  darkMode?: boolean;
};

export default function Logo({ darkMode }: LogoProps) {
  const color = useMemo(() => (darkMode ? "white" : "black"), [darkMode]);

  return (
    <svg
      width={160}
      viewBox="0 0 167.45564 20.537291"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="layer1" transform="translate(-3.8678962,-7.6998852)">
        <g
          //style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round"
          fill="none"
          stroke={color}
          strokeWidth={50}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="scale(0.264583)"
          id="g109"
        >
          <g transform="translate(10.2695,90.6113)" id="g108">
            <path
              d="M 274,22.1 V 649 H 56.7 495"
              transform="scale(0.0853333,-0.0853333)"
              className={styles.path}
              id={styles.path1}
            />
            <path
              d="M 126,22.1 V 715 365 l 47,51 41,38 60,25 60,6 69,-38 25,-44 13,-72 V 18.9"
              transform="matrix(0.0853333,0,0,-0.0853333,46.7626,0)"
              className={styles.path}
              id={styles.path2}
            />
            <path
              d="M 88.2,265 H 435 v 56 l -16,73 -47,56 -48,32 -66,3 -66,-19 -57,-47 -22,-47 -24.8,-60 -6.3,-63 15.7,-76 28.4,-69 57,-56.8 53,-25.1 66,-6.3 57,15.7 54,28.4"
              transform="matrix(0.0853333,0,0,-0.0853333,94.0373,0)"
              className={styles.path}
              id={styles.path3}
            />
            <path
              d="m 78.8,107 53.2,-44 51,-25.2 63,-12.6 72,-3.1 79,31.5 53,47.4 19,63 -3,56 -34,57 -73,47 -129,57 -72,47 -38,51 -3,63 25,66 72,44 70,10 66,-7 50,-25 47,-35"
              transform="matrix(0.0853333,0,0,-0.0853333,169.301,0)"
              className={styles.path}
              id={styles.path4}
            />
            <path
              d="M 126,22.1 V 715 365 l 47,51 41,38 60,25 60,6 69,-38 25,-44 13,-72 V 18.9"
              transform="matrix(0.0853333,0,0,-0.0853333,215.808,0)"
              className={styles.path}
              id={styles.path5}
            />
            <path
              d="m 117,428 66,38 56,16 57,6 44,-16 38,-34 25,-51 3,-69 V 107 22.1 L 403,107 362,78.8 318,47.2 268,25.2 211,15.8 164,31.5 126,56.7 97.6,97.6 V 158 l 22.4,47 50,41 50,19 60,19 57,9 35,3 h 28"
              transform="matrix(0.0853333,0,0,-0.0853333,263.083,0)"
              className={styles.path}
              id={styles.path6}
            />
            <path
              d="M 59.9,482 198,9.45 h 13 L 343,482 h 19 L 495,9.45 h 12 L 643,482"
              transform="matrix(0.0853333,0,0,-0.0853333,307.456,0)"
              className={styles.path}
              id={styles.path7}
            />
            <path
              d="M 132,18.9 V 346 H 413 132 v 297 h 322"
              transform="matrix(0.0853333,0,0,-0.0853333,399.616,0)"
              className={styles.path}
              id={styles.path8}
            />
            <path
              d="m 117,428 66,38 56,16 57,6 44,-16 38,-34 25,-51 3,-69 V 107 22.1 L 403,107 362,78.8 318,47.2 268,25.2 211,15.8 164,31.5 126,56.7 97.6,97.6 V 158 l 22.4,47 50,41 50,19 60,19 57,9 35,3 h 28"
              transform="matrix(0.0853333,0,0,-0.0853333,442.368,0)"
              className={styles.path}
              id={styles.path9}
            />
            <path
              d="M 123,15.8 V 479 375 l 44,38 41,34 38,25 47,13 41,-6 28,-13 32,-31 22,-54 6,-66 V 15.8 365 l 13,26 66,59 50,26 41,12 44,-12 29,-16 34,-41 16,-82 V 18.9"
              transform="matrix(0.0853333,0,0,-0.0853333,486.741,0)"
              className={styles.path}
              id={styles.path10}
            />
            <path
              d="M 126,15.8 V 479 M 97.6,671 V 621 H 148 v 50 H 97.6"
              transform="matrix(0.0853333,0,0,-0.0853333,557.994,0)"
              className={styles.path}
              id={styles.path11}
            />
            <path
              d="M 129,715 V 63 l 6,-22.1 10,-12.5 16,-9.5 h 22"
              transform="matrix(0.0853333,0,0,-0.0853333,579.498,0)"
              className={styles.path}
              id={styles.path12}
            />
            <path
              d="M 53.5,479 243,3.15 M 406,476 211,-78.8 189,-126 158,-161 120,-183 H 53.5"
              transform="matrix(0.0853333,0,0,-0.0853333,602.112,0)"
              className={styles.path}
              id={styles.path13}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
