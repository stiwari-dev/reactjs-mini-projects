import { shallow } from "enzyme";
import React from "react";

import Congrats from "./Congrats";
import { findByTestAttr, getPropTypesError } from "../../utils/testUtils";

const defaultProps = { success: false };

/**
 * Creates ShallowWrapper for Congrats component
 * @param {object} props Component's prop
 * @param {any} state Component's state
 */
const setup = (props = {}, state = null) =>
  shallow(<Congrats {...defaultProps} {...props} />);

describe("Test suite for Congrats component", () => {
  test("renders Congrats component", () => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.length).toBe(1);
  });

  test("renders congrats message when success prop is true", () => {
    const wrapper = setup({ success: true });
    const congratsMessage = findByTestAttr(wrapper, "congrats-message");
    expect(congratsMessage.length).toBe(1);
  });

  test("renders empty message when success prop is false", () => {
    const wrapper = setup({ success: false });
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.text()).toBe("");
  });

  test("does not give warning when passing expected prop types", () => {
    const expectedProps = { success: false };
    const propTypesError = getPropTypesError(Congrats, expectedProps);
    expect(propTypesError).toBeUndefined();
  });
});
