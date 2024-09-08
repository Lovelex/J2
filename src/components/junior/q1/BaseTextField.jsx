import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const propTypes = {
  sx: PropTypes.object,
  setSearch: PropTypes.func
}

function BaseTextField({ sx, setSearch }) {
  return (
    <Box sx={sx}>
      <Box
        sx={
          {
            width: '100%',
            height: '40px',
            fontSize: '18px',
            border: 'none',
            '&:focus': {
              outline: 'none'
            }
          }
        }
        component="input"
        type="text" placeholder="Search GitHub username…"
        onChange={e => setSearch(e.target.value)}
      />
    </Box>
  )
}

BaseTextField.propTypes = propTypes

export default BaseTextField
