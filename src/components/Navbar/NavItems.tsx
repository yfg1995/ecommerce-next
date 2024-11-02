"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { FC } from "react";
import { NavItem } from "./NavItem";
import { useNavItems } from "./useNavItems";

// export interface INavItems {}

export const NavItems: FC = () => {
  const { navRef, isAnyOpen, activeIndex, setActiveIndex } = useNavItems();

  return (
    <div ref={navRef} className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          setActiveIndex(activeIndex === i ? null : i);
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={category.value}
            category={category}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            handleOpen={handleOpen}
          />
        );
      })}
    </div>
  );
};
