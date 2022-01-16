import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

// usePrototypes라는 커스텀 훅
export default function usePrototypes() {
  const { prototypes } = useContext(AppStateContext);
  // prototypes 밸류 프롭스를 통해 데이터를 얻어오는 훅을
  return prototypes;
  // 그냥 prototypes만 하면 쓸 수 있도록...
}