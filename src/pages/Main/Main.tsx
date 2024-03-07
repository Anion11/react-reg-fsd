import { useState } from 'react';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Main">
      Main Page
      <br />
      Count:
      {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Count + 1
      </button>
    </div>
  );
};

export default Main;
