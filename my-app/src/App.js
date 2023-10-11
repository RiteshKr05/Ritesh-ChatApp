

import{Box, Button, Container, VStack} from "@chakra-ui/react"


function App() {
  return (
    <Box bg={"red.50"} >
   <Container h={"100vh"} bg={"white"}>
    <VStack h="full" bg={"telegram.100"}/>
    <Button colorScheme={"red"} w={"full"}>LOGOUT</Button>

   </Container>
  </Box>
  );
}

export default App;
