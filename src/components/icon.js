import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Icon = ({ icon }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon-${icon}`}>
    <use href="{% asset '{{ include.icon }}'.svg @path %}#icon-{{ include.icon }}" xlink:href="{% asset '{{ include.icon }}'.svg @path %}#icon-{{ include.icon }}"></use>
  </svg>
)

Icon.propTypes = {
    icon: PropTypes.string
}

Icon.defaultProps = {
  icon: ``,
}

export default Icon
