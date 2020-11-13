import Head from "next/head"
import { Footer } from "../Footer"
import dynamic from "next/dynamic"
import HomeHeader from "../HomeHeader"
const HomeHeaderDynamicComponentWithNoSSR = dynamic(
  () => import ("../HomeHeader"),
  { ssr: false }
)

export function HomeLayout({ children }) {

  return (
    <div className="flex-around">
      <Head>
        <title>Website development and IT security | M-INTEGRATION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="M-integration Full Cycle Digital Agency | " />
        <meta charSet="utf-8" />
      </Head>

      <HomeHeaderDynamicComponentWithNoSSR />
      {/*<HomeHeader />*/}

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  )
}