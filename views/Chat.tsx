import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate();
    // Simple state to toggle between chat list and conversation view for demo purposes
    const [view, setView] = useState<'list' | 'conversation'>('list');

    if (view === 'conversation') {
        return (
            <div className="relative w-full flex flex-col min-h-screen bg-background-dark font-display">
                <header className="sticky top-0 z-10 flex items-center bg-background-dark/80 backdrop-blur-sm p-4 h-[72px] border-b border-slate-800">
                    <div className="flex size-12 shrink-0 items-center justify-start">
                        <button onClick={() => setView('list')} className="flex items-center justify-center h-10 w-10 rounded-full text-white">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                        <div className="relative">
                            <img alt="Foto de perfil de Ricardo Gomez" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRFJx6GUjXop9lqN4UQAVMu6W1dn1c37bHYvs68lWh2YF2-6W5KaMpQQsOqj0oJrL0Ecb5aOkFIAxkJWYaKXGTH9sWzP-7qUHADfhw5BRKRYkgicpZcZ2wi8vy_5UzDIlXddHEXJVSSra2C8cy64c7icndEFE9DAIE_3WZyjNOvsE4UGAuvT0tEWyMq39UtxVW0CWHDSMrtPOtZFpF0zSb0YK6rRdnQT_C8av2eguXtT6QAigo2ACHnoL6pN2BMDu7p-mibARbkLo"/>
                            <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-slate-800 rounded-full"></span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white font-bold leading-tight">Ricardo Gomez</p>
                            <p className="text-sm text-slate-400">Asesor Académico</p>
                        </div>
                    </div>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex items-center justify-center h-10 w-10 rounded-full text-white">
                            <span className="material-symbols-outlined">more_vert</span>
                        </button>
                    </div>
                </header>
                <main className="flex-grow flex flex-col px-4 pt-6 pb-24">
                    <div className="flex-1 space-y-6 overflow-y-auto">
                        <div className="text-center">
                            <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 rounded-full px-3 py-1">Hoy</span>
                        </div>
                        <div className="flex items-end gap-2 max-w-[80%]">
                            <img alt="Foto de perfil de Ricardo Gomez" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXNs36_VXN3MvuNIL4yfF0Tte6CCVw_c1uM9HRx82UmLxRY3wJVt0uD_pjsumcS-XtUSZv_eAT-lZ5MJlAw3DURmeZxQY-8Uflo2ZLd-gJKb10N4u55CwpmkGK14MA7mRS285DNRrtiSJ1r4BDvmm9lnkt7P15cm-dFLetuWI7DI7w0gtyeS75tQOz26s44deDH4P67DSC7Sv1Fpwfo49fnPpFKdeCji_EZpp98I9FG5ggRQQULQ2_SDICgZTe3djTJ6lq7iolrTU"/>
                            <div className="flex-1">
                                <div className="bg-slate-800 rounded-xl rounded-bl-none p-3">
                                    <p className="text-slate-200 text-sm leading-relaxed">
                                        ¡Hola! Claro que sí. Revisa la sección de "Documentos" en la app. Allí encontrarás la plantilla y las instrucciones.
                                    </p>
                                </div>
                                <p className="text-xs text-slate-400 mt-1 pl-1">09:30 AM</p>
                            </div>
                        </div>
                        <div className="flex items-end gap-2 max-w-[80%] self-end ml-auto">
                            <div className="flex-1">
                                <div className="bg-primary rounded-xl rounded-br-none p-3">
                                    <p className="text-white text-sm leading-relaxed">
                                        Perfecto, muchas gracias. Tengo otra pregunta, ¿hay algún formato específico para el informe mensual?
                                    </p>
                                </div>
                                <p className="text-xs text-slate-400 mt-1 pr-1 text-right">09:28 AM</p>
                            </div>
                        </div>
                        <div className="flex items-end gap-2 max-w-[80%] self-end ml-auto">
                            <div className="flex-1">
                                <div className="bg-primary rounded-xl rounded-br-none p-3">
                                    <p className="text-white text-sm leading-relaxed">
                                        Buenos días, profesor Ricardo. Espero que se encuentre bien.
                                    </p>
                                </div>
                                <p className="text-xs text-slate-400 mt-1 pr-1 text-right">09:27 AM</p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark border-t border-slate-800">
                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center h-12 w-12 shrink-0 rounded-full text-slate-400 hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-2xl">add</span>
                        </button>
                        <div className="flex-1 relative">
                            <input className="w-full h-12 rounded-full bg-slate-800 border-none pl-5 pr-12 focus:ring-2 focus:ring-primary text-slate-200 placeholder-slate-400" placeholder="Escribe un mensaje..." type="text"/>
                        </div>
                        <button className="flex items-center justify-center h-12 w-12 shrink-0 rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-2xl">send</span>
                        </button>
                    </div>
                </footer>
            </div>
        );
    }

  return (
    <div className="relative w-full flex flex-col min-h-screen bg-background-dark font-display">
      <header className="sticky top-0 z-10 flex items-center bg-background-dark/80 backdrop-blur-sm p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <Link to="/" className="flex items-center justify-center h-10 w-10 rounded-full text-white">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Mensajes</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-grow pb-28">
        <div className="sticky top-[72px] bg-background-dark/80 backdrop-blur-sm z-10">
          <div className="flex border-b border-slate-700 px-4 gap-8">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4 flex-1" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Mensajes</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-400 pb-[13px] pt-4 flex-1" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Historial</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-400 pb-[13px] pt-4 flex-1" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Contactos</p>
            </a>
          </div>
        </div>

        <div className="p-4 flex gap-3">
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full h-12 pl-10 pr-4 rounded-xl border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary" placeholder="Buscar empresa o mensaje..." type="text"/>
          </div>
          <button className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-800 text-slate-300">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>

        <div className="px-4 space-y-3">
          <div onClick={() => setView('conversation')} className="bg-slate-800 rounded-xl p-4 flex gap-4 items-start cursor-pointer hover:bg-slate-700/80 transition-colors">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjowxiN6e2aCJV8v-cRdyWDkxMIKiMT8nYZ0YSGE8zYxUGjZVGqlAnKzwL_F4RINHua6meioArHBTGlj_K8jIcNH3JH0zpwOPpYSeQ_79bVc9wOPfI_R63GTJy9L_hkzsoJkRKv6gbRBjJ3f0HKk3Q5t-tNjyef_Oph70HHtWOmsG1xz1MSmW4OOwi3qD8bc1_m0sazx9aPPdsom10LwExztHniGaJ-xWhIt6loWo9D5HJ2BjaJPh1ctTBWv2PeCnRIaZSeIjMTMI")'}}></div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-white">Tech Solutions S.A.</p>
                <p className="text-xs text-slate-500">10:45 AM</p>
              </div>
              <p className="text-sm text-slate-400">¡Hola! Confirmamos la recepción de los documentos para la práctica...</p>
            </div>
          </div>
          <div onClick={() => setView('conversation')} className="bg-slate-800 rounded-xl p-4 flex gap-4 items-start cursor-pointer hover:bg-slate-700/80 transition-colors">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYP4wR4eDc7S-ugLGSp5E8sRYZg_FlAwuizl5rBoodX-iJNW4-2l6TmE6IMjQyx7GUhX34lrHHANUuAm1LIEbXH19nFOnYDO9V1cnLw-Q6k5MtaqVL7Ti0U_iFv8qCl71eOeOq20_EirBU7mCVwnTiwkifvx1ML9dGpcDU7DCkHHWMScoSMFsPfLn6Xov9xAWY9To0kpSogQrgcjUc8WJe6vIUcDOqWIfz0lXWEeOeZFScdu0_reM2uVFTwTWHB4P_3THeEWhE700")'}}></div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-white">Innovatec</p>
                <p className="text-xs text-slate-500">Ayer</p>
              </div>
              <p className="text-sm text-slate-400">Hemos seleccionado a dos candidatos para la siguiente fase del proceso...</p>
            </div>
          </div>
          <div onClick={() => setView('conversation')} className="bg-slate-800 rounded-xl p-4 flex gap-4 items-start cursor-pointer hover:bg-slate-700/80 transition-colors">
            <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYP4wR4eDc7S-ugLGSp5E8sRYZg_FlAwuizl5rBoodX-iJNW4-2l6TmE6IMjQyx7GUhX34lrHHANUuAm1LIEbXH19nFOnYDO9V1cnLw-Q6k5MtaqVL7Ti0U_iFv8qCl71eOeOq20_EirBU7mCVwnTiwkifvx1ML9dGpcDU7DCkHHWMScoSMFsPfLn6Xov9xAWY9To0kpSogQrgcjUc8WJe6vIUcDOqWIfz0lXWEeOeZFScdu0_reM2uVFTwTWHB4P_3THeEWhE700")'}}>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-slate-800"></span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-white">Data Corp</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-slate-500">23/05/24</p>
                  <span className="flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded-full">2</span>
                </div>
              </div>
              <p className="text-sm text-primary-400 font-semibold text-primary">Re: Nuevas vacantes disponibles para el próximo semestre</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-6 right-4 z-20">
        <button className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-3xl">edit</span>
        </button>
      </footer>
    </div>
  );
}

export default Chat;