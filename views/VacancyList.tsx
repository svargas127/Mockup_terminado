import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VacancyList = () => {
    const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark font-display">
      <header className="flex items-center bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
            <Link to="/" className="text-white"><span className="material-symbols-outlined text-2xl">arrow_back</span></Link>
        </div>
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Vacantes</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
        </div>
      </header>

      <div className="px-4 pt-3 pb-2">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-gray-500 flex border-none bg-[#192633] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#192633] focus:border-none h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Buscar vacante..." />
          </div>
        </label>
      </div>

      <div className="flex gap-3 px-4 py-1 overflow-x-auto">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/30 pl-4 pr-2">
          <p className="text-primary text-sm font-medium leading-normal">Programa</p>
          <span className="material-symbols-outlined text-primary text-lg">expand_more</span>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#192633] pl-4 pr-2">
          <p className="text-gray-300 text-sm font-medium leading-normal">Área</p>
          <span className="material-symbols-outlined text-gray-300 text-lg">expand_more</span>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#192633] pl-4 pr-2">
          <p className="text-gray-300 text-sm font-medium leading-normal">Empresa</p>
          <span className="material-symbols-outlined text-gray-300 text-lg">expand_more</span>
        </button>
      </div>

      <main className="flex-1 px-2 py-4 pb-24">
        {/* Vacancy Card 1 */}
        <div className="p-2 cursor-pointer" onClick={() => navigate('/vacancies/1')}>
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-[#192633] hover:bg-[#233648] transition-colors">
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm font-normal leading-normal">Innovatech Solutions</p>
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Practicante de Marketing Digital</p>
                  <p className="text-gray-400 text-sm font-normal leading-normal pt-1">Armenia, Presencial</p>
                </div>
                <img className="h-12 w-12 rounded-lg object-contain bg-white p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClkESKnJZG-kXwCDSxIdQnIT8DKOTYtHX7UQcfAKG0DuPLHde8TQMtNJFdHC5qLmzLfdxgftBOuRuZ_2CnidCuqWv3IOFaz8ERg9hQadASfO1HgTuA5yQSnT4iRpb9PNs5stoPfCohN65u8I5ck3ZFC00HbESl2DDPwgBbj5D7I4xdwmxpOBuMcLDDqrnUi6IBNf-vR2xZghYnUVgmZMNSfbFoWJbGvoAKma90JE0hwT0sGP0zMvQmvwN-vM_jWMjDbFTNbcvZC4Q" alt="Logo"/>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button className="flex items-center justify-center rounded-lg h-9 w-9 border border-gray-600 text-gray-300 hover:bg-gray-700">
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
                <button className="flex items-center justify-center rounded-lg h-9 w-9 border border-gray-600 text-gray-300 hover:bg-gray-700">
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vacancy Card 2 */}
        <div className="p-2 cursor-pointer" onClick={() => navigate('/vacancies/2')}>
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-[#192633] hover:bg-[#233648] transition-colors">
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm font-normal leading-normal">Tech Solutions S.A.</p>
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Desarrollador de Software Jr.</p>
                  <p className="text-gray-400 text-sm font-normal leading-normal pt-1">Remoto</p>
                </div>
                <img className="h-12 w-12 rounded-lg object-contain bg-white p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV2lGAXWiIXtYOgHBRQla_35K7aL6JL1qarSFpRLGB86LnSd2Os5-f2pq3zr2KSoNgpQJDo76aT_ZCooqGe-gVn4hcxro2SYIF7bq51q-q7j--jDlHbt7dCI6DARqTiyZ4vy5AFNQ1VwDt5X-I-sKzavjsFV8rrnUOJ2u1TrGvWRtt7p6Hk6EbZpezbX0Dvp3Vm0EUuNbK6LiX7GSRCLkpUSW-LaQAJaYo_Q076e0B05oCa1oLqddO_3YDZ2OAxI1rHzVpszMOQ68" alt="Logo"/>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button className="flex items-center justify-center rounded-lg h-9 w-9 border border-gray-600 text-gray-300">
                    <span className="material-symbols-outlined text-xl">edit</span>
                </button>
                <button className="flex items-center justify-center rounded-lg h-9 w-9 border border-gray-600 text-gray-300">
                    <span className="material-symbols-outlined text-xl">delete</span>
                </button>
               </div>
            </div>
          </div>
        </div>

      </main>
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center justify-center rounded-full bg-primary h-14 w-14 shadow-lg hover:bg-primary/90">
          <span className="material-symbols-outlined text-background-dark text-3xl">add</span>
        </button>
      </div>
    </div>
  );
}

export default VacancyList;