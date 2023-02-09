import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const PageNotFound = () => {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Text fontWeight="bold" fontSize="2xl">
        Page Not Found
      </Text>
    </Flex>
  );
}
