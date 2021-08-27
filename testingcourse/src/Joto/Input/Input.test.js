import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const mockSetCurrentGuess = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initState) => [initState, mockSetCurrentGuess],
}));

const setup = (success = false, secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} success={success} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });

    test("renders without err", () => {
      const input = findByTestAttr(wrapper, "component-input");
      expect(input.length).toBe(1);
    });

    test("input box does not show", () => {
      const input = findByTestAttr(wrapper, "input-box");
      expect(input.exists()).toBe(false);
    });
    test("submitButton does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });

    test("input renders without err", () => {
      const input = findByTestAttr(wrapper, "component-input");
      expect(input.length).toBe(1);
    });

    test("input box shows", () => {
      const input = findByTestAttr(wrapper, "input-box");
      expect(input.exists()).toBe(true);
    });
    test("submitButton shows", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let wrapper;
  //let originalUseState;
  //const mockSetCurrentGuess = jest.fn();
  beforeEach(() => {
    //mockSetCurrentGuess.mockClear();
    // originalUseState = React.useState;
    // React.useState = jest.fnc(() => ['', mockSetCurrentGuess])
    wrapper = setup();
  });

  // afterEach(() => {
  //     React.useState = originalUseState;
  // })

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
