import { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from 'prop-types'

const propTypes = {
  imageName: PropTypes.string,
  path: PropTypes.string,
  sx: PropTypes.object
}

const images = {
  juniorQ2: {
    getImagesPath: () => import.meta.glob('/src/assets/junior/q2/images/*.{jpg,png,jpeg,svg}'),
    getImagePath: (imageName) => `/src/assets/junior/q2/images/${imageName}`
  }
}

async function getImgUrl(imageName, path) {
  const { getImagePath, getImagesPath } = images[path]
  const imagesPath = getImagesPath()
  const imagePath = getImagePath(imageName)

  if (imagesPath[imagePath]) {
    const module = await imagesPath[imagePath]()
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
