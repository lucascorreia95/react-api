import React, { memo } from "react";

const MemoComponent = () => {
  console.log("Memo Component render!");

  return <h3>Memo Component!</h3>;
};

export default memo(MemoComponent);
