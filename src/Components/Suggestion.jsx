import { Box, Flex, Heading } from '@chakra-ui/react'
import { UserCard } from '../Components'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

const Suggestion = () => {
  const { users } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.auth)
  const otherUsers = users?.filter((existUser) => existUser._id !== user?._id)
  const { pathname } = useLocation()

  return (
    <Box
      w={['100%%']}
      display={
        `${pathname === '/profile-page'}` === 'true'
          ? { base: 'none', md: 'block' }
          : null
      }
    >
      <Flex
        bgColor="gray.100"
        padding="1.5rem"
        gap="1rem"
        borderRadius="1rem"
        position="sticky"
        top="2rem"
        bottom="0"
        direction={{ base: 'row', md: 'column' }}
        overflowX={{ base: 'scroll', md: 'auto' }}
      >
        <Heading borderBottomColor="gray.200" borderBottom="1px">
          Who to follow
        </Heading>
        {otherUsers.map((userData) => {
          return (
            <Flex key={userData._id}>
              <UserCard key={userData._id} userData={userData} />
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export { Suggestion }
