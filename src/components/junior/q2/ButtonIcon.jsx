import PropTypes from 'prop-types'
import { Box } from "@mui/material";
import Image from "@/components/Image";
import { useTheme } from "@emotion/react";

const propTypes = {
  sx: PropTypes.object,
  imageName: PropTypes.string,
  color: PropTypes.string
}
function ButtonIcon({ sx, imageName, color, ...props }) {
  const theme = useTheme()

  const SIZE = '16px'

  return (
    <Box
      {...props}
      display='flex'
      alignItems='center'
      justifyContent='center'
      borderRadius='100%'
      border={`1px solid ${color || theme.palette.junior.q2.base.primary.main}`}
      color={color || theme.palette.junior.q2.base.primary.main}
      height={SIZE}
      width={SIZE}
      sx={{
        cursor: 'pointer',
        ...sx
      }}
    >
      <Image
        imageName={imageName}
        path='juniorQ2'
      />
    </Box >
  )
}

ButtonIcon.propTypes = propTypes

export default ButtonIcon
