import dynamic from "next/dynamic";
import { useState } from "react";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

export function MensPlot(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="h-[500px]">
      <Plot
        data={[
          {
            "type": "treemap",
            "ids": [
              "All",
              "",
              "Scarpa",
              "Drago",
              "Pan Yufei",
              "Hannes Van Duysen",
              "Campbell Harrison",
              "Sam Avezou",
              "Luka Potocar",
              "",
              "Unparallel",
              "Flagship",
              "Tomoa Narasaki",
              "Yannick Flohe",
              "TN Pro",
              "Tomoa Narasaki*",
              "Yannick Flohe*",
              "",
              "La Sportiva",
              "Theory",
              "Alberto Gines Lopez",
              "Solution Comp",
              "Hamish McArthur",
              "Adam Ondra",
              "Solution",
              "Jesse Gruper",
              "Jakob Schubert",
              "Sascha Lehmann*",
              "Skwama",
              "Anranku Sorato",
              "Dohyun Lee",
              "Jesse Gruper*",
              "Ondra Pro",
              "Adam Ondra*",
              "",
              "Tenaya",
              "Indalo",
              "Alex Megos",
              "Mel Janse Van Rensburg",
              "",
              "EB",
              "Nebula",
              "Paul Jenft",
              "",
              "Evolv",
              "Zenist Pro",
              "Colin Duffy",
              "",
              "Five Ten",
              "Hiangle Pro",
              "Toby Roberts"
            ],
            "labels": [
              "All",
              "",
              "Scarpa",
              "Drago",
              "Pan Yufei",
              "Hannes Van Duysen",
              "Campbell Harrison",
              "Sam Avezou",
              "Luka Potocar",
              "",
              "Unparallel",
              "Flagship",
              "Tomoa Narasaki<sup>[4]</sup>",
              "Yannick Flohe<sup>[2]</sup>",
              "TN Pro",
              "Tomoa Narasaki<sup>[4]</sup>",
              "Yannick Flohe<sup>[2]</sup>",
              "",
              "La Sportiva",
              "Theory",
              "Alberto Gines Lopez",
              "Solution Comp",
              "Hamish McArthur",
              "Adam Ondra<sup>[3]</sup>",
              "Solution",
              "Jesse Gruper<sup>[1]</sup>",
              "Jakob Schubert",
              "Sascha Lehmann",
              "Skwama",
              "Anranku Sorato",
              "Dohyun Lee",
              "Jesse Gruper<sup>[1]</sup>",
              "Ondra Pro",
              "Adam Ondra<sup>[3]</sup>",
              "",
              "Tenaya",
              "Indalo",
              "Alex Megos",
              "Mel Janse Van Rensburg",
              "",
              "EB",
              "Nebula",
              "Paul Jenft",
              "",
              "Evolv",
              "Zenist Pro",
              "Colin Duffy",
              "",
              "Five Ten",
              "Hiangle Pro",
              "Toby Roberts"
            ],
            "values": [
              "24",
              "",
              "5",
              "5",
              "1",
              "1",
              "1",
              "1",
              "1",
              "",
              "4",
              "2",
              "1",
              "1",
              "2",
              "1",
              "1",
              "",
              "10",
              "1",
              "1",
              "2",
              "1",
              "1",
              "3",
              "1",
              "1",
              "1",
              "3",
              "1",
              "1",
              "1",
              "1",
              "1",
              "",
              "2",
              "2",
              "1",
              "1",
              "",
              "1",
              "1",
              "1",
              "",
              "1",
              "1",
              "1",
              "",
              "1",
              "1",
              "1"
            ],
            "parents": [
              "",
              "",
              "All",
              "Scarpa",
              "Drago",
              "Drago",
              "Drago",
              "Drago",
              "Drago",
              "",
              "All",
              "Unparallel",
              "Flagship",
              "Flagship",
              "Unparallel",
              "TN Pro",
              "TN Pro",
              "",
              "All",
              "La Sportiva",
              "Theory",
              "La Sportiva",
              "Solution Comp",
              "Solution Comp",
              "La Sportiva",
              "Solution",
              "Solution",
              "Solution",
              "La Sportiva",
              "Skwama",
              "Skwama",
              "Skwama",
              "La Sportiva",
              "Ondra Pro",
              "",
              "All",
              "Tenaya",
              "Indalo",
              "Indalo",
              "",
              "All",
              "EB",
              "Nebula",
              "",
              "All",
              "Evolv",
              "Zenist Pro",
              "",
              "All",
              "Five Ten",
              "Hiangle Pro"
            ],
            marker: {
              colors: [
                "rgba(0, 0, 0, 0)",
                "",
                "rgb(102, 197, 204)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "rgb(220, 176, 242)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "rgb(246, 207, 113)",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "rgb(201, 219, 116)",
                "",
                "",
                "",
                "",
                "rgb(158, 185, 243)",
                "",
                "",
                "",
                "rgb(135, 197, 95)",
                "",
                "",
                "",
                "rgb(248, 156, 116)",
              ],
            },
            "branchvalues": "total"
          }
        ]}
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