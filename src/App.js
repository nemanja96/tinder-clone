import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';

function App() {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // if(error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   )
  // }

    return <Login />

  // if(user) {
  //   return (
  //     <div className="flex h-screen">
  //       <Sidebar />
  //       <Main />
  //     </div>
  //   )
  // }

  // return (
  //   <div className="flex flex-col">
  //     <h1>Nema korisnika</h1>
  //     <button onClick={() => signInWithGoogle()} className="bg-blue-500 w-40 cursor-pointer">Google</button>
  //   </div>
  // )

}

export default App;
