import React from 'react';
import { Link } from 'react-router-dom';

const TutorDashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light font-display text-slate-800">
      {/* Top App Bar */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex size-12 shrink-0 items-center justify-start">
           <div className="bg-center bg-no-repeat aspect-square bg-contain size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBEsH0ca_diBSCJhTP8wkoc2CcZtz1sOZYhuFwdipYKNEoxBmCcdpB4wavCdWM6v6J_p41C23JyYECFwbYgk-nH4k5KPDctdUBe6-F1FgWBWFGbfdmrcsxOTH86hA95nRgrckLEYNl79YPHc0ykoMUv_mZvBdjxrwuCGhmvITNdPJSR40iFcSk-tYqX7p6gsqZq_xhAeu2dbJnj678nfCe3wDf8DyRue8N5T6td2Ij1jIbfSgJxkTAATGduzlJqo0085IIleeLNlk")'}}></div>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Dashboard</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <img alt="Tutor's profile" className="size-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuHVJh8CWQlqo7WVlcvoZDV9pBKaZssrVanBpPrAz2Ri6aYaQm_Z5zqbOzdIdOP2rucg3ylUCr26BcgQLrXm8WKEs_eqHqvhwMsvy8SvJaWtqvV4k_FvYFqRY4ekEU4Pi-A_uiAaENoz7daG0g9nhLkwxns1Xis0n-5T52mPEgTU2hFrcZNYkvdVwIlT3rAjE8JNk4Z2wIYgaove0rdalWHW1-Nkmo6dPMy9rUZJIkXhXWfM25aboHWQlVNhK18f2Orep6HwOQTqM"/>
          </button>
        </div>
      </div>
      
      <div className="p-4 pt-6">
        <h1 className="tracking-light text-[32px] font-bold leading-tight text-left pb-4">Bienvenido, Dr. Carlos</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <Link to="/tutor/students" className="flex flex-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 flex-col hover:bg-slate-50 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[#0A2B4C]">group</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold leading-tight">12</h2>
              <p className="text-slate-500 text-sm font-normal leading-normal">Mis Estudiantes</p>
            </div>
          </Link>
          <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 flex-col">
            <span className="material-symbols-outlined text-[#0A2B4C]">assignment</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold leading-tight">8</h2>
              <p className="text-slate-500 text-sm font-normal leading-normal">Prácticas Asignadas</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-xl border-2 border-[#4A90E2] bg-[#4A90E2]/10 p-4 flex-col">
            <span className="material-symbols-outlined text-[#4A90E2]">pending_actions</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold leading-tight">3</h2>
              <p className="text-slate-500 text-sm font-normal leading-normal">Evaluaciones Pendientes</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 flex-col">
            <span className="material-symbols-outlined text-[#0A2B4C]">event_upcoming</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold leading-tight">5</h2>
              <p className="text-slate-500 text-sm font-normal leading-normal">Reuniones Programadas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-6">Acciones Rápidas</h3>
        <div className="flex flex-col gap-3">
          <Link to="/tutor/assign" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-[#0A2B4C] text-white text-base font-bold leading-normal tracking-[0.015em] w-full gap-3 hover:bg-[#0A2B4C]/90">
            <span className="material-symbols-outlined">manage_search</span>
            <span className="truncate">Gestionar Prácticas</span>
          </Link>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-slate-200 text-slate-800 text-base font-bold leading-normal tracking-[0.015em] w-full gap-3 hover:bg-slate-300">
            <span className="material-symbols-outlined">grading</span>
            <span className="truncate">Consultar Rúbricas</span>
          </button>
        </div>
      </div>

      <div className="px-4 pb-24">
        <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-8">Actividad Reciente</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 rounded-xl bg-white p-4 border border-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2B4C]/10">
              <span className="material-symbols-outlined text-[#0A2B4C]">upload_file</span>
            </div>
            <div className="flex flex-1 flex-col">
              <p className="font-semibold">Juan Pérez subió su informe.</p>
              <p className="text-sm text-slate-500">Hace 3 horas</p>
            </div>
          </div>
           <div className="flex items-center gap-4 rounded-xl bg-white p-4 border border-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2B4C]/10">
              <span className="material-symbols-outlined text-[#0A2B4C]">event</span>
            </div>
            <div className="flex flex-1 flex-col">
              <p className="font-semibold">Reunión con Ana Torres.</p>
              <p className="text-sm text-slate-500">Mañana a las 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-md items-center justify-around px-4">
          <button className="flex flex-col items-center gap-1 text-[#0A2B4C]">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-xs font-bold">Dashboard</span>
          </button>
          <Link to="/tutor/students" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0A2B4C]">
            <span className="material-symbols-outlined">school</span>
            <span className="text-xs font-medium">Estudiantes</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0A2B4C]">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-xs font-medium">Calendario</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0A2B4C]">
            <span className="material-symbols-outlined">chat</span>
            <span className="text-xs font-medium">Mensajes</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorDashboard;