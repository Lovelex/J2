import PropTypes from 'prop-types'
import ExternalLink from "@/components/junior/q1/ExternalLink"
import Body from "@/components/junior/q1/Body"
import Icon from "@/components/junior/q1/Icon"
import { Box, Grid2 } from "@mui/material"

const propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object
}


function SocialMedias({ data, sx }) {
  const { location, twitter_username, company, blog } = data;

  const socialMedias = [
    {
      icon: 'location',
      label: location
    },
    {
      icon: 'twitter',
      label: twitter_username,
      href: ''
    },
    {
      icon: 'website',
      label: blog,
      href: blog
    },
    {
      icon: 'company',
      label: company
    },
  ]

  return (
    <Grid2 container sx={{...sx}}>
      {
        socialMedias.map(({ icon, label, href }, index) => (
          <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name={icon} />
              <Body>
                <ExternalLink href={href || null}>
                  {label || 'Not Available'}
                </ExternalLink>
              </Body>
            </Box>
          </Grid2>
        ))
      }
    </Grid2>
  )
}

SocialMedias.propTypes = propTypes

export default SocialMedias
