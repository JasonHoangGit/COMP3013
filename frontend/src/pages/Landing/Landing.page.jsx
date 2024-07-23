import { Container, Text, Center, Image} from "@mantine/core";

const Landing = () => {
  return (
    <Container>
      <Center>
        <Image
        radius="md"
        h={500}
        src ="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Center>
      <Text align="center" size="xl" mt={20} mb={10}>
        Welcome to our Photography Community!
      </Text>
      <Text align="center" size="lg" mt={10} mb={20}>
        Share your passion for photography with others! Connect, inspire, or explore in our app!
      </Text>
    </Container>
  );
};

export default Landing;
