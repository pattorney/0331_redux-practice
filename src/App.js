import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandsonBox from './component/GrandsonBox';

function App() {
  const count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type: "INCREMENT", plyload: {num: 5}});   
  };

  const decrease = () => {
    dispatch({type: "DECREMENT", plyload: {num: 2}});   
  };
  
  const login = () => {
    dispatch({ type: "LOGIN", payload: {id: "pattorney", password: "123"} })
  }

  return (
    <div>
      <h1>ID : {id}</h1>
      <h1>PW : {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>5만큼 증가</button>
      <button onClick={decrease}>2만큼 감소</button>
      <button onClick={login}>로그인</button>
      <Box />
      <GrandsonBox />
    </div>
  );
}

export default App;
