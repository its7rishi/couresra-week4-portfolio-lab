import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
]

const Header = () => {
  const [hidden, setHidden] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)

  const currentScrollY = useRef(0)

  const handleScroll = () => {
    currentScrollY.current = window.scrollY
    if (currentScrollY.current > prevScrollY) {
      handleHide()
    } else {
      handleShow()
    }
    setPrevScrollY(currentScrollY.current)
  }

  const handleHide = () => setHidden(true)
  const handleShow = () => setHidden(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <Box
      position='sticky'
      top={0}
      left={0}
      right={0}
      transform={hidden ? 'translateY(-200px)' : 'translateY(0)'}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack
              spacing={8}
              justifyContent='space-between'
              alignItems='center'
            >
              {socials.map((social, idx) => (
                <a key={idx} href={social.url}>
                  {<FontAwesomeIcon icon={social.icon} size='2x' />}
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href='#projects-section'>Projects</a>
              <a href='#contactme-section'>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}
export default Header
