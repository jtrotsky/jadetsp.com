/** @jsx jsx */
import { jsx } from "theme-ui"

import PropTypes from "prop-types"

const Title = ({ siteTitle }) => (
  <title>
    <h1
        sx={{
            variant: 'text.chooChooBoi'
        }}>
        {siteTitle}
    </h1>
  </title>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}

Title.defaultProps = {
  siteTitle: ``,
}

export default Title
