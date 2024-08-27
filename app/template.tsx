"use client";

import React, { useEffect, useState } from "react";
import { Container, Fade } from "react-bootstrap";
import styles from "@/app/template.module.css";
import { usePathname } from "next/navigation";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false); // Start the fade out
    const timeout = setTimeout(() => setShow(true), 300); // After fade out, trigger fade in
    return () => clearTimeout(timeout);
  }, [pathname]); // Trigger fade when the route changes

  return (
    <Fade in={show} appear timeout={500}>
      <Container className={styles.content} fluid>
        {children}
      </Container>
    </Fade>
  );
}
