// import logo from "./logo.svg";
import Hello from "./component/Hello.jsx";

function App() {
  return (
    <>
      <Hello title="semi" color="green" backgroundColor="#eee" />
      <Hello backgroundColor="yellow" />
      <Hello backgroundColor="#eee" />
      <Hello>
        <p> 자식요소입니다.</p>
      </Hello>
    </>
  );
}

export default App;
