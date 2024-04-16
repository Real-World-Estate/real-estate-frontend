import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Error404 from "./screens/Error404";
import AppScreen from "./screens/AppScreen";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppScreen />}>
            <Route path="" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
