import { useState } from "react"
import PropTypes from 'prop-types'
import { Box } from "@mui/material"
import Icon from "@/components/junior/q1/Icon"
import BaseTextField from "@/components/junior/q1/BaseTextField"
import BaseButton from "@/components/junior/q1/BaseButton"
import Card from "@/components/junior/q1/Card"

import { getUser } from '@/api/junior/q1/github.js'
import { useTheme } from "@emotion/react"

const propTypes = {
  setData: PropTypes.func,
  data: PropTypes.object,
  sx: PropTypes.object
}

function SearchBar({ setData, data, sx }) {
  const [search, setSearch] = useState('')

  const submit = async (e) => {
    e.preventDefault()

    if (!search.trim()) return

    const request = await getUser(search)

    setData(request.ok ? request.data : null)
  }

  const theme = useTheme()

  return (
    <Card sx={{ ...sx, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }} component="form" onSubmit={submit}>
        <label htmlFor="search">
          <Icon sx={{ m: 6, display: 'flex', alignItems: 'center' }} name='search' />
        </label>
        <BaseTextField id="search" sx={{ flexGrow: 1 }} setSearch={setSearch} />
        <Box sx={{ mx: 4, color: theme.palette.junior.q1.error.main }}>
          {!data && 'No results'}
        </Box>
        <BaseButton >
          Search
        </BaseButton>
      </Box>
    </Card>
  )
}

SearchBar.propTypes = propTypes

export default SearchBar
