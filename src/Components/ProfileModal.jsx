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
  InputRightElement,
  FormLabel,
  Flex,
  Avatar,
  Center,
  Box,
} from '@chakra-ui/react'
import { AiFillCamera } from 'react-icons/ai'

const ProfileModal = ({ isOpenProfile, onCloseProfile }) => {
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
              src="https://c8.alamy.com/zooms/9/c6f3f3c389b1482b8da4487bd00ad018/kfeagb.jpg"
            />
            <Box position="absolute" bottom="-2" right="17rem">
              <FormLabel
                cursor="pointer"
                borderRadius="full"
                height="max-content"
                bgColor="white"
                padding="0.1rem"
              >
                <Input type="file" visibility="hidden" position="absolute" />
                <AiFillCamera fontSize="2rem" color="gray" />
              </FormLabel>
            </Box>
          </Center>
          <InputGroup>
            <Flex flexDirection="column">
              <FormLabel fontSize="2xl" htmlFor="userName">
                Name
              </FormLabel>
              <Input
                id="userName"
                borderColor="gray.400"
                placeholder="Write you name"
                fontSize="1.5rem"
                size="lg"
              />
              <InputRightElement mr="1rem">
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
                ></Button>
              </InputRightElement>
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
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onCloseProfile}
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
