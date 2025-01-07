import dynamic from "next/dynamic";
import { useState } from "react";

const Plotly = dynamic(() => import("react-plotly.js"), { ssr: false, })

export function Plot(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="h-[500px]">
      <Plotly
        data={props.data}
        layout={{
          margin: {
            t: 0,
            l: 0,
            b: 0,
            r: 0,
          },
          font: {
            color: "var(--mono12)"
          },
          height: 500,
        }}
        config={{
          displayModeBar: false,
          responsive: true,
          showTips: false
        }}
        style={{
          width: "100%",
          height: "500px",
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.75s",
          transitionDelay: `${props.fadeDelay}s`
        }}
        onInitialized={() => setIsLoaded(true)}
      />
    </div>
  );
}