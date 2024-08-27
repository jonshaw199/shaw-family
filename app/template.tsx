"use client";

import { motion } from "framer-motion";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/app/template.module.css";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} // Adjust the duration as needed
    >
      <Container className={styles.content} fluid>
        {children}
      </Container>
    </motion.div>
  );
}
