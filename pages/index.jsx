import Head from 'next/head'
import React from 'react'
import { Box, Container  } from "@chakra-ui/react"
import MyInfo from "../components/index/MyInfo.jsx"
import TodoList from "../components/index/TodoList.jsx"



export default function Home() {
  return (
    <Container  minHeight = "100vh">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyInfo />    
      <TodoList />
    </Container>
  )
}
