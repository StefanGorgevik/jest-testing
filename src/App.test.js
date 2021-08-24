import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./../Utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0) //to remove provider and focus on APP when you console.log(wrapper.debug)
    .dive(); //Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result. NOTE: can only be called on wrapper of a single non-DOM component element node
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
