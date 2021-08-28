import { BiGame, BiMovie, BiNotepad } from "react-icons/bi";
import styled from "styled-components";
import { About } from "../components/About";
import { Bubble } from "../components/Bubble";

export default function Home() {
  return (
    <>
      {/* About */}
      <Hero>
        <About
          name="joey van lierop"
          lines={["random text", "more text blah blah"]}
        />
      </Hero>
      {/* Writing */}
      <Bubble
        color="#fdebf1"
        innerSize="5rem"
        outerSize="50rem"
        offset={1}
        href="/writing"
        top="30%"
        left="30%"
        transitions={["#fdebf1", "#fdf3f6", "#fff9fb", "#ffffff"]}
      >
        <BiNotepad fontSize="2rem" color="#8a5768" />
      </Bubble>
      {/* Games */}
      <Bubble
        color="#e5f1f8"
        innerSize="5rem"
        outerSize="40rem"
        offset={3}
        href="/games"
        top="40%"
        left="70%"
        transitions={["#e5f1f8", "#edf5fa", "#f5fafd", "#ffffff"]}
      >
        <BiGame fontSize="2rem" color="#61869b" />
      </Bubble>
      {/* Movies */}
      <Bubble
        color="#feecea"
        innerSize="5rem"
        outerSize="30rem"
        offset={2}
        href="/movies"
        top="65%"
        left="60%"
        transitions={["#feecea", "#fff2f6", "#fff9fb", "#ffffff"]}
      >
        <BiMovie fontSize="2rem" color="#995952" />
      </Bubble>
    </>
  );
}

const Hero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
