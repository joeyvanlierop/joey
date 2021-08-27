import styled, { keyframes } from "styled-components";

const fadeInDelay = 0.2;

interface AboutProps {
  name: string;
  lines: string[];
}

export const About: React.FC<AboutProps> = (props) => {
  return (
    <Wrapper>
      <TextBounds>
        <Text
          as="h3"
          style={{
            "--delay": "0.25s",
          }}
        >
          {props.name}
        </Text>
      </TextBounds>
      <h1>
        {props.lines.map((line, index) => (
          <TextBounds key={index}>
            <Text
              style={{
                "--delay": `${fadeInDelay * index + 0.25}s`,
              }}
            >
              {line}
            </Text>
          </TextBounds>
        ))}
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextBounds = styled.div`
  overflow: hidden;
  padding-bottom: 4px;
`;

const Slide = keyframes`
  0% {
    transform: translateY(250%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Text = styled.div`
  transform: translateY(250%);
  animation: ${Slide} 1.25s var(--delay) cubic-bezier(0.41, 1.14, 0.56, 0.97)
    forwards;
`;
