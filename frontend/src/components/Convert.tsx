import { useRef } from "react";
import MainScreen from "./MainScreen";
import ImageRecommender from "./ImageRecommender";

function Convert() {
  const resultRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <MainScreen scrollToRef={resultRef} />
      <ImageRecommender resultRef={resultRef} />
    </>
  );
}

export default Convert;
