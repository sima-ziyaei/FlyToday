import { FC, useEffect, useRef, useState } from "react";

interface Props {
  fiboNums: number[];
}

const Box: FC<Props> = ({ fiboNums }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
      const maxScrollLeft = scrollWidth - offsetWidth;
      if (maxScrollLeft <= 0) {
        setActiveIndex(0);
        return;
      }
      const scrollRatio = scrollLeft / maxScrollLeft;
      const newIndex = Math.round(scrollRatio * (fiboNums.length - 1));
      setActiveIndex(newIndex);
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [fiboNums]);

  return (
    <div
      className="bg-white max-w-[70vw] h-[180px] p-2 scroll-container whitespace-nowrap rounded-sm overflow-x-scroll flex items-center justify-center gap-4  "
      ref={containerRef}
    >
      <div className="flex items-center whitespace-nowrap w-full gap-4 px-4 scroll-mr-2">
        {fiboNums.map((num: number, index: number) => (
          <div
            className={`p-5 flex items-center cursor-pointer hover:mb-4 transition-all duration-300 ease-linear justify-center min-w-[120px] min-h-[120px] rounded-md shadow-md ${
              index === activeIndex
                ? "bg-green-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
