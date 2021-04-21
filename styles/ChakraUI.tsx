
import { FC } from 'react'
import {
  ChakraProvider,
  cookieStorageManager
} from '@chakra-ui/react'

const ChakraUI: FC<{cookies: string}> = ({ cookies, children }) => {
  const colorModeManager = cookieStorageManager(cookies)

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default ChakraUI
