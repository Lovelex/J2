import PropTypes from 'prop-types'
import { Box } from "@mui/material";
import Image from "@/components/Image";
import { useTheme } from "@emotion/react";

const propTypes = {
  sx: PropTypes.object,
  imageName: PropTypes.string,
  color: PropTypes.string
}
function ButtonIcon({ sx, imageName, color }) {
  const theme = useTheme()

  return (
    <Box sx={{
      ...sx,
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      border: `1px solid ${color || theme.palette.junior.q2.base.primary.main}`,
      color: color || theme.palette.junior.q2.base.primary.main,
    }}>
      <Image
        imageName={imageName}
        path='juniorQ2'
      />
    </Box >
  )
}

ButtonIcon.propTypes = propTypes

export default ButtonIcon
