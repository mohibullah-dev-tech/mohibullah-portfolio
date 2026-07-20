import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-blue-600
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-blue-700
      "
      >
        <HiArrowUp size={22} />
      </button>
    )
  );
};

export default ScrollToTop;
