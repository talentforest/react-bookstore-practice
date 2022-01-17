import styles from "../css/Orders.module.css"
import useOrders from '../hooks/useOrders';
import usePrototypes from '../hooks/usePrototypes';

export default function Order() {
  const orders = useOrders();
  // order에는 prototypes 상품에 대한 데이터가 없다.
  const prototypes = usePrototypes();

  if (orders.length === 0) {
    return (
      <aside className={styles.orders}>
        <div className={styles.box}>
          <span className={styles.none}>아직 추가된 책이 없습니다.</span>
          <span className={styles.none}>
            <i className="fas fa-plus"></i> 버튼을 눌러 책을 추가해주세요.
          </span>
        </div>
      </aside>
    )
  }
  return (
    <aside className={styles.orders}>
      <div className={styles.box}>
        {orders.map(order => {
          const {title} = order;
          // title 데이터를 order로 갖고 오기 위해
          const prototype = prototypes.find(p => p.title === title);
          return (
            <div className={styles.items} key={title}>
              <div className={styles.item}>
                <div className={styles.img_quantity}>
                  <img className={styles.img} alt={title} src={require("../imgs/"+title+".jpeg")} />
                  <p className={styles.quantity}>x {order.quantity}</p>
                <div className={styles.price}>{prototype.price}원</div>
                </div>
                <div className={styles.delete_btn}><i class="fas fa-times"></i></div>
              </div>
            </div>
          );
        })}
        <div className={styles.totalPrice}>Totalprice :  </div>
      </div>
    </aside>
  )
}