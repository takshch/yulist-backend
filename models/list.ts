import { database } from 'firebase-admin';
import { default as firestore } from '../utils/firestore';

const listsModel = firestore.collection('lists');

const fetchList = async (id: number) => {
  const listId = id.toString();
  try {
    const list = await listsModel.doc(listId).get();
    const listData = list.data();
    console.log()
    if (!listData) {
      return false;
    }
    return listData;
  } catch (e) {
    console.error(e);
  }
};

export { fetchList };
