import {getAuth, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth';

async function signupUser(payload){
    const{ email, password} = payload;

      const auth = getAuth();
      const result = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(result.user, {
        displayName: this.name
      })

      await signOut(auth);
}

export default signupUser;