import { motion } from "framer-motion";
import styled from "styled-components";

export const Content: React.FC = (props) => {
  return (
    <Wrapper>
      <Column
        as={motion.div}
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.75,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            duration: 0.75,
          },
        }}
      >
        {props.children}
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`;
