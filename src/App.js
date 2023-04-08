import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Todo from "./pages/Todo/Todo";
import Main from "./pages/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
