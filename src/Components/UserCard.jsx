import { Flex, Avatar, Heading, Text, Button, Box } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../redux/thunk'

const UserCard = ({ userData }) => {
  const dispatch = useDispatch()
  const { token, user } = useSelector((state) => state.auth)

  const { _id, firstName, lastName, username, profile } = userData

  const followUserHandler = () => {
    dispatch(followUser({ _id, token }))
  }

  const unfollowUserHandler = () => {
    dispatch(unfollowUser({ _id, token }))
  }
  const isFollowing = userData.followers.some(
    (eachUser) => eachUser._id === user._id,
  )

  return (
    <>
      <Flex>
        <Flex
          gap="1rem"
          alignItems="center"
          bgColor="gray.300"
          padding="1rem"
          borderRadius="1rem"
          key={_id}
          w="30rem"
          justifyContent="space-between"
        >
        <Flex gap='1rem' alignItems='center'>
          <Avatar name="avatar" size="xl" src={profile} />

          <Flex flexDirection="column">
            <Heading as="h6" fontSize="1.5rem">
              {`${firstName} ${lastName}`}
            </Heading>
            <Text fontSize="xl" color="gray.500">
              {`@${username}`}
            </Text>
          </Flex>
        </Flex>
          {isFollowing ? (
            <Button
              fontSize="2xl"
              bgColor="blue.500"
              color="white"
              size="lg"
              _hover={{
                bgColor: 'blue.400',
              }}
              _focus={{ bgColor: 'none' }}
              _active={{
                bgColor: 'blue.600',
              }}
              onClick={unfollowUserHandler}
            >
              Following
            </Button>
          ) : (
            <Button
              leftIcon={<BiPlus color="white" fontSize="2rem" />}
              fontSize="2xl"
              bgColor="blue.500"
              color="white"
              size="lg"
              _hover={{
                bgColor: 'blue.400',
              }}
              _focus={{ bgColor: 'none' }}
              _active={{
                bgColor: 'blue.600',
              }}
              onClick={followUserHandler}
            >
              Follow
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export { UserCard }
