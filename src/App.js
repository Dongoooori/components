import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllComponents from "./pages/AllComponents";
import DayRank from "./pages/DayRank";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="" element={<AllComponents />} />
          <Route path="/day_rank" element={<DayRank />} />
        </Routes>
      </Router>
    );
  }
}