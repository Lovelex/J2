import { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from 'prop-types'

const propTypes = {
  imageName: PropTypes.string,
  path: PropTypes.string,
  sx: PropTypes.object
}

const images = {
  juniorQ2: () => import.meta.glob('/src/assets/junior/q2/images/*.{jpg,png,jpeg,svg}')
}

async function getImgUrl(imageName, path) {
  const imagePath = `/src/assets/junior/q2/images/${imageName}`;

  const imagesLoaded = images[path]()

  if (imagesLoaded[imagePath]) {
    const module = await imagesLoaded[imagePath]()
    return module.default
  }

  console.error(`Imagem não encontrada: ${imageName}`);
  return null;
}

function Image({ imageName, path, sx }) {
  const [src, setSrc] = useState(null)

  getImgUrl(imageName, path)
    .then((url) => setSrc(url))
    .catch(() => setSrc(null));

  return (
    <Box
      sx={{ ...sx }}
      src={src}
      component='img'
    />
  )
}

Image.propTypes = propTypes

export default Image
