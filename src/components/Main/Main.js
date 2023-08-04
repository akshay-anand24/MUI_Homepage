import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react'

const Main = () => {
  return (
    <>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <Box m={6}>
        <Typography variant='h4' sx={{fontWeight:'bold'}}>
            Why Job Seekers <Typography variant='span' sx={{color:'rgb(226, 149, 6)',fontStyle:'italic'}}>Love </Typography> us
        </Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/> Unique Jobs at StartUps and Tech companies,you can't find anywhere else</Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/> Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/> Everything you need to know to job search - including seeing salary and stock options upfront when looking</Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/> Connect directly with founders at top startups - no third party recruiters allowed</Typography>
        
        <Button variant='contained' m={2} sx={{bgcolor:'rgb(214, 141, 6)',m:2,'&:hover':{bgcolor:'rgb(214, 141, 6)'}}}>Signup</Button>
        <Button variant='none' m={2} sx={{color:'rgb(214, 141, 6)',m:2,'&:hover':{bgcolor:'transparent'}}}>Learn More</Button>

        </Box>
        <Box m={6}>
        <Typography variant='h4' sx={{fontWeight:'bold'}}>
            Why Recruiters <Typography variant='span' sx={{color:'rgb(226, 149, 6)',fontStyle:'italic'}}>Love </Typography> us
        </Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/>8 million responsive and startup-ready candidates, with all the information you need to vet them</Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/> Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</Typography>
        <Typography variant='h6' m={2}><StarBorderIcon/>A free applicant tracking system, or free integration with any ATS you may already use</Typography>
        
        
        </Box>
      </Box>
    </>
  )
}

export default Main
