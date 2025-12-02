import React from 'react';
import { Link } from 'react-router-dom';

const CompanyDashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-gray-800 dark:text-white text-3xl">corporate_fare</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Bienvenido, Empresa XYZ</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-gray-800 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>
      
      <main className="flex-grow px-4 pb-24">
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50">
            <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Mis Vacantes Publicadas</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">12</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50">
            <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Postulaciones Recibidas</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">25</p>
          </div>
          <div className="flex min-w-full flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50">
            <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Estudiantes en Práctica</p>
            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">4</p>
          </div>
        </div>

        <div className="flex justify-center pt-8">
            <div className="flex flex-1 gap-4 max-w-[480px] flex-col items-stretch">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/90">
                <span className="truncate">Publicar Nueva Vacante</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary-300 text-base font-bold leading-normal tracking-[0.015em] w-full">
                <span className="truncate">Evaluar Estudiantes</span>
            </button>
            </div>
        </div>

        <div className="pt-8">
            <h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Vacantes Recientes</h3>
            <div className="flex flex-col items-center justify-center rounded-xl p-8 bg-white dark:bg-gray-800/30 border border-dashed border-gray-300 dark:border-gray-700/50 text-center">
            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-5xl mb-3">work_history</span>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Aún no tienes vacantes publicadas</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">¡Publica la primera para encontrar talento!</p>
            </div>
        </div>
      </main>

      <div className="sticky bottom-0 z-10">
        <div className="flex gap-2 border-t border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 pb-3 pt-2">
            <button className="flex flex-1 flex-col items-center justify-end gap-1 text-primary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 500"}}>dashboard</span>
                <p className="text-primary text-xs font-medium leading-normal tracking-[0.015em]">Dashboard</p>
            </button>
            <button className="flex flex-1 flex-col items-center justify-end gap-1 text-gray-500 dark:text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined">work</span>
                <p className="text-xs font-medium leading-normal tracking-[0.015em]">Vacantes</p>
            </button>
            <button className="flex flex-1 flex-col items-center justify-end gap-1 text-gray-500 dark:text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined">school</span>
                <p className="text-xs font-medium leading-normal tracking-[0.015em]">Estudiantes</p>
            </button>
             <button className="flex flex-1 flex-col items-center justify-end gap-1 text-gray-500 dark:text-gray-400 hover:text-primary">
                <span className="material-symbols-outlined">chat</span>
                <p className="text-xs font-medium leading-normal tracking-[0.015em]">Mensajes</p>
            </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;