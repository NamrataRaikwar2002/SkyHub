import { useDisclosure } from '@chakra-ui/hooks'
import {
  Post,
  Menu,
  UserCard,
  PostCard,
  ProfileCard,
  ProfileModal,
} from '../Components'
import { Flex } from '@chakra-ui/react'

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure()
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <ProfileModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
      />
      <Flex justifyContent="center" gap="1rem" padding="2rem" minW="100%">
        <Menu onOpen={onOpen} />
        <Flex flexDirection="column" gap="2rem" w="60rem">
          <ProfileCard onOpenProfile={onOpenProfile} />
        </Flex>
        <Flex flexDirection="column">
          <UserCard />
        </Flex>
      </Flex>
    </>
  )
}

export { Profile }
