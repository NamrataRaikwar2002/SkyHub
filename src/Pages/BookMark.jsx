import { Menu, Post, PostCard, Suggestion } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUser } from '../redux/thunk'
import { useEffect, useState } from 'react'

const BookMark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { bookmarks } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()
  const [userEditPost, setUserEditPost] = useState(null)
  useEffect(() => {
    dispatch(getAllUser())
  }, [])
  const bookmarkPosts = posts.filter((post) =>
    bookmarks.find((item) => post._id === item._id),
  )

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
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
          <Heading>Your Bookmarks</Heading>
          {bookmarkPosts?.length > 0 ? (
            bookmarkPosts.map((post) => {
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
            <Heading color="gray.600">Nothing in bookmark</Heading>
          )}
        </Flex>
        <Suggestion />
      </Flex>
    </>
  )
}

export { BookMark }
