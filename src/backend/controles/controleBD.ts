import { modelTarefas } from "@/core/model/modelTarefas";
import { modelUsuarios } from "@/core/model/modelUsuarios";
import { PrismaClient, Tarefas, Usuario } from "@prisma/client";

export default class controleBD {
  private static bd = new PrismaClient();

  static async obterTodosUsuarios(): Promise<modelUsuarios[]> {
    return await this.bd.usuario.findMany();
  }
  static async obterUsuariosPorId(id: string): Promise<modelUsuarios> {
    const usuarioObtido = await this.bd.usuario.findUnique({ where: { id } });
    return usuarioObtido as Usuario;
  }

  static async obterTodasTarefas(): Promise<modelTarefas[]> {
    return await this.bd.tarefas.findMany();
  }
  static async obterTarefasPorId(id: string): Promise<modelTarefas> {
    const tarefaObtida = await this.bd.tarefas.findUnique({ where: { id } });
    return tarefaObtida as Tarefas;
  }

  static async atualizarUsuarios(
    usuario: modelUsuarios
  ): Promise<modelUsuarios> {
    return await this.bd.usuario.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario,
    });
  }
  static async atualizarTarefas(tarefa: any): Promise<modelTarefas> {
    return await this.bd.tarefas.upsert({
      where: { id: tarefa.id },
      update: tarefa,
      create: tarefa,
    });
  }
}
