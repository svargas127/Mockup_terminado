import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentManagement = () => {
    const navigate = useNavigate();
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden text-slate-900 font-display">
      <div className="sticky top-0 z-10 flex items-center bg-white p-4 pb-2 justify-between border-b border-slate-200">
        <div onClick={() => navigate('/tutor')} className="flex size-12 shrink-0 items-center cursor-pointer">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Gestión de Estudiantes</h2>
      </div>

      <div className="px-4 py-3 sticky top-[72px] z-10 bg-background-light">
        <div className="flex items-center gap-2">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-12 bg-white border border-slate-200">
                <div className="text-slate-500 flex items-center justify-center pl-4 rounded-l-lg">
                    <span className="material-symbols-outlined text-2xl">search</span>
                </div>
                <input className="flex w-full min-w-0 flex-1 border-none bg-transparent h-full px-4 text-base focus:ring-0" placeholder="Buscar por nombre, código..." />
            </div>
            <button className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500">
                <span className="material-symbols-outlined text-2xl">filter_list</span>
            </button>
        </div>
      </div>

      <div className="flex flex-col gap-px bg-slate-200 pb-24">
        {/* Student 1 */}
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-3 justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjoZ80zrKod1_rOyKJGfw1Z5xcRa46BLD62AjMFUP4XNSlxa-z00qOI-34Q1LdnUwCQEB8PX-ddpgEP3hJqZgaKIE5h870gEl-zuDT6gAxfQ79BYHL49P4ReSz39j-_p-BInrOQ7N3DvaT-gX0fnWNb8IN-Y21IlAnszMlS-WuONNFS0RzJZ0lFJdbnFz_Ni52XpEXd8rwBMERjoSTtdryxzP_tYCw1nbstRjBeTgRcg5SgrCKgGUHorIoGaFxT-QD01y_1kdMtJE")'}}></div>
            <div className="flex flex-col justify-center">
              <p className="text-base font-medium leading-normal line-clamp-1">Ana María Rojas</p>
              <p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">Ingeniería de Software - 202410123</p>
              <div className="mt-1.5 flex items-center">
                <div className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">En Proceso</div>
              </div>
            </div>
          </div>
          <button className="shrink-0 text-slate-500">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
         {/* Student 2 */}
         <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-3 justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8WoP6SAg5lIm5qdyMzFJOzmYi_yKMhdLDWUzjBW2ZMMHEMVb3yrsgNrAbFxdC4pWBmtc88DEVAxmBEi0meJeDpvRhdz73yMniYPKsO4EGlc51vAIam88ISLtergzvuyMoSvjp23pjmc0dtIgx0yY10wpAD1KWNAlug5rNhJfzJyZItFEDzqb139YDfqeaMAhbqo2G2Sd_COee4zhnGEWRBhPT4BcjDCAbpsoADCBhTGkc-Rv13TF_Pj42pKkPRO73rOdVDx5wR0U")'}}></div>
            <div className="flex flex-col justify-center">
              <p className="text-base font-medium leading-normal line-clamp-1">Carlos Alberto Pérez</p>
              <p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">Diseño Industrial - 202410456</p>
              <div className="mt-1.5 flex items-center">
                <div className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">Finalizada</div>
              </div>
            </div>
          </div>
          <button className="shrink-0 text-slate-500">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
      
      <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#137fec] text-white shadow-lg">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}

export default StudentManagement;