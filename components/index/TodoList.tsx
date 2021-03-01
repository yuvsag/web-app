import React, { useState } from "react";
import {
  Stack,
  HStack,
  VStack,
  Checkbox,
  CheckboxGroup,
  Button,
  Input,
} from "@chakra-ui/react";

interface Props {
  items: Array<string>;
}

export const TodoOBJ = {
  count: 0,
};

export const TodoList: React.FC<Props> = ({ items }) => {
  return (
    <VStack alignItems="start">
      {items.map((item) => {
        return <Checkbox>{item}</Checkbox>;
      })}
    </VStack>
  );
};

export const InputForm: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <HStack>
      <Input placeholder={`${TodoOBJ.count}...`} />

      <Button
        bg="teal"
        onClick={() => {
          setCount(count + 1);
          TodoOBJ.count++;
        }}
      >
        OK
      </Button>
    </HStack>
  );
};
