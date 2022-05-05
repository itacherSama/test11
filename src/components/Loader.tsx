import { useState, useEffect, useCallback } from "react";
import Spinner from "./Spinner";

type Props = {
  listMessages: Array<string>;
};

export const Loader = ({ listMessages }: Props) => {
  const [numMessage, setNumMessage] = useState(0);
  const next = useCallback(
    (numMessage) => {
      if (numMessage === listMessages.length - 1) {
        setNumMessage(0);
      } else {
        setNumMessage(numMessage + 1);
      }
    },
    [listMessages.length]
  );

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) {
        next(numMessage);
      }
    }, 2000);
    return () => {
      isMounted = false;
    };
  }, [next, numMessage]);

  return (
    <div>
      {" "}
      <Spinner />
      <div>{listMessages[numMessage]}</div>
    </div>
  );
};
