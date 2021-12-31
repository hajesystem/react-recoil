import { selector } from 'recoil';
import axios from 'axios';

type AsyncType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// const getData = () => axios.get('https://jsonplaceholder.typicode.com/posts/1');

export const userAsyncSelectorState = selector<AsyncType>({
  key: 'userAsyncSelectorState',
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    return response.data;
  },
});
