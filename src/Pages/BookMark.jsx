import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUser } from '../redux/thunk'
import { useEffect } from 'react'

const BookMark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { bookmarks } = useSelector((state) => state.auth)
  const { users } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const otherUsers = users?.filter((existUser) => existUser._id !== user._id)

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

        {/* usercard */}

        <Flex
          bgColor="gray.100"
          padding="1.5rem"
          gap="1rem"
          flexDirection="column"
          borderRadius="1rem"
          position="sticky"
          top="2rem"
          minW="fit-content"
          bottom="0"
          h="42rem"
        >
          <Heading borderBottomColor="gray.200" borderBottom="1px">
            Who to follow
          </Heading>
          {otherUsers?.map((userData) => {
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

export { BookMark }
