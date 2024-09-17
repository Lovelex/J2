import PropTypes from 'prop-types'
import Heading1 from "@/components/junior/q1/Heading1"
import { Box, Button, Container } from "@mui/material"
import Icon from '@/components/junior/q1/Icon'
import { useThemeContext } from '@/contexts/ThemeContext'

const propTypes = {
  sx: PropTypes.object
}

function Bio({ sx }) {
  const { mode, toggleTheme } = useThemeContext()
  const isLightMode = mode === 'light'
  return (
    <Container sx={{ ...sx }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 9 }}>
        <Heading1>devfinder</Heading1>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={toggleTheme}
            endIcon={
              <Icon sx={{ display: 'flex', alignItems: 'center' }} name={isLightMode ? "moon" : 'sun'} />
            }>
            {isLightMode ? 'Dark': 'Light'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

Bio.propTypes = propTypes

export default Bio
