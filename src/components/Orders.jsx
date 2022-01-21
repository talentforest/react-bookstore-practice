import { useMemo } from "react";
import styles from "../css/Orders.module.css"
import useOrders from '../hooks/useOrders';
import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useAction'

export default function Order() {
  const orders = useOrders();
  // order에는 prototypes 상품에 대한 데이터가 없다.
  const prototypes = usePrototypes();
  const {remove, removeAll} = useActions();

  // 주문 합계
  const totalPrice = useMemo(() => {
    return orders.map(order => {
      const {title, quantity} = order;
      const prototype = prototypes.find(p => p.title === title);
      return prototype.price * quantity;
    }).reduce((l, r) => l + r, 0);
  }, [orders, prototypes])

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
          const prices = prototype.price * order.quantity
          const click = () => {
            remove(title); // remove데이터는 useActions에서 가져온다.
          };
          return (
            <div className={styles.items} key={title}>
              <div className={styles.item}>
                <div className={styles.img_quantity}>
                  <img className={styles.img} alt={title} src={require("../imgs/"+title+".jpeg")} />
                  <p className={styles.quantity}>x {order.quantity}</p>
                <div className={styles.price}>{prices.toLocaleString('ko-KR')}원</div>
                </div>
                <button className={styles.btn_delete} onClick={click}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          );
        })}
          <hr />
        <div className={styles.totalPrice}>
          <div>합계 {totalPrice.toLocaleString('ko-KR')}원</div>
          <button className={styles.btn_removeAll} onClick={removeAll}>
            <i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </aside>
  )
}