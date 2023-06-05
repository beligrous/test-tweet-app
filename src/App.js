import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { FollowProvider } from "./service/context";
import { Container } from "./app.styled";
import Loader from "./components/Loader";

const Tweets = lazy(() => import("./pages/Tweets/TweetsPage"));
const Home = lazy(() => import("./pages/Home/HomePage"));

function App() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <FollowProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="/*" element={<Navigate to={"/"} replace />} />
          </Routes>
        </FollowProvider>
      </Suspense>
    </Container>
  );
}

export default App;
