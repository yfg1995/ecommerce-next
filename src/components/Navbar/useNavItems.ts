import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useRef, useState } from "react";

export const useNavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEscapeKey(() => setActiveIndex(null));

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return {
    navRef,
    isAnyOpen,
    activeIndex,
    setActiveIndex,
  };
};
