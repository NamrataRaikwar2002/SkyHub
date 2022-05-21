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
  InputGroup,
  Input,
  FormLabel,
  Flex,
  Avatar,
  Center,
  Box,
  Heading
} from '@chakra-ui/react'
import { AiFillCamera } from 'react-icons/ai'
import { editProfile } from '../redux/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const ProfileModal = ({ isOpenProfile, onCloseProfile }) => {
  const dispatch = useDispatch()
  const {user, token} = useSelector((state)=> state.auth)
  const [userData, setUserData] = useState({...user})


const { firstName, lastName, profile, bio, link } = userData
  const profileSaveHandler = () => {  
    onCloseProfile()
    dispatch(editProfile({userData, token}))
  }


  const imgChangeHandler = (e) => {
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload =() =>{
      if(reader.readyState === 2){
        setUserData(data => ({...data, profile:reader.result}))
      }
    }
  }

  const websiteChangeHadler = (e) => {
    setUserData({...userData, link:e.target.value})
  }

  const bioChangeHandler = (e) => {
    setUserData({...userData, bio:e.target.value})
  }

  return (
    <Modal onClose={onCloseProfile} isOpen={isOpenProfile}>
      <ModalOverlay />
      <ModalContent maxW="45rem">
        <ModalHeader size="xl" fontSize="2rem">
          Edit profile
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody h="10rem">
          <Center position="relative">
            <Avatar
              name="avatar"
              size="2xl"
              src={profile}
            />
            <Box position="absolute" bottom="-2" right="17rem">
              <FormLabel
                cursor="pointer"
                borderRadius="full"
                height="max-content"
                bgColor="white"
                padding="0.1rem"
              >
                <Input type="file" visibility="hidden" position="absolute" onChange={imgChangeHandler} accept='image/*' name='image'/>
                <AiFillCamera fontSize="2rem" color="gray" />
              </FormLabel>
            </Box>
          </Center>
          <Heading as="h6" fontSize="1.5rem">
                   {`${firstName} ${lastName}`}
                  </Heading>
          <InputGroup>
            <Flex flexDirection="column">
            </Flex>
          </InputGroup>
          <FormLabel fontSize="2xl" htmlFor="bio">
            Bio
          </FormLabel>
          <Textarea
            id="bio"
            size="xl"
            fontSize="1.5rem"
            placeholder="Write something interesting..."
            size="lg"
            resize="none"
            value={bio}
            onChange={bioChangeHandler}
          />
          <FormLabel fontSize="2xl" htmlFor="website">
            Website
          </FormLabel>
          <Input
            id="website"
            borderColor="gray.400"
            placeholder="Portfolio URL"
            fontSize="1.5rem"
            size="lg"
            value={link}
            onChange={websiteChangeHadler}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={profileSaveHandler}
            size="lg"
            fontSize="1.5rem"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { ProfileModal }
