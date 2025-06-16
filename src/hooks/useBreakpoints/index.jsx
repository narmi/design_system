import { useMediaQuery } from "usehooks-ts";

// standard Narmi breakpoints
const MQ_MAP = {
  s: "480px",
  m: "768px",
  l: "1280px",
  xl: "1440px",
};

// Mobile first only (viewport width >= breakpoint)
const getMq = (size) => `(min-width: ${size})`;

const useBreakpoints = (
  queries = {
    s: getMq(MQ_MAP.s),
    m: getMq(MQ_MAP.m),
    l: getMq(MQ_MAP.l),
    xl: getMq(MQ_MAP.xl),
  },
) => {
  const s = useMediaQuery(queries.s);
  const m = useMediaQuery(queries.m);
  const l = useMediaQuery(queries.l);
  const xl = useMediaQuery(queries.xl);

  const largestSatisfiedBreakpoint =
    [
      { name: "xl", satisfied: xl },
      { name: "l", satisfied: l },
      { name: "m", satisfied: m },
      { name: "s", satisfied: s },
    ].find((bp) => bp.satisfied)?.name ?? "none";

  return { s, m, l, xl, largestSatisfiedBreakpoint };
};

export default useBreakpoints;
