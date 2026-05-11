import { useEffect, useState } from 'react'
import './styles.scss'
import logo from '../../assets/logo.png'

function useScrolled(threshold = 0) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

interface HeaderProps {
    onTabChange?: (tab: string) => void;
}

export function Header({ onTabChange }: HeaderProps) {
  const scrolled = useScrolled()

  return (
    <header className={`sticky top-0 left-0 z-999 bg-[#12100D] transition-shadow duration-300  ${scrolled ? 'shadow-2xl' : 'shadow-none'}`}>
      <nav className="flex items-center justify-between max-w-[1480px] w-full h-[80px] m-auto px-[20px]">
        <a href="/">
          <img src={logo} alt="Logo Westside" className="w-[200px]" />
        </a>
        <ul className="flex gap-[16px]">
          <li>
            <button type="submit">Goiânia Shopping</button>
          </li>
          <li><a href="/public">Entre</a></li>
          <li><a href="/public">Registre-se</a></li>
          <li><input type="text" className="bg-white"/></li>
        </ul>
      </nav>
      <div className="bg-red-600 h-[45px]">
        <ul className="flex items-center gap-[32px] max-w-[1480px] w-full h-full m-auto px-[20px] uppercase">
          <li><a href="#novidades" className="link">Novidades</a></li>
          <li><a href="#em-breve" className="link">Em Breve</a></li>
          <li><a href="#" className="link">Filmes</a></li>
          <li><a href="#offers" className="link" onClick={() => onTabChange?.('offers')}>Ofertas</a></li>
          <li><a href="#offers" className="link" onClick={() => onTabChange?.('foods')}>Comidas &amp; Bebidas</a></li>
          <li><a href="#offers" className="link" onClick={() => onTabChange?.('events')}>Eventos</a></li>
          <li><a href="#" className="link">Planos</a></li>
          <li><a href="#" className="link">Ingressos</a></li>
        </ul>
      </div>
    </header>
  )
}
