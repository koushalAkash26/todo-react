import React,{useState} from 'react'
import Inactive from "../images/push-pin.png";
import Active from "../images/accept.png";
import style from './appStyle.module.css';


function Icontoggler() {
    const [active, setActive] = useState(false);
    const handleChangeActive = () => {
        setActive((status) => {
          return !status;
        });
      };
    return (
        <>
            {active ? (
          <img
            className={style.toggleicon}
            src={Active}
            alt="tick"
            onClick={ handleChangeActive}
          />
        ) : (
          <img
            className={style.toggleicon}
            src={Inactive}
            alt="pin"
            onClick={ handleChangeActive}
          />
        )}
        </>
    )
}

export default Icontoggler
