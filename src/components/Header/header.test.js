import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    //runs before every single test
    component = setUp();
  });

  it("should render without errors", () => {
    // console.log(component.debug());
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1); //because there is one on the page
  });

  it("should render a logo", () => {
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
