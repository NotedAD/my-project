'use client'

import React from 'react';
import { useFormContext } from '../../contexts/FormContext';
import Image from 'next/image';
import { sendMessage } from '../../utils/sendMessage';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const { phone, setPhone, comment, setComment, agree, setAgree } = useFormContext();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = await sendMessage(phone, comment, agree);
        if (success) {
            setPhone('');
            setComment('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 px-5 lg:px-0">
            <div className="bg-white w-[660px] relative">
                <button
                    className="absolute top-3 right-3 text-white bg-[#11414299] w-9 h-9 rounded-full flex items-center justify-center"
                    aria-label="Закрыть окно"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <Image
                    src="/img/backgroundCallBack.png"
                    width={660}
                    height={198}
                    alt="Photo"
                />
                <div className="px-4 lg:px-0">
                    <h2 className="font-gilroy text-[20px] lg:text-[32px] leading-[41px] mb-2 mt-4 text-left lg:text-center text-[#063536]">
                        Обратный звонок
                    </h2>
                    <p className="font-helvetica text-[14px] lg:text-[16px] mb-6 text-left lg:text-center text-[#063536]">
                        Заполните форму ниже, и наш специалист свяжется<br />с вами в ближайшее время.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mx-auto w-full max-w-lg lg:p-6 pb-4">
                        <div className="w-full mb-4">
                            <label
                                htmlFor="phone"
                                className="font-helvetica text-lg block mb-2 after:content-['*'] after:ml-0.5 after:text-red-500 text-[#063536]"
                            >
                                Телефон
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+375 (99) 999-99-99"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-[64px] w-[100%] text-[18px] border-[#063536] border-[1px] px-6 py-5 font-helvetica focus:outline-none focus:border-[#E97550] text-[#063536]"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <label htmlFor="review" className="font-helvetica text-lg block mb-2 text-[#063536]">
                                Комментарий
                            </label>
                            <textarea
                                name="review"
                                id="review"
                                cols={30}
                                rows={10}
                                placeholder="Ваш комментарий"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="h-[120px] w-[100%] text-[18px] resize-none border-[#063536] border-[1px] px-6 py-5 font-helvetica focus:outline-none focus:border-[#E97550] text-[#063536]"
                            ></textarea>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="agree"
                                id="agree"
                                required
                                checked={agree}
                                onChange={() => setAgree(!agree)}
                                className="w-6 h-6 text-[#063536] bg-[#063536] border-[#063536] rounded checkbox-custom"
                            />
                            <label htmlFor="agree" className="font-helvetica ml-3 cursor-pointer text-[#063536] text-[14px] lg:text-[16px]">
                                Согласие на обработку персональных данных
                            </label>
                        </div>
                        <button type="submit" className="bg-[#E97550] text-white btn-custom hover:bg-[#F39779] hover:border-[#F39779] py-2 px-6 rounded">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Popup;
