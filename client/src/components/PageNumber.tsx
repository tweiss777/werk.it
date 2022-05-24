import React, { useState } from "react";

export default function PageNumber() {
  const [pages, setPages] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return (
    <div>
      {/* {pages.map((page: any, index: any) => {
        return <div>{page}</div>;
      })} */}
    </div>
  );
}
