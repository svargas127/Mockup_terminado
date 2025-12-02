import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display">
      <header className="flex shrink-0 items-center justify-between bg-background-dark p-4 pb-2 sticky top-0 z-10 border-b border-white/10">
        <button onClick={() => navigate(-1)} className="text-white flex size-10 items-center justify-center">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-center text-white">Postular a Vacante</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-4 py-4 pb-28">
        {/* Vacancy Summary Card */}
        <div className="mb-6 rounded-lg bg-white/5 p-4">
          <div className="flex flex-col items-stretch justify-start">
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1">
              <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">Desarrollador Frontend</p>
              <div className="flex items-end justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-normal leading-normal text-[#92adc9]">Tech Solutions Inc.</p>
                  <p className="text-base font-normal leading-normal text-[#92adc9]">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section: Datos Personales */}
        <section className="mb-8">
          <div className="flex items-center justify-between pb-2 pt-4">
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">Confirma tus Datos Personales</h2>
            <button className="text-primary text-sm font-semibold">Editar</button>
          </div>
          <div className="flex flex-col gap-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="pb-2 text-base font-medium leading-normal text-white">Nombre Completo</p>
              <div className="flex w-full flex-1 items-stretch rounded-xl">
                <input className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-[#233648] p-4 text-base font-normal leading-normal text-[#92adc9] placeholder:text-[#92adc9] focus:border-none focus:outline-0 focus:ring-0" readOnly type="text" value="Ana María Rojas"/>
              </div>
            </label>
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="pb-2 text-base font-medium leading-normal text-white">Código Estudiantil</p>
                <input className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-[#233648] p-4 text-base font-normal leading-normal text-[#92adc9] placeholder:text-[#92adc9] focus:border-none focus:outline-0 focus:ring-0" readOnly value="1001234567"/>
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <p className="pb-2 text-base font-medium leading-normal text-white">Programa Académico</p>
                <input className="form-input h-14 min-w-0 flex-1 resize-none overflow-hidden rounded-xl border-none bg-[#233648] p-4 text-base font-normal leading-normal text-[#92adc9] placeholder:text-[#92adc9] focus:border-none focus:outline-0 focus:ring-0" readOnly value="Ingeniería de Software"/>
              </label>
            </div>
          </div>
        </section>

        {/* Form Section: Documentos */}
        <section className="mb-8">
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white pt-4 pb-2">Documentos</h2>
          <div className="flex flex-col gap-6 py-3">
            {/* CV Upload */}
            <div>
              <p className="pb-2 text-base font-medium leading-normal text-white">Adjunta tu Hoja de Vida (CV)</p>
              <div className="relative flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer border-[#233648] bg-white/5 hover:bg-white/10" htmlFor="cv-upload">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <span className="material-symbols-outlined text-4xl text-[#92adc9]">upload_file</span>
                    <p className="mb-2 text-sm text-[#92adc9]"><span class="font-semibold text-primary">Haz clic para subir</span> o arrastra y suelta</p>
                    <p className="text-xs text-[#92adc9]">PDF (MAX. 5MB)</p>
                  </div>
                  <input className="hidden" id="cv-upload" type="file"/>
                </label>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#233648] p-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span class="text-sm font-medium text-white">CV_Ana_Rojas_2024.pdf</span>
                </div>
                <button className="text-[#92adc9] hover:text-white">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            </div>
            {/* Cover Letter */}
            <div>
              <label className="flex justify-between pb-2 text-base font-medium leading-normal text-white" htmlFor="cover-letter">
                <span>Carta de Motivación</span>
                <span className="font-normal text-[#92adc9]">Opcional</span>
              </label>
              <div className="relative">
                <textarea className="form-textarea w-full resize-none rounded-xl border-none bg-[#233648] p-4 text-base font-normal leading-normal text-white placeholder:text-[#92adc9] focus:border-none focus:outline-0 focus:ring-2 focus:ring-primary/50" id="cover-letter" placeholder="Escribe un breve mensaje para la empresa destacando tu interés..." rows={6}></textarea>
                <p className="absolute bottom-3 right-4 text-xs text-[#92adc9]">0/1500</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="sticky bottom-0 bg-background-dark/80 p-4 backdrop-blur-sm border-t border-white/10">
        <button onClick={() => { alert('Postulación enviada!'); navigate('/tracking'); }} className="w-full h-14 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50">
            Confirmar Postulación
        </button>
      </footer>
    </div>
  );
}

export default ApplicationForm;