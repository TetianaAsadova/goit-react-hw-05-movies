import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { Layout } from "./Layout";
import GetMovieCredits from "./pages/GetMovieCredits";
import GetMovieRevievs from "./pages/GetMovieReviews";
import GetMovieDetails from "./pages/GetMovieDetails";

export const App = () => {

  const navigate = useNavigate();

  return (
     <> 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />}>
            <Route path=':id' element={<GetMovieDetails />}>
              <Route path='cast' element={<GetMovieCredits />} />
              <Route path='reviews' element={<GetMovieRevievs />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <h2>
              <button onClick={() => navigate(-1)}>Go back</button>
              <p>Incorrect path</p>
            </h2>
          }
        ></Route>
      </Routes>
      
    </>
  );
};
