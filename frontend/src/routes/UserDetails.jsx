import {Box, Button, Flex, Select, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {User} from "../Components/User";

const getValidPage = (value) => {
  value = Number(value);
  if (value < 1 || !value) value = 1;
  return value;
};
const getValidLimit = (value) => {
  value = Number(value);
  if (value > 20 || !value) value = 10;
  return value;
};

export const UserDetails = () => {
  const [state, setState] = useState({users: [], total: 0});
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getValidPage(searchParams.get("page"));
  const limit = getValidLimit(searchParams.get("limit"));
  const initialGender = searchParams.get("gender");
  const [page, setPage] = useState(initialPage);
  const [gender, setGender] = useState(initialGender);

  useEffect(() => {
    fetch(
      `http://localhost:8080/users?page=${page}&limit=${limit}&gender=${gender}`
    )
      .then((res) => res.json())
      .then((res) => setState({...res}));
  }, [page, limit, gender]);

  useEffect(() => {
    setSearchParams({page, limit, gender});
  }, [page, limit, gender, setSearchParams]);

  return (
    <Box>
      <Text m="50px" fontWeight="bold" fontSize="2xl">
        User Details Page
      </Text>
      <Flex gap="5" mx="auto" my="50px" w="60%">
        <Select
          w="60%"
          onChange={({target}) => setGender(target.value)}
          variant="filled"
          placeholder="Gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Button w="40%">
          <Link to="/">Go to Home Page</Link>
        </Button>
      </Flex>
      {state.users.length === 0 ? (
        <Text fontSize="2xl">Users Not Found</Text>
      ) : (
        <Box m="auto" w={{md: "60%"}}>
          {state.users.map((ele) => (
            <User key={ele._id} data={ele} />
          ))}
        </Box>
      )}
      <Flex w="60%" m="auto" my="50px" justifyContent="space-around">
        <Button
          isDisabled={page <= 1}
          colorScheme="teal"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button colorScheme="teal">{page}</Button>
        <Button
          isDisabled={page >= state.total / limit}
          colorScheme="teal"
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};
