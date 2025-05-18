import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const superClick = () =>{
    return(
      alert("КНОПКА НАЖАТА")
    )
  }

  const superInput = (e) => {
    return(
      console.log(`Написал кароч: ${e.target.value}`)
    )
  }
  
  return (
    <>
      <Button text={"ПРОСТО ТЕКСТ"} onClick={superClick}/>
      <Input placeholder={"ПРОГРАММИНГ"} onChange={superInput}/>
    </>
  );
}

export default App;
