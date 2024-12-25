'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Popup from '../Popup/Popup';

export default function TextSlider() {
  const texts = [
    {
      main: "Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией",
      sub: "Без головной боли и отклонений от сметы строительства",
    },
    {
      main: "Мы создаем надежные и современные дома для вашего уютного проживания",
      sub: "В своей работе мы применяем современные технологии и специализированное строительное оборудование",
    },
    {
      main: "В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет",
      sub: "Мы оперативно выполняем весь спектр строительных работ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 5500);

    return () => clearInterval(interval);
  }, [texts.length]);

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div className="xl:flex justify-center items-center h-[100vh] lg:h-[109vh] mb-[72px] lg:mb-36 pt-28 " style={{ backgroundImage: "url('./img/sliderFirst.png')" }}>
      <div className="w-full xl:w-[45%] px-5 xl:px-0">
        <p
          className={`w-full xl:w-5/6 text-white font-involve text-[28px] leading-[33px] lg:text-[64px] lg:leading-[83px] transition-opacity duration-500 ease-in-out mb-3 xl:mb-4 ${isAnimating ? "opacity-0" : "opacity-100"}`}
        >
          {texts[currentIndex].main}
        </p>
        <p
          className={`text-white mt-2 font-helvetica text-[16px] leading-5 lg:text-[26px] lg:leading-[36px] transition-opacity duration-500 ease-in-out mb-6 xl:mb-8 ${isAnimating ? "opacity-0" : "opacity-100"}`}
        >
          {texts[currentIndex].sub}
        </p>
        <button className="border-2 border-[#E97550] bg-[#E97550] text-white btn-custom hover:bg-[#F39779] hover:border-[#F39779] mb-6 xl:mb-0" onClick={openPopup}>
          Узнать стоимость
        </button>
      </div>

      <div className="flex xl:grid grid-cols-2 pl-5 xl:pl-0">
        <div className="p-6 h-[272px] w-[272px] bg-[#114142] flex flex-col justify-between text-white">
          <p className="font-gilroy text-[18px] lg:text-[22px]">Оформление рассрочки по ставке от 15% годовых</p>
          <Link href="/#" className="group flex text-[18px] font-helvetica hover:text-[#F39779]">
            Подробнее
            <div className="flex items-end">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#E97550] group-hover:stroke-[#F39779]"
              >
                <path
                  d="M7 17L17 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>

        <div
          className="relative flex justify-center items-center bg-cover bg-center h-[272px] w-[272px]"
          style={{ backgroundImage: "url('./img/imgslickFirst.png')" }}
        >
          <p className="absolute top-0 left-0 p-6 rounded font-gilroy text-[18px] lg:text-[22px] text-white">
            Барнхаусы
          </p>
        </div>

        <div
          className="hidden relative xl:flex justify-center items-center bg-cover bg-center h-[272px] w-[272px]"
          style={{ backgroundImage: "url('./img/imgslickSecond.png')" }}
        >
          <p className="absolute top-0 left-0 p-6 rounded font-gilroy text-[22px] text-white">
            Таунхаусы
          </p>
        </div>

        <div className="hidden p-6 h-[272px] w-[272px] bg-[#114142] xl:flex flex-col justify-between text-white">
          <p className="font-gilroy text-[22px]">Скидка до 5% при полной предоплате за проект</p>
          <Link href="/#" className="group flex text-[18px] font-helvetica hover:text-[#F39779]">
            Подробнее
            <div className="flex items-end">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#E97550] group-hover:stroke-[#F39779]"
              >
                <path
                  d="M7 17L17 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[3rem] lg:bottom-[-3rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center space-x-2">
        {texts.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-6 bg-[#E97550]" : "w-2 bg-[#FBFDFD]"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          ></button>
        ))}
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

