import { useState } from "react"
import { Box, Container } from "@mui/material"
import SearchBar from "@/components/junior/q1/SearchBar"
import Card from "@/components/junior/q1/Card"
import Bio from "@/components/junior/q1/Bio"
import Infos from "@/components/junior/q1/Infos"
import SocialMedias from "@/components/junior/q1/SocialMedias"
import { useTheme } from "@emotion/react"
import DarkMode from "@/components/junior/q1/DarkMode"

function Q1() {
  const [data, setData] = useState({})
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.junior.q1.bg.primary.main,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Container>
        <DarkMode />

        <SearchBar setData={setData} data={data} />

        {
          data?.name &&
          <Card sx={{ mt: 6, p: 12 }}>
            <Bio sx={{ mb: 8 }} data={data} />

            <Infos sx={{ mb: 8 }} data={data} />

            <SocialMedias data={data} />
          </Card>
        }
      </Container>
    </Box>
  )
}

export default Q1
