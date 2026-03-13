import { useState } from "react";
import IndicatorCard from "./components/IndicatorCard";
import SignalCard from "./components/SignalCard";
import BreakdownCard from "./components/BreakdownCard";

function App() {
  const [vix, setVix] = useState(25);
  const [putCall, setPutCall] = useState(0.9);
  const [breadth, setBreadth] = useState(50);
  const [spTrend, setSpTrend] = useState("down");

  function getVixScore() {
    if (vix < 20) return 1;
    if (vix > 30) return -1;
    return 0;
  }

  function getPutCallScore() {
    if (putCall < 0.8) return 1;
    if (putCall > 1.1) return -1;
    return 0;
  }

  function getBreadthScore() {
    if (breadth > 60) return 1;
    if (breadth < 40) return -1;
    return 0;
  }

  function getTrendScore() {
    if (spTrend === "up") return 1;
    if (spTrend === "down") return -1;
    return 0;
  }

  function computeSignal(score) {
    if (score >= 2) return "RISK ON";
    if (score <= -2) return "DEFENSIVE";
    return "CAUTION";
  }

  function signalColor(signal) {
    if (signal === "RISK ON") return "text-green-400";
    if (signal === "DEFENSIVE") return "text-red-400";
    return "text-yellow-400";
  }

  function scoreColor(value) {
    if (value > 0) return "text-green-400";
    if (value < 0) return "text-red-400";
    return "text-slate-400";
  }

  function scoreLabel(value) {
    if (value > 0) return "+1";
    if (value < 0) return "-1";
    return "0";
  }

  const vixScore = getVixScore();
  const putCallScore = getPutCallScore();
  const breadthScore = getBreadthScore();
  const trendScore = getTrendScore();

  const score = vixScore + putCallScore + breadthScore + trendScore;
  const signal = computeSignal(score);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <IndicatorCard
          title="VIX"
          label="Current"
          value={vix}
          onChange={setVix}
          ruleText="< 20 = +1, > 30 = -1"
        />

        <IndicatorCard
          title="Put / Call Ratio"
          label="Current"
          value={putCall}
          onChange={setPutCall}
          step="0.1"
          ruleText="< 0.8 = +1, > 1.1 = -1"
        />

        <IndicatorCard
          title="Market Breadth"
          label="Current"
          value={breadth}
          onChange={setBreadth}
          ruleText="> 60 = +1, < 40 = -1"
        />

        <IndicatorCard
          title="S&P Trend"
          label="Trend"
          value={spTrend}
          onChange={setSpTrend}
          type="select"
          options={["up", "down", "flat"]}
          ruleText="up = +1, down = -1, flat = 0"
        />
      </div>

      <div className="mt-10 w-full max-w-3xl space-y-6">
        <SignalCard signal={signal} score={score} signalColor={signalColor} />

        <BreakdownCard
          vixScore={vixScore}
          putCallScore={putCallScore}
          breadthScore={breadthScore}
          trendScore={trendScore}
          scoreColor={scoreColor}
          scoreLabel={scoreLabel}
        />
      </div>
    </main>
  );
}

export default App;
