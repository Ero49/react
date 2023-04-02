import './App.css';
function AppDay(){
  let d = new Date();
  let f = d.getHours();
  let h = d.getMinutes();
  let b = d.getSeconds();
  console.log(f + ":" + h + ":" + b);
}
function App() {
  return (
    <div className='justify'>
      <button onClick={AppDay}>Daytime</button>
    </div>
  );
}

export default App;
