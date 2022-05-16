import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading } from '@chakra-ui/react'

const BookMark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem">
          <Heading>Your Bookmarks</Heading>
          <PostCard />
          <PostCard />
          <PostCard />
        </Flex>
        <Flex flexDirection="column">
          <UserCard />
        </Flex>
      </Flex>
    </>
  )
}

export { BookMark }
