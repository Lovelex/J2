import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

function ExternalLink({ children, href }) {
  return (
    <Box
      sx={{
        textDecorationLine: 'none',
        color: 'inherit'
      }}
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Box>
  )
}

ExternalLink.propTypes = propTypes

export default ExternalLink
