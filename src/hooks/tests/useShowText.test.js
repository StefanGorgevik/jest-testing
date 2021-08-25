import { useShowText } from "../useShowText";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useShowText hook", () => {
  it("changes value to true on button click", () => {
    const { result } = renderHook(useShowText);

    act(() => {
      result.current.setShow(true);
    });

    expect(result.current.show).toBe(true);
  });
});
