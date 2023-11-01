import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page & layout imports
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/details/:id"
          element={<ReviewDetails></ReviewDetails>}
        ></Route>
        <Route path="/category/:id" element={<Category></Category>}></Route>
      </Routes>
    </div>
  );
}

export default App;
