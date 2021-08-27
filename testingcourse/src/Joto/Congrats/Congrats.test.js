import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";
import Congrats from "./Congrats";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const congrats = findByTestAttr(wrapper, "component-congrats");
  expect(congrats.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const text = findByTestAttr(wrapper, "component-congrats");
  expect(text.text()).toBe("");
});
test('renders non-empty congrats message when "success" is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
