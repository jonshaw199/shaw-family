import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <Image
        src="/construction.png"
        width={300}
        height={300}
        alt="Dog wearing construction hat"
      />
      <h4 className="text-warning">Under Construction</h4>
    </div>
  );
}
