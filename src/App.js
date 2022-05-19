import "./App.css";
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./components/EmptyPage";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}>
            <Route path="/day/:day" element={<Day />} />
          </Route>
          <Route path="/words/create" element={<CreateWord />} />
          <Route path="/days/create" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * json-server : json 파일을 REST API로 사용할 수 있도록 서버 환경을 제공한다.
 * 설치 : npm install json-server -g
 * 실행 : json-server --watch ./src/db/data.json --port 3001
 */
