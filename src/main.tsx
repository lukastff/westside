import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider, addLocale } from 'primereact/api'
import App from './App.tsx'
import './index.css'

addLocale('pt', {
  accept: 'Sim',
  reject: 'Não',
  choose: 'Escolher',
  upload: 'Enviar',
  cancel: 'Cancelar',
  close: 'Fechar',
  clear: 'Limpar',
  apply: 'Aplicar',
  search: 'Buscar',
  emptyMessage: 'Nenhum resultado encontrado',
  emptyFilterMessage: 'Nenhum resultado encontrado',
  selectionMessage: '{0} itens selecionados',
  emptySelectionMessage: 'Nenhum item selecionado',
  selectAll: 'Selecionar todos',
  unselectAll: 'Desmarcar todos',
})



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={{ locale: 'pt' }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>,
)
