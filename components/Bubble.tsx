import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useState } from "react";

const bubblePopOffset = 0.75;
const bubblePopCoeff = 0.2;
const bubbleHoverCoeff = -2;
const transitionBubbleOffset = 0.15;
const transitionBubbleDuration = 1;

interface BubbleProps {
  color: string;
  innerSize: string;
  outerSize: string;
  offset: number;
  top: string;
  left: string;
  href: string;
  transitions: string[];
}

export const Bubble: React.FC<BubbleProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link href={`/${props.href}`}>
      <StyledBubble
        style={{
          "--color": props.color,
          "--inner-size": props.innerSize,
          "--outer-size": props.outerSize,
          "--offset": `${props.offset}s`,
          "--top": props.top,
          "--left": props.left,
        }}
        onClick={() => setIsClicked(true)}
      >
        <>
          {props.children}
          {props.transitions.map((color, index) => {
            const delay = index * transitionBubbleOffset;
            return (
              <TransitionBubble
                as={motion.div}
                key={color}
                style={{
                  "--color": color,
                  "--delay": delay,
                  "--inner-size": props.innerSize,
                }}
                initial={{
                  visibility: "hidden",
                  width: index === 0 ? `calc(${props.innerSize} * 1)` : 0,
                  height: index === 0 ? `calc(${props.innerSize} * 1)` : 0,
                }}
                exit={
                  isClicked
                    ? {
                        visibility: "visible",
                        width: "calc(100vw * 1.75)",
                        height: "calc(100vw * 1.75)",
                        transition: {
                          delay: delay,
                          duration: transitionBubbleDuration,
                        },
                      }
                    : {}
                }
                onBeforeInput={() => setIsClicked(false)}
              />
            );
          })}
        </>
      </StyledBubble>
    </Link>
  );
};

const Hover = keyframes`
  0% {
    transform: translateX(-50%) translateY(calc(-50% + 1rem));
  }
  100% {
    transform: translateX(-50%) translateY(calc(-50% - 1rem));
  }
`;

const Pop = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: var(--inner-size);
    height: var(--inner-size);
  }
`;

const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledBubble = styled.div`
  background-color: var(--color);
  top: var(--top);
  left: var(--left);
  width: var(--inner-size);
  height: var(--inner-size);
  opacity: 0;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
  animation: ${Fade} 0.5s
      calc(var(--offset) * ${bubblePopCoeff} + ${bubblePopOffset}s) ease-out
      forwards,
    ${Pop} 0.5s calc(var(--offset) * ${bubblePopCoeff} + ${bubblePopOffset}s)
      cubic-bezier(0.175, 0.885, 0.41, 1.08),
    ${Hover} 4s calc(var(--offset) * ${bubbleHoverCoeff}) ease-in-out infinite
      alternate;

  :hover {
    width: calc(var(--inner-size) * 1.2);
    height: calc(var(--inner-size) * 1.2);
    z-index: 1;
  }

  ::before {
    content: "";
    width: var(--outer-size);
    height: var(--outer-size);
    border: 1px solid #ebebeb;
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transition: all 0.2s;
  }

  :hover::before {
    width: calc(var(--inner-size) * 2);
    height: calc(var(--inner-size) * 2);
  }
`;

const TransitionBubble = styled.div`
  background-color: var(--color);
  width: var(--inner-size);
  height: var(--inner-size);
  border-radius: 50%;
  position: absolute;
  visibility: hidden;
  cursor: default;
`;
