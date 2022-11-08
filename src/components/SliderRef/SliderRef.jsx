import { useRef } from "react";

export default function SliderRef() {
  const sliderRef = useRef();

  console.log(sliderRef.current);

  const onPlay = () => {
    console.log(sliderRef.current.currentTime)
    sliderRef.current.play();
  };

  return (
    <div>
      <audio ref={sliderRef} controls src="naruto.mp3"></audio>

      <button onClick={onPlay}>Play</button>
    </div>
  );
}
