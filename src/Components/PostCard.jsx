import {
  Flex,
  Avatar,
  Heading,
  Text,
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { BsThreeDotsVertical, BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaEdit, FaTrash, FaHeart } from 'react-icons/fa';
import { BiHeart } from 'react-icons/bi';
import {
  deletePost,
  likePost,
  dislikePost,
  addBookmark,
  removeBookmark,
  commentPost,
  deleteComment,
} from '../redux/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const PostCard = ({ post, onOpen, setUserEditPost }) => {
  const {
    _id,
    comments,
    firstName,
    lastName,
    username,
    profile,
    likes,
    content,
    createdAt,
  } = post
  const { token, bookmarks } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [commentData, setCommentData] = useState('')

  const isbookmark = bookmarks.some(
    (bookmarkedPost) => bookmarkedPost._id === _id,
  )
  const isLike = post?.likes.likedBy?.find((likedUser) => likedUser)

  const commentInputHandler = (e) => {
    setCommentData(e.target.value)
  }

  const deletePostHandler = () => {
    dispatch(deletePost({ _id, token }))
  }

  const editPostHandler = () => {
    setUserEditPost(post)
    onOpen()
  }

  const likePostHandler = () => {
    dispatch(likePost({ _id, token }))
  }

  const dislikePostHandler = () => {
    dispatch(dislikePost({ _id, token }))
  }

  const addBookmarkHandler = () => {
    if (isbookmark) {
      dispatch(removeBookmark({ _id, token }))
    } else {
      dispatch(addBookmark({ _id, token }))
    }
  }

  const commentPostHandler = () => {
    if(commentData !== ''){
      dispatch(commentPost({ _id, commentData, token }))
      setCommentData('')
    }
  }
  const deleteCommentHandler = (commentId) => {
    dispatch(deleteComment({ postId: _id, commentId, token }))
  }

  return (
    <>
      <Flex
        w="60rem"
        padding="2rem"
        bgColor="gray.100"
        borderRadius="1rem"
        flexDirection="column"
        gap="1rem"
        key={_id}
      >
        <Flex justifyContent="space-between">
          <Flex gap="1rem" w="50rem">
            <Avatar name="avatar" size="xl" src={profile} />
            <Heading>
              {`${firstName} ${lastName}`}
              <Text fontSize="xl" color="gray.500">
                {`@${username}`}
              </Text>
              <Text fontSize="md">{`${createdAt}`}</Text>
            </Heading>
          </Flex>
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDotsVertical />}
                fontSize="1.8rem"
                bg="transparent"
                color="black"
              ></IconButton>
            </PopoverTrigger>
            <PopoverContent w="5xs" paddingRight="1rem">
              <PopoverCloseButton />
              <PopoverArrow />
              <PopoverBody>
                <Flex
                  flexDirection="column"
                  justifyContent="flexStart"
                  gap="0.2rem"
                  padding="1rem"
                >
                  <Button
                    leftIcon={<FaEdit />}
                    fontSize="1.5rem"
                    bg="transparent"
                    onClick={editPostHandler}
                  >
                    Edit
                  </Button>
                  <Button
                    leftIcon={<FaTrash />}
                    fontSize="1.5rem"
                    bg="transparent"
                    onClick={deletePostHandler}
                  >
                    Delete
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Box gap="2rem">
          <Text>{content}</Text>
          <Flex gap="3rem">
            <Flex>
              <IconButton
                icon={
                  !isLike ? (
                    <BiHeart onClick={likePostHandler} />
                  ) : (
                    <FaHeart color="#E53E3E" onClick={dislikePostHandler} />
                  )
                }
                fontSize="1.8rem"
                bg="transparent"
                borderRadius="50%"
                _hover={{
                  bgColor: 'gray.200',
                }}
                _focus={{
                  borderColor: 'transparent',
                }}
              />
              <Text>{likes.likeCount}</Text>
            </Flex>
            <IconButton
              icon={isbookmark ? <BsBookmarkFill /> : <BsBookmark />}
              fontSize="1.8rem"
              bg="transparent"
              borderRadius="50%"
              _hover={{
                bgColor: 'gray.200',
              }}
              _focus={{
                borderColor: 'transparent',
              }}
              onClick={addBookmarkHandler}
            />
          </Flex>
        </Box>

        {/* comment input */}

        <Flex gap="1rem">
          <Avatar name="avatar" size="md" src={profile} />
          <InputGroup>
            <Input
              borderColor="gray.400"
              placeholder="Write a comment"
              fontSize="1.5rem"
              size="lg"
              value={commentData}
              onChange={(e) => commentInputHandler(e)}
            />
            <InputRightElement mr="2rem">
              <Button
                variant="ghost"
                fontSize="1.5rem"
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
                onClick={commentPostHandler}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>

        {/* comments */}

        {comments?.length > 0
          ? comments.map(
              ({ _id, commentData, firstName, lastName, profile }) => {
                return (
                  <Flex
                    gap="1rem"
                    bgColor="gray.300"
                    padding="1rem"
                    borderRadius="1rem"
                    alignItems="center"
                    key={_id}
                  >
                    <Avatar name="avatar" size="md" src={profile} />
                    <Flex
                      justifyContent="space-between"
                      w="100%"
                      alignItems="center"
                    >
                      <Flex flexDirection="column">
                        <Heading as="h5" size="md">
                          {`${firstName} ${lastName}`}
                        </Heading>
                        <Text>{commentData}</Text>
                      </Flex>
                      <Popover>
                        <PopoverTrigger>
                          <IconButton
                            icon={<BsThreeDotsVertical />}
                            fontSize="1.8rem"
                            bg="transparent"
                            color="black"
                          ></IconButton>
                        </PopoverTrigger>
                        <PopoverContent w="5xs" paddingRight="1rem">
                          <PopoverCloseButton />
                          <PopoverArrow />
                          <PopoverBody>
                            <Flex
                              flexDirection="column"
                              justifyContent="flexStart"
                              gap="0.2rem"
                              padding="1rem"
                            >
                              <Button
                                leftIcon={<FaTrash />}
                                fontSize="1.5rem"
                                bg="transparent"
                                onClick={() => deleteCommentHandler(_id)}
                              >
                                Delete
                              </Button>
                            </Flex>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Flex>
                  </Flex>
                )
              },
            )
          : null}
      </Flex>
    </>
  )
}

export { PostCard }
