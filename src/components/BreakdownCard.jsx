import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function BreakdownCard({
  vixScore,
  putCallScore,
  breadthScore,
  trendScore,
  scoreColor,
  scoreLabel,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Score Breakdown</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-slate-300">
        <p>
          VIX:{" "}
          <span className={scoreColor(vixScore)}>{scoreLabel(vixScore)}</span>
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
  );
}

export default BreakdownCard;
