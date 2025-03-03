import { FC } from "react";

interface Props {
  count: number;
  setCount: (a: number) => void;
}
const Counter: FC<Props> = ({ count, setCount }) => {
  return (
    <div className="flex gap-2 items-center justify-center mb-4">
      <p className="text-gray-600"> Number of boxes(10-50): </p>
      <input
        value={count}
        onChange={(e) => setCount(+e.target.value)}
        type="number"
        className="bg-black w-[60px] p-1 rounded-sm text-white"
        min={10}
        max={50}
      />
    </div>
  );
};

export default Counter;
