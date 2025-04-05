import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WrapperComponent from "./components/WrapperComponent";
import ChatsComponent from "./components/routes-comps/ChatsComponent";

function App(): JSX.Element {
  return (
    <>
      <main className="w-screen h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<WrapperComponent />}>
              <Route path="/chat" element={<ChatsComponent />} key="chat" />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
