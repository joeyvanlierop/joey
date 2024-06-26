import { Metadata } from "next";
import { Hexagon } from "./hexagon";
import { Honeycomb } from "./honeycomb";
import { getUrl } from "@lib/url";

export const metadata: Metadata = {
  title: "Hexagons",
  description: "They are the bestagons.",
  metadataBase: new URL(getUrl()),
  openGraph: {
    title: "Hexagons",
    description: "They are the bestagons.",
    url: "https://joeyvanlierop.com/hexagons",
    type: "website",
    images: "/og.png",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5">
      <figure>
        <svg viewBox="-100 -87 200 174" width={100} height={87 + 2}>
          <Hexagon x={0} y={0} />
        </svg>
        {/* <figcaption>One simple svg hexagon</figcaption> */}
      </figure>
      <figure>
        <svg viewBox="-250 -174 500 261" width={250} height={87 * (3 / 2) + 2}>
          <Hexagon x={-150} y={-87} />
          <Hexagon x={0} y={0} />
          <Hexagon x={150} y={-87} />
        </svg>
        {/* <figcaption>Aligning multiple hexagi</figcaption> */}
      </figure>

      <Honeycomb size={2} />
    </div>
  );
}
