import { Box } from "@mui/material";
import PropTypes from 'prop-types'
import Image from "@/components/Image";
import ButtonsWrapper from "@/components/junior/q2/ButtonsWrapper";

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}
function Dessert({ data, sx }) {

  return (
    <>
      <Box sx={{ ...sx, position: 'relative' }}>
        <Image
          sx={{ width: '100%', borderRadius: 2 }}
          imageName={data.image.desktop}
          path='juniorQ2'
        />
        <ButtonsWrapper />
      </Box>

      <Box>
        <span>{data.name}</span>
        <span>{data.category}</span>
        <span>{data.price}</span>
      </Box>
    </>
  )
}

Dessert.propTypes = propTypes

export default Dessert
