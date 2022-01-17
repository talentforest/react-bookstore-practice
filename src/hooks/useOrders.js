import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

// usePrototypes라는 커스텀 훅
export default function useOrders() {
  const { orders } = useContext(AppStateContext);
  // prototypes 밸류 프롭스를 통해 데이터를 얻어오는 훅을
  return orders;
  // 그냥 prototypes만 하면 쓸 수 있도록...
}