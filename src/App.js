import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import Navigation from "./components/navigation/Navigation";
import Todo from "./pages/todo/Todo";
import Main from "./pages/main/Main";
import Wrapper from "./components/wrapper/Wrapper";

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
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
