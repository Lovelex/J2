import { ButtonBase, useTheme } from "@mui/material"
import PropTypes from 'prop-types'

const propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node
}

function BaseButton({ sx, children }) {
  const theme = useTheme();

  return (
    <ButtonBase
      type="submit"
      sx={{
        ...sx,
        height: '48px',
        px: 6,
        borderRadius: '10px',
        backgroundColor: theme.palette.junior.q1.brand.primary.main,
        color: theme.palette.junior.q1.base.quaternary.main,
        '&:hover': {
          backgroundColor: theme.palette.junior.q1.brand.primary.hover
        }
      }}>
      {children}
    </ButtonBase>
  )
}

BaseButton.propTypes = propTypes

export default BaseButton
