
import { Box, TextField, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

const filter: React.FC<{}> = () => {

  const ariaLabel = { 'aria-label': 'description' };
  return (
    <Box sx={{ marginY: 5 }}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor='email' ></InputLabel>
        <Input id='algo' type='algomas'>Holi</Input>
        <OutlinedInput
          id="outlined-adornment-weight"
          label='filter'
          startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
        />
      </FormControl>
    </Box>



  )
}

export default filter