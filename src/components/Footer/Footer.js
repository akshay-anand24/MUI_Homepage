import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box sx={{width:'100%',bgcolor:'rgb(10, 45, 65)',color:'white',padding:'10px'}}>
        <Typography variant='body2' sx={{textAlign:'center', width:'100vw'}} mb={1}>Connect With Us On:</Typography>
        <Typography variant='body2' sx={{textAlign:'center', width:'100vw'}}>FaceBook <i class="fa-brands fa-facebook"></i></Typography>
        <Typography variant='body2' sx={{textAlign:'center', width:'100vw'}}>Instagram <i class="fa-brands fa-instagram"></i></Typography>
        <Typography variant='body2' sx={{textAlign:'center', width:'100vw'}}>LinkedIn <i class="fa-brands fa-linkedin"></i></Typography>

        <Typography variant='h6' sx={{textAlign:'center', width:'100vw',mt:1}}>Copyright <i class="fa-regular fa-copyright"></i>|All Rights Reserved</Typography>


    </Box>
  )
}

export default Footer
