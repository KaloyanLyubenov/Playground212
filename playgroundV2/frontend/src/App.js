import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';



function App() {

  const handleNavigationBar = (data) =>{
  }


  return (
    <>
      <NavBar onChange={() => handleNavigationBar()}/>
      <br />
      <LoginForm />
    </>
  );
}

export default App;
