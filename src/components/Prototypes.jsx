import styles from "../css/Prototypes.module.css"
import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

export default function Prototypes() {
  const { prototypes } = useContext(AppStateContext);
  // AppStateContext를 통해 useContext로 자식에 넣을 밸류로 지정해둔 객체인 prototypes 데이터를 가져온다.
  return (
    <div className={styles.prototypes}>
      {prototypes.map((prototype) => {
        const {title, author, price, publisher } = prototype;
        return (
          <div className={styles.prototype} key={title}>
            <div className={styles.detail}>
              <img 
                className={styles.img}
                alt={title}
                src={require("../imgs/"+title+".jpeg")} />
              <h1 className={styles.title}>{title}</h1>
              <span className={styles.author_publisher}>{author} | {publisher}</span>
            </div>
            <div className={styles.price}>
              <div>{price}</div>
              <button className={styles.plus_btn}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}