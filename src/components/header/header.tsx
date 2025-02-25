"use client";
import Image from "next/image";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import { Popup } from "./popup";
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
          Que bom ver você, <div className="font-semibold">user</div>
        </h2>
        <h3 className="font-semibold text-base">Título da Seção</h3>
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
        } absolute bg-slate-500 w-52 h-52 right-1 top-24 rounded-xl p-7 flex flex-col items-center`}
      >
        <div className="flex flex-col gap-4">
          <p className="bg-slate-200 w-40 rounded-3xl px-4 py-2 text-gray-700 cursor-pointer">
            Acessar Perfil
          </p>
          <p
            className="bg-slate-200 w-40 rounded-3xl px-4 py-2 text-gray-700 cursor-pointer"
            onClick={() => {
              setMenu(false);
            }}
          >
            Fechar
          </p>
          <div className="bg-slate-200 w-40 rounded-3xl px-4 py-2 text-gray-700 cursor-pointer">
            <Link href="/" className="flex gap-2 items-center">
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
