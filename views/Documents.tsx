import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Documents = () => {
    const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark font-display">
      <div className="flex items-center bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-white/10">
        <div className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer" onClick={() => navigate('/')}>
          <span className="material-symbols-outlined !text-2xl">arrow_back</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Gestión de Documentos</h2>
        <div className="flex size-12 shrink-0 items-center justify-end"></div>
      </div>
      
      <div className="flex flex-col gap-6 p-4">
        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-4 py-4 text-white shadow-lg transition-all hover:bg-primary/90 active:scale-95">
          <span className="material-symbols-outlined !text-3xl">upload_file</span>
          <span className="text-base font-bold leading-normal">Subir Hoja de Vida</span>
        </button>

        <div className="flex flex-col gap-2">
          <div className="flex gap-6 justify-between">
            <p className="text-white text-base font-medium leading-normal">Progreso: 50% completado</p>
          </div>
          <div className="rounded-lg bg-slate-700/50">
            <div className="h-2 rounded-lg bg-primary" style={{width: '50%'}}></div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {/* CV */}
          <div className="flex flex-col gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
            <div className="flex justify-between items-center">
                <p className="text-white text-base font-semibold leading-normal">Hoja_de_vida_Juan_Perez.pdf</p>
                <span className="material-symbols-outlined !text-2xl text-slate-400 cursor-pointer">cancel</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="relative h-2 w-full flex-1 rounded-full bg-slate-700/50">
                    <div className="absolute inset-y-0 left-0 h-2 rounded-full bg-primary" style={{width: '75%'}}></div>
                </div>
                <span className="text-slate-400 text-sm font-medium">75%</span>
            </div>
          </div>

          <div className="flex gap-4 bg-slate-900/50 p-4 rounded-xl items-center">
            <div className="flex items-start gap-4 flex-grow">
              <div className="text-green-500 flex items-center justify-center rounded-lg bg-green-500/10 shrink-0 size-12">
                <span className="material-symbols-outlined !text-3xl">check_circle</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-semibold leading-normal">Hoja de Vida / CV</p>
                <p className="text-slate-400 text-sm font-normal leading-normal">Subido exitosamente</p>
                <p className="text-green-500 text-sm font-medium leading-normal">Completado</p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Reemplazar</span>
              </button>
            </div>
          </div>

          {/* Convenio */}
          <div className="flex gap-4 bg-slate-900/50 p-4 rounded-xl items-center">
            <div className="flex items-start gap-4 flex-grow">
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                <span className="material-symbols-outlined !text-3xl">hourglass_top</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-semibold leading-normal">Convenio de Práctica</p>
                <p className="text-slate-400 text-sm font-normal leading-normal">Subido el 15/08/2023</p>
                <p className="text-primary text-sm font-medium leading-normal">En Revisión</p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-800 text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Ver</span>
              </button>
            </div>
          </div>
          
           {/* Rejected Example */}
           <div className="flex gap-4 bg-slate-900/50 p-4 rounded-xl items-center">
            <div className="flex items-start gap-4 flex-grow">
              <div className="text-red-500 flex items-center justify-center rounded-lg bg-red-500/10 shrink-0 size-12">
                <span className="material-symbols-outlined !text-3xl">cancel</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-semibold leading-normal">Afiliación a ARL</p>
                <p className="text-slate-400 text-sm font-normal leading-normal">Revisado el 12/08/2023</p>
                <p className="text-red-500 text-sm font-medium leading-normal">Rechazado - Ver comentarios</p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Reemplazar</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Documents;