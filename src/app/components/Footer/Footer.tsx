import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='text-white bg-[#114142] py-16 text-center xl:text-left'>
            <div className='2xl:w-[1356px] mx-auto xl:flex gap-44 font-helvetica'>
                <div className='flex flex-col items-center xl:items-start mb-9 xl:mb-0'>
                    <div className='flex items-end'>
                        <Image
                            src="./img/house.svg"
                            width={64}
                            height={64}
                            alt="Logo"
                        />
                        <div className='ml-2 text-left'>
                            <p>Строительные решения</p>
                            <p className='text-xs'>строительная компания</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p>© 2024 ООО “Строительные решения”</p>
                    </div>
                </div>
                <div className='mb-6 xl:mb-0'>
                    <p className='text-lg mb-4'>Адрес офиса</p>
                    <p className='text-[#FBFDFD99] mb-2'>
                        РБ, г. Минск,<br className='xl:block hidden' />
                        ул. Ленина, 1
                    </p>
                    <p className='text-[#FBFDFD99]'>
                        пн - пт: c 09:00 до 18:00<br />
                        сб - вс: с 10:00 до 16:00
                    </p>
                </div>
                <div>
                    <p className='text-[#FBFDFD99] mb-7'>ООО “Строительные решения”<br />
                        Юридический адрес:<br />
                        РБ, г. Минск, ул. Ленина, 1<br />
                        УНП: 111111111
                    </p>
                    <p>Разработка сайта: <Link href="https://web-space.by/" className='text-[#E97550] text-lg hover:text-[#F39779]'>Web-space.by</Link></p>
                </div>
            </div>
        </footer>
    );
}
