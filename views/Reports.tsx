import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
    const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display text-white">
      <header className="flex shrink-0 items-center justify-between bg-background-dark p-4 sticky top-0 z-10 border-b border-white/10">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-center">Informes y Reportes</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 p-4">
        <section className="mb-6">
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Filtros</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#92adc9]">Rango de Fechas</label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#92adc9]">calendar_today</span>
                <select className="w-full rounded-xl border-none bg-[#182430] py-3 pl-10 pr-4 text-white placeholder:text-[#92adc9] focus:ring-2 focus:ring-primary/50">
                  <option>Últimos 30 días</option>
                  <option>Últimos 3 meses</option>
                  <option>Este año</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#92adc9]">Tipo de Informe</label>
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#92adc9]">assessment</span>
                <select className="w-full rounded-xl border-none bg-[#182430] py-3 pl-10 pr-4 text-white placeholder:text-[#92adc9] focus:ring-2 focus:ring-primary/50">
                  <option>Rendimiento de Estudiantes</option>
                  <option>Vacantes Populares</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-xl bg-[#182430] p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-base font-semibold">Rendimiento de Estudiantes</p>
              <p className="text-sm text-[#92adc9]">01 Feb 2024 - 29 Feb 2024</p>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90">
              <span className="material-symbols-outlined text-base">download</span>
              Exportar
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Resultados</h2>
          {/* Result Item */}
          <div className="mb-4 flex flex-col gap-3 rounded-xl bg-[#182430] p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Carlos Santana</p>
              <p className="text-sm text-green-400">Activo</p>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><p className="text-sm text-[#92adc9]">Postulaciones</p><p className="text-lg font-bold">8</p></div>
              <div><p className="text-sm text-[#92adc9]">Entrevistas</p><p className="text-lg font-bold">3</p></div>
              <div><p className="text-sm text-[#92adc9]">Contratado</p><p className="text-lg font-bold">1</p></div>
            </div>
          </div>
           {/* Result Item */}
           <div className="mb-4 flex flex-col gap-3 rounded-xl bg-[#182430] p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Laura Jiménez</p>
              <p className="text-sm text-green-400">Activo</p>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><p className="text-sm text-[#92adc9]">Postulaciones</p><p className="text-lg font-bold">12</p></div>
              <div><p className="text-sm text-[#92adc9]">Entrevistas</p><p className="text-lg font-bold">5</p></div>
              <div><p className="text-sm text-[#92adc9]">Contratado</p><p className="text-lg font-bold">0</p></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Reports;