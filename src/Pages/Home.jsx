import { Menu, Post, PostCard, Suggestion } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button, Text, Box, Spinner } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllUser, getPost } from '../redux/thunk'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { posts, status } = useSelector((state) => state.post)
  const { user } = useSelector((state) => state.auth)
  const { users } = useSelector((state) => state.user)

  const [userEditPost, setUserEditPost] = useState(null)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getPost())
      dispatch(getAllUser())
    }
  }, [status, posts])

  const followedUsersPost = users.filter((followedUser) =>
    followedUser.followers.some(
      (followingUser) => followingUser.username === user.username,
    ),
  )
  const userPost = posts.filter(
    (post) =>
      user.username === post.username ||
      followedUsersPost.some(
        (followingUser) => followingUser.username === post.username,
      ),
  )

  return (
    <>
      <Post
        isOpen={isOpen}
        onClose={onClose}
        userEditPost={userEditPost}
        setUserEditPost={setUserEditPost}
      />
      <Flex
        justifyContent="center"
        gap="1rem"
        padding="2rem"
        minW="100%"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Menu onOpen={onOpen} />
        <Flex
          flexDirection="column"
          gap="1rem"
          w={['100%', '100%', '50%']}
          mb="2rem"
        >
          <Heading>Home</Heading>
          <Box
            bgColor="gray.100"
            w="100%"
            borderRadius="1rem"
            p="1rem"
            onClick={onOpen}
            cursor="pointer"
          >
            <Flex alignItems="center">
              <Button
                rightIcon={<AiFillPlusCircle />}
                color="blue.500"
                variant="ghost"
                fontSize="2rem"
                _hover={{
                  bgColor: 'transparent',
                }}
                _focus={{
                  borderColor: 'transparent',
                  bgColor: 'transparent',
                }}
                _active={{
                  bgColor: 'transparent',
                }}
              />
              <Text color="gray.400">Write something interesting...</Text>
            </Flex>
          </Box>
          {userPost?.length > 0 ? (
            userPost
              .slice(0)
              .reverse()
              .map((post) => {
                return (
                  <PostCard
                    key={post._id}
                    post={post}
                    onOpen={onOpen}
                    setUserEditPost={setUserEditPost}
                  />
                )
              })
          ) : (
            <Spinner
              color="blue.400"
              size="xl"
              textAlign="center"
              position="absolute"
              left="50%"
              top="50%"
            />
          )}
        </Flex>
        <Suggestion />
      </Flex>
    </>
  )
}

export { Home }
