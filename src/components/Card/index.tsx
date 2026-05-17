import prada from '../../assets/categories/prada.png'
import doze from '../../assets/idades/12.svg'

export function Card() {
  return(
    <div
      className="bg-[#23211e] hover:bg-[#565454] transition duration-500 cursor-pointer rounded-lg max-w-[300px]"
    >
      <div className="relative">
        <span className="absolute left-1 top-1 p-[8px] backdrop-blur-[25px] rounded text-[#12100D] text-[14px] font-bold uppercase">Assista agora</span>
        <img src={prada} alt="" className="rounded-t-lg" />
      </div>
      <div className=" p-[16px]">
        <p className="mb-[20px] font-bold">DIABO VESTE PRADA 2</p>
        <div className="flex items-center justify-between">
          <span className="text-[14px] text-[#AAA9A8]">Comedia &sdot; 120m</span>
          <img src={doze} />
        </div>
      </div>
    </div>
  )
}