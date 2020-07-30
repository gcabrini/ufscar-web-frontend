import React from "react";
import { useFragment, useMutation } from "relay-hooks";

import { fragmentSpec, followUser, unfollowUser } from "./UserListItem.gql";
import { UserListItemFollow_Mutation } from "./__generated__/UserListItemFollow_Mutation.graphql";
import { UserListItemUnFollow_Mutation } from "./__generated__/UserListItemUnFollow_Mutation.graphql";

import {
  Avatar,
  Checkbox,
  Flex,
  Separator,
  Text,
  Touchable,
} from "../../components";

const UserListItem = (props) => {
  const user = useFragment(fragmentSpec, props.user);
  const [commitFollowUser] = useMutation<UserListItemFollow_Mutation>(
    followUser
  );
  const [commitUnfollowUser] = useMutation<UserListItemUnFollow_Mutation>(
    unfollowUser
  );

  const handleFollow = (isFollowing) => {
    const mutation = isFollowing ? commitUnfollowUser : commitFollowUser;

    mutation({
      variables: {
        input: {
          userId: user.id,
        },
      },
    });
  };

  return (
    <Touchable
      title={`Clique para seguir ${user.login}`}
      onClick={() => handleFollow(user.viewerIsFollowing)}
    >
      <Flex my={10} px={10}>
        <Avatar alt={`Foto de perfil de ${user.login}`} src={user.avatarUrl} />

        <Text>{user.login}</Text>

        <Checkbox
          checked={user.viewerIsFollowing}
          onClick={() => handleFollow(user.viewerIsFollowing)}
        />
      </Flex>

      <Separator mt={10} />
    </Touchable>
  );
};

export default UserListItem;
