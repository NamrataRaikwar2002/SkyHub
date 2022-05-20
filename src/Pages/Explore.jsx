import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button, Select, option } from '@chakra-ui/react'
import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trendingPostHandler, latestPostHandler } from '../redux/slice/postSlice'

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { posts, } = useSelector((state) => state.post)
  const [userEditPost, setUserEditPost] = useState(null)

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
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem" w="60rem">
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
            posts.map((post) => {
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
            <Heading color="gray.600">Nothing to Explore</Heading>
          )}
        </Flex>
        <Flex flexDirection="column">
          <UserCard />
        </Flex>
      </Flex>
    </>
  )
}

export { Explore }
