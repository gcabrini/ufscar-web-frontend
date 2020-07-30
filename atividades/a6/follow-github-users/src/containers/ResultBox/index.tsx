import React from "react";
import { useQuery } from "relay-hooks";

import UsersList from "../UserList";
import { searchQuery } from "./ResultBox.gql";
import { ResultBox_Query } from "./__generated__/ResultBox_Query.graphql";

import { Flex, Text } from "../../components";

const ResultBox = ({ query }) => {
  const variables = {
    query: `${query} type:user`,
    count: 10,
  };

  const { props, error } = useQuery<ResultBox_Query>(searchQuery, variables);

  if (props && props) {
    return <UsersList query={props} />;
  }

  return (
    <Flex my={10} justifyContent="center">
      <Text>{(!!error && error.message) || "Carregando..."}</Text>
    </Flex>
  );
};

export default ResultBox;
