import { useState, useEffect } from "react";
import {
  getVixScore,
  getPutCallScore,
  getBreadthScore,
  getTrendScore,
  computeSignal,
} from "../lib/marketSignals";

function getSavedDashboard() {
  const saved = localStorage.getItem("market-dashboard");

  if (!saved) {
    return {
      vix: 25,
      putCall: 0.9,
      breadth: 50,
      spTrend: "down",
    };
  }

  try {
    const data = JSON.parse(saved);

    return {
      vix: data.vix ?? 25,
      putCall: data.putCall ?? 0.9,
      breadth: data.breadth ?? 50,
      spTrend: data.spTrend ?? "down",
    };
  } catch {
    return {
      vix: 25,
      putCall: 0.9,
      breadth: 50,
      spTrend: "down",
    };
  }
}

export default function useMarketSignals() {
  const saved = getSavedDashboard();

  const [vix, setVix] = useState(saved.vix);
  const [putCall, setPutCall] = useState(saved.putCall);
  const [breadth, setBreadth] = useState(saved.breadth);
  const [spTrend, setSpTrend] = useState(saved.spTrend);

  const vixScore = getVixScore(vix);
  const putCallScore = getPutCallScore(putCall);
  const breadthScore = getBreadthScore(breadth);
  const trendScore = getTrendScore(spTrend);

  const score = vixScore + putCallScore + breadthScore + trendScore;
  const signal = computeSignal(score);

  useEffect(() => {
    const data = { vix, putCall, breadth, spTrend };
    localStorage.setItem("market-dashboard", JSON.stringify(data));
  }, [vix, putCall, breadth, spTrend]);

  return {
    vix,
    setVix,
    putCall,
    setPutCall,
    breadth,
    setBreadth,
    spTrend,
    setSpTrend,
    vixScore,
    putCallScore,
    breadthScore,
    trendScore,
    score,
    signal,
  };
}
