import PropTypes from 'prop-types'
import ExternalLink from "@/components/junior/q1/ExternalLink"
import Body from "@/components/junior/q1/Body"
import Heading1 from "@/components/junior/q1/Heading1"
import { Avatar, Grid2 } from "@mui/material"
import { useTheme } from '@emotion/react'

const propTypes = {
  data: PropTypes.object
}

function Bio({ data }) {
  const theme = useTheme()

  const { name, bio, login, html_url, avatar_url, created_at } = data;

  return (
    <Grid2 container>
      <Grid2 size={4}>
        <Avatar sx={{ width: 118, height: 118 }} src={avatar_url} />
      </Grid2>

      <Grid2 size={8}>
        <Heading1>{name}</Heading1>

        <Body>{created_at}</Body>

        <Body color={theme.palette.junior.q1.brand.primary.main}>
          <ExternalLink href={html_url}>@{login}</ExternalLink>
        </Body>

      </Grid2>
      <Body>{bio}</Body>
    </Grid2>
  )
}

Bio.propTypes = propTypes

export default Bio
