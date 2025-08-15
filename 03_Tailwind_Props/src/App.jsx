import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="font-bold text-5xl mb-11">Hello Chai</h1>
      <Card channel={"Chai Aur Code"} btnText="Click Me" />
      <Card channel={"Hitesh"} btnText="Visit Me" />
    </>
  );
}

export default App;
