import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <AllMeetUps />
      </Route>
      <Route exact path="/new-meetups">
        <NewMeetUps />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Layout>
  );
}

export default App;
