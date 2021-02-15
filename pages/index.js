import Head from 'next/head'
import data from '../public/data';
import Header from '../component/Homepage/Header';
import About from '../component/Homepage/About';
import Work from '../component/Homepage/Work';
import Skills from '../component/Homepage/Skills';
import Footer from '../component/Homepage/Footer';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smartjinny</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Faster+One&family=Gochi+Hand&family=Heebo:wght@100;200;400;900&display=swap" rel="stylesheet"/>
      </Head>
{/* 
      <Promotion></Promotion>
    <Footer></Footer> */}
      <Header/>
      <About/>
      <Work/>
      {/* <Skills/> */}
      <Footer/>
      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}