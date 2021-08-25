import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../Utils";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

// const setUp = (initialState = {}) => {
//   const store = testStore(initialState);
//   const wrapper = shallow(<App store={store} />)
//     .childAt(0) //to remove provider and focus on APP when you console.log(wrapper.debug)
//     .dive(); //Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result. NOTE: can only be called on wrapper of a single non-DOM component element node
//   return wrapper;
// };

// describe("App Component", () => {
//   let wrapper;
//   beforeEach(() => {
//     const initialState = {
//       posts: [
//         {
//           title: "Example title 1",
//           body: "Some text",
//         },
//         {
//           title: "Example title 2",
//           body: "Some text",
//         },
//         {
//           title: "Example title 3",
//           body: "Some text",
//         },
//       ],
//     };
//     wrapper = setUp(initialState);
//   });

//   it("should render without errors", () => {
//     const component = findByTestAtrr(wrapper, "appComponent");
//     expect(component.length).toBe(1);
//   });

//   it("exampleMethod_updatesState method should update state as expected", () => {
//     const classInstance = wrapper.instance();
//     classInstance.exampleMethod_updatesState();
//     const newState = classInstance.state.hideBtn;
//     expect(newState).toBe(true);
//   });

//   it("exampleMethod_returnsAValue should return value as expected", () => {
//     const classInstance = wrapper.instance();
//     const newValue = classInstance.exampleMethod_returnsAValue(6);
//     expect(newValue).toBe(7);
//   });
// });

describe("App Component", () => {
  it("should render without errors", () => {
    const component = shallow(<App />);
    expect(component.length).toBe(1);
  });

  it("should render a wrapper for button and text", () => {
    const component = shallow(<App />);
    const wrapper = component.find(`[data-test='showWrapper']`);
    expect(wrapper.length).toBe(1);
  });

  it("should not render text if button is not clicked yet", () => {
    const component = shallow(<App />);
    const showWrapper = component.find(`[data-test='showWrapper']`);
    const paragraph = showWrapper.find("p");
    console.log(paragraph);
    expect(paragraph.length).toBe(0);
  });
});
