import React, {useState} from "react";
import {Box, Button, Flex, Skeleton, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

export const Home = () => {
  const [state, setState] = useState({loading: false, error: false});
  const toast = useToast();

  const fetchData = async () => {
    try {
      setState({...state, loading: true});
      let res = await fetch("http://localhost:8080/users", {
        method: "POST",
      });
      res = await res.json();

      if (res[0].gender) {
        setState({...state, loading: false});
        toast({
          title: "Data Fetched Successfully",
          description: "Users created and saved to database successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      setState({...state, loading: false, error: true});
      console.log(e);
    }
  };

  const deleteData = async () => {
    try {
      setState({...state, loading: true});
      let res = await fetch("http://localhost:8080/users", {
        method: "DELETE",
      });
      res = await res.json();

      if (res.acknowledged) {
        setState({...state, loading: false});
        toast({
          title: "Data Deleted Successfully",
          description: "Users deleted from the database successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      setState({...state, loading: false, error: true});
      console.log(e);
    }
  };

  const handleFetch = () => {
    fetchData();
  };

  const handleDelete = () => {
    deleteData();
  };
  
  return (
    <Flex
      backgroundImage="url(https://images.unsplash.com/photo-1550522667-09c9bdb293a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VlfGVufDB8fDB8fA%3D%3D&w=1000&q=80)"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Box>
        <Text mb="50px" color="white" fontWeight="bold" fontSize="2xl">
          Home Page
        </Text>
        <VStack spacing="40px">
          {state.loading ? (
            <Skeleton w="300px" border="1px" h="50px"></Skeleton>
          ) : (
            <Button
              onClick={handleFetch}
              w="300px"
              h="50px"
              _hover={{bg: "teal", color: "white"}}
            >
              Fetch Users
            </Button>
          )}
          {state.loading ? (
            <Skeleton w="300px" border="1px" h="50px"></Skeleton>
          ) : (
            <Button
              onClick={handleDelete}
              w="300px"
              h="50px"
              _hover={{bg: "teal", color: "white"}}
            >
              Delete Users
            </Button>
          )}
          {state.loading ? (
            <Skeleton w="300px" border="1px" h="50px"></Skeleton>
          ) : (
            <Button w="300px" h="50px" _hover={{bg: "teal", color: "white"}}>
              <Link to="/user-details">User Details</Link>
            </Button>
          )}
        </VStack>
      </Box>
    </Flex>
  );
};
