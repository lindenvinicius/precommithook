export function addition(...xs: number[]) {
    return xs.reduce((a, b) => a + b, 0);
}
export function sub({ first, rest = [] }: { first: number; rest?: number[]; }): number {
    return rest.reduce((a, b) => a - b, first);
}

// Optional: evaluate simple "+/-" expressions like "10-3+2-0.5"
export const calc = (expr: string): number => {
  const s = expr.replace(/\s+/g, "");
  if (!/^[+-]?\d+(\.\d+)?([+-]\d+(\.\d+)?)*$/.test(s)) {
    throw new Error("Invalid expression");
  }
  return (s.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number).reduce((a, b) => a + b, 0);
};
