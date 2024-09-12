import { Box, Heading, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Box
      as='section'
      justifyContent='center'
      color='gray.50'
      bg='purple.600'
      textAlign='center'
      display='flex'
      flexDirection='column'
      alignItems='center'
      pt={90}
      pb={198}
      px={8}
    >
      <Heading fontWeight='extrabold' fontSize='5xl'>
        Simple pricing for your business
      </Heading>
      <Text fontWeight={500} fontSize={24} pt={4}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  )
}
