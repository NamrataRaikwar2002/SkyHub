import { Menu, Post, PostCard, UserCard } from '../Components'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, Button, Text } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="1rem">
          <Heading>Home</Heading>
          <Text
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
          </Text>

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

export { Home }
