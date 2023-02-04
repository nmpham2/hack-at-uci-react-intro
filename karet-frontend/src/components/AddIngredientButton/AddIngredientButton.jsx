import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'

import "./AddIngredientButton.css"

function AddIngredientButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>
            Add Ingredient
        </Button>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ingredient Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Ingredient name</FormLabel>
                <Input ref={initialRef} placeholder='ex. carrots' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Purchased on</FormLabel>
                <Input placeholder='MM/DD/YYYY' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input placeholder='ex. freezer' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddIngredientButton;