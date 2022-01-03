import { selector } from 'recoil';
import axios from 'axios';
// import { syncState } from './atoms';

type AsyncType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const userSyncSelectorState = selector<AsyncType>({
  key: 'userSyncSelectorState',
  get: ({ get }) => {
    // const syncData = get(syncState);
    const response = axios
      .get('https://jsonplaceholder.typicode.com/posts/12')
      .then((resp) => resp.data);
    return response;
  },
});
