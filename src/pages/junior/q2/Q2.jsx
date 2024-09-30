import { Box, Container, Grid2 } from "@mui/material"
import { Q2Provider } from "@/contexts/junior/q2/Q2Context"
import Desserts from "@/components/junior/q2/Desserts"
import Cart from "@/components/junior/q2/Cart"
import { useTheme } from "@emotion/react"

function Q2() {
  const theme = useTheme()

  return (
    <Q2Provider>
      <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.junior.q2.bg.primary.main }}>
        <Container>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Desserts />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Cart />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Q2Provider>
  )
}

export default Q2
