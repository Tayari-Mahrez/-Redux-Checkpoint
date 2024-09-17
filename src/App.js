
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddToDo from "./pages/AddToDo";
import { useDispatch } from "react-redux";
import { fetchTodosAction } from "./redux/todo/todoActions";


function App() {
  const dispatch=useDispatch()
  dispatch(fetchTodosAction())
  // async function gettodos() {
  //   const res = await fetch("http://localhost:3000/todos");
  //   const json =await res.json();
  //   dispatch(getTodosAction(json))
  // }
  // useEffect(() => {
  //   gettodos();
  // }, []);
  return (

      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<AddToDo />} />
        </Routes>
      </div>
  );
}

export default App;
