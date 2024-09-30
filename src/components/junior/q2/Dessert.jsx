import { Box } from "@mui/material";
import PropTypes from 'prop-types'
import Image from "@/components/Image";
import ButtonsWrapper from "@/components/junior/q2/ButtonsWrapper";
import Heading4 from "@/components/junior/q2/Heading4";
import Heading3 from "@/components/junior/q2/Heading3";

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}
function Dessert({ data, sx }) {

  return (
    <>
      <Box sx={{ position: 'relative', maxWidth: '250px', maxHeight: '240px' }}>
        <Image
          sx={{ width: '100%', borderRadius: 2, maxWidth: '250px', maxHeight: '240px' }}
          imageName={data.image.desktop}
          path='juniorQ2'
        />

        <Box sx={{ ...sx, display: 'flex', justifyContent: 'center' }}>
          <ButtonsWrapper
            dessert={data}
            sx={{ position: 'absolute', bottom: '-20px' }}
          />
        </Box>
      </Box>

      <Box>
        <Heading4>{data.name}</Heading4>
        <Heading3>{data.category}</Heading3>
        <Heading3>{data.price}</Heading3>
      </Box>
    </>
  )
}

Dessert.propTypes = propTypes

export default Dessert
