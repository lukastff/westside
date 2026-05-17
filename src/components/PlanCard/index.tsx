import ticket from '../../assets/plans/ticket.svg'
import popcorn from '../../assets/plans/popcorn.svg'
import calendar from '../../assets/plans/calendar.svg'
import creditCard from '../../assets/plans/credit.svg'
import vip from '../../assets/plans/vip.svg'
import star from '../../assets/plans/star.svg'

import type { Plan } from '../../utils/plans'
import './styles.scss'
import { motion } from 'motion/react'

const icons: Record<string, string> = {
  ticket,
  popcorn,
  calendar,
  creditCard,
  vip,
}

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2, ease: 'linear' },
      }}
      transition={{ duration: 0.4, ease: 'linear' }}
      viewport={{ once: true }}
      className="plans p-[20px] border-[2px] border-[#c40000] rounded-[20px] max-w-xs w-full flex flex-col justify-between h-[650px]">
      <div>
        <h2 className="text-center text-[48px] font-bold uppercase">{plan.name}</h2>
        <div className="flex justify-center items-center gap-[10px]">
          <div className="h-[2px] max-w-[100px] bg-[red] flex-[1]"></div>
          <img src={star} className="star w-[30px]"/>
          <div className="h-[2px] max-w-[100px] bg-[red] flex-[1]"></div>
        </div>
        <div className="relative mb-[20px]">
          <span className="absolute text-[32px] top-[13px] left-[40px] text-[red]">R$</span>
          <p className="text-[60px] flex justify-center items-start">{plan.price},<span className="text-[32px] mt-[13px]">{plan.cents}</span></p>
          <span className="absolute text-[24px] bottom-[5px] right-[60px] text-[red]">/mês</span>
        </div>
        <div className="flex flex-col gap-[20px] ml-[40px]">
          {plan.benefits.map((benefit, index) => (
            <div key={index} className="flex gap-[16px]">
              <img src={icons[benefit.icon]} alt="" className="w-[50px]" />
              <div className="flex flex-col items-start">
                <p className="font-[28px] uppercase">{benefit.text}</p>
                <span>{benefit.subtext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full max-w-[200px] mx-auto block bg-[red] mt-[24px] cursor-pointer p-[8px] rounded uppercase text-white font-bold">Assinar agora</button>
    </motion.div>
  )
}