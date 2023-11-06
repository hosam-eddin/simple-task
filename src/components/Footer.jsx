import React from 'react'
import holaImg from '../images/hola.399edd93.png';
const Footer = () => {
  return (
    <footer className=' px-6 mx-auto flex w-full flex-wrap items-center justify-center gap-1 md:justify-between'>
      <h6 className='text-[#121212]'>جميع الحقوق محفوظة © تكنكة 2023</h6>
      <div className='flex items-center md:gap-2 text-[#121212]'>
        <span>تطوير و تشغيل</span>
        <img src={holaImg} alt="" />
        <span>لتقنية المعلومات</span>
      </div>
    </footer>
  )
}

export default Footer