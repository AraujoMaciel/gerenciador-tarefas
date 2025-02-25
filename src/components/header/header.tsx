"use client";
import Image from "next/image";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import { listaUsuarios } from "@/data/constants/usuarios";
import { Usuarios } from "../usuarios/usuarios";
import Link from "next/link";
import { useState } from "react";

interface propsHeader {
  usuarioHeader?: modelUsuarios;
}

export function Header(props: propsHeader) {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-screen lg:w-full bg-basic-white flex justify-between px-7 py-4 items-center shadow-md mb-4">
      <div className="text-xs flex flex-col gap-2">
        <h2>
          Que bom ver você,{" "}
          <div className="font-semibold">{props.usuarioHeader?.nome}</div>
        </h2>
        <h3 className="font-semibold text-base">Principal</h3>
      </div>
      <div
        className="w-10 cursor-pointer"
        onClick={() => {
          setMenu(true);
        }}
      >
        <Image
          src="/icons/userPerfil.png"
          alt="Perfil do usuario"
          width={80}
          height={80}
        />
      </div>

      {/* Pop-up */}
      <div
        className={`${
          menu ? "block" : "hidden"
        } absolute bg-blue-100 w-72 h-auto right-1 top-24 rounded-xl p-7 flex flex-col items-center z-30`}
      >
        <div className="flex flex-col gap-4 relative justify-center items-center">
          <div className="w-72 flex justify-end pr-5 mb-4">
            <div
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
              onClick={() => {
                setMenu(false);
              }}
            >
              <Image
                src="/icons/close.png"
                alt="icone ususario"
                width={14}
                height={14}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="w-20 flex items-center justify-center">
              <Image
                src="/icons/userPerfil.png"
                alt="icone ususario"
                width={70}
                height={70}
              />
            </div>
            <h2>Olá, {props.usuarioHeader?.nome}!</h2>
          </div>
          <p className="bg-slate-100 w-40 rounded-3xl px-4 py-2 text-gray-700 cursor-pointer text-center">
            Ver Perfil
          </p>

          <div className="bg-slate-100 w-40 rounded-3xl px-4 py-2 text-gray-700 cursor-pointer flex items-center justify-center mb-10">
            <Link href="/" className="flex items-center">
              <div className="w-10">
                <Image
                  src="/icons/logout.png"
                  alt="icone logout"
                  width={30}
                  height={30}
                />
              </div>
              Sair
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
