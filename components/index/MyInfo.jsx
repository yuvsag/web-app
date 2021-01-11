import * as React from 'react'
import { Box, Container  } from "@chakra-ui/react"


export default function MyInfo(){
    return(
    <Box bg="tomato" w="100%" p={4} color="white" paddingRight = "10cm">
        <h1>Yuval Sagman</h1>
        <p>hi! i love cats and stuff</p>
        <ul>
          <li>no</li>
          <li>no</li>
          <li>no</li>
        </ul>
      </Box>
    );
  }