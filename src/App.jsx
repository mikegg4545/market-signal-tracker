import { useState } from "react";
import IndicatorCard from "./components/IndicatorCard";
import SignalCard from "./components/SignalCard";
import BreakdownCard from "./components/BreakdownCard";
import {
  getVixScore,
  getPutCallScore,
  getBreadthScore,
  getTrendScore,
  computeSignal,
  signalColor,
  scoreColor,
  scoreLabel,
} from "./lib/marketSignals";

function App() {
  const [vix, setVix] = useState(25);
  const [putCall, setPutCall] = useState(0.9);
  const [breadth, setBreadth] = useState(50);
  const [spTrend, setSpTrend] = useState("down");

  const vixScore = getVixScore(vix);
  const putCallScore = getPutCallScore(putCall);
  const breadthScore = getBreadthScore(breadth);
  const trendScore = getTrendScore(spTrend);

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
