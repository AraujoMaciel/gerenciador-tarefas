import Image from "next/image";

export function Dashboard() {
  return (
    <div className=" px-4 md:px-10 my-4 md:my-12 grid grid-rows-1 grid-cols-4 gap-40 md:gap-7 overflow-scroll lg:gap-5">
      <div className="flex gap-2 px-2 lg:px-7 shadow-lg items-center bg-secondary-green w-36 h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-lg">
        <div className="w-12 lg:w-14 flex justify-center">
          <Image
            src="/icons/check.png"
            alt="icon completed"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-xs md:text-base lg:text-lg">Finalizadas</h2>
          <p className="font-bold text-lg md:text-xl lg:text-3xl">07</p>
        </div>
      </div>
      <div className="flex px-2 gap-2 lg:px-7 items-center shadow-lg bg-secondary-orange w-36 h-36 rounded-lg md:w-40 md:h-40 lg:w-60 lg:h-60 ">
        <div className="w-12 lg:w-14 flex justify-center">
          <Image
            src="/icons/pending.png"
            alt="icon completed"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-xs md:text-base lg:text-lg">Pendentes</h2>
          <p className="font-bold text-lg md:text-xl lg:text-3xl">02</p>
        </div>
      </div>
      <div className="flex px-2 gap-2 lg:px-7 items-center shadow-lg bg-secondary-red w-36 h-36 rounded-lg md:w-40 md:h-40 lg:w-60 lg:h-60 ">
        <div className="w-12 lg:w-14 flex justify-center">
          <Image
            src="/icons/cancel.png"
            alt="icon completed"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-xs md:text-base lg:text-lg">Canceladas</h2>
          <p className="font-bold text-lg md:text-xl lg:text-3xl">03</p>
        </div>
      </div>
      <div className="flex px-2 gap-2 lg:px-7 items-center shadow-lg bg-secondary-blue w-36 h-36 rounded-lg md:w-40 md:h-40 lg:w-60 lg:h-60 ">
        <div className="w-12 lg:w-14 flex justify-center">
          <Image
            src="/icons/all.png"
            alt="icon completed"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-xs md:text-base lg:text-lg">Total</h2>
          <p className="font-bold text-lg md:text-xl lg:text-3xl">12</p>
        </div>
      </div>
    </div>
  );
}
