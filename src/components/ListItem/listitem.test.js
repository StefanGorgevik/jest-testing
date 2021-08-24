import React from "react";
import { findByTestAtrr, checkProps } from "../../../Utils";
import ListItem from "./index";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("Checking propTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "Title test",
        desc: "Desc test",
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Title test",
        desc: "Desc test",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAtrr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Desc test",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("should not render without title", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
