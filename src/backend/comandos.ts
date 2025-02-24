import obterUsuariosPorId from "./usuario/obterUsuarioPorId";
import ObterTodosUsuarios from "./usuario/obterTodosUsuarios";
import SalvarUsuario from "./usuario/salvarUsuario";
import ObterTarefasPorId from "./tarefa/obterTarefaPorId";
import ObterTodasTarefas from "./tarefa/obterTodasTarefas";
import SalvarTarefas from "./tarefa/salvarTarefas";

export default class ComandosBD {
  static readonly comandoUsuario = {
    SalvarUsuario,
    ObterTodosUsuarios,
    obterUsuariosPorId,
  };
  static readonly comandosTarefas = {
    SalvarTarefas,
    ObterTarefasPorId,
    ObterTodasTarefas,
  };
}
