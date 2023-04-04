import "./App.css";
import Expenses from "./pages/Expenses/Expenses";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import LoginForm from "./pages/LoginForm/LoginForm";
import AddExpense from "./pages/AddExpense/AddExpense";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/edit-expense/:id" element={<AddExpense />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
