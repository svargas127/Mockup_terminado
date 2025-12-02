import React from 'react';
import { Link, useParams } from 'react-router-dom';

const VacancyDetail = () => {
  const { id } = useParams();

  return (
    <div className="relative w-full flex flex-col min-h-screen bg-background-dark font-display">
      <header className="sticky top-0 z-10 flex items-center bg-background-dark/80 backdrop-blur-sm p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <Link to="/vacancies" className="flex items-center justify-center h-10 w-10 rounded-full text-white">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Desarrollador de Software Jr.</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">bookmark_border</span>
          </button>
        </div>
      </header>

      <main className="flex-grow pb-28">
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl h-24 w-24" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjowxiN6e2aCJV8v-cRdyWDkxMIKiMT8nYZ0YSGE8zYxUGjZVGqlAnKzwL_F4RINHua6meioArHBTGlj_K8jIcNH3JH0zpwOPpYSeQ_79bVc9wOPfI_R63GTJy9L_hkzsoJkRKv6gbRBjJ3f0HKk3Q5t-tNjyef_Oph70HHtWOmsG1xz1MSmW4OOwi3qD8bc1_m0sazx9aPPdsom10LwExztHniGaJ-xWhIt6loWo9D5HJ2BjaJPh1ctTBWv2PeCnRIaZSeIjMTMI")'}}></div>
              <div className="flex flex-col">
                <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Tech Solutions S.A.</p>
                <p className="text-slate-400 text-base font-normal leading-normal">Innovación y Desarrollo de Software</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-3 sticky top-[72px] bg-background-dark/80 backdrop-blur-sm">
          <div className="flex border-b border-slate-700 px-4 gap-8">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Detalles</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-400 pb-[13px] pt-4" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Empresa</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-400 pb-[13px] pt-4" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Beneficios</p>
            </a>
          </div>
        </div>

        <div className="flex gap-3 p-4 flex-wrap">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-3 pr-3">
            <p className="text-primary text-sm font-medium leading-normal">Remunerada</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-700 pl-3 pr-3">
            <p className="text-slate-300 text-sm font-medium leading-normal">Remoto</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-700 pl-3 pr-3">
            <p className="text-slate-300 text-sm font-medium leading-normal">Medio Tiempo</p>
          </div>
        </div>

        <div className="px-4 mt-4 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300">
              <span className="material-symbols-outlined text-xl">location_on</span>
            </div>
            <div>
              <p className="text-sm text-slate-400">Ubicación</p>
              <p className="font-semibold text-white">Bogotá, Colombia (Remoto)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300">
              <span className="material-symbols-outlined text-xl">payments</span>
            </div>
            <div>
              <p className="text-sm text-slate-400">Salario</p>
              <p className="font-semibold text-white">$1.200.000 COP / Mes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300">
              <span className="material-symbols-outlined text-xl">schedule</span>
            </div>
            <div>
              <p className="text-sm text-slate-400">Jornada</p>
              <p className="font-semibold text-white">20 horas / semana</p>
            </div>
          </div>
        </div>

        <div className="px-4 pt-8">
          <h2 className="text-white tracking-light text-2xl font-bold leading-tight pb-3">Descripción del Puesto</h2>
          <p className="text-slate-400 leading-relaxed">Estamos buscando un desarrollador de software junior apasionado y motivado para unirse a nuestro equipo. El candidato ideal tendrá la oportunidad de trabajar en proyectos innovadores, colaborando con desarrolladores senior para diseñar, desarrollar y mantener aplicaciones de alta calidad.</p>
        </div>

        <div className="px-4 pt-8">
          <h2 className="text-white tracking-light text-2xl font-bold leading-tight pb-3">Requisitos</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Estudiante de 7mo semestre en adelante de Ingeniería de Sistemas o carreras afines.</li>
            <li>Conocimientos básicos en JavaScript, HTML y CSS.</li>
            <li>Familiaridad con algún framework como React, Angular o Vue.js es un plus.</li>
            <li>Habilidades de comunicación y trabajo en equipo.</li>
            <li>Proactividad y ganas de aprender.</li>
          </ul>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark border-t border-slate-800">
        <Link to={`/apply/${id || '2'}`} className="w-full bg-primary text-white font-bold h-12 rounded-xl flex items-center justify-center text-base hover:bg-primary/90">
            Postularme
        </Link>
      </footer>
    </div>
  );
}

export default VacancyDetail;