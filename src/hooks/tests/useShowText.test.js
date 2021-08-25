import { useShowText } from "../useShowText";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useShowText hook", () => {
  let res;
  beforeEach(() => {
    const { result } = renderHook(useShowText);
    res = result;
  });

  it("changes value to true on button click", () => {
    act(() => {
      res.current.setShow(true);
    });

    expect(res.current.show).toBe(true);
  });

  it("changes value to false on button click", () => {
    act(() => {
      res.current.setShow(false);
    });

    expect(res.current.show).toBe(false);
  });
});
