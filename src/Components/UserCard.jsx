import { Flex, Avatar, Heading, Text, Button } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
const UserCard = () => {
  return (
    <>
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
      >
        <Heading borderBottomColor="gray.200" borderBottom="1px">
          Who to follow
        </Heading>
        <Flex
          gap="1rem"
          alignItems="center"
          bgColor="gray.300"
          padding="1rem"
          borderRadius="1rem"
        >
          <Avatar
            name="avatar"
            size="xl"
            src="https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg"
          />
          <Flex flexDirection="column">
            <Heading as="h6" fontSize="1.5rem">
              Namrata Raikwar
            </Heading>
            <Text fontSize="xl" color="gray.500">
              @namrataRaikwar
            </Text>
          </Flex>
          <Button
            leftIcon={<BiPlus color="white" fontSize="2rem" />}
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
            Follow
          </Button>
        </Flex>
        <Flex
          gap="1rem"
          alignItems="center"
          bgColor="gray.300"
          padding="1rem"
          borderRadius="1rem"
        >
          <Avatar
            name="avatar"
            size="xl"
            src="https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg"
          />
          <Flex flexDirection="column">
            <Heading as="h6" fontSize="1.5rem">
              Namrata Raikwar
            </Heading>
            <Text fontSize="xl" color="gray.500">
              @namrataRaikwar
            </Text>
          </Flex>
          <Button
            leftIcon={<BiPlus color="white" fontSize="2rem" />}
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
            Follow
          </Button>
        </Flex>
        <Flex
          gap="1rem"
          alignItems="center"
          bgColor="gray.300"
          padding="1rem"
          borderRadius="1rem"
        >
          <Avatar
            name="avatar"
            size="xl"
            src="https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg"
          />
          <Flex flexDirection="column">
            <Heading as="h6" fontSize="1.5rem">
              Namrata Raikwar
            </Heading>
            <Text fontSize="xl" color="gray.500">
              @namrataRaikwar
            </Text>
          </Flex>
          <Button
            leftIcon={<BiPlus color="white" fontSize="2rem" />}
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
            Follow
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export { UserCard }
