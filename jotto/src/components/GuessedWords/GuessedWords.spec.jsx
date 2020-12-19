import React from "react";
import { shallow } from "enzyme";

import GuessedWords from "./GuessedWords";
import { findByTestAttr, getPropTypesError } from "../../utils/testUtils";

const defaultProps = {
  guessedWords: [
    { guessedWord: "Train", matchCount: 3 },
    { guessedWord: "Agile", matchCount: 1 },
    { guessedWord: "Party", matchCount: 5 },
  ],
};

/**
 * Returns shallow wrapper for GuessedWords component
 * @param {object} props Component's props
 * @return ShallowWrapper
 */
const setup = (props = {}) =>
  shallow(<GuessedWords {...defaultProps} {...props} />);

test("does not give warning when passing expected prop types", () => {
  const expectedProps = defaultProps;
  const propTypeError = getPropTypesError(GuessedWords, expectedProps);
  expect(propTypeError).toBeUndefined();
});

describe("test suite if there is no guessed word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const guessedWordsComponent = findByTestAttr(
      wrapper,
      "guessed-words-component"
    );
    expect(guessedWordsComponent.length).toBe(1);
  });

  test("renders guess instruction", () => {
    const guessedWordsInstruction = findByTestAttr(
      wrapper,
      "guess-words-instruction"
    );
    expect(guessedWordsInstruction.length).toBe(1);
  });
});

describe("test suite if there are guessed words present", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const guessedWordsComponent = findByTestAttr(
      wrapper,
      "guessed-words-component"
    );
    expect(guessedWordsComponent.length).toBe(1);
  });

  test("renders guessed words section", () => {
    const guessedWordsSection = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsSection.length).toBe(1);
  });

  test("renders correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(defaultProps.guessedWords.length);
  });
});
