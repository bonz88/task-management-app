"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ArrowIconDown } from "../icons/ArrowIconDown";
import { ArrowIconUp } from "../icons/ArrowIconUp";
import { DotIcon } from "../icons/DotIcon";
import { DotSelectedIcon } from "../icons/DotSelectedIcon";

const sortOptions = [
  "Default",
  "Ascending Date",
  "Descending Date",
  "Ascending Complexity",
  "Descending Complexity",
  "Ascending Priority",
  "Descending Priority",
];

type TaskSortProps = {
  handleSort: (option: string) => void;
};

export default function TaskSort({ handleSort }: TaskSortProps) {
  const [position, setPosition] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(position);

  const handleSelected = (option: string) => {
    setPosition(option);
    handleSort(option);
  };
  return (
    <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button className="w-[184px] h-[44px]">
          <div className="w-full flex items-center px-5">
            <div className="w-1/2 flex justify-start">
              {!isDropdownOpen && (
                <span className="text-sm font-normal">Sort</span>
              )}
            </div>
            <div className="w-1/2 flex justify-end">
              {!isDropdownOpen ? (
                <ArrowIconDown className="w-6 h-6" />
              ) : (
                <ArrowIconUp className="w-6 h-6" />
              )}
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[184px] rounded-[14px]">
        <DropdownMenuRadioGroup
          className="my-2"
          value={position}
          onValueChange={setPosition}
        >
          {sortOptions.map((option, index) => (
            <DropdownMenuRadioItem
              key={option}
              value={option}
              onClick={() => handleSelected(option)}
            >
              <div className="flex justify-between items-center">
                <span
                  className={`text-xs leading-[15px] ${
                    position === option ? "text-black" : "text-[#717171]"
                  }`}
                >
                  {option}
                </span>
                {position === option ? <DotSelectedIcon /> : <DotIcon />}
              </div>
              {index !== sortOptions.length - 1 && (
                <div className="mt-2 border-t border-gray-200"></div>
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
