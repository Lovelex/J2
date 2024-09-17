import { useMemo } from 'react'
import PropTypes from 'prop-types'
import ExternalLink from "@/components/junior/q1/ExternalLink"
import Body from "@/components/junior/q1/Body"
import Heading1 from "@/components/junior/q1/Heading1"
import { Avatar, Box, Grid2 } from "@mui/material"
import { useTheme } from '@emotion/react'

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}

const MONTHS = [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'
]

function Bio({ data, sx }) {
  const theme = useTheme()

  const { name, bio, login, html_url, avatar_url, created_at } = data;

  const createdAtText = useMemo(() => {
    const date = new Date(created_at)
    const createdAtMonth = date.getMonth()
    const createdAtYear = date.getFullYear()
    return `Joined ${date.getDate()} ${MONTHS[createdAtMonth]} ${createdAtYear}`
  }, [created_at])

  return (
    <Box sx={{...sx}}>
      <Grid2 container>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <Avatar sx={{ width: 118, height: 118 }} src={avatar_url} />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 4 }}>
          <Heading1>{name}</Heading1>

          <Body color={theme.palette.junior.q1.brand.primary.main}>
            <ExternalLink href={html_url}>@{login}</ExternalLink>
          </Body>

          <Body sx={{ display: { xs: 'none', md: 'block' } }}>
            {bio}
          </Body>

          <Body sx={{ display: { xs: 'block', md: 'none' } }}>
            {createdAtText}
          </Body>
        </Grid2>

        <Grid2 sx={{ display: { xs: 'none', md: 'block' } }} size={4}>
          {createdAtText}
        </Grid2>
      </Grid2>
      <Body sx={{ display: { xs: 'block', md: 'none' } }}>
        {bio}
      </Body>
    </Box>
  )
}

Bio.propTypes = propTypes

export default Bio
