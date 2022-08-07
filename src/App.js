import ErrorBoundary from "./ErrorBoundary";

import Page from "./Page";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Page />
      </div>
    </ErrorBoundary>
  );
}

export default App;
