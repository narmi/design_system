import { useMediaQuery } from "usehooks-ts";

// standard Narmi breakpoints
type BreakpointName = "s" | "m" | "l" | "xl";

const MQ_MAP: Record<BreakpointName, string> = {
  s: "480px",
  m: "768px",
  l: "1280px",
  xl: "1440px",
};

// Mobile first only (viewport width >= breakpoint)
const getMq = (size: string): string => `(min-width: ${size})`;

export interface UseBreakpointsResult {
  s: boolean;
  m: boolean;
  l: boolean;
  xl: boolean;
  largestSatisfiedBreakpoint: BreakpointName | "none";
}

export type BreakpointQueries = Partial<Record<BreakpointName, string>>;

const useBreakpoints = (
  queries: BreakpointQueries = {
    s: getMq(MQ_MAP.s),
    m: getMq(MQ_MAP.m),
    l: getMq(MQ_MAP.l),
    xl: getMq(MQ_MAP.xl),
  },
): UseBreakpointsResult => {
  const s = useMediaQuery(queries.s!);
  const m = useMediaQuery(queries.m!);
  const l = useMediaQuery(queries.l!);
  const xl = useMediaQuery(queries.xl!);

  const found = [
    { name: "xl", satisfied: xl },
    { name: "l", satisfied: l },
    { name: "m", satisfied: m },
    { name: "s", satisfied: s },
  ].find((bp) => bp.satisfied)?.name;
  const largestSatisfiedBreakpoint: BreakpointName | "none" =
    found === "xl" || found === "l" || found === "m" || found === "s"
      ? found
      : "none";

  return { s, m, l, xl, largestSatisfiedBreakpoint };
};

export default useBreakpoints;
