import {Box, Flex, Heading} from '@chakra-ui/react'
import { UserCard } from '../Components';
import { useSelector } from 'react-redux'


const Suggestion = () => {
    const { users } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.auth)
  const otherUsers = users?.filter((existUser) => existUser._id !== user?._id)

  return (
    <Box>
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
        {otherUsers.map((userData) => {
          return (
            <Flex flexDirection="column" key={userData._id}>
              <UserCard key={userData._id} userData={userData} />
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export { Suggestion }
