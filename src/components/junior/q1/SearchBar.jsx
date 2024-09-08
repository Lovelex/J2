import { useState } from "react"
import { Box } from "@mui/material"
import Icon from "@/components/junior/q1/Icon"
import BaseTextField from "./BaseTextField"
import BaseButton from "@/components/junior/q1/BaseButton"

import { getUser } from '@/api/junior/q1/github.js'

function SearchBar() {
  const [search, setSearch] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if(!search.trim()) return

    const data = await getUser(search)
    console.log(data)
  }

  return (
    <Box
      onSubmit={submit}
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        boxShadow: '0px 16px 30px -10px #4660BB32',
        borderRadius: '16px',
      }}>
      <Icon sx={{ m: 6, display: 'flex', alignItems: 'center' }} name='search' />
      <BaseTextField sx={{flexGrow : 1 }} setSearch={setSearch} />
      <Box sx={{ mx: 4 }}>
        No results
      </Box>
      <BaseButton >
        Search
      </BaseButton>
    </Box>
  )
}

export default SearchBar
