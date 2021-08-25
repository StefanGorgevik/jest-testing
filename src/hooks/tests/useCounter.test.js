import { useCounter } from "../useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useCounter hook works correctly", () => {
  it("should increment on UP button click", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should decrement on Down button click", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-2);
  });
});
