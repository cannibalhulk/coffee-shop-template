import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#192B2E] text-white">
      <div className="max-w-screen-xl hidden sm:block mx-auto px-[40px]">
        <section className="flex justify-between items-start py-[40px]  border-b border-b-[#243A3D]">
          <p className="flex gap-5">
            <FaInstagram size={24} />
            <FaLinkedin size={24} />
            <FaYoutube size={24} />
            <FaFacebook size={24} />
          </p>

          <div className="flex gap-10">
            <div className="flex flex-col">
              <p className="text-white/85 font-light">
                Получите 10% скидку на первый заказ кофе.
              </p>
              <p className="text-3xl font-extrabold">Будьте в курсе кофе</p>
            </div>

            <div className="flex gap-2">
              <input
                className="bg-[#243A3D] rounded-2xl px-6 py-3"
                placeholder="Введите e-mail"
              />
              <button className="bg-[#33686E] rounded-2xl p-3">
                Подписаться
              </button>
            </div>
          </div>
        </section>

        <section className="py-[40px]  border-b border-b-[#243A3D] flex justify-between items-start">
          <div className="flex gap-10">
            <div className="flex flex-col gap-6">
              <p className="font-semibold">Помощь</p>
              <div className="flex flex-col font-light">
                <p>Вопрос-ответ</p>
                <p>Журнал о кофе</p>
                <p>Возврат денежных средств</p>
                <p>Система скидок</p>
                <p>Система скидок</p>
                <p>Контакты</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-semibold">Помощь</p>
              <div className="flex flex-col font-light">
                <p>Вопрос-ответ</p>
                <p>Журнал о кофе</p>
                <p>Доставка и оплата</p>
                <p>Система скидок</p>
                <p>Система скидок</p>
                <p>Контакты</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-semibold">Помощь</p>
              <div className="flex flex-col font-light">
                <p>Вопрос-ответ</p>
                <p>Журнал о кофе</p>
                <p>Доставка и оплата</p>
                <p>Система скидок</p>
                <p>Система скидок</p>
                <p>Контакты</p>
              </div>
            </div>
          </div>

          <div className="gap-2 text-right">
            <h3 className="font-extrabold text-4xl">+994 (50) 833 52 55</h3>
            <p className="font-light mt-3">Бесплатный звонок по Азербайджану</p>
          </div>
        </section>

        <section className="py-[40px] flex items-center">
          <div className="w-full flex justify-between font-normal">
            <p className="font-normal">© 2023 «Baristica»</p>

            <div className="flex gap-4 text-right">
              <p>RSS</p>
              <p>Политика конфиденциальности</p>
              <p>Пользовательское соглашение</p>
            </div>
          </div>
        </section>
      </div>

      {/* mobile footer */}
      <div className="max-w-screen-xl block sm:hidden mx-auto px-[16px] py-[36px]">
        <section className="py-[10px] border-b border-b-[#243A3D] flex flex-col justify-between items-start">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="font-semibold text-2xl">Помощь</p>
              <div className="flex flex-col font-light gap-2">
                <p>Вопрос-ответ</p>
                <p>Журнал о кофе</p>
                <p>Возврат денежных средств</p>
                <p>Система скидок</p>
                <p>Система скидок</p>
                <p>Контакты</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-semibold text-2xl">Помощь</p>
              <div className="flex flex-col font-light gap-2">
                <p>Вопрос-ответ</p>
                <p>Журнал о кофе</p>
                <p>Доставка и оплата</p>
                <p>Система скидок</p>
                <p>Система скидок</p>
                <p>Контакты</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-semibold text-2xl">Помощь</p>
              <div className="flex flex-col font-light gap-2">
                <p>Вопрос-ответ</p>
                <p>Журнал о кофе</p>
                <p>Доставка и оплата</p>
                <p>Система скидок</p>
                <p>Система скидок</p>
                <p>Контакты</p>
              </div>
            </div>
          </div>
        </section>

        <section className=" w-full flex flex-col justify-between items-start py-[40px]  border-b border-b-[#243A3D]">
          <p className="flex gap-5">
            <FaInstagram size={24} />
            <FaLinkedin size={24} />
            <FaYoutube size={24} />
            <FaFacebook size={24} />
          </p>

          <div className="flex flex-col gap-10 my-5">
            <div className="flex flex-col gap-5">
              <p className="text-white/85 font-light">
                Получите 10% скидку на первый заказ кофе.
              </p>
              <p className="text-3xl font-extrabold">Будьте в курсе кофе</p>
            </div>

            <div className="flex w-full flex-col gap-2">
              <input
                className="bg-[#243A3D] rounded-2xl px-6 py-3"
                placeholder="Введите e-mail"
              />
              <button className="bg-[#33686E] rounded-2xl p-3">
                Подписаться
              </button>
            </div>

            <div className="gap-2">
              <h3 className="font-extrabold text-4xl">+994 (50) 833 52 55</h3>
              <p className="font-light mt-3">
                Бесплатный звонок по Азербайджану
              </p>
            </div>
          </div>
        </section>

        <section className="py-[10px] flex flex-col items-center">
          <div className="w-full flex flex-wrap gap-4 justify-between font-normal">
            <p className="font-normal">© 2023 «Baristica»</p>

            <p>RSS</p>
            <p>Политика конфиденциальности</p>
            <p>Пользовательское соглашение</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
