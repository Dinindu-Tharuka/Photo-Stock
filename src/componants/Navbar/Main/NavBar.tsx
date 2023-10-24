import { VStack } from '@chakra-ui/react'
import NavBarHeader from '../Header/NavBarHeader'
import NavBarFooter from '../Footer/NavBarFooter'

const NavBar = () => {
  return (
    <VStack padding={5}>
      <NavBarHeader/>
      <NavBarFooter/>
    </VStack>
  )
}

export default NavBar