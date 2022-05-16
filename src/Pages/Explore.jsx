import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button } from '@chakra-ui/react'

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem">
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
            >
              Treading
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
            >
              Latest
            </Button>
          </Flex>
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

export { Explore }
