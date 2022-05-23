import React from "react";
import Filterrow from "./Filterrow";
import Jobinfo from "./Jobinfo";

export default function Table() {
  const array: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  //   export interface InputWrapperProps {
  //     label?: string;
  //     required?: boolean;
  //     minimizedLabel?: boolean;
  //     description?: string;
  //     error?: string;

  //     children?: React.ReactNode;
  //   }

  return (
    <>
      <Filterrow />
      {array.map((item, index) => {
        return <Jobinfo key={index} />;
      })}
    </>
  );
}
