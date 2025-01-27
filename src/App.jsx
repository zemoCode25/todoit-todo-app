import { Home } from "./components/Home";
import { Todo } from "./components/Todo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-inter highlight-color">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
