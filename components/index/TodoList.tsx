import React from 'react'
import { Stack, HStack, VStack ,Checkbox, CheckboxGroup} from "@chakra-ui/react"

interface Props{
    item: string;
}

export const TodoList: React.FC<Props> = ({item}) => {
    return(
        
        <Stack spacing = {10} direction = "column">
            <Checkbox >{item}</Checkbox>
            <Checkbox> item B</Checkbox>
            <Checkbox>item C</Checkbox>
        </Stack>
    );
}