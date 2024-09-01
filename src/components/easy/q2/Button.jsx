import classnames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

function Button({ className, text, link }) {
  return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={
          classnames(
            className,
            "button text--white d-block no-underline bg--dark-lighter p-3 br-2"
          )
        }
        href={link}
      >
        {text}
      </a>
  )
}

Button.propTypes = propTypes

export default Button;
