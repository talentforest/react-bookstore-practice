import styles from "../css/Orders.module.css"

export default function Order() {
  return (
    <div className={styles.orders}>
      <div className={styles.box}>
        <span className={styles.none}>아직 추가된 책이 없습니다.</span>
        <span className={styles.none}>
          <i className="fas fa-plus"></i> 버튼을 눌러 책을 추가해주세요.
        </span>
      </div>
    </div>
  )
}