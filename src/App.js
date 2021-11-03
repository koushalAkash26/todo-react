import logo from './logo.svg';
import './App.css';
import Skeleton from './components/skeleton'
import style from './components/appStyle.module.css';
import Book from "./images/book.png";

function App() {
  return (
    <div className="App">
      <section className={style.mainContainer}>
        <div className={style.headContainer}><img
            className={style.titleicon}
            src={Book}
            alt="tick"
            // onClick={ handleChangeActive}
          />
        <p className={style.mainHeading}>Todo List</p>  </div>
      <Skeleton></Skeleton>
      </section> 
    </div>
  );
}

export default App;
