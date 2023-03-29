import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack spacing='20px' background={'#fff'} borderRadius='2xl'>
      <Image src={imageSrc} alt={title} borderRadius='2xl' />
      <VStack
        justifyContent='center'
        alignItems='start'
        px='40px'
        py='20px'
        spacing='20px'
      >
        <Heading color={'black'} size='md'>
          {title}
        </Heading>
        <Text color={'gray'} letterSpacing='0.5px' size='md'>
          {description}
        </Text>
        <HStack>
          <Text color={'black'} size='md'>
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x' color={'black'} />
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Card
