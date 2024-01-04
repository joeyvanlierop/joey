import { HTMLAttributes, forwardRef, useState } from "react";

export function Stars(props: { n: number; quote: string }) {
  const [animationDelay] = useState(Math.random() * 20 * 1000);
  const [animation] = useState(chooseAnimation());

  const renderStar = (enabled: boolean, delay: number) => {
    return (
      <Star
        enabled={enabled}
        className={props.n > 1 ? animation : ""}
        style={{
          animationDelay: `${delay + animationDelay}ms`,
        }}
      />
    );
  };

  return (
    <div className="mb-3 table -ml-[40px]">
      {renderStar(props.n >= 3, 160)}
      {renderStar(props.n >= 2, 80)}
      {renderStar(props.n >= 1, 0)}
      <div className="w-1 table-cell" />
      <q>{props.quote}</q>
    </div>
  );
}

interface StarProps extends HTMLAttributes<HTMLSpanElement> {
  enabled: boolean;
  className?: string;
}

const Star = forwardRef<HTMLSpanElement, StarProps>((props, ref) => {
  const { enabled, className, ...otherProps } = props;

  return (
    <span
      {...otherProps}
      ref={ref}
      className={`${enabled ? "visible" : "invisible"} ${
        className || ""
      } table-cell w-2 pr-1`}
    >
      <svg
        width="8"
        height="11"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        className="text-mono-9"
      >
        <circle cx="5" cy="5" r="5" fill="currentColor" />
      </svg>
    </span>
  );
});

function chooseAnimation() {
  const choices = ["animate-extend", "animate-hop", "animate-grow"];
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
