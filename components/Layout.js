import Head from 'next/head'
import Image from 'next/image'
import style from './layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Paragraph from './Paragraph'

export default function Layout({children}) {
  return (
    <>
      <div className="container mx-auto sm:mt-8 md:mt-20 mb-20">
      <div className="sm:p-4 md:p-8 shadow rounded bg-green-50 flex flex-col justify-center items-center">
        <div className="flex-1">
        <Image
          src="/images/vangogh.jpeg"
          height={220}
          width={220}
          alt="Vincent Van Gogh"
          className="rounded-full shadow-md m-4"
        />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center m-4 pl-8 pr-8">
          <Header />
          <Paragraph />
          <div className="flex flex-row m-8 justify-center flex-wrap ">
            <Image
            src="/images/image-1.jpeg"
            height={180}
            width={180}
            alt="Vincent Van Gogh"
            className="shadow-md "
          />
          <Image
            src="/images/image-2.jpeg"
            height={180}
            width={180}
            alt="Vincent Van Gogh"
            className="shadow-md"
          />
          <Image
            src="/images/image-3.jpeg"
            height={180}
            width={180}
            alt="Vincent Van Gogh"
            className="shadow-md "
          />
          <Image
            src="/images/image-4.jpeg"
            height={180}
            width={180}
            alt="Vincent Van Gogh"
            className="shadow-md "
          />
          <Image
            src="/images/image-5.jpeg"
            height={180}
            width={180}
            alt="Vincent Van Gogh"
            className="shadow-md "
          />
          </div>
        </div>
        </div>
      </div>
    <Footer />
    </>
    )
}
