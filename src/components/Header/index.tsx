import { useEffect, useState } from 'react'
import { Menu, X, Search, User, LogIn } from 'lucide-react'
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

export interface HeaderProps {
    onTabChange?: (tab: string) => void;
}

export function Header({ onTabChange }: HeaderProps) {
  const scrolled = useScrolled()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <header className={`sticky top-0 left-0 z-999 bg-[#12100D] transition-shadow duration-300  ${scrolled ? 'shadow-2xl' : 'shadow-none'}`}>
      <nav className="flex items-center justify-between max-w-[1480px] w-full h-[80px] m-auto px-[20px]">
        <a href="/">
          <img src={logo} alt="Logo Westside" className="w-[150px] md:w-[200px]" />
        </a>

        <div className="hidden lg:flex items-center gap-[16px]">
          <ul className="flex gap-[16px] text-white">
            <li>
              <button type="button" className="cursor-pointer hover:text-red-600 transition-colors">Goiânia Shopping</button>
            </li>
            <li><a href="/login" className="hover:text-red-600 transition-colors">Entre</a></li>
            <li><a href="/registro" className="hover:text-red-600 transition-colors">Registre-se</a></li>
            <li>
              <div className="relative">
                <input type="text" className="bg-white rounded px-2 py-1 pr-8 text-black w-[150px] focus:w-[200px] transition-all" placeholder="Buscar..." />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </li>
          </ul>
        </div>

        <button 
          className="lg:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div className="hidden lg:block bg-red-600 h-[45px]">
        <ul className="flex items-center justify-center gap-[32px] max-w-[1480px] w-full h-full m-auto px-[20px] uppercase text-sm font-bold text-white">
          <li><a href="/#em-cartaz" className="link">Em Cartaz</a></li>
          <li><a href="/#em-breve" className="link">Em Breve</a></li>
          <li><a href="#" className="link">Filmes</a></li>
          <li><a href="/#offers" className="link" onClick={() => onTabChange?.('offers')}>Ofertas</a></li>
          <li><a href="/#offers" className="link" onClick={() => onTabChange?.('foods')}>Comidas &amp; Bebidas</a></li>
          <li><a href="/#offers" className="link" onClick={() => onTabChange?.('events')}>Eventos</a></li>
          <li><a href="/planos" className="link">Planos</a></li>
        </ul>
      </div>

      <div className={`lg:hidden fixed inset-0 top-[78px] bg-[#12100D] z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full overflow-y-auto p-6 gap-8">
          {/* Mobile Search */}
          <div className="relative w-full">
            <input type="text" className="bg-white rounded w-full px-4 py-3 pr-10 text-black" placeholder="O que você está procurando?" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Mobile User Actions */}
          <div className="flex flex-col gap-4">
            <a href="/public" className="flex items-center gap-3 text-white text-lg font-medium border-b border-white/10 pb-4">
              <LogIn size={20} /> Entre
            </a>
            <a href="/public" className="flex items-center gap-3 text-white text-lg font-medium border-b border-white/10 pb-4">
              <User size={20} /> Registre-se
            </a>
          </div>

          <div className="pb-6 border-b border-white/10">
            <button type="button" className="text-red-600 font-bold">Goiânia Shopping</button>
          </div>

          {/* Mobile Categories */}
          <ul className="flex flex-col gap-6 uppercase text-white font-bold">
            <li><a href="/#em-cartaz" onClick={toggleMenu}>Em Cartaz</a></li>
            <li><a href="/#em-breve" onClick={toggleMenu}>Em Breve</a></li>
            <li><a href="#" onClick={toggleMenu}>Filmes</a></li>
            <li><a href="/#offers" onClick={() => { onTabChange?.('offers'); toggleMenu() }}>Ofertas</a></li>
            <li><a href="/#offers" onClick={() => { onTabChange?.('foods'); toggleMenu() }}>Comidas &amp; Bebidas</a></li>
            <li><a href="/#offers" onClick={() => { onTabChange?.('events'); toggleMenu() }}>Eventos</a></li>
            <li><a href="/planos" onClick={toggleMenu}>Planos</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
