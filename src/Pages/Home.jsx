import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button, Text, Box } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { getPost } from '../redux/thunk'


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { posts, status } = useSelector((state) => state.post)
  const [userEditPost, setUserEditPost] = useState(null)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getPost())
    }
  }, [dispatch, status, posts])

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} userEditPost={userEditPost}
        setUserEditPost={setUserEditPost}/>
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem" w='60rem'>
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
              return <PostCard key={post._id} post={post}  onOpen={onOpen}
                  setUserEditPost={setUserEditPost}/>
            })
          ) : (
            <Heading color="gray.600">Nothing to Home</Heading>
          )}
        </Flex>
        <Flex flexDirection="column">
          <UserCard />
        </Flex>
      </Flex>
    </>
  )
}

export { Home }
