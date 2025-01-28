import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  noShadow: PropTypes.bool
}

function Card({ children, sx, noShadow }) {
  const theme = useTheme()

  const style = {
    boxShadow: '0px 16px 30px -10px #4660BB32',
    borderRadius: '16px',
    backgroundColor: theme.palette.junior.q1.bg.secondary.main,
  }

  if (noShadow) style.boxShadow = 'none'

  return (
    <Box
      sx={{
        ...style,
        ...sx
      }}>
      {children}
    </Box>
  )
}

Card.propTypes = propTypes

export default Card
