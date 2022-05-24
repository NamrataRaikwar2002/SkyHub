import { Menu, Post, PostCard, Suggestion } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUser } from '../redux/thunk'
import { useEffect } from 'react'

const BookMark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { bookmarks } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUser())
  }, [])

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem" w="60rem">
          <Heading>Your Bookmarks</Heading>
          {bookmarks?.length > 0 ? (
            bookmarks.map((post) => {
              return <PostCard key={post._id} post={post} />
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
