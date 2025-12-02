import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-dark font-display">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-background-dark/80 p-4 pb-2 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAabN-o0oRW_XaD5gWqFRBsy2DzYRybhwlOtsBS_J2vB0hgsOb_N8Dqv9rkrPZTSq8cG-xtVENqtvd-rJudQsjdPbPVLdQRizjqg5-GiU4rzSdvZ4w2F6p44_WARWc4yuVvQgw8hTud9geNQ34KGkOA7IJk9G6ZOzkQWXlQJYAzPLM4lxxn7mqYr2bOAF9EeBzZ8DwY6XQ7R57_2S0iIViYvEWn-j0IqWQmoQIbJQhK5RQjJ3cIXN4oAWDRFeSa-jC3u2htMD-PusA")'}}></div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Hola, Alejandro</h2>
        </div>
        <div className="flex items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-background-dark"></span>
          </button>
        </div>
      </div>

      <main className="flex-grow pb-28">
        {/* Hero Card: Prácticas Actuales */}
        <div className="p-4">
          <Link to="/tracking">
            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-slate-800/50 overflow-hidden cursor-pointer hover:bg-slate-800 transition-colors">
              <div className="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqtFOqqlT6VC_iNHgdJdKlCy5A-Ps-Uplt5wQzCTC0k5_K22yUa97gXNiSE9-zANxbMWaP8VRVaDqSdR0SXvZLqVYZHwvZJFPzszN1M5ZmUCxiJKGXbpB62EjrZGRNL1dKmA-hbY204Cp42sT_DUnlCyZfKPlR5y3yCBCR7gX3FA4vkWSLc52Ek6CXRzFleY-fhKV0Ii2BDbxqj1njiFzEgXo5blMMgnHZWwull2tvN9dD6FAWKmPwhYCveN8WYUrvckgug4OvTQQ")'}}></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-4">
                <div>
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Práctica Actual</p>
                  <p className="text-slate-400 text-base font-normal leading-normal">Software Engineer Intern en Tech Solutions Inc.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm font-normal leading-normal">Semana 8 de 16 completada</p>
                    <p className="text-white text-sm font-medium leading-normal">50%</p>
                  </div>
                  <div className="rounded-full bg-slate-700 h-2">
                    <div className="h-2 rounded-full bg-primary" style={{width: '50%'}}></div>
                  </div>
                </div>
                <button className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal mt-2 hover:bg-primary/90">
                  <span className="truncate">Registrar Horas</span>
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Sección de Acceso Rápido */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-2">Acceso Rápido</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
          <Link to="/vacancies" className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-slate-800/50 cursor-pointer hover:bg-slate-800 transition-colors">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <p className="text-white text-sm font-medium leading-normal text-center">Buscar Ofertas</p>
          </Link>
          <Link to="/documents" className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-slate-800/50 cursor-pointer hover:bg-slate-800 transition-colors">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">folder_managed</span>
            </div>
            <p className="text-white text-sm font-medium leading-normal text-center">Documentos</p>
          </Link>
          <Link to="/tracking" className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-slate-800/50 cursor-pointer hover:bg-slate-800 transition-colors">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <p className="text-white text-sm font-medium leading-normal text-center">Calendario</p>
          </Link>
          <Link to="/chat" className="flex flex-col items-center justify-center gap-2 rounded-xl p-4 bg-slate-800/50 cursor-pointer hover:bg-slate-800 transition-colors">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <p className="text-white text-sm font-medium leading-normal text-center">Contactar Tutor</p>
          </Link>
        </div>

        {/* Section Header: Estado de Postulaciones */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Estado de Postulaciones</h3>
        <div className="flex flex-col gap-2 px-4">
          {/* List Item 1 */}
          <div className="flex items-center gap-4 bg-slate-800/50 p-3 min-h-[72px] justify-between rounded-xl">
            <div className="flex items-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAStpA3_Hcwkt3oFj1ZaqMQg8TqwPKa5clImhmGG__6kXLaql6dltsh44N4MgoFCnChkN1QKLXyVXT1oiD__OBiV6zov0HyHvbGBrJJYDgIuomkks7OfaQSmPEo1eTQbY30sKAs48pnCSdMx9DeUGjtDNR6IFYJ2YA--t3r4GV65Wb9Zjl1EKTg6VdhLrFZW0N348_un6FsLKyv5ymAzCESsgXuDOiA-iw1mE41H-Ni4XZt9SGgoKCjmr8ds9cTcNPJFvutibnGBss")'}}></div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Innovate Corp</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <p className="text-amber-400 text-sm font-normal leading-normal line-clamp-2">En Revisión</p>
                </div>
              </div>
            </div>
            <div className="shrink-0"><Link to="/tracking" className="text-primary text-sm font-medium leading-normal">Ver</Link></div>
          </div>
          {/* List Item 2 */}
          <div className="flex items-center gap-4 bg-slate-800/50 p-3 min-h-[72px] justify-between rounded-xl">
            <div className="flex items-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyi8V4aItcJ_CX-ok1mFUVsG7zFU6r-TmHMc0wIV04e91OaWVSracVkRVcG3ChXeXQFFCXw08gJU-a_7r0xfGS5jQPM5rxomeKyWViFRMMqg2VVgIq6dTCJTwZ83i6AOKCvou1oCCIArBT0OXpsE-FPsjsuMYNVVnsbkMG2b9NI8YP5AWgdnkvTCfjxm95Ugo6lr8dRXZHT3Q-0m9l9wUstmBtmH0oGkPwom3LYWJpQD5u9UC4E2oj2Djm2cSNOv0CGteg568xQDc")'}}></div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Quantum Dynamics</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <p className="text-green-500 text-sm font-normal leading-normal line-clamp-2">Aceptada</p>
                </div>
              </div>
            </div>
            <div className="shrink-0"><Link to="/tracking" className="text-primary text-sm font-medium leading-normal">Ver</Link></div>
          </div>
        </div>
      </main>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-background-dark/95 backdrop-blur-sm border-t border-slate-800 z-20">
        <div className="flex h-full items-center justify-around px-4">
          <Link to="/" className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
            <span className="text-xs font-bold">Inicio</span>
          </Link>
          <Link to="/vacancies" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">work</span>
            <span className="text-xs font-medium">Ofertas</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors relative">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span className="text-xs font-medium">Mensajes</span>
            <span className="absolute top-[-2px] right-[10px] h-4 w-4 text-[10px] flex items-center justify-center rounded-full bg-primary text-white">3</span>
          </Link>
          <Link to="/tracking" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span className="text-xs font-medium">Perfil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;