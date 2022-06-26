import { Menu, Post, PostCard, Suggestion } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  trendingPostHandler,
  latestPostHandler,
} from '../redux/slice/postSlice'
import { getAllUser, getPost } from '../redux/thunk'

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.post)
  const [userEditPost, setUserEditPost] = useState(null)

  useEffect(() => {
    dispatch(getPost())
    dispatch(getAllUser())
  }, [])

  const trendingHandler = () => {
    dispatch(trendingPostHandler())
  }

  const sortPostChange = () => {
    dispatch(latestPostHandler())
  }

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
          <Heading>Explore</Heading>
          <Flex gap="2rem">
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
              onClick={trendingHandler}
            >
              Trending
            </Button>
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
              onClick={sortPostChange}
            >
              Latest
            </Button>
          </Flex>

          {posts?.length !== 0 ? (
            posts.slice(0).reverse().map((post) => {
              return (
                <PostCard
                  key={post._id}
                  onOpen={onOpen}
                  setUserEditPost={setUserEditPost}
                  post={post}
                />
              )
            })
          ) : (
            <Spinner color='blue.400' size='xl' textAlign='center' position='absolute' left='50%' top='50%'/>
          )}
        </Flex>
        <Suggestion />
      </Flex>
    </>
  )
}

export { Explore }
