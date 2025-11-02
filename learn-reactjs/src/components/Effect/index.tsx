import React, { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  //   if (props.isPlaying) {
  //     ref.current?.play();
  //   } else {
  //     ref.current?.pause();
  //   }

  useEffect(() => {
    if (props.isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  });

  return <video ref={ref} src={props.src} loop playsInline />;
};

const EffectApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

export default EffectApp;
