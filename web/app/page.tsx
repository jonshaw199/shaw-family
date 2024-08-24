"use client";

import Background from "@/app/components/layout/Background";
import { ReactElement, forwardRef, useEffect, useState } from "react";
import Navbar from "@/app/Navbar";
import { Section, sections } from "@/app/common";
import styles from "@/app/page.module.css";
import UnderConstruction from "@/app/components/ui/UnderConstruction";
import Home from "@/app/Home";
import { Container, Fade } from "react-bootstrap";

const FADE_TRANSITION_MS = 300;

const sectionComponents: { [key in Section]: ReactElement } = {
  events: <UnderConstruction />,
  home: <Home />,
  media: <UnderConstruction />,
};

export default function Main() {
  const [curSection, setCurSection] = useState(Section.HOME);
  const [targetSection, setTargetSection] = useState<Section>();

  useEffect(() => {
    const onHashChanged = () => {
      const hash = window.location.hash.substring(1);
      if (Object.values(Section).includes(hash as Section)) {
        setTargetSection(hash as Section);
      } else {
        console.error(`Section not found: '${hash}'; unable to navigate`);
      }
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  const fadeIn = () =>
    setTimeout(() => {
      if (targetSection) {
        setCurSection(targetSection);
        setTargetSection(undefined);
      }
    }, FADE_TRANSITION_MS);

  return (
    <Background
      src={sections[curSection].background}
      containerProps={{ className: styles.bg }}
    >
      <Navbar darkMode={sections[curSection].darkMode} />
      <Fade in={!targetSection} onExit={fadeIn} appear>
        <Container className={styles.content} fluid>
          {sectionComponents[curSection]}
        </Container>
      </Fade>
    </Background>
  );
}
