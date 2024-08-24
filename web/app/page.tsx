"use client";

import { ReactElement, forwardRef, useEffect, useMemo, useState } from "react";
import Navbar from "@/app/Navbar";
import styles from "@/app/page.module.css";
import UnderConstruction from "@/app/components/ui/UnderConstruction";
import Home from "@/app/Home";
import { Container, Fade } from "react-bootstrap";
import { SectionProvider, useSectionContext } from "./contexts/SectionContext";
import { Sections } from "@/app/common";

const FADE_TRANSITION_MS = 300;

const sectionComponents: { [key: string]: ReactElement } = {
  [Sections.EVENTS]: <UnderConstruction />,
  [Sections.HOME]: <Home />,
  [Sections.MEDIA]: <UnderConstruction />,
};

function Main() {
  const { sectionId } = useSectionContext();
  // For smooth transition/animation from one section to another
  const [sectionIdInternal, setSectionIdInternal] = useState(sectionId);

  const fadeIn = () =>
    setTimeout(() => {
      setSectionIdInternal(sectionId);
    }, FADE_TRANSITION_MS);

  return (
    <div className={styles.container}>
      <Navbar />
      <Fade in={sectionId == sectionIdInternal} onExit={fadeIn} appear>
        <Container className={styles.content} fluid>
          {sectionComponents[sectionIdInternal]}
        </Container>
      </Fade>
    </div>
  );
}

export default function Page() {
  return (
    <SectionProvider defaultSectionId="home">
      <Main />
    </SectionProvider>
  );
}
