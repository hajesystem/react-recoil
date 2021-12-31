import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAsyncSelectorState } from '../recoil/asyncSelector';

function RecoilAsyncSelector() {
  const asyncState = useRecoilValue(userAsyncSelectorState);
  return (
    <>
      <h3>AsyncSelector-useRecoilValue</h3>
      <Link to={'/'}>Home</Link>
      <h4>id : {asyncState.id}</h4>
      <h4>userId : {asyncState.userId}</h4>
      <h4>title : {asyncState.title}</h4>
      <h4>body : {asyncState.body}</h4>
    </>
  );
}

export default RecoilAsyncSelector;
