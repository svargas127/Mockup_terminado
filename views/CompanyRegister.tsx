import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CompanyRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <button onClick={() => navigate(-1)} className="text-slate-800 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Registro de Empresas</h1>
      </header>
      
      <main className="flex-1 px-4 pt-4 pb-8">
        <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pb-6">Completa los siguientes datos para vincular tu empresa a nuestra plataforma de prácticas.</p>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/company'); }}>
          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Nombre de la empresa</span>
            <input className="form-input w-full rounded-lg text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 h-14 px-4 focus:ring-primary/50" placeholder="Ingresa el nombre de la empresa" type="text" />
          </label>
          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">RUC / NIT</span>
            <input className="form-input w-full rounded-lg text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 h-14 px-4 focus:ring-primary/50" placeholder="Ingresa el RUC o NIT" type="number" />
          </label>
          
          <button className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-primary/90 h-14" type="submit">Registrar Empresa</button>
          
          <div className="text-center">
            <Link to="/login" className="text-sm font-medium text-primary hover:underline">
               ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CompanyRegister;