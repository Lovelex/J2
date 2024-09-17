import PropTypes from 'prop-types'
import { Grid2 } from "@mui/material"
import Heading3 from './Heading3'
import Heading2 from './Heading2'
import Card from './Card'
import { useTheme } from '@emotion/react'

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}

function Infos({ data, sx }) {
  const theme = useTheme();

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
    <Card
      noShadow
      sx={{
        ...sx,
        backgroundColor: theme.palette.junior.q1.bg.primary.main,
        px: 8,
        py: 4
      }}
    >
      <Grid2 container >
        {
          infos.map(({ label, value }, index) => (
            <Grid2 size={4} key={index}>
              <Heading3>{label}</Heading3>
              <Heading2>{value}</Heading2>
            </Grid2>
          ))
        }
      </Grid2>
    </Card>
  )
}

Infos.propTypes = propTypes

export default Infos
