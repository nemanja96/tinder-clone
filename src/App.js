import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Loading from './components/Loading';

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading) return <Loading />

  return (
    <>
      {!user ?
        <Login />
        :
        <div className="flex h-screen">
          <Sidebar />
          <Main />
        </div>
      }
    </>
  );
}

export default App;
