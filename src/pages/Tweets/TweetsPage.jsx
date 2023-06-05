import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { ListContainer, Button, Container } from "./tweetsPage.styled";
import Loader from "../../components/Loader";
import Cart from "../../components/Cart/Cart";
import { getUsers } from "../../service/api";

const TweetsPage = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsload] = useState(false);

  const getList = useCallback(async () => {
    if (page === 1) {
      setIsload(true);
    }
    const res = await getUsers(page);
    if (page === 1) {
      setUsers([...res]);
      setIsload(false);
    } else {
      setUsers((prevState) => [...prevState, ...res]);
      setIsload(false);
    }
  }, [page]);

  useEffect(() => {
    getList();
  }, [getList]);

  const handleMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Button to={location.state.from} style={{ left: "0" }}>
        go Back
      </Button>
      <ListContainer>
        {isLoad ? (
          <Loader />
        ) : (
          users.map((item) => <Cart key={item.id} user={item} />)
        )}
      </ListContainer>
      {!isLoad && (
        <Button as="button" style={{ position: "static" }} onClick={handleMore}>
          Load More
        </Button>
      )}
    </Container>
  );
};
export default TweetsPage;
