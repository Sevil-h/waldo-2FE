import style from './layout.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="p-8 bg-green-50 static bottom-0 shadow-md">
      <ul className="flex flex-row text-lg mt-4 font-serif justify-center">
        <li className='text-green-200 mr-8 hover:text-green-700 transition delay-100 duration-300 ease-in-out'><a href="#">Wikipedia </a></li>
        <li className='text-green-200 hover:text-green-700 transition delay-100 duration-300 ease-in-out'><a href="#"> Painting</a></li>
      </ul>
    </div>
    )
}
