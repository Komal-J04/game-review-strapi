import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// page & layout imports
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

//apollo client - creates a new connection to the server
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

//InMemoryCache - used by apollo client to cache responses from the server
//apollo provider - wraps the entire react application and provides the ability to use the apollo client connection that is set up with the queries

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
