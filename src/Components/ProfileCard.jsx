import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  Link,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/slice/authSlice'

const ProfileCard = ({ onOpenProfile }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  const { firstName, lastName, username } = user

  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
    toast.success('Loggedout Successfully.')
  }

  return (
    <Box>
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        bgColor="gray.200"
        borderRadius="1rem"
        padding="2rem"
      >
        <Flex justifyContent="flex-end" w="100%">
          <Tooltip label="Logout" fontSize="2xl">
            <IconButton
              icon={<FiLogOut />}
              size="2xl"
              bg="transparent"
              onClick={logoutHandler}
            />
          </Tooltip>
        </Flex>
        <Avatar
          name="avatar"
          boxSize="15rem"
          src="https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg"
        ></Avatar>
        <Flex flexDirection="column" alignItems="center" gap="0.2rem">
          <Heading>{token ? `${firstName} ${lastName}` : null}</Heading>
          <Text fontSize="xl" color="gray.500" fontWeight="bold">
            {token ? `@${username}` : null}
          </Text>
          <Button
            onClick={onOpenProfile}
            fontSize="2xl"
            size="lg"
            _hover={{
              bgColor: 'none',
            }}
            _active={{
              bgColor: 'blue.600',
              color: 'white',
              border: 'transparent',
            }}
            variant="outline"
            colorScheme="blue"
          >
            Edit Profile
          </Button>
          <Text>Learning web development</Text>
          <Link
            href="https://adarshbalika.netlify.app/"
            isExternal
            color="blue.500"
          >
            https://adarshbalika.netlify.app/
          </Link>
          <Flex gap="4rem">
            <Flex flexDirection="column" alignItems="center">
              <Heading as="h3" size="lg">
                0
              </Heading>
              <Text fontSize="xl" fontWeight="bold">
                Following
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Heading as="h3" size="lg">
                2
              </Heading>
              <Text fontSize="xl" fontWeight="bold">
                Posts
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Heading as="h3" size="lg">
                2
              </Heading>
              <Text fontSize="xl" fontWeight="bold">
                Followers
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
export { ProfileCard }
