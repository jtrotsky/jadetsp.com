/** @jsx jsx */
import { jsx } from "theme-ui"

import PropTypes from "prop-types"

const Header = () => (
  <header>
    <p>
      Jade Tan
      Right now: My partner and I are relocating to London, and I’m looking for a new team to create magic with. Get in touch!
    </p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
