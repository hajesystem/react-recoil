import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userSyncSelectorState } from '../recoil/syncSelector';

function RecoilSyncSelector() {
  const syncState = useRecoilValue(userSyncSelectorState);
  return (
    <>
      <h3>AsyncSelector-useRecoilValue : with React.Suspense</h3>
      <Link to={'/'}>Home</Link>
      <h4>id : {syncState.id}</h4>
      <h4>userId : {syncState.userId}</h4>
      <h4>title : {syncState.title}</h4>
      <h4>body : {syncState.body}</h4>
    </>
  );
}

export default RecoilSyncSelector;
