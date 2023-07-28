import { useState, useRef } from "react";
import Api from "../api/ApiConfig";
import MainScreen from "./MainScreen";
import Card from "./Card";
import ImageRecommender from "./ImageRecommender";

function Convert() {
  const resultRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <MainScreen scrollToRef={resultRef}/>
      <ImageRecommender resultRef={resultRef}/>
      <div className="flex flex-row flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Convert;
