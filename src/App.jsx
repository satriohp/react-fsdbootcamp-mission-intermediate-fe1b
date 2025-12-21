import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Series from "./components/pages/Series.jsx";
import Film from "./components/pages/Film.jsx";
import Profile from "./components/pages/Profile.jsx";
import Premium from "./components/pages/Premium";
import Payment from "./components/pages/Payment";
import PaymentDetail from "./components/pages/PaymentDetail.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/series" element={<Series />} />
        <Route path="/film" element={<Film />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/daftar-saya" element={<Profile />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-detail" element={<PaymentDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;