import { messages } from "./messages";

const getWidget = () => {
  return new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
    const randomNum = Math.floor(Math.random() * 10);

    if (randomNum >= 4) {
      return import("./components/Widget");
    } else {
      return Promise.reject(new Error(messages["Error.Timeout"]));
    }
  });
};

export default getWidget;
