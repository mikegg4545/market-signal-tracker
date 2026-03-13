import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Card>
          <CardHeader>
            <CardTitle>VIX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-slate-300">Current: {vix}</p>
            <input
              type="number"
              value={vix}
              onChange={(e) => setVix(Number(e.target.value))}
              className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2"
            />
            <p className="text-xs text-slate-500">{"< 20 = +1, > 30 = -1"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Put / Call Ratio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-slate-300">Current: {putCall}</p>
            <input
              type="number"
              step="0.1"
              value={putCall}
              onChange={(e) => setPutCall(Number(e.target.value))}
              className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2"
            />
            <p className="text-xs text-slate-500">{"< 0.8 = +1, > 1.1 = -1"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Breadth</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-slate-300">Current: {breadth}</p>
            <input
              type="number"
              value={breadth}
              onChange={(e) => setBreadth(Number(e.target.value))}
              className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2"
            />
            <p className="text-xs text-slate-500">{"> 60 = +1, < 40 = -1"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>S&amp;P Trend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-slate-300">Trend: {spTrend}</p>
            <select
              value={spTrend}
              onChange={(e) => setSpTrend(e.target.value)}
              className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2"
            >
              <option value="up">up</option>
              <option value="down">down</option>
              <option value="flat">flat</option>
            </select>
            <p className="text-xs text-slate-500">
              {"up = +1, down = -1, flat = 0"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 w-full max-w-3xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Signal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className={`text-2xl font-bold ${signalColor(signal)}`}>
              {signal}
            </p>
            <p className="text-slate-400">Score: {score}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Score Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-slate-300">
            <p>
              VIX:{" "}
              <span className={scoreColor(vixScore)}>
                {scoreLabel(vixScore)}
              </span>
            </p>
            <p>
              Put / Call:{" "}
              <span className={scoreColor(putCallScore)}>
                {scoreLabel(putCallScore)}
              </span>
            </p>
            <p>
              Breadth:{" "}
              <span className={scoreColor(breadthScore)}>
                {scoreLabel(breadthScore)}
              </span>
            </p>
            <p>
              S&amp;P Trend:{" "}
              <span className={scoreColor(trendScore)}>
                {scoreLabel(trendScore)}
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default App;
