import { modelNotificacao } from "@/core/model/modelNotificacao";
import Mensagens from "./mensagens";
import { listaNotificacoes } from "@/data/constants/notificacao";

export function ListarNotificacoes() {
  return (
    <div className=" p-1 mx-4 my-5">
      <div>
        {listaNotificacoes.map((mensagem: modelNotificacao) => {
          return <Mensagens key={mensagem.id} mensagem={mensagem} />;
        })}
      </div>
    </div>
  );
}
