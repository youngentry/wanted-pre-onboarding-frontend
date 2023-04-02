import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import Navigation from "./components/Navigation";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todo replace to="/signin" />} />
      </Routes>
    </div>
  );
}

export default App;
