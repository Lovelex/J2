import { AccountCircle } from "@mui/icons-material"
import { Button, Container, InputAdornment, TextField } from "@mui/material"

const infos = [
  {
    label: 'Repos',
    value: '8'
  },
  {
    label: 'Followers',
    value: '3938'
  },
  {
    label: 'Following',
    value: '9'
  },
]

const socialMedias = [
  {
    icon: '',
    value: 'San Francisco'
  },
  {
    icon: '',
    value: null
  },
  {
    icon: '',
    value: 'https://github.blog'
  },
  {
    icon: '',
    value: '@github'
  },
]

function Q1() {
  return (
    <Container>
      <div>
        <img src="https://placehold.co/128x40/EEE/31343C" />
        <Button>
          Dark
          {/* Ícone de lua */}
        </Button>
      </div>

      <div>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <Button>Search</Button>
      </div>

      <div>
        <img />

        <h1>The Octocat </h1>

        <span>Joined 25 Jan 2011</span>

        <a href="#">@octocat</a>

        <p>This profile has no bio</p>

        <div>
          {
            infos.map(({ label, value }, index) => (
              <div key={index}>
                <span>{label}</span>

                <span>{value}</span>
              </div>
            ))
          }
        </div>

        <div>
          {
            socialMedias.map(({ icon, value }, index) => (
              <a key={index} href={value}>
                <span>
                  {value}
                </span>
              </a>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Q1
