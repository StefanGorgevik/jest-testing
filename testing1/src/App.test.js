import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../Utils/index";

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
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render without errors", () => {
    expect(component.length).toBe(1);
  });

  it("should render a wrapper for button and text", () => {
    const showWrapper = findByTestAtrr(component, "showWrapper");
    expect(showWrapper.length).toBe(1);
  });

  it("should not render text if button is not clicked yet", () => {
    const p = findByTestAtrr(component, "paragraphElement");
    expect(p.length).toBe(0);
  });

  it("should render text if button is clicked ", () => {
    findByTestAtrr(component, "showButton").simulate("click");
    const p = findByTestAtrr(component, "paragraphElement");
    expect(p.length).toBe(1);
  });
});
