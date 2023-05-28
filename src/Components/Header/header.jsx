import React from 'react'
import "./header.css"
import { CssBaseline, MenuItem, TextField, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/system';
import categories from '../../Data/category';

const Header = ({setCategory, category, word, setword,lightMode}) => {
    const darkTheme = createTheme({
        palette: {
          primary:{main:lightMode?"#000":"#fff"},
          mode:lightMode?"light": 'dark',
        },
      });

      const handleChange = (language) => {
        setCategory(language);
        setword("")
      }
      
  return (
    <div>
      <div className='header'>
          <span className='title'>
              {word?word:"Word-Hunt"}
          </span>
      </div>
      <div className='input'>
          <TextField label="search here" variant="standard" className="search"
           sx={{
            backgroundColor: lightMode?"#fff":"#282c34",
          }}
          InputLabelProps={{
            sx: {
              color:lightMode? 'black':'white',
              textTransform: 'capitalize',
            },
          }}
          inputProps={{
            sx: {
              color: lightMode? 'black':'white',
              paddingLeft: '15px',
              fontSize: '15px',
            },
          }}
          value={word}
          onChange={(e)=>setword(e.target.value)}
           />
          <TextField classNAme="select"
          sx={{
            backgroundColor:lightMode?"#fff":"#282c34",
          }}
          InputLabelProps={{
            sx: {
              color: lightMode? 'black':'white',
              textTransform: 'capitalize',
            },
          }}
          inputProps={{
            sx: {
              color:lightMode? 'black':'white',
              paddingLeft: '15px',
              fontSize: '15px',
            },
          }}
            select
            value={category}
            onChange={(e)=>handleChange(e.target.value)}
            >
            {categories.map((option)=>(
            <MenuItem key={option.label} value={option.label} >{option.value}</MenuItem>
            ))}
          </TextField>
        </div>
    </div>

  )
}
export default Header