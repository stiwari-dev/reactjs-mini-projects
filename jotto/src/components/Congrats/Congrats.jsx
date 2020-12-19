import PropTypes from "prop-types";
import React from "react";

const Congrats = ({ success }) => (
  <div data-test="congrats-component">
    {success ? (
      <div data-test="congrats-message">
        Congratulations, you have guessed the word!
      </div>
    ) : null}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
