'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import Popup from '../Popup/Popup';

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <header className='px-5 xl:px-0 text-white w-full py-4 xl:py-6 xl:border-b-[1px] border-[#FBFDFD99] z-10'>
      <div className='2xl:w-[1356px] mx-auto flex justify-between items-center'>
        <div className='flex items-end'>
          <Image
            src="./img/house.svg"
            width={64}
            height={64}
            alt="Logo"
          />
          <div className='ml-2 font-helvetica'>
            <p>Строительные решения</p>
            <p className='text-xs'>строительная компания</p>
          </div>
        </div>
        <div className='xl:hidden'>
          <Image
            src="./img/phone.svg"
            width={32}
            height={32}
            alt="Logo"
            onClick={openPopup}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='xl:flex hidden justify-between gap-16 items-center font-helvetica'>
          <div>
            <p className='text-lg'>Адрес офиса:</p>
            <p className='text-[#FBFDFD99]'>
              РБ, г. Минск,<br />
              ул. Ленина, 1
            </p>
          </div>
          <div className='font-helvetica'>
            <p className='text-lg'>+375 99 999 99 99</p>
            <p className='text-[#FBFDFD99]'>
              пн - пт: c 09:00 до 18:00<br />
              сб - вс: с 10:00 до 16:00
            </p>
          </div>
          <div>
            <button className='border-2 border-[#E97550] text-white btn-custom hover:text-[#F39779] hover:border-[#F39779]' onClick={openPopup}>Заказать звонок</button>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </header>
  );
}
