import logo from '../../assets/logo.png'
import { Mail, Lock, ArrowLeft } from 'lucide-react'
import google from '../../assets/form/google.svg'

import './styles.scss'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { motion } from 'motion/react'

export function SignIn() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:gap-[100px] justify-center items-center px-[20px] py-[100px] md:py-[0]">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        viewport={{ once: true }}
        className="w-full max-w-[350px] mb-[50px]">
        <a href="/">
          <img src={logo} className="w-[350px] mb-15" />
        </a>
        <motion.p
          initial={{ '--line-width': '0px' } as any}
          animate={{ '--line-width': '100px' } as any}
          transition={{ duration: 0.8 }}
          className="relative msg text-center text-[58px] leading-18">Faça seu login <span className="text-[red]">na plataforma</span></motion.p>
        <a href="/" className="arrow-left group relative flex justify-center items-center gap-2 mt-[40px]">
          <ArrowLeft className="transition-all duration-300 ease-in-out group-hover:-translate-x-1" />
          <p className="text-center">Voltar para o site</p>
        </a>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        viewport={{ once: true }}
        onSubmit={SignIn} className="w-full flex flex-col max-w-[480px] gap-5 px-[40px] py-[30px] rounded-md">
        <div className="mb-4">
          <h2 className="text-[42px]">Seja Bem-vindo</h2>
          <p className="opacity-[0.8]">Entre com suas credenciais para continuar.</p>
        </div>
        <Input type="email" label="E-mail" placeholder="Digite seu e-mail" Icon={Mail}/>
        <Input type="password" label="Senha" placeholder="Digite sua senha" Icon={Lock}/>
        <a href="/" className="font-bold text-[#B90009] hover:text-[red] transition duration-300 ease-in-out">Esqueci minha senha</a>
        <Button type="submit" text="Entrar"/>
        <div className="flex justify-end items-center gap-4">
          <div className="h-[2px] bg-[#262627] flex-[1]"></div>
          <p className="uppercase opacity-[0.8]">Ou continue com</p>
          <div className="h-[2px] bg-[#262627] flex-[1]"></div>
        </div>
        <a href="" className="flex justify-center items-center gap-4 border-2 border-[#262627] hover:border-[white] transition duration-300 ease-in-out rounded p-3">
          <img src={google} className="w-10" />
          <p className="text-[20px]">Entrar com Google</p>
        </a>
        <div>
          <span className="mr-3">Não tem uma conta?</span>
          <a href="/registro" className="font-bold text-[#B90009] hover:text-[red] transition duration-300 ease-in-out">Registre-se</a>
        </div>
      </motion.form>

    </div>
  )
}