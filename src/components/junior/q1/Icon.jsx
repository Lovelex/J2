import PropTypes from 'prop-types'

import company from '@/assets/junior/q1/icon-company.svg';
import location from '@/assets/junior/q1/icon-location.svg';
import moon from '@/assets/junior/q1/icon-moon.svg';
import search from '@/assets/junior/q1/icon-search.svg';
import sun from '@/assets/junior/q1/icon-sun.svg';
import twitter from '@/assets/junior/q1/icon-twitter.svg';
import website from '@/assets/junior/q1/icon-website.svg';
import { Box } from '@mui/material';

const propTypes = {
  name: PropTypes.string,
  sx: PropTypes.object
}

const icons = {
  company,
  location,
  moon,
  search,
  sun,
  twitter,
  website
}

function Icon({ name, sx }) {
  return (
    <Box sx={{ ...sx }}>
      <img width="24px" src={icons[name]} />
    </Box>
  )
}

Icon.propTypes = propTypes

export default Icon
