import { Container, Title, Button } from "./homePage.styled";

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome</Title>
      <Button to={"/tweets"} state={{ from: "/" }}>
        Go Tweets !!!
      </Button>
    </Container>
  );
};

export default HomePage;
