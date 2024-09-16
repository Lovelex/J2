import PropTypes from 'prop-types'
import { Grid2 } from "@mui/material"
import { useTheme } from '@emotion/react'
import Heading3 from './Heading3'
import Heading2 from './Heading2'

const propTypes = {
  data: PropTypes.object
}

function Infos({ data }) {
  const theme = useTheme()

  const { public_repos, followers, following } = data;

  const infos = [
    {
      label: 'Repos',
      value: public_repos
    },
    {
      label: 'Followers',
      value: followers
    },
    {
      label: 'Following',
      value: following
    },
  ]

  return (
    <Grid2 container>
      {
        infos.map(({ label, value }, index) => (
          <Grid2 size={4} key={index}>
            <Heading3>{label}</Heading3>
            <Heading2>{value}</Heading2>
          </Grid2>
        ))
      }
    </Grid2>
  )
}

Infos.propTypes = propTypes

export default Infos
