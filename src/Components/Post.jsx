import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { createPost, editPost } from '../redux/thunk'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Post = ({ isOpen, onClose, userEditPost, setUserEditPost }) => {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState('')
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    setPostData(userEditPost?.content)
  }, [userEditPost])
  const postHandler = () => {
    if (userEditPost) {
      const postDetail = {
        _id: userEditPost._id,
      }
      dispatch(editPost({ postDetail, postData, token }))
      setUserEditPost(null)
      setPostData('')
      onClose()
      toast.success('Post edited!')
    } else {
      if (postData) {
        dispatch(createPost({ postData, token }))
        setPostData('')
        onClose()
        toast.success('Post created!')
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" fontSize="2rem">
      <ModalOverlay />
      <ModalContent maxW="40rem">
        <ModalHeader size="xl" fontSize="2rem">
          Add Post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody h="10rem">
          <Textarea
            size="xl"
            fontSize="1.5rem"
            placeholder="Write something interesting..."
            size="lg"
            resize="none"
            value={postData}
            onChange={(e) => setPostData(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            size="lg"
            fontSize="1.5rem"
            onClick={postHandler}
            disabled={postData===' '}
          >
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { Post }
