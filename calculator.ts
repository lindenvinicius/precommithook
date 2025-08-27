export const add = (...xs: number[]) => xs.reduce((a, b) => a + b, 0);
export const sub = (first: number, ...rest: number[]) =>
  rest.reduce((a, b) => a - b, first);

// Optional: evaluate simple "+/-" expressions like "10-3+2-0.5"
export const calc = (expr: string): number => {
  const s = expr.replace(/\s+/g, "");
  if (!/^[+-]?\d+(\.\d+)?([+-]\d+(\.\d+)?)*$/.test(s)) {
    throw new Error("Invalid expression");
  }
  return (s.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number).reduce((a, b) => a + b, 0);
};
