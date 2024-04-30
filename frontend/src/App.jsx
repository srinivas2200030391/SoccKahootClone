import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";
const Loading = lazy(() => import("./components/Loading"));
const Home = lazy(() => import("./components/Home"));
function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Home />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
