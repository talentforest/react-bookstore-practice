import styles from "../css/Prototypes.module.css"
import usePrototypes from '../hooks/usePrototypes';

export default function Prototypes() {
  const prototypes = usePrototypes();
  // usePrototypes라는 커스텀 훅을 만들었으니까...
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