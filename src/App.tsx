import "./App.css";
import React, { lazy, Suspense } from "react";
import { Loader } from "./components/Loader";
import { messages } from "./messages";
import GetWidget from "./getWidget";
import ErrorBoundary from "./ErrorBoundary";
const ContainerWidget = lazy(GetWidget);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Suspense
            fallback={
              <Loader
                listMessages={[
                  messages["Loading.First"],
                  messages["Loading.Second"],
                  messages["Loading.Third"],
                ]}
              />
            }
          >
            <ContainerWidget />
          </Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
};

export default App;
