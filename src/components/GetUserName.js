// Import the functions you need from the SDKs you need
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db, auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function GetUserName() {
  const [user] = useAuthState(auth);
  const [setName] = useState('');
  var userName = 'not named';

  //   console.log(user?.email);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('email', '==', user?.email));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      userName = data.name;
    } catch (err) {
      console.error(err);
    }
  };

  fetchUserName();

  return userName;
}
