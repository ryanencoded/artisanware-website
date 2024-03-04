import "../globals";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-slate-200 container px-4">
      <h1 className="text-3xl p-2">Coming Soon</h1>
    </div>
  );
}

export default App;
