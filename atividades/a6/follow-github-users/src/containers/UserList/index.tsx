import React from "react";
import { usePagination } from "relay-hooks";

import { fragmentSpec, connectionConfig } from "./UserList.gql";
import { UserList_query$key } from "./__generated__/UserList_query.graphql";

import UserListItem from "../UserListItem";

import { Button, Flex, Text } from "../../components";

type UserListProps = {
  query: UserList_query$key;
};

const UserList = (props: UserListProps) => {
  const [query, { isLoading, hasMore, loadMore }] = usePagination(
    fragmentSpec,
    props.query
  );

  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }

    loadMore(connectionConfig, 10, (error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <Flex my={20}>
        <Text>Clique no usuário para seguir:</Text>
        <Text>Total de items: {query?.users?.userCount ?? 0}</Text>
      </Flex>

      {query.users?.edges?.map((item) => (
        <UserListItem user={item!.node} />
      ))}

      {hasMore() && (
        <Flex my={10} justifyContent="center">
          <Button onClick={_loadMore}>Carregar mais</Button>
        </Flex>
      )}
    </div>
  );
};

export default UserList;
