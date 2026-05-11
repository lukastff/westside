import offerCombo from '../../assets/offers/offers1.png'
import offerMonday from '../../assets/offers/offers2.png'
import offerHalf from '../../assets/offers/offers3.png'

import foodCombo from '../../assets/foods/food1.png'
import popcorn from '../../assets/foods/food2.png'
import foodComboComplete from '../../assets/foods/food3.png'

import events from '../../assets/events/event1.png'
import eventsCoop from '../../assets/events/event2.png'
import eventHappy from '../../assets/events/event3.png'

import './styles.scss'

interface OffersProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export function Offers({ activeTab, setActiveTab }: OffersProps) {
  return(
    <div className="max-w-[1280px] w-full m-auto pb-[100px] px-[20px]" id="offers">
      <ul className="flex gap-[40px] text-[40px] mb-[40px]">
        <button 
          className={activeTab === 'offers' ? 'active' : ''} 
          onClick={() => setActiveTab('offers')}
        >
                    Ofertas
        </button>
        <button 
          className={activeTab === 'foods' ? 'active' : ''} 
          onClick={() => setActiveTab('foods')}
        >
                    Comidas &amp; Bebidas
        </button>
        <button 
          className={activeTab === 'events' ? 'active' : ''} 
          onClick={() => setActiveTab('events')}
        >
                    Eventos
        </button>
      </ul>
            
      <div className={`flex gap-[16px] ${activeTab === 'offers' ? '' : 'hidden'}`}>
        <div className="flex gap-[16px]">
          <img src={offerCombo} alt="" className="h-[522px]" />
          <div className="flex flex-col gap-[16px]">
            <img src={offerMonday} alt="" className="h-[253px]" />
            <img src={offerHalf} alt="" className="h-[253px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <a>
            <span className="block text-[30px]">Ultimas ofertas de comidas</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Encontre a oferta perfeita para você</p>
          </a>
          <a>
            <span className="block text-[30px]">Segunda-feira abençoada</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Pague quase a metade do preço para começar a semana bem</p>
          </a>
          <a>
            <span className="block text-[30px]">Pague meia em todos os dias</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Pra você estudante, seu lugar também é aqui, sem perder o foco</p>
          </a>
        </div>
      </div>

      <div className={`flex gap-[16px] ${activeTab === 'foods' ? '' : 'hidden'}`}>
        <div className="flex gap-[16px]">
          <img src={foodCombo} alt="" className="h-[522px]" />
          <div className="flex flex-col gap-[16px]">
            <img src={popcorn} alt="" className="h-[253px]" />
            <img src={foodComboComplete} alt="" className="h-[253px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <a>
            <span className="block text-[30px]">Combos WestSide</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Direto da costa oeste, temos varias opções para servir oque seu bucho quer</p>
          </a>
          <a>
            <span className="block text-[30px]">Pipocas arrodo</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Temos de todos os tamanhos para você e toda sua familia</p>
          </a>
          <a>
            <span className="block text-[30px]">De tudo um pouco para você</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Alem de pipocas e refrigerantes, temos hot-dogs, nachos e doces</p>
          </a>
        </div>
      </div>

      <div className={`flex gap-[16px] ${activeTab === 'events' ? '' : 'hidden'}`}>
        <div className="flex gap-[16px]">
          <img src={events} alt="" className="h-[522px]" />
          <div className="flex flex-col gap-[16px]">
            <img src={eventsCoop} alt="" className="h-[253px]" />
            <img src={eventHappy} alt="" className="h-[253px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <a>
            <span className="block text-[30px]">Não somos apenas um cinema</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Estamos com você em todo estágio da vida, seja diversão ou trabalho</p>
          </a>
          <a>
            <span className="block text-[30px]">Conte sua história</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Sabemos que histórias precisam ser contadas, e projetos também</p>
          </a>
          <a>
            <span className="block text-[30px]">Sua casa é aqui</span>
            <p className="font-light text-[16px] text-[#AAA9A8]">Comemore com quem você ama no lugar aonde você ama</p>
          </a>
        </div>
      </div>
    </div>
  )
}