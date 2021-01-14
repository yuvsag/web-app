import Head from 'next/head'
import React from 'react'
import { Box, Container  } from "@chakra-ui/react"
import MyInfo from "../components/index/MyInfo"
import {TodoList} from "../components/index/TodoList"


const Home: React.FC = () => {
  return (
    <Container  minHeight = "100vh">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box  paddingLeft = "10%">
      <MyInfo /> 
      </Box>   
      <TodoList item = "hi"/>
    </Container>
  )
}

export default Home;