import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

async function loginUser(payload){
    const auth = getAuth();

    const { email, password }= payload;
   return await signInWithEmailAndPassword(auth, email ,password);
}

export default loginUser;