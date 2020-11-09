import Head from 'next/head'
import {Header} from "../Header";
import {Footer} from "../Footer";

import {MobileNavigation} from "../Navigation/MobileNavigation";

export function MainLayout({children}) {

  return (
    <div className="flex-around">
      <Head>
        <title>Website development and IT security | M-INTEGRATION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="M-integration Full Cycle Digital Agency | "/>
        <meta charSet="utf-8"/>
      </Head>

      <Header/>

      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>

      <Footer/>
    </div>
  )
}