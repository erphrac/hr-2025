import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import Leaves from './pages/Leaves';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="employees" element={<Employees />} />
            <Route path="departments" element={<Departments />} />
            <Route path="attendance" element={<div className="p-6 text-center text-gray-500">صفحة الحضور والانصراف قيد التطوير</div>} />
            <Route path="leaves" element={<div className="p-6 text-center text-gray-500">صفحة طلبات الإجازات قيد التطوير</div>} />
            <Route path="payroll" element={<div className="p-6 text-center text-gray-500">صفحة كشوف المرتبات قيد التطوير</div>} />
            <Route path="reports" element={<div className="p-6 text-center text-gray-500">صفحة التقارير قيد التطوير</div>} />
            <Route path="settings" element={<div className="p-6 text-center text-gray-500">صفحة الإعدادات قيد التطوير</div>} />
          </Route>
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/leaves" element={<Leaves />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;