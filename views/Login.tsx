import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="flex flex-1 w-full grow items-center justify-center p-4">
        <div className="flex w-full max-w-sm flex-col items-center">
          {/* University Logo */}
          <div className="mb-8 w-24 h-24 flex items-center justify-center bg-white rounded-lg p-2">
            <img className="h-auto w-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHGEBN4tK6NIQZgMA3zdhh6UfoYJJv4NQ8D-zIV68xMn1veHmLZ2xiotaF0b7ocXqwOMndNTU8Bet9uHRsbt0X3gPl2TA4tj-OsEenhb3NFJyU_Oy4ipgXKx2FU7y_8XweoBk9HBIfq9vvGSofLnI31LlqJ9s3qQC0NDZHaYfWYfT2PB39G3XwZv94Z0QHa8oLNYG3pSAJB6N24TkbTlTfq1KN7SISyraeZu3FIWfRXN9Ty759hG5STI-gNQjaGY_OJlgkD8xY9TE" alt="Logo"/>
          </div>
          
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight text-center pb-8">Bienvenido de nuevo</h1>
          
          <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium leading-normal pb-2">Correo Electrónico o Usuario</p>
              <div className="relative flex w-full flex-1 items-stretch">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/60">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#324d67] bg-[#192633] focus:border-primary h-14 placeholder:text-white/50 p-3 pl-12 text-base font-normal leading-normal" placeholder="Ingresa tu correo o usuario" />
              </div>
            </label>
            
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium leading-normal pb-2">Contraseña</p>
              <div className="relative flex w-full flex-1 items-stretch">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/60">
                  <span className="material-symbols-outlined text-2xl">lock</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#324d67] bg-[#192633] focus:border-primary h-14 placeholder:text-white/50 p-3 pl-12 pr-12 text-base font-normal leading-normal" placeholder="Ingresa tu contraseña" type="password" />
                <button type="button" aria-label="Toggle password visibility" className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/60">
                  <span className="material-symbols-outlined text-2xl">visibility_off</span>
                </button>
              </div>
            </label>

            <div className="flex w-full pt-8 pb-4">
              <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200" type="submit">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            </div>
          </form>

          <div className="flex py-3 flex-col gap-2 items-center">
            <a className="cursor-pointer text-[#8CA9D3] text-sm font-semibold hover:underline" href="#">¿Olvidaste tu contraseña?</a>
             <Link to="/company/register" className="cursor-pointer text-white text-sm hover:underline mt-2">¿Eres una empresa? Regístrate aquí</Link>
          </div>

          <div className="mt-12 text-center text-xs text-white/50">
            <p>© Universidad Alexander von Humboldt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;