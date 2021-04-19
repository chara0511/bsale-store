import { FC } from 'react'
import { Button } from '@chakra-ui/button'

interface Props {
  isDisabled?: boolean
  name: string
  handler: () => void
}

const PrimaryButton: FC<Props> = ({ isDisabled, name, handler }) => {
  return (
    <Button
      isDisabled={isDisabled}
      aria-label={name}
      onClick={handler}
      w="full"
      mx="auto"
      maxW="300px"
      h="60px"
      borderRadius="sm"
      color="whiteAlpha.900"
      backgroundColor="blackAlpha.900"
      textTransform="uppercase"
      _hover={{
        backgroundColor: 'blackAlpha.800'
      }}
      _active={{
        transform: 'scale(0.95)',
        backgroundColor: 'blackAlpha.800'
      }}
    >
      {name}
    </Button>
  )
}

export default PrimaryButton
