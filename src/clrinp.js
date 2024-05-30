import { useState } from "react";

const Clrinp = (props) => {
  const [val, setVal] = useState(props.val);
  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return (
    <div>
      <input  name="message" type="text" onChange={handleChange} value={val} />
      <button onClick={() => setVal("")}>Очистить</button>
    </div>
  );
};

export default Clrinp;