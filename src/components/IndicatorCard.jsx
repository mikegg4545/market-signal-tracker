import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function IndicatorCard({
  title,
  value,
  label,
  onChange,
  ruleText,
  type = "number",
  step,
  options = [],
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-slate-300">
          {label}: {value}
        </p>

        {type === "select" ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="number"
            value={value}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2"
          />
        )}

        <p className="text-xs text-slate-500">{ruleText}</p>
      </CardContent>
    </Card>
  );
}

export default IndicatorCard;
