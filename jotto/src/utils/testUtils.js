import checkPropTypes from "check-prop-types";

/**
 * Returns ShallowWrapper containing node(s) with given data-test attribute value
 * @param {ShallowWrapper} wrapper ShallowWrapper to search within
 * @param {string} value data-test attribute value
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

/**
 * Checks and returns prop types error
 * @param {Component} component Component to check
 * @param {object} propsToCheck Props object to be checked
 */
export const getPropTypesError = (component, propsToCheck) => {
  return checkPropTypes(
    component.propTypes,
    propsToCheck,
    "prop",
    component.name
  );
};
