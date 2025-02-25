import { modelNotificacao } from "@/core/model/modelNotificacao";
import Image from "next/image";
import Link from "next/link";

interface propsMensagens {
  mensagem: modelNotificacao;
}

export default function Mensagens(props: propsMensagens) {
  return (
    <div>
      <div className="flex items-center gap-4 px-7 py-4 rounded-lg bg-slate-200 my-7">
        <div className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center ">
          <Image
            src="/icons/notification.png"
            alt="icone notificacao"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-medium">{props.mensagem.titulo}</div>
          <div className="text-gray-600">{props.mensagem.descricao}</div>
          <div className="text-gray-600">{props.mensagem.status}</div>
        </div>
      </div>
    </div>
  );
}
