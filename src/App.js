import logo from './logo.svg';
import './App.css';
import Skeleton from './components/skeleton'
import style from './components/appStyle.module.css';
import Book from "./images/book.png";

function App() {
  return (
    <div className="App">
      <section className={style.mainContainer}>
      <img
            className={style.titleicon}
            src={Book}
            alt="tick"
            // onClick={ handleChangeActive}
          />
        <h1>Todo List</h1>  
      <Skeleton></Skeleton>
      </section> 
    </div>
  );
}

export default App;
