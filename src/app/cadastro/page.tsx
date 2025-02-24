"use client";
import Image from "next/image";
import Link from "next/link";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import ComandosBD from "@/backend/comandos";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface propsCadastro {
  // cadastrar?: () => void;
  // cancelar?: () => void;
  usuario: modelUsuarios;
}

export default function Cadastro(props: propsCadastro) {
  const [user, setUser] = useState<modelUsuarios>();
  function salvar() {
    if (!user) return;
    ComandosBD.comandoUsuario.SalvarUsuario(user);
  }
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<modelUsuarios>();

  function onSubmit(data: modelUsuarios) {
    const { nome, email, senha, imageUrl } = data;
    // props.usuario.nome = data.nome;
    // props.usuario.email = data.email;
    // props.usuario.senha = data.senha;
    // props.usuario.imageUrl = data.imageUrl;
    // ComandosBD.comandoUsuario.SalvarUsuario(props.usuario);
    console.log(data);
    reset();
  }

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
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 lg:gap-7 mb-16 items-center md:gap-7"
          >
            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="text"
                // name="nome"
                id="nome"
                placeholder="Digite seu nome completo"
                {...register("nome", {
                  required: "Nome é um campo obrigatório",
                  minLength: {
                    value: 12,
                    message: "Nome precisa ter pelo menos 12 caracteres",
                  },
                })}
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
              {errors?.nome && (
                <span className="text-red-400 text-xs">
                  {errors.nome.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="email"
                // name="email"
                id="email"
                {...register("email", {
                  required: "E-mail é um campo obrigatório",
                })}
                placeholder="Digite seu e-mail"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
              {errors?.nome && (
                <span className="text-red-400 text-xs">
                  {errors.nome.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="password"
                // name="senhaCadastro"
                id="senhaCadastro"
                required
                {...register("senha", {
                  required: "Nome um campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Nome precisa ter pelo menos 8 caracteres",
                  },
                })}
                placeholder="Defina sua senha"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
              {errors?.nome && (
                <span className="text-red-400 text-xs">
                  {errors.nome.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 h-8 items-center">
              <input
                type="password"
                name="confirmaSenhaCadastro"
                id="confirmaSenhaCadastro"
                required
                placeholder="Confirmar senha"
                className="rounded-lg px-5 border lg:text-lg lg:py-4 lg:h-10 lg:w-72"
              />
              {errors?.nome && (
                <span className="text-red-400 text-xs">
                  {errors.nome.message}
                </span>
              )}
            </div>
            <div className="flex gap-2 h-8 items-center mt-4">
              <label htmlFor="imagemPerfil">Inserir Foto</label>
              <input
                type="file"
                // name="imagemPerfil"
                id="imagemPerfil"
                {...register("imageUrl")}
                accept=".png, .jpg, .webp, .svg, .jpeg"
                className="file:bg-secondary-blue file:border-none file:p-3 file:text-white file:rounded-full file:hover:bg-primary-blue w-40"
              />
            </div>
            <div className="flex gap-5 items-center justify-center mt-10">
              <button
                className="bg-primary-blue text-white w-32 p-2 rounded-lg hover:bg-dark-blue transition-all duration-200 lg:w-40 lg:text-lg"
                type="submit"
                onClick={() => setUser(user)}
              >
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
