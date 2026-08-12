import { renderHook } from "@testing-library/react";
import type { CSSProperties } from "react";
import useDropdownLayer from "./index";

vi.mock("./useAnchorPolyfill", () => ({
  default: vi.fn(() => ({
    isAnchorPositionSupported: true,
    polyFillLayerStyles: {},
  })),
}));

describe("useDropdownLayer", () => {
  it.each([
    ["bottom", "start", "--nds-dropdown-above, flip-inline"],
    ["top", "end", "--nds-try-below, flip-inline"],
  ] as const)(
    "preserves custom vertical fallbacks for %s placement with %s alignment",
    (placement, alignment, expectedFallbacks) => {
      const { result } = renderHook(() =>
        useDropdownLayer({
          isOpen: true,
          setIsOpen: vi.fn(),
          placement,
          alignment,
        }),
      );

      const layerStyle = result.current.layerProps.style as CSSProperties;

      expect(layerStyle.positionArea).toBe(`${placement} ${alignment}`);
      expect(layerStyle.positionTryFallbacks).toBe(expectedFallbacks);
    },
  );
});
