import styled from "styled-components";

export default function Home() {
  return <Hero>i'll make some cool stuff eventually</Hero>;
}

const Hero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
