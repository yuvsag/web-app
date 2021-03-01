import Head from "next/head";
import React, { useState } from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import { MyInfo } from "../components/index/MyInfo";
import { TodoList, InputForm, TodoOBJ } from "../components/index/TodoList";

const Home: React.FC = () => {
  const [bulletPoints, SetBulletPoint] = useState(["no", "no", "no"]);
  return (
    <Container minHeight="100vh">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingLeft="10%">
        <MyInfo bulletPoints={bulletPoints} />
      </Box>
      <TodoList items={["hi", "bye"]} />
      <InputForm />
      <Button
        onClick={() => {
          SetBulletPoint([...bulletPoints, `${TodoOBJ.count}`]);
        }}
      >
        Add
      </Button>
    </Container>
  );
};

export default Home;
