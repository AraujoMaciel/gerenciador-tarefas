import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen  bg-basic-white flex justify-center items-center">
      <div className="md:grid md:grid-cols-2 md:w-full md:h-auto">
        <div className="md:flex justify-center items-center bg-white hidden">
          <Image
            src="/entrar.jpg"
            alt="Banner login"
            width={800}
            height={800}
          />
        </div>
        <main className="bg-slate-100 drop-shadow-xl p-10 flex flex-col justify-center items-center rounded-lg">
          <div className="mt-7 mb-20 flex flex-col justify-center items-center gap-7 lg:w-44">
            <Image
              src="/planning.png"
              width={150}
              height={150}
              alt="Logotipo"
            />
            <h2 className="font-semibold text-xl lg:text-3xl lg:w-72">
              Seja Bem-vindo
            </h2>
          </div>
          <form
            action=""
            className="flex flex-col gap-5 lg:gap-7 mb-16 items-center"
          >
            <div className="flex gap-2 h-8 items-center">
              <Image
                src="/icons/user.png"
                width={30}
                height={30}
                alt="Logotipo"
                className="lg:w-10 lg:h-10"
              />
              <input
                type="text"
                name="usuario"
                id="usuario"
                placeholder="Usuário"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>
            <div className="flex gap-2 h-8 items-center">
              <Image
                src="/icons/password.png"
                width={30}
                height={30}
                alt="Logotipo"
                className="lg:w-10 lg:h-10"
              />
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
            </div>
            <div className="flex gap-5 items-center justify-center mt-10">
              <Link href="/principal">
                <button className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg">
                  Entrar
                </button>
              </Link>
              <Link href="/cadastro">
                <button className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg">
                  Cadastre-se
                </button>
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
