import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => (
          <li key={index}>{item}</li>
          //react가 기본적으로 list에 있는 모든 item들을 인식하기 때문에
          //list를 render할 때는 key라는 prop를 넣어줘야 한다.
          //key값은 고유값 
      ))}
      </ul>
    </div>
  );
}

export default App;
