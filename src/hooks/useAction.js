import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

// usePrototypes라는 커스텀 훅
export default function useActions() {
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);
  // prototypes 밸류 프롭스를 통해 데이터를 얻어오는 훅을
  return {addToOrder, remove, removeAll};
  // 여기는 상태를 주는게 아니라 상태를 변경하는 함수를 전달해주는 것
}
