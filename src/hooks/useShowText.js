import { useState } from "react";

export const useShowText = () => {
  const [show, setShow] = useState(false);

  return { show, setShow: (bool) => setShow(bool) };
};
