import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssignPractice = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f0f2f5] font-display text-[#0A2342] min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-[#0A2342] px-4 shadow-md">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold text-white">Asignar Práctica</h1>
        <div className="size-10"></div>
      </header>
      
      <main className="flex-1 p-4 pb-28">
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-bold">Estudiante</h2>
          <div className="flex cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:bg-slate-50">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0A2342]/10 text-[#0A2342]">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Buscar y seleccionar estudiante...</p>
              <p className="text-sm text-[#5a6472]">Toca para buscar</p>
            </div>
            <span className="material-symbols-outlined text-[#5a6472]">search</span>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-bold">Vacante</h2>
          <div className="flex cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:bg-slate-50">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0A2342]/10 text-[#0A2342]">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Buscar vacante o empresa...</p>
              <p className="text-sm text-[#5a6472]">Toca para buscar</p>
            </div>
            <span className="material-symbols-outlined text-[#5a6472]">search</span>
          </div>
        </section>

        <section className="mb-6">
            <h2 className="mb-2 text-lg font-bold">Período de la Práctica</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                <label className="mb-1 block text-sm font-medium text-[#5a6472]">Fecha de Inicio</label>
                <div className="relative">
                    <input className="w-full rounded-lg border-[#e2e8f0] bg-white p-3 pl-10 shadow-sm focus:border-[#0A2342] focus:ring-[#0A2342]" placeholder="DD/MM/AAAA" type="date"/>
                    <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6472]">calendar_today</span>
                </div>
                </div>
                <div>
                <label className="mb-1 block text-sm font-medium text-[#5a6472]">Fecha de Fin</label>
                <div className="relative">
                    <input className="w-full rounded-lg border-[#e2e8f0] bg-white p-3 pl-10 shadow-sm focus:border-[#0A2342] focus:ring-[#0A2342]" placeholder="DD/MM/AAAA" type="date"/>
                    <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6472]">calendar_today</span>
                </div>
                </div>
            </div>
        </section>

        <section>
            <h2 className="mb-2 text-lg font-bold">Documentos de Vinculación</h2>
            <div className="rounded-lg border-2 border-dashed border-[#e2e8f0] bg-white p-6 text-center shadow-sm">
                <div className="flex justify-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-[#0A2342]/10 text-[#0A2342]">
                        <span className="material-symbols-outlined text-4xl">upload_file</span>
                    </div>
                </div>
                <button className="mt-4 font-semibold text-[#0A2342]">Adjuntar Documentos</button>
                <p className="mt-1 text-xs text-[#5a6472]">PDF, DOCX (Max 5MB)</p>
            </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-[#f0f2f5] p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button onClick={() => { alert('Estudiante vinculado correctamente'); navigate('/tutor'); }} className="w-full rounded-lg bg-[#0A2342] py-4 text-lg font-bold text-white transition-colors hover:bg-[#103460]">
            Vincular Estudiante
        </button>
      </footer>
    </div>
  );
}

export default AssignPractice;