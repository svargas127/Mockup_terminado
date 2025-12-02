import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-gray-800 dark:text-white" style={{fontSize: '28px'}}>menu</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Dashboard</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-gray-800 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>

      <main className="flex-grow px-4 pb-24">
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-white dark:bg-white/5 p-6 border border-gray-200 dark:border-white/10">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Vacantes Activas</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">82</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-white dark:bg-white/5 p-6 border border-gray-200 dark:border-white/10">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Estudiantes en Proceso</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">150</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-white dark:bg-white/5 p-6 border border-gray-200 dark:border-white/10">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Empresas Registradas</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">45</p>
          </div>
           <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-white dark:bg-white/5 p-6 border border-gray-200 dark:border-white/10">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">Prácticas Finalizadas</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">120</p>
          </div>
        </div>

        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Accesos Rápidos</h3>
        <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-xl justify-between border border-gray-200 dark:border-white/10 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10">
                <div className="flex items-center gap-4">
                    <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-10">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal flex-1 truncate">Gestionar Usuarios</p>
                </div>
                 <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
             <Link to="/admin/reports" className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-xl justify-between border border-gray-200 dark:border-white/10 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10">
                <div className="flex items-center gap-4">
                    <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-10">
                        <span className="material-symbols-outlined">assessment</span>
                    </div>
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal flex-1 truncate">Generar Reportes</p>
                </div>
                 <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </Link>
        </div>
      </main>

      <div className="sticky bottom-0 mt-auto bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 p-2">
        <div className="flex justify-around">
            <div className="flex flex-col items-center justify-center gap-1 w-1/4">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                <p className="text-xs font-bold text-primary">Dashboard</p>
            </div>
             <div className="flex flex-col items-center justify-center gap-1 w-1/4">
                <span className="material-symbols-outlined text-gray-500">school</span>
                <p className="text-xs text-gray-500">Estudiantes</p>
            </div>
             <div className="flex flex-col items-center justify-center gap-1 w-1/4">
                <span className="material-symbols-outlined text-gray-500">business</span>
                <p className="text-xs text-gray-500">Empresas</p>
            </div>
             <div className="flex flex-col items-center justify-center gap-1 w-1/4">
                <span className="material-symbols-outlined text-gray-500">person</span>
                <p className="text-xs text-gray-500">Perfil</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;