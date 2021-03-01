import * as React from "react";
import { Box, Container } from "@chakra-ui/react";

interface Props {
  bulletPoints?: Array<string>;
}

export const MyInfo: React.FC<Props> = ({ bulletPoints }) => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white" paddingLeft="5%">
      <h1>Yuval Sagman</h1>
      <p>hi! i love cats and stuff</p>
      <ul>
        {bulletPoints ? (
          bulletPoints.map((point) => {
            return <li key="point">{point}</li>;
          })
        ) : (
          <></>
        )}
      </ul>
    </Box>
  );
};
