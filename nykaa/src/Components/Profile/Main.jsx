import { Box } from '@chakra-ui/react'
import React from 'react'
import AllRoutesProfile from './AllRoutesProfile'
import ProfileOption from "./ProfileOption"

const Main = () => {
  return (
    <div style={{display:"flex"}}>
      <Box w="250px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
        <ProfileOption />
      </Box>
        <div style={{marginLeft:"20px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px"}}>
        <AllRoutesProfile/>
        </div>
    </div>
  )
}

export default Main