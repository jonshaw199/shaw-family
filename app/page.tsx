"use client";

import { Button, Container } from "react-bootstrap";
import Background from "@/components/layout/Background";
import styles from "@/app/page.module.css";
import { Indie_Flower } from "next/font/google";
import classNames from "classnames";
import MediaCard, { MediaCardProps } from "@/components/ui/MediaCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sections } from "./common";

const MEDIA_TRANSITION_DELAY_MS = 200;

const indie = Indie_Flower({
  subsets: ["latin"], // Select the subset you need
  weight: ["400"],
});

const mediaCards: MediaCardProps[] = [
  {
    previewSrc: "/wedding.jpg",
    title: "Sam's Wedding",
    text: "An unforgettable experience",
  },
  {
    previewSrc: "/halloween.jpg",
    title: "Halloween '23",
    text: "Jason and Samantha carving pumpkins",
  },
  {
    previewSrc: "/lake.jpg",
    title: "Camping At Lake Michigan",
    text: "Good times with good people",
  },
];

export default function Page() {
  const [isMediaVisible, setIsMediaVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMediaVisible(true), MEDIA_TRANSITION_DELAY_MS);
  }, []);

  return (
    <>
      <Background
        src="/dinner.mp4"
        containerProps={{ className: styles.events }}
      >
        <Container className="d-flex flex-column align-items-center justify-content-center gap-1 h-100">
          <div
            className={classNames([
              "text-white text-center",
              indie.className,
              styles["events-cta"],
            ])}
          >
            What&apos;s cooking?
          </div>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            <Link href={`/${Sections.EVENTS}`}>
              <Button variant="light">View Upcoming Events</Button>
            </Link>
            <Link href={`/${Sections.EVENTS}`}>
              <Button variant="dark">Create New Event</Button>
            </Link>
          </div>
        </Container>
      </Background>

      <Container className="py-3">
        <h2 className="text-center">Media</h2>
        <div
          className={classNames([
            "d-flex flex-wrap justify-content-center gap-3 py-3",
            styles["slide-in"],
            isMediaVisible ? styles["slide-in-visible"] : null,
          ])}
        >
          {mediaCards.map(({ previewSrc, text, title }, i) => (
            <Link
              key={`media_card_${i}`}
              href={`/${Sections.MEDIA}`}
              style={{ width: "420px" }}
              className={styles.card}
            >
              <MediaCard previewSrc={previewSrc} text={text} title={title} />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
