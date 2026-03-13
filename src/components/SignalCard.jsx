import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SignalCard({ signal, score, signalColor }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Signal</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className={`text-2xl font-bold ${signalColor(signal)}`}>{signal}</p>
        <p className="text-slate-400">Score: {score}</p>
      </CardContent>
    </Card>
  );
}

export default SignalCard;
