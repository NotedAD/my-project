'use client'

import Image from 'next/image'
import { useState } from 'react';
import { sendMessage } from '../../utils/sendMessage';

export default function Question() {
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = await sendMessage(phone, comment, agree);
        if (success) {
            setPhone('');
            setComment('');
        }
    };

    return (
        <div className="flex flex-wrap xl:flex-nowrap flex-col-reverse xl:flex-row justify-center text-[#063536] mb-[72px] lg:mb-36 2xl:w-[1356px] mx-auto px-5 xl:px-0">
            <Image
                src="/img/photo.png"
                width={660}
                height={428}
                alt="Photo"
                className="mx-auto xl:mx-0"
            />
            <form onSubmit={handleSubmit} className="xl:ml-9 mb-8 xl:mb-0">
                <h2 className="font-gilroy text-[24px] leading-[28px] lg:text-5xl lg:leading-[62px] mb-2">Остались вопросы?</h2>
                <p className="font-helvetica text-[15px] leading-[19px] lg:text-lg mb-6">Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</p>
                <div className="xl:flex justify-between mb-4">
                    <label htmlFor="phone" className="font-helvetica text-lg after:content-['*'] after:ml-0.5 after:text-red-500">Телефон</label>
                    <input type="tel" id="phone" name="phone" placeholder="+375 (99) 999-99-99" pattern="+375 (29) 999-99-99" required value={phone} onChange={(e) => setPhone(e.target.value)} className="h-[64px] w-full xl:w-[65%] text-[18px] border-[#063536] border-[1px] px-6 py-5 font-helvetica focus:outline-none focus:border-[#E97550]" />
                </div>
                <div className="xl:flex justify-between mb-8">
                    <label htmlFor="review" className="font-helvetica text-lg">Комментарий</label>
                    <textarea name="review" id="review" cols={30} rows={10} placeholder="Ваш комментарий" value={comment} onChange={(e) => setComment(e.target.value)} className="h-[120px] w-full xl:w-[65%] text-[18px] resize-none border-[#063536] border-[1px] px-6 py-5 font-helvetica focus:outline-none focus:border-[#E97550]"></textarea>
                </div>
                <div className="xl:flex justify-between items-center">
                    <div className="flex items-center mb-8 xl:mb-0">
                        <input type="checkbox" name="agree" id="agree" required checked={agree} onChange={() => setAgree(!agree)} className="w-6 h-6 text-[#063536] bg-[#063536] border-[#063536] rounded checkbox-custom" />
                        <label htmlFor="agree" className="text-[14px] leading-4 lg:text-[16px] font-helvetica ml-3 cursor-pointer">Согласие на обработку персональных данных</label>
                    </div>
                    <button type="submit" className="bg-[#E97550] text-white btn-custom hover:bg-[#F39779] hover:border-[#F39779]">Отправить</button>
                </div>
            </form>
        </div>
    );
}
