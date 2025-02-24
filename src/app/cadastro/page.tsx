import Section from "@/components/template/section";
import Image from "next/image";
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className="h-screen  bg-basic-white flex justify-center items-center">
      <div className="md:grid md:grid-cols-2 md:w-full md:h-auto">
        <div className="md:flex justify-center items-center bg-white hidden">
          <Image
            src="/cadastro.jpg"
            alt="Banner login"
            width={800}
            height={800}
          />
        </div>
        <main className="bg-slate-100 drop-shadow-xl p-10 flex flex-col justify-center items-center rounded-lg">
          <div className="mt-7 mb-20 flex flex-col justify-center items-center gap-7 lg:w-44">
            <p className="text-gray-700 md:text-lg lg:text-xl">Cadastre-se</p>
            <h2 className="font-semibold text-xl lg:text-3xl">
              Crie uma conta gratuita
            </h2>
          </div>
          <form
            action=""
            className="flex flex-col gap-5 lg:gap-7 mb-16 items-center md:gap-7"
          >
            <div className="flex gap-2 h-8 items-center">
              <input
                type="text"
                name="nome"
                id="nome"
                required
                placeholder="Digite seu nome"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>
            <div className="flex gap-2 h-8 items-center">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite seu e-mail"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>
            <div className="flex gap-2 h-8 items-center">
              <input
                type="text"
                name="senhaCadastro"
                id="senhaCadastro"
                required
                placeholder="Defina sua senha"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>
            <div className="flex gap-2 h-8 items-center">
              <input
                type="text"
                name="confirmaSenhaCadastro"
                id="confirmaSenhaCadastro"
                required
                placeholder="Confirmar senha"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>
            <div className="flex gap-2 h-8 items-center mt-4">
              <label htmlFor="imagemPerfil">Inserir Foto</label>
              <input
                type="file"
                name="imagemPerfil"
                id="imagemPerfil"
                accept=".png, .jpg, .webp, .svg, .jpeg"
                className="file:bg-secondary-blue file:border-none file:p-3 file:text-white file:rounded-full file:hover:bg-primary-blue w-40"
              />
            </div>
            <div className="flex gap-5 items-center justify-center mt-10">
              <button className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg">
                Cadastrar
              </button>
              <Link href="/">
                <button className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg">
                  Voltar
                </button>
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
