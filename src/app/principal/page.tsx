"use client";

import { Pagina } from "@/components/template/pagina";
import { ListarTarefas } from "@/components/tarefas/listaTarefas";
import { ListarUsuarios } from "@/components/usuarios/listaUsuarios";
import { useState, useEffect } from "react";
import { modelTarefas } from "@/core/model/modelTarefas";
import ComandosBD from "@/backend/comandos";

export default function Principal() {
  // const [task, setTask] = useState<modelTarefas>();

  // async function salvar() {
  //   if (!task) return;
  //   await ComandosBD.comandosTarefas.SalvarTarefas(task);
  // }

  // const [tasks, setTasks] = useState<modelTarefas[]>([]);
  // const [task, setTask] = useState<modelTarefas>();

  // useEffect(() => {
  //   ComandosBD.comandosTarefas.ObterTodasTarefas().then(setTasks);
  // }, []);

  // async function salvar() {
  //   if (!task) return;
  //   await ComandosBD.comandosTarefas.SalvarTarefas(task);
  //   const todasTasks = await ComandosBD.comandosTarefas.ObterTodasTarefas();
  //   setTasks(todasTasks);
  // }

  return (
    <div>
      <Pagina>
        <ListarUsuarios />
      </Pagina>
    </div>
  );
}
