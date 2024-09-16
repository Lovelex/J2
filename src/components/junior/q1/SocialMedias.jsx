import PropTypes from 'prop-types'
import ExternalLink from "@/components/junior/q1/ExternalLink"
import Body from "@/components/junior/q1/Body"
import Icon from "@/components/junior/q1/Icon"
import { Box, Grid2 } from "@mui/material"
import { useTheme } from '@emotion/react'

const propTypes = {
  data: PropTypes.object
}


function SocialMedias({ data }) {
  const theme = useTheme()

  const { location, twitter_username, company, blog } = data;

  // { "login": "Lovelex",
  //   "id": 40318039,
  //   "node_id": "MDQ6VXNlcjQwMzE4MDM5",
  //   "avatar_url": "https://avatars.githubusercontent.com/u/40318039?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/Lovelex",
  //   "html_url": "https://github.com/Lovelex",
  //   "followers_url": "https://api.github.com/users/Lovelex/followers",
  //   "following_url": "https://api.github.com/users/Lovelex/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/Lovelex/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/Lovelex/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/Lovelex/subscriptions",
  //   "organizations_url": "https://api.github.com/users/Lovelex/orgs",
  //   "repos_url": "https://api.github.com/users/Lovelex/repos",
  //   "events_url": "https://api.github.com/users/Lovelex/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/Lovelex/received_events",
  //   "type": "User",
  //   "site_admin": false,
  //   "name": "Lucas Humberto",
  //   "company": "Agendor",
  //   "blog": "",
  //   "location": "Belo Horizonte",
  //   "email": null,
  //   "hireable": null,
  //   "bio": "Desenvolvedor Web",
  //   "twitter_username": null,
  //   "public_repos": 42,
  //   "public_gists": 1,
  //   "followers": 10,
  //   "following": 28,
  //   "created_at": "2018-06-16T12:22:51Z",
  //   "updated_at": "2024-09-07T15:23:22Z"
  // }

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
    <Grid2 container>
      {
        socialMedias.map(({ icon, label, href }, index) => (
          <Grid2 size={6} key={index}>
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
