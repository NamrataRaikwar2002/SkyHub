import { useDisclosure } from '@chakra-ui/hooks'
import {
  Post,
  Menu,
  ProfileCard,
  ProfileModal,
  Suggestion,
  PostCard,
} from '../Components'
import { Flex, Heading } from '@chakra-ui/react'
import { getAllUser, getPost } from '../redux/thunk'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { posts } = useSelector((state) => state.post)
  const { user } = useSelector((state) => state.auth)
  const [userEditPost, setUserEditPost] = useState(null)
  const userPost = posts.filter(
    (eachUser) => eachUser.username === user.username,
  )

  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost())
    dispatch(getAllUser())
  }, [])

  return (
    <>
      <Post
        isOpen={isOpen}
        onClose={onClose}
        userEditPost={userEditPost}
        setUserEditPost={setUserEditPost}
      />
      <ProfileModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
      />
      <Flex
        justifyContent="center"
        gap="1rem"
        padding="2rem"
        minW="100%"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Menu onOpen={onOpen} />
        <Flex
          flexDirection="column"
          gap="2rem"
          w={['100%', '100%', '50%']}
          mb="2rem"
        >
          <ProfileCard onOpenProfile={onOpenProfile} />
          {userPost?.length > 0 ? (
            userPost.map((post) => {
              return (
                <PostCard
                  key={post._id}
                  post={post}
                  onOpen={onOpen}
                  setUserEditPost={setUserEditPost}
                />
              )
            })
          ) : (
            <Heading color="gray.600">No post yet</Heading>
          )}
        </Flex>
        <Suggestion />
      </Flex>
    </>
  )
}

export { Profile }
