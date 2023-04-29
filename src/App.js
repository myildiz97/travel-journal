import "./styles.css";
import Navbar from "./Navbar";
import Section from "./Section";
import data from "./data";

export default function App() {
  const dataSet = data.map((item) => {
    return (
      <>
        <Section key={item.id} {...item} />
        {data.length !== item.id && <hr />}
      </>
    );
  });

  return (
    <div className="App">
      <Navbar />
      {dataSet}
    </div>
  );
}
