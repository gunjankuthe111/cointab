import {Box, Flex, Img, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";

export const User = ({data}) => {
  return (
    <Flex p="20px" border="1px" my="10px" gap={6} alignItems="center">
      <Box>
        <Img borderRadius="50%" w="200px" src={data.picture.large} />
      </Box>
      <SimpleGrid columns={{lg: 2, base: 1}} textAlign="left" w="full">
        <Text fontSize="xl">
          <span className="span">Name</span> :{" "}
          {`${data.name.title} ${data.name.first} ${data.name.last}`}
        </Text>
        <Text fontSize="xl">
          <span className="span">Gender</span> : {data.gender}
        </Text>
        <Text fontSize="xl">
          <span className="span">Email</span> : {data.email}
        </Text>
        <Text fontSize="xl">
          <span className="span">Phone</span> : {data.phone}
        </Text>
        <Text fontSize="xl">
          <span className="span">Age</span> : {data.dob.age}
        </Text>
        <Text fontSize="xl">
          <span className="span">Location</span> :{" "}
          {`${data.location.city}, ${data.location.country}`}
        </Text>
      </SimpleGrid>
    </Flex>
  );
};
