import { useMemo } from "react";
import { Card } from "react-bootstrap";

export type MediaCardProps = {
  previewSrc?: string;
  title?: string;
  text?: string;
};

export default function MediaCard({ previewSrc, title, text }: MediaCardProps) {
  const previewMedia = useMemo(
    () =>
      previewSrc?.split(".")[1] == "jpg" ? (
        <Card.Img variant="top" src={previewSrc} />
      ) : undefined,
    [previewSrc]
  );

  return (
    <Card>
      {previewMedia}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
