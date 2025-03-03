import { useMemo, useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Box from "./components/Box";

function App() {
  const [count, setCount] = useState<number>(10);

  const fiboNums = useMemo(() => {
    if (count <= 0) return [];
    const fib = [1, 1];
    for (let i = 2; i < count; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, count);
  }, [count]);

  return (
    <div className="">
      <Counter count={count} setCount={setCount} />
      <Box fiboNums={fiboNums} />
    </div>
  );
}

export default App;
