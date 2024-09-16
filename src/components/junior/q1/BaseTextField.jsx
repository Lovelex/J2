import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const propTypes = {
  sx: PropTypes.object,
  setSearch: PropTypes.func,
  id: PropTypes.string
}

function BaseTextField({ sx, setSearch, id }) {
  return (
    <Box sx={sx}>
      <Box
        id={id}
        sx={
          {
            width: '100%',
            height: '40px',
            fontSize: '18px',
            border: 'none',
            backgroundColor: 'inherit',
            '&:focus': {
              outline: 'none',
              backgroundColor: 'inherit',
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
