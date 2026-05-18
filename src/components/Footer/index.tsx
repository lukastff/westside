import { Accordion, AccordionTab } from 'primereact/accordion'
import './styles.scss'
import type { HeaderProps } from '../Header'

export function Footer({ onTabChange }: HeaderProps) {
  return (
    <>
      <footer className="max-w-[1280px] w-full m-auto pb-[100px] px-[20px]">
        <div className="hidden md:flex gap-[40px] justify-between flex-wrap">
          <div className="flex flex-col">
            <p className="mb-[16px] uppercase">Westside</p>
            <a href="">Sobre nos</a>
            <a href="/#em-cartaz">Novidades</a>
            <a href="/#em-breve">Em Breve</a>
            <a href="">Filmes</a>
            <a href="/#offers" onClick={() => onTabChange?.('offers')}>Ofertas</a>
            <a href="/#offers" onClick={() => onTabChange?.('foods')}>Comidas &amp; Bebidas</a>
            <a href="/#offers" onClick={() => onTabChange?.('events')}>Eventos</a>
            <a href="/planos">Planos</a>
          </div>
          <div className="flex flex-col">
            <p className="mb-[16px] uppercase">Informação</p>
            <a href="">Ajuda e FAQs</a>
            <a href="">Acessibilidade</a>
            <a href="">Termos e Condições</a>
            <a href="">Politica de Privacidade</a>
            <a href="">Política de Cookies</a>
            <a href="">Configurações Cookies</a>
          </div>
          <div className="flex flex-col">
            <p className="mb-[16px] uppercase">Formatos Premium</p>
            <a href="">IMAX</a>
            <a href="">4DX</a>
            <a href="">ScreenX</a>
            <a href="">Superscreen</a>
            <a href="">Recliner</a>
            <a href="">Real 3D</a>
          </div>
          <div className="flex flex-col">
            <p className="mb-[16px] uppercase">Principais Filmes</p>
            <a href="">Filme1</a>
            <a href="">Filme3</a>
            <a href="">Filme4</a>
            <a href="">Filme5</a>
            <a href="">Filme6</a>
            <a href="">Filme7</a>
          </div>
          <div className="flex flex-col">
            <p className="mb-[16px] uppercase">Siga Westside</p>
            <a href="">X</a>
            <a href="">Facebook</a>
            <a href="">YouTube</a>
            <a href="">Instagram</a>
            <a href="">TikTok</a>
          </div>
        </div>
        <Accordion className="flex flex-col gap-10 md:hidden">
          <AccordionTab header="Westside">
            <div className="opacity-[0.8] flex flex-col gap-1 mt-2">
              <a href="">Sobre nos</a>
              <a href="/#em-cartaz">Novidades</a>
              <a href="/#em-breve">Em Breve</a>
              <a href="">Filmes</a>
              <a href="/#offers" onClick={() => onTabChange?.('offers')}>Ofertas</a>
              <a href="/#offers" onClick={() => onTabChange?.('foods')}>Comidas &amp; Bebidas</a>
              <a href="/#offers" onClick={() => onTabChange?.('events')}>Eventos</a>
              <a href="/planos">Planos</a>
            </div>
          </AccordionTab>
          <AccordionTab header="Informação">
            <div className="opacity-[0.8] flex flex-col gap-1 mt-2">
              <a href="">Ajuda e FAQs</a>
              <a href="">Acessibilidade</a>
              <a href="">Termos e Condições</a>
              <a href="">Politica de Privacidade</a>
              <a href="">Política de Cookies</a>
              <a href="">Configurações Cookies</a>
            </div>
          </AccordionTab>
          <AccordionTab header="Formatos Premium">
            <div className="opacity-[0.8] flex flex-col gap-1 mt-2">
              <a href="">IMAX</a>
              <a href="">4DX</a>
              <a href="">ScreenX</a>
              <a href="">Superscreen</a>
              <a href="">Recliner</a>
              <a href="">Real 3D</a>
            </div>
          </AccordionTab>
          <AccordionTab header="Principais Filmes">
            <div className="opacity-[0.8] flex flex-col gap-1 mt-2">
              <a href="">Filme1</a>
              <a href="">Filme3</a>
              <a href="">Filme4</a>
              <a href="">Filme5</a>
              <a href="">Filme6</a>
              <a href="">Filme7</a>
            </div>
          </AccordionTab>
          <AccordionTab header="Siga Westside">
            <div className="opacity-[0.8] flex flex-col gap-1 mt-2">
              <a href="">X</a>
              <a href="">Facebook</a>
              <a href="">YouTube</a>
              <a href="">Instagram</a>
              <a href="">TikTok</a>
            </div>
          </AccordionTab>
        </Accordion>
      </footer>
      <div className="w-full h-[40px] bg-[red] text-center text-[14px] font-[400] flex justify-center items-center">
                Todos direitos reservados Westside 2026 &copy;
      </div>
    </>
  )
}