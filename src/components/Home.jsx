// import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";
import { Hero } from "./home/Hero";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function directToMainApp() {
    navigate("/todo");
  }
  return (
    <div>
      <Header directTodo={directToMainApp} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Hero directTodo={directToMainApp} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}
