import logo from "./logo.svg";
import "./App.css";
import InfoAndEdit from "./components/InfoAndEdit";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  function updateState(index, newValue) {
    let copyData = data;
    let interestedObject = copyData.find((elem) => elem.id === index);
    interestedObject = { ...interestedObject, ...newValue };
    copyData[index] = interestedObject;
    setData(copyData);
  }
  useEffect(() => {
    async function getData() {
      const dataWeb = await fetch(
        "https://mocki.io/v1/99226e89-99b3-4b10-a093-fc2b8e1fd5e6"
      );
      const mydata = await dataWeb.json();
      setData(mydata.data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      {data.map((element) => (
        <InfoAndEdit
          data={element}
          key={element.id}
          updateState={(elem) => {
            updateState(element.id, elem);
            console.log(data);
          }}
        />
      ))}
    </div>
  );
}

export default App;
