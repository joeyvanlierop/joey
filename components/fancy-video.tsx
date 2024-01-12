"use client";

import { useRef, useState } from "react";

export const FancyVideo = ({ href, children, ...rest }) => {
  const [paused, setPaused] = useState(false);
  const [looping, setLooping] = useState(true);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoHandler = (
    control:
      | "play"
      | "pause"
      | "mute"
      | "unmute"
      | "toggle"
      | "loop"
      | "unloop"
      | "maximize"
      | "progress",
    progress?: number
  ) => {
    if (!videoRef.current) return;
    switch (control) {
      case "play":
        setPaused(false);
        videoRef.current.play();
        break;
      case "pause":
        setPaused(true);
        videoRef.current.pause();
        break;
      case "mute":
        setMuted(true);
        videoRef.current.muted = true;
        break;
      case "unmute":
        setMuted(false);
        videoRef.current.muted = false;
        break;
      case "loop":
        setLooping(true);
        videoRef.current.loop = true;
        break;
      case "unloop":
        setLooping(false);
        videoRef.current.loop = false;
        break;
      case "maximize":
        videoRef.current.requestFullscreen();
        break;
      case "progress":
        videoRef.current.currentTime = progress! * videoRef.current.duration;
        break;
    }
  };

  return (
    <div className="group relative m-0 mt-2 not-prose">
      <video
        onTimeUpdate={(event) => {
          console.log(event);
          return setTime(event.currentTarget.currentTime);
        }}
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
        ref={videoRef}
        loop={looping}
        muted={muted}
        playsInline
        autoPlay
        onClick={() => (paused ? videoHandler("play") : videoHandler("pause"))}
        className="cursor-pointer rounded-lg overflow-hidden"
        {...rest}
      >
        {children}
      </video>
      <Controls
        paused={paused}
        looping={looping}
        muted={muted}
        progress={(time / (videoRef.current?.duration || 1)) * 100}
        videoHandler={videoHandler}
      />
    </div>
  );
};

const Controls = ({ paused, looping, muted, progress, videoHandler }) => {
  return (
    <div className="absolute bottom-4 left-4 right-4 h-9 flex gap-2 items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-md backdrop-brightness-75 rounded-full p-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150">
      <ControlsButton>
        <svg
          className="h-[14px] w-[14px] bg-white"
          onClick={() =>
            paused ? videoHandler("play") : videoHandler("pause")
          }
          style={{
            maskImage: paused ? PlayIcon : PauseIcon,
            maskSize: "100% 100%",
          }}
        />
      </ControlsButton>
      <div
        className="relative w-full bg-[hsla(0,0%,100%,.3)] h-[3px] rounded-[3px] overflow-hidden cursor-pointer"
        onClick={(event) => {
          var bounds = event.currentTarget.getBoundingClientRect();
          var clickedProgress = (event.clientX - bounds.left) / bounds.width;
          videoHandler("progress", clickedProgress);
        }}
      >
        <div
          className="absolute w-full left-0 h-full bg-white transition origin-left"
          style={{ transform: `scaleX(${progress}%)` }}
        />
      </div>
      <ControlsButton>
        <svg
          className="h-[14px] w-[14px] bg-white color-[hsla(0,0%,100%,.3)] transition duration-150"
          onClick={() =>
            muted ? videoHandler("unmute") : videoHandler("mute")
          }
          style={{
            maskImage: MuteIcon,
            maskSize: "100% 100%",
            backgroundColor: muted && "hsla(0,0%,100%,.3)",
          }}
        />
      </ControlsButton>
      <ControlsButton>
        <svg
          className="h-[14px] w-[14px] bg-white color-[hsla(0,0%,100%,.3)] transition duration-150"
          onClick={() =>
            looping ? videoHandler("unloop") : videoHandler("loop")
          }
          style={{
            maskImage: AutoplayIcon,
            maskSize: "100% 100%",
            backgroundColor: looping || "hsla(0,0%,100%,.3)",
          }}
        />
      </ControlsButton>
      <ControlsButton>
        <svg
          className="h-[14px] w-[14px] bg-white"
          onClick={() => videoHandler("maximize")}
          style={{ maskImage: FullscreenIcon, maskSize: "100% 100%" }}
        />
      </ControlsButton>
    </div>
  );
};

const ControlsButton = ({ children }) => {
  return (
    <button className="p-[6px] hover:bg-[hsla(0,0%,100%,0.15)] rounded-md transition-all">
      {children}
    </button>
  );
};

const PlayIcon = `url("data:image/svg+xml,%3Csvg width='59' height='66' viewBox='0 0 59 66' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.11331 65.0703C5.79691 65.0703 6.45608 64.9483 7.09081 64.7041C7.72561 64.46 8.40108 64.1263 9.11721 63.7032L54.2832 37.4824C55.7155 36.6686 56.7246 35.9199 57.3105 35.2363C57.8964 34.5527 58.1894 33.7389 58.1894 32.7949C58.1894 31.8509 57.8964 31.0371 57.3105 30.3535C56.7246 29.6699 55.7155 28.9212 54.2832 28.1074L9.11721 1.88673C8.40108 1.4636 7.72561 1.12993 7.09081 0.885727C6.45608 0.641594 5.79691 0.519531 5.11331 0.519531C3.81118 0.519531 2.77765 0.983399 2.01271 1.91113C1.24773 2.83887 0.865234 4.06773 0.865234 5.59773V59.9922C0.865234 61.5222 1.24773 62.751 2.01271 63.6787C2.77765 64.6065 3.81118 65.0703 5.11331 65.0703Z' fill='black'/%3E%3C/svg%3E%0A")`;
const PauseIcon = `url("data:image/svg+xml,%3Csvg width='46' height='63' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.29 62.557h8.544c3.19 0 4.785-1.612 4.785-4.834V5.769c0-3.19-1.595-4.785-4.785-4.785H5.289C2.066.984.455 2.58.455 5.77v51.954c0 3.222 1.611 4.834 4.834 4.834Zm27.148 0h8.593c3.19 0 4.785-1.612 4.785-4.834V5.769c0-3.19-1.595-4.785-4.785-4.785h-8.593c-3.223 0-4.834 1.595-4.834 4.785v51.954c0 3.222 1.61 4.834 4.834 4.834Z' fill='%23000'/%3E%3C/svg%3E")`;
const AutoplayIcon = `url("data:image/svg+xml,%3Csvg width='81' height='68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.174 35.016c.846 0 1.546-.285 2.1-.855.553-.57.83-1.278.83-2.124v-3.564c0-3.45 1.041-6.169 3.124-8.155 2.084-1.985 4.948-2.978 8.594-2.978h29.102v9.033c0 .716.195 1.261.586 1.636.39.374.944.561 1.66.561.358 0 .692-.057 1-.17.31-.114.595-.285.855-.513l14.356-11.67c.586-.521.887-1.123.903-1.807.016-.683-.285-1.27-.903-1.758L51.025.934a2.377 2.377 0 0 0-.854-.489A3.307 3.307 0 0 0 49.17.3c-.716 0-1.27.187-1.66.561-.39.375-.586.904-.586 1.587v9.131H18.31c-5.47 0-9.856 1.465-13.16 4.395C1.847 18.903.195 22.939.195 28.082v3.955c0 .846.277 1.555.83 2.124.554.57 1.27.855 2.149.855ZM77.1 32.623c-.847 0-1.555.277-2.124.83-.57.553-.855 1.253-.855 2.1v3.613c0 3.418-1.042 6.128-3.125 8.13-2.083 2.002-4.931 3.003-8.545 3.003H33.35v-8.984c0-.717-.204-1.262-.61-1.636-.408-.375-.97-.562-1.685-.562-.326 0-.643.05-.952.147-.31.097-.61.276-.904.537L14.844 51.47c-.586.488-.88 1.074-.88 1.758 0 .683.294 1.285.88 1.806l14.355 11.719c.293.228.594.39.904.488.309.098.626.147.952.147.716 0 1.277-.188 1.684-.562.407-.374.61-.92.61-1.636v-9.18h28.614c5.469 0 9.855-1.456 13.16-4.37 3.303-2.913 4.955-6.957 4.955-12.133v-3.955c0-.847-.285-1.546-.854-2.1-.57-.553-1.278-.83-2.124-.83Z' fill='%23000'/%3E%3C/svg%3E")`;
const FullscreenIcon = `url("data:image/svg+xml,%3Csvg width='74' height='74' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.932 30.984c.911 0 1.652-.293 2.221-.879.57-.585.855-1.334.855-2.246v-4.834L6.324 9.94l10.84 11.23 12.06 12.208c.554.586 1.27.879 2.149.879.944 0 1.725-.285 2.344-.855.618-.57.928-1.342.928-2.319 0-.423-.082-.83-.245-1.22a3.144 3.144 0 0 0-.683-1.026L21.559 16.678l-11.23-10.84 13.183.732h4.785c.879 0 1.627-.285 2.246-.854.619-.57.928-1.294.928-2.173 0-.912-.31-1.66-.928-2.246-.619-.586-1.367-.879-2.246-.879H6.275c-1.725 0-3.06.48-4.004 1.44-.944.96-1.416 2.287-1.416 3.98v22.021c0 .88.285 1.62.855 2.222.57.602 1.31.903 2.222.903Zm42.04 42.09h22.022c1.693 0 3.02-.472 3.98-1.416s1.44-2.279 1.44-4.004V45.633c0-.88-.285-1.611-.854-2.198-.57-.586-1.31-.878-2.222-.878-.879 0-1.611.284-2.197.854-.586.57-.88 1.31-.88 2.222v4.834l.733 13.135-10.84-11.28-12.11-12.158a2.846 2.846 0 0 0-2.148-.928c-.944 0-1.725.293-2.343.88-.619.585-.928 1.35-.928 2.294 0 .423.073.838.22 1.245.146.407.382.757.708 1.05l12.11 12.158L63.94 67.654l-13.134-.732h-4.834c-.88 0-1.62.285-2.222.854-.602.57-.92 1.31-.952 2.222 0 .879.3 1.611.903 2.197.602.586 1.36.88 2.27.88Z' fill='%23000'/%3E%3C/svg%3E")`;
const MuteIcon = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='2 2 20 20' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M15 8a5 5 0 0 1 0 8' /%3E%3Cpath d='M17.7 5a9 9 0 0 1 0 14' /%3E%3Cpath d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' /%3E%3C/svg%3E")`;
