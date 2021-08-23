import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAtrr, checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test Desc",
        tempArr: [
          {
            name: "Test name",
            email: "test email",
            age: 22,
            onlineStatus: false,
          },
        ],
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      //runs before every single test
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a description", () => {
      const desc = findByTestAtrr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
