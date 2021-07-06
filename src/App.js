import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

export const App = () => {
  /**
   * 1 Есть dispatch в него передаётся action (type)
   * 2 Как action будет менять состояние, определенно
   * внутри reducer
   * 3 reduser - чистая функция принимает state и action
   * возвращает новый объект состояния
   * 4 reducer передаётся в store и store с помощью Provider
   */
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => dispatch({ type: "ADD_CASH", payload: cash });
  const getCash = (cash) => dispatch({ type: "GET_CASH", payload: cash });

  return (
    <div className="App">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => addCash(Number(prompt()))}
      >
        Add money
      </button>
      <div className="cash">{cash}</div>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => getCash(Number(prompt()))}
      >
        Get money
      </button>
    </div>
  );
};
