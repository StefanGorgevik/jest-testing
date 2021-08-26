import React from "react";
import { shallow } from "enzyme";
import Counter from "./index";
import useCustomHook from "../../hooks/useCustomHook";
import { act } from "react-dom/test-utils";

describe("Counter component", () => {
  let wrapper;
  const onCountChange = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Counter onCountChange={onCountChange} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("shows my default text", () => {
    expect(wrapper.find("p").text()).toEqual("Count: 0");
  });

  it("correctly increments the count by 1", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 1");
  });

  it("correctly increments the count by 4", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 4");
  });

  it("onCountChange", () => {
    expect(onCountChange).toBeCalledTimes(1);
    wrapper.find("button").simulate("click");
    expect(onCountChange).toBeCalledTimes(2);
  });
});

describe.only("useCustomHook", () => {
  let results;
  const renderHook = (hook) => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    shallow(<HookWrapper />);
    return results;
  };

  it("works", () => {
    renderHook(useCustomHook);
    expect(results.count).toEqual(0);
    act(() => {
      //wrap this around a function that causes a state update

      results.increment();
    });
    expect(results.count).toEqual(1);
  });
});
