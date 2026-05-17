import type { LucideIcon } from 'lucide-react'
import './styles.scss'

type inputProps = {
    label?: string,
    type: string,
    placeholder: string,
    Icon: LucideIcon
}

export function Input({ label, type, placeholder, Icon }: inputProps) {
  return (
    <div className="w-full inputs">
      {label ? <label htmlFor={type} className="uppercase tracking-[2px]">{label}</label> : ''}
      <div className={`relative bg-[#12100D] rounded ${label ? 'mt-2' : ''}`}>
        <input type={type} placeholder={placeholder} id={type} className="w-full h-13 pl-[42px] pr-[16px] border-1 border-[#262627] rounded bg-[#1A1A1A] outline-none focus:text-white" />
        <Icon size={18} className="stroke-[#9CA3AF] absolute top-1/2 -translate-y-1/2 left-3" />
      </div>
    </div>
  )
}