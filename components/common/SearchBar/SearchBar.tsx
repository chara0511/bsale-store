import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar: FC<{ isResponsive?: boolean }> = ({ isResponsive = false }) => {
  const router = useRouter()
  const [search, setSearch] = useState({ query: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    return setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (
    e: FormEvent<HTMLDivElement>
  ): Promise<boolean> => {
    e.preventDefault()

    return await router.push(
      {
        pathname: '/search',
        query: search.query !== '' ? { q: search.query } : {}
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <FormControl
      as="form"
      id="search"
      onSubmit={handleSubmit}
      maxWidth="480px"
      display={isResponsive ? ['block', 'block', 'none'] : ['none', 'none', 'block']}
    >
      <FormLabel margin="auto">
        <InputGroup size="md">
          <Input
            name="query"
            value={search.query}
            onChange={handleChange}
            borderRadius="sm"
            pr="4.5rem"
            variant="filled"
            type="text"
            placeholder="Buscar productos..."
          />
          <InputRightElement width="4.5rem">
            <IconButton
              type="submit"
              aria-label="Search product"
              variant="ghost"
              icon={<SearchIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </FormLabel>
    </FormControl>
  )
}

export default SearchBar
