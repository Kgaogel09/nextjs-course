import { Route } from "react-router-dom";
import MainNav from "./components/layout/MainNav";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";

function App() {
  return (
    <div>
      <MainNav />
      <Route exact path="/">
        <AllMeetUps />
      </Route>
      <Route exact path="/new-meetups">
        <NewMeetUps />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
