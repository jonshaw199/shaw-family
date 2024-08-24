import { Button, Container, NavLink } from "react-bootstrap";
import Background from "@/app/components/layout/Background";
import styles from "@/app/Home.module.css";
import { Indie_Flower } from "next/font/google";
import classNames from "classnames";
import MediaCard, { MediaCardProps } from "@/app/components/ui/MediaCard";
import { useEffect, useState } from "react";

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

export default function Home() {
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
            What's cooking?
          </div>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            <NavLink href="#events">
              <Button variant="light">View Upcoming Events</Button>
            </NavLink>
            <NavLink href="#events">
              <Button variant="dark">Create New Event</Button>
            </NavLink>
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
            <NavLink
              key={`media_card_${i}`}
              href="#media"
              style={{ width: "400px" }}
              className={styles.card}
            >
              <MediaCard previewSrc={previewSrc} text={text} title={title} />
            </NavLink>
          ))}
        </div>
      </Container>
    </>
  );
}
