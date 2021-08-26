import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 Factory function to create a ShallowWrapper for the App component
 * @function setup
  @returns {ShallowWrapper}
 */
const setUp = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("App renders successfully", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  test("renders non-empty component without crashing", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  test("renders increment button", () => {
    const buttonComponent = findByTestAttr(wrapper, "increment-button");
    expect(buttonComponent.length).toBe(1);
  });

  test("renders counter display", () => {
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
  });

  test("counter display starts at 0", () => {});

  test("clicking button increments counter display", () => {});
});
