import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const setup = () => {
  return shallow(<Input />);
};

test("renders without err", () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, "component-input");
  expect(input.length).toBe(1);
});