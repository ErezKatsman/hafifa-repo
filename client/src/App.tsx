import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddForm from "./components/AddForm";
import Ducks from "./components/Ducks";
import { duckActions } from "./store/duck/duck.action";


function App() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(duckActions.getDucksAction());
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>GET</button>
      <Ducks title={"Ducks"} />
      <AddForm />
    </div>
  );
}

export default App;
