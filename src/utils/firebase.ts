// fire base init file
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

const firebaseConfig = {
    apiKey: 'AIzaSyA8EEsPA_dqx04K_v7fMTAOtYg4GJvF4Gs',
    authDomain: 'codemy-391.firebaseapp.com',
    projectId: 'codemy-391',
    storageBucket: 'codemy-391.appspot.com',
    messagingSenderId: '501982173086',
    appId: '1:501982173086:web:738eba89e349a7b87de88f',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const functions = getFunctions(app)

connectAuthEmulator(auth, 'http://localhost:9099')
connectFunctionsEmulator(functions, 'localhost', 5001)

//9099 auth
//5001 func
//8080 store
//5000 host
//5500 hoUI
