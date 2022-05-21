import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button, Text, Box } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllUser, getPost } from '../redux/thunk'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { posts, status } = useSelector((state) => state.post)
  const [userEditPost, setUserEditPost] = useState(null)
  const { users } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getPost())
      dispatch(getAllUser())
    }
  }, [dispatch, status, posts])

  const otherUsers = users?.filter((existUser) => existUser._id !== user?._id)

  return (
    <>
      <Post
        isOpen={isOpen}
        onClose={onClose}
        userEditPost={userEditPost}
        setUserEditPost={setUserEditPost}
      />
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem" w="60rem">
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
          {posts?.length > 0 ? (
            posts.map((post) => {
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
            <Heading color="gray.600">Nothing to Home</Heading>
          )}
          {/* usercard */}
        </Flex>
        <Flex
          bgColor="gray.100"
          padding="1.5rem"
          gap="1rem"
          flexDirection="column"
          borderRadius="1rem"
          position="sticky"
          top="2rem"
          // w='35rem'
          minW="fit-content"
          bottom="0"
          h="42rem"
        >
          <Heading borderBottomColor="gray.200" borderBottom="1px">
            Who to follow
          </Heading>
          {otherUsers.map((userData) => {
            return (
              <Flex flexDirection="column" key={userData._id}>
                <UserCard key={userData._id} userData={userData} />
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}

export { Home }
