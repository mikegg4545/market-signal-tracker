import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  const [vix] = useState(25);
  const [putCall] = useState(0.9);
  const [breadth] = useState(50);
  const [spTrend] = useState("down");

  return (
    <main className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-10">
      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>VIX</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Current: {vix}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Put / Call Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Current: {putCall}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Breadth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Current: {breadth}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>S&P Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Trend: {spTrend}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default App;
