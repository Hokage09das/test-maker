import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Questions from "./components/navigate/Questions";
import TestMaker from "./components/navigate/TestMaker";
import SingleQuestion from "./components/navigate/SingleQuestion";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HashRouter basename='/'>
          <Routes>
            <Route
              path='/'
              element={<MainLayout />}
            >
              <Route index>
                <TestMaker />
              </Route>
              <Route path='question'>
                <Questions />
              </Route>
              <Route path='question/:id'>
                <SingleQuestion />
              </Route>
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </BrowserRouter>
  );
}

export default App;
