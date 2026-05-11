import { useState } from 'react'
import { Header } from '../../components/Header/Header.tsx'
import { Banner } from '../../components/Banner/Banner.tsx'
import { Carousel } from '../../components/Carousel/Carousel.tsx'
import { Offers } from '../../components/Offers/Offers.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'

export function Home() {
  const [activeTab, setActiveTab] = useState('offers')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return(
    <>
      <Header onTabChange={handleTabChange} />
      <Banner />
      <main className="px-[20px] py-[100px] flex flex-col gap-[100px]">
        <Carousel carousel="Novidades" />
        <Carousel carousel="Em Breve" />
      </main>
      <Offers activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </>

  )
}