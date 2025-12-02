import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tracking = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display">
      <header className="flex shrink-0 items-center justify-between bg-background-dark p-4 pb-2 sticky top-0 z-10 border-b border-white/10">
        <button onClick={() => navigate(-1)} className="text-white flex size-10 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-center text-white">Seguimiento de Práctica</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-1 px-4 py-4 pb-28">
        <div className="mb-6 rounded-lg bg-white/5 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#233648]">
              <span className="material-symbols-outlined text-3xl text-primary">person</span>
            </div>
            <div>
              <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">Ana María Rojas</p>
              <p className="text-sm font-normal leading-normal text-[#92adc9]">Ingeniería de Software</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative flex pb-8 timeline-item">
            <div className="timeline-connector absolute left-5 top-5 -ml-px h-full w-0.5 bg-[#233648]"></div>
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined">check</span>
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-white">1. Plan de Práctica</h3>
                <p className="text-xs text-[#92adc9]">15 Feb 2024</p>
              </div>
              <p className="mt-1 text-sm text-[#92adc9]">Estado: Aprobado por tutor</p>
              <div className="mt-4 rounded-xl bg-[#233648] p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="text-sm font-medium text-white">Plan_Practica_AnaR.pdf</span>
                  </div>
                  <button className="text-[#92adc9] hover:text-white">
                    <span className="material-symbols-outlined text-xl">download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex pb-8 timeline-item">
            <div className="timeline-connector absolute left-5 top-5 -ml-px h-full w-0.5 bg-[#233648]"></div>
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined">check</span>
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-white">2. Informe de Avance 1</h3>
                <p className="text-xs text-[#92adc9]">15 Mar 2024</p>
              </div>
              <p className="mt-1 text-sm text-[#92adc9]">Estado: Revisado con comentarios</p>
              <div className="mt-4 rounded-xl bg-[#233648] p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="text-sm font-medium text-white">Informe_Avance1_AnaR.pdf</span>
                  </div>
                  <button className="text-[#92adc9] hover:text-white">
                    <span className="material-symbols-outlined text-xl">download</span>
                  </button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-white/5 p-3">
                <p className="text-sm font-semibold text-white">Comentario del Tutor:</p>
                <p className="mt-1 text-sm text-[#92adc9]">Buen avance. Por favor, detalla más las métricas de rendimiento mencionadas en la sección 3.</p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-8 timeline-item">
            <div className="timeline-connector absolute left-5 top-5 -ml-px h-full w-0.5 bg-[#233648]"></div>
            <div className="flex-shrink-0">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-4 ring-primary/20">
                <span className="text-white font-bold text-lg">3</span>
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-primary">3. Informe de Avance 2</h3>
                <p className="text-xs text-[#92adc9]">Fecha límite: 15 Abr 2024</p>
              </div>
              <p className="mt-1 text-sm text-[#92adc9]">Estado: Pendiente de entrega</p>
              <button className="mt-4 w-full h-12 rounded-xl border border-primary text-primary font-bold text-sm hover:bg-primary/10 flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-xl">upload_file</span>
                Subir Documento
              </button>
            </div>
          </div>
          <div className="relative flex pb-8 timeline-item">
            <div className="timeline-connector absolute left-5 top-5 -ml-px h-full w-0.5 bg-[#233648]"></div>
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#233648] text-[#92adc9]">
                <span className="font-bold text-lg">4</span>
              </div>
            </div>
            <div className="ml-4 w-full">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-[#92adc9]">4. Informe Final</h3>
                <p className="text-xs text-[#92adc9]">Fecha límite: 15 May 2024</p>
              </div>
              <p className="mt-1 text-sm text-[#92adc9]">Estado: Bloqueado</p>
            </div>
          </div>
          <div className="relative flex pb-8 timeline-item">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#233648] text-[#92adc9]">
                <span className="material-symbols-outlined">flag</span>
              </div>
            </div>
            <div className="ml-4 w-full">
              <h3 className="text-base font-bold text-[#92adc9]">Finalización de Práctica</h3>
              <p className="mt-1 text-sm text-[#92adc9]">Estado: Bloqueado</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tracking;