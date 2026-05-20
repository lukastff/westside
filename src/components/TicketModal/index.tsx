import { MultiSelect } from 'primereact/multiselect'
import { useState } from 'react'

import './styles.scss'


export function TicketModal() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  const typeFilm = [
    { name: 'D-BOX', code: 'DBOX' },
    { name: 'XD', code: 'XD' },
    { name: 'Imax', code: 'IMAX' },
    { name: 'Prime', code: 'PRIME' },
    { name: '3D', code: '3D' },
    { name: '2D', code: '2D' },
  ]
  const languages = [
    { name: 'Português', code: 'PT' },
    { name: 'Espanhol', code: 'ES' },
    { name: 'Inglês', code: 'USA' },
    { name: 'Japonês', code: 'JPN' },
  ]
    
  return (
    <div className="w-full max-w-[1240px] m-auto px-[20px] py-[100px] bg-[#12100D]">
      <div className="flex gap-[140px]">
        <div className="max-w-[380px]">
          <div className="bg-[red] w-full h-[568px] rounded"></div>
          <div className="flex gap-1 my-[24px]">
            <p>Idade</p>
            <p>Gênero</p>
          </div>
          <p className="mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores aut consequuntur dignissimos ex ipsam iure laborum maxime, necessitatibus nostrum officiis omnis pariatur totam vel velit veritatis vitae voluptate!
          </p>
          <div className="border-t-1 py-[32px] border-[#555555] flex justify-between">
            <p>Data de estreia</p>
            <p className="text-[#AAA9A8]">30.04.2026</p>
          </div>
          <div className="border-t-1 py-[32px] border-[#555555] flex justify-between">
            <p>Distribuído por</p>
            <p className="text-[#AAA9A8]">Walt Disney</p>
          </div>
          <div className="border-t-1 py-[32px] border-[#555555] flex justify-between">
            <p>Acessibilidade</p>
            <p className="text-[#AAA9A8]">A definir</p>
          </div>
          <div className="border-t-1 py-[32px] border-[#555555] flex justify-between">
            <p>Diretor</p>
            <p className="text-[#AAA9A8]">A definir</p>
          </div>
          <div className="border-t-1 border-b-1 py-[32px] border-[#555555] flex justify-between">
            <p>Elenco</p>
            <p className="text-[#AAA9A8]">A definir</p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <h2 className="text-[36px] font-bold uppercase">Horários</h2>
            <div className="flex gap-0.5 my-[24px]">
              <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                <p>Hoje</p>
                <p>19/Mai</p>
              </div>
              <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                <p>Amanhã</p>
                <p>20/Mai</p>
              </div>
            </div>
          </div>
          <div className="pt-[24px] border-t-1 border-[#555555]">
            <div className="flex gap-0.5 my-[24px]">
              <MultiSelect
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={typeFilm}
                optionLabel="name"
                placeholder="Select a City"
                maxSelectedLabels={2}
                locale="pt"
                className="p-[20px] min-w-[166px] bg-[#555555] rounded-tl-[10px] rounded-bl-[10px]"
              />
              <MultiSelect
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.value)}
                options={languages}
                optionLabel="name"
                placeholder="Select a Language"
                maxSelectedLabels={3}
                className="p-[20px] min-w-[166px] bg-[#555555] rounded-tr-[10px] rounded-br-[10px]"
              />
            </div>
            <div className="todas cidades h-[500px]">
              <div className="goiania">
                <div className="text-[32px] flex justify-between uppercase">
                  <div className="flex gap-2">
                    <p>Horários em:</p>
                    <span className="text-[red]">Goiânia</span>
                  </div>
                  <span>Preços</span>
                </div>
                <div className="goiania-corpo">
                  <div className="flex flex-col gap-5 mt-5">
                    <p className="text-[16px] text-[#AAA9A8]">D-BOX &sdot; XD &sdot; 2D &sdot; Legendado &sdot; Sala 1</p>
                    <div className="flex gap-5">
                      <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                        <p>Hoje, 19 Mai</p>
                        <p>16h40</p>
                      </div>
                      <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                        <p>Hoje, 19 Mai</p>
                        <p>16h40</p>
                      </div>
                      <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                        <p>Hoje, 19 Mai</p>
                        <p>16h40</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-5">
                    <p className="text-[16px] text-[#AAA9A8]">D-BOX &sdot; XD &sdot; 2D &sdot; Legendado &sdot; Sala 1</p>
                    <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                      <p>Hoje, 19 Mai</p>
                      <p>16h40</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-5">
                    <p className="text-[16px] text-[#AAA9A8]">D-BOX &sdot; XD &sdot; 2D &sdot; Legendado &sdot; Sala 1</p>
                    <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                      <p>Hoje, 19 Mai</p>
                      <p>16h40</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-5">
                    <p className="text-[16px] text-[#AAA9A8]">D-BOX &sdot; XD &sdot; 2D &sdot; Legendado &sdot; Sala 1</p>
                    <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                      <p>Hoje, 19 Mai</p>
                      <p>16h40</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-5">
                    <p className="text-[16px] text-[#AAA9A8]">D-BOX &sdot; XD &sdot; 2D &sdot; Legendado &sdot; Sala 1</p>
                    <div className="text-center w-[144px] py-1.5 bg-[#363333] hover:bg-white hover:text-black transtion-all duration-300 ease-linear cursor-pointer rounded">
                      <p>Hoje, 19 Mai</p>
                      <p>16h40</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}