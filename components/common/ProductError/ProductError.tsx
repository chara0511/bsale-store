import { FC } from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/alert'

const ProductError: FC<{ message: string }> = ({ message }) => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      maxW="400px"
      h="400px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        An error occurred!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        {message} Request not processed, please try again.
      </AlertDescription>
    </Alert>
  )
}

export default ProductError
