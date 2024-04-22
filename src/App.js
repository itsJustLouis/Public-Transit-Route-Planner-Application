import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//https://www.youtube.com/watch?v=-5X6r0oC0Og&list=PLBh9z20x5LUqfmToGINwM5GnDL9caB-Sn&index=16//
import Navbar from "./components/Navbar";
import AvailableRoutes from "./pages/AvailableRoutes";
import TicketPurchase from "./pages/TicketPurchase";
import RoutesInformation from "./pages/RoutesInformation";
import { useState } from "react";
import "./styling/index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: ""
  })
  return (
    // learnt this linking technique from the above video mention in the second line
    <Router>
      <Navbar />
      <main className="container main">
        <Routes>
          <Route path="/" element={<AvailableRoutes searchState={searchState} setSearchState={setSearchState} />} />
          <Route path="/RoutesInformation/:id" element={<RoutesInformation />} />
          <Route path="/TicketPurchase" element={<TicketPurchase />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
