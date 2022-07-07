import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
