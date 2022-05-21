import { useDisclosure } from '@chakra-ui/hooks'
import { Post, Menu, UserCard, ProfileCard, ProfileModal } from '../Components'
import { Flex, Heading } from '@chakra-ui/react'
import { getAllUser } from '../redux/thunk'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { users } = useSelector((state) => state.user)
  const { user, token } = useSelector((state) => state.auth)
  const [editProfile, setEditProfile] = useState(null)
  const otherUsers = users?.filter((existUser) => existUser._id !== user._id)
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUser())
  }, [])

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

export { Profile }
