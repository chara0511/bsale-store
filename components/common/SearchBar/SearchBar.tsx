import { FC } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar: FC = () => {
  return (
    <FormControl as="form" id="search" maxWidth="360px">
      <FormLabel margin="auto" >
        <InputGroup size="md">
          <Input pr="4.5rem" variant="filled" type="text" />
          <InputRightElement width="4.5rem">
            <IconButton
              aria-label="Search product"
              icon={<SearchIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </FormLabel>
    </FormControl>
  )
}

export default SearchBar
