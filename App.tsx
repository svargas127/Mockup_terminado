import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Login from './views/Login';
import StudentDashboard from './views/StudentDashboard';
import VacancyList from './views/VacancyList';
import VacancyDetail from './views/VacancyDetail';
import ApplicationForm from './views/ApplicationForm';
import Documents from './views/Documents';
import Chat from './views/Chat';
import Tracking from './views/Tracking';
import TutorDashboard from './views/TutorDashboard';
import CompanyDashboard from './views/CompanyDashboard';
import CompanyRegister from './views/CompanyRegister';
import AdminDashboard from './views/AdminDashboard';
import Reports from './views/Reports';
import AssignPractice from './views/AssignPractice';
import StudentManagement from './views/StudentManagement';

// Temporary navigation helper for the demo
const DemoNav = () => {
  const location = useLocation();
  if (location.pathname === '/login') return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 text-white text-[10px] p-1 flex justify-center gap-4 overflow-x-auto whitespace-nowrap">
        <span>Roles Demo:</span>
        <Link to="/" className="hover:text-primary">Estudiante</Link>
        <Link to="/tutor" className="hover:text-primary">Tutor</Link>
        <Link to="/company" className="hover:text-primary">Empresa</Link>
        <Link to="/admin" className="hover:text-primary">Admin</Link>
        <Link to="/login" className="hover:text-primary">Login</Link>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <DemoNav />
      <div className="pt-6"> {/* Padding for DemoNav */}
        <Routes>
          {/* Public / Entry */}
          <Route path="/login" element={<Login />} />
          
          {/* Student Routes (Main Flow) */}
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/vacancies" element={<VacancyList />} />
          <Route path="/vacancies/:id" element={<VacancyDetail />} />
          <Route path="/apply/:id" element={<ApplicationForm />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/tracking" element={<Tracking />} />

          {/* Tutor Routes */}
          <Route path="/tutor" element={<TutorDashboard />} />
          <Route path="/tutor/students" element={<StudentManagement />} />
          <Route path="/tutor/assign" element={<AssignPractice />} />

          {/* Company Routes */}
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/company/register" element={<CompanyRegister />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Routes>
      </div>
    </HashRouter>
  );
}