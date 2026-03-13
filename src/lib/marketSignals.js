export function getVixScore(vix) {
  if (vix < 20) return 1;
  if (vix > 30) return -1;
  return 0;
}

export function getPutCallScore(putCall) {
  if (putCall < 0.8) return 1;
  if (putCall > 1.1) return -1;
  return 0;
}

export function getBreadthScore(breadth) {
  if (breadth > 60) return 1;
  if (breadth < 40) return -1;
  return 0;
}

export function getTrendScore(spTrend) {
  if (spTrend === "up") return 1;
  if (spTrend === "down") return -1;
  return 0;
}

export function computeSignal(score) {
  if (score >= 2) return "RISK ON";
  if (score <= -2) return "DEFENSIVE";
  return "CAUTION";
}

export function signalColor(signal) {
  if (signal === "RISK ON") return "text-green-400";
  if (signal === "DEFENSIVE") return "text-red-400";
  return "text-yellow-400";
}

export function scoreColor(value) {
  if (value > 0) return "text-green-400";
  if (value < 0) return "text-red-400";
  return "text-slate-400";
}

export function scoreLabel(value) {
  if (value > 0) return "+1";
  if (value < 0) return "-1";
  return "0";
}
