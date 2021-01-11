import React from 'react'
import { Stack, HStack, VStack ,Checkbox, CheckboxGroup} from "@chakra-ui/react"

export default function TodoList(){
    return(
        
        <Stack spacing = {10} direction = "column">
            <Checkbox >item A</Checkbox>
            <Checkbox> item B</Checkbox>
            <Checkbox>item C</Checkbox>
        </Stack>
    );
}