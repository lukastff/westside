import { Input } from '../../components/Input'
import { User, Lock, Mail, Check, ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import google from '../../assets/form/google.svg'

import './styles.scss'
import { motion } from 'motion/react'

export function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center gap-20">
      <motion.form
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        viewport={{ once: true }}
        className="w-full max-w-[580px] p-6 flex flex-col gap-6 rounded-md">
        <div>
          <h2 className="text-[58px]">Crie sua conta</h2>
          <p className="opacity-[0.8]">Preencha os dados abaixo para se registrar.</p>
        </div>
        <Input label="Nome Completo" type="text" placeholder="Nome" Icon={User}/>
        <div className="flex gap-5">
          <Input label="E-mail" type="email" placeholder="E-mail" Icon={Mail}/>
          <Input label="Confirme seu e-mail" type="email" placeholder="E-mail" Icon={Mail}/>
        </div>
        <div className="flex gap-5">
          <Input label="Senha" type="password" placeholder="Senha" Icon={Lock}/>
          <Input label="Confirme sua senha" type="password" placeholder="Confirme sua senha" Icon={Lock}/>
        </div>
        <div className="flex">
          <div className="relative checkbox">
            <input type="checkbox" id="terms" name="terms" className="mr-2 appearance-none w-3.5 h-3.5 border-1 border-[#262627] rounded cursor-pointer checked:bg-[red]" />
            <Check size={10} className="absolute top-[7px] left-[2px] pointer-events-none" />
          </div>
          <label htmlFor="terms" className="cursor-pointer">Li e aceito os <span className="text-[red] hover:underline">Termos de Uso</span> e a <span className="text-[red] hover:underline">Política de Privacidade</span>.</label>
        </div>
        <Button type="submit" text="Cadastrar" />
        <div className="flex justify-end items-center gap-4">
          <div className="h-[2px] bg-[#262627] flex-[1]"></div>
          <p className="uppercase opacity-[0.8]">Ou continue com</p>
          <div className="h-[2px] bg-[#262627] flex-[1]"></div>
        </div>
        <a href="" className="flex justify-center items-center gap-4 border-2 border-[#262627] hover:border-[white] transition duration-300 ease-in-out rounded p-3">
          <img src={google} className="w-10" />
          <p className="text-[20px]">Continuar com Google</p>
        </a>
        <div className="text-center">
          <span className="mr-3">Já tem uma conta?</span>
          <a href="/login" className="font-bold text-[#B90009] hover:text-[red] transition duration-300 ease-in-out">Faça seu login</a>
        </div>
      </motion.form>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        viewport={{ once: true }}
        className="max-w-[350px]">
        <img src={logo} className="w-[350px] mb-15" />
        <motion.p
          initial={{ '--line-width': '0px' } as any}
          animate={{ '--line-width': '100px' } as any}
          transition={{ duration: 0.8 }}
          className="relative msg text-center text-[58px] leading-15">Crie sua conta<span className="text-[red] font-light block">e aproveite o melhor da Westside.</span></motion.p>
        <a href="/" className="arrow-right relative flex justify-center items-center mt-[40px]">
          <p className="text-center">Voltar para o site</p>
          <ArrowRight className="absolute right-[95px] transition-all duration-300 ease-in-out" />
        </a>
      </motion.div>
    </div>
  )
}