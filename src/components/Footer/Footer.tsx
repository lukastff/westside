import './styles.scss'

export function Footer() {
  return (
    <>
      <footer className="max-w-[1280px] w-full m-auto pb-[100px] px-[20px]">
        <div className="flex gap-[40px] justify-between flex-wrap">
          <div className="flex flex-col">
            <p className="mb-[16px] uppercase">Westside</p>
            <a href="">Sobre nos</a>
            <a href="">Novidades</a>
            <a href="">Em Breve</a>
            <a href="">Filmes</a>
            <a href="">Ofertas</a>
            <a href="">Comidas &amp; Bebidas</a>
            <a href="">Eventos</a>
            <a href="">Planos</a>
            <a href="">Locais</a>
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
      </footer>
      <div className="w-full h-[40px] bg-[red] text-center text-[14px] font-[400] flex justify-center items-center">
                Todos direitos reservados Westside 2026 &copy;
      </div>
    </>
  )
}