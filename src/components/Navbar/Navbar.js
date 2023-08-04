import React from 'react'
import './logo.png'
import './style.css'
import {Link} from 'react-router-dom'
import {AppBar,Button,Toolbar, Typography} from '@mui/material'
import { Box } from '@mui/system'

const NavBar = () => {
  return (
    <>
    <Box sx={{}}>
    <AppBar sx={{bgcolor:'rgb(255, 245, 226)', color:'black', boxShadow:"0px 0px 0px 0px"}} className='navbar'><Toolbar  disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
<Box sx={{ m:.5,ml:3, color:'transparent',display:'flex',alignItems:"center"}}>
      <img className='img' src={require("./logo.png")} alt='no img'></img>
      <Typography variant='h6' sx={{color:'rgb(214, 141, 6)'}}>Workoholic</Typography>
   </Box>

        <Box flexGrow={.15} sx={{display:'flex',justifyContent:'space-between', m:0.5,mr:2, fontFamily:'roboto'}}>
          <Link className='anchor' to='/'>Home</Link>
          <Link className='anchor' to='/about'>About</Link>
          <Link className='anchor' to='/contact'>Contact</Link>
          <Link className='anchor' to='/explore'><Button  sx={{m:-1.5,color:'rgb(226, 149, 6)','&:hover':{backgroundColor:'transparent'}}}>Explore</Button></Link>

        </Box>
      </Toolbar></AppBar>
      <Toolbar/>
      
      
      </Box>
      </>
      
  )
}

export default NavBar
