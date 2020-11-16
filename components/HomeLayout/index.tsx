import Head from "next/head"
import { Footer } from "../Footer"
import dynamic from "next/dynamic"
import { NoJsNavigation } from "../Navigation/NoJsNavigation"
// import {HomeHeader} from "../HomeHeader"

const HomeHeaderDynamicComponentWithNoSSR = dynamic(
  () => import("../HomeHeader").then((mod) => mod.HomeHeader),
  {
    ssr: false,
    // TODO: nav menu without js
    // loading: () => <p>...</p>
    loading: () => <div className="darker-effect-nojs">
      <div className="header-">
        <NoJsNavigation />
      </div>
    </div>
  }
)

export function HomeLayout({ children }) {

  return (
    <div className="flex-around">
      <Head>
        <title>Website development and IT security | M-INTEGRATION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="M-integration Full Cycle Digital Agency | " />
        <meta charSet="utf-8" />
        <noscript>
          For full functionality of this site it is necessary to enable JavaScript.
          Here are the <a href="https://www.enable-javascript.com/">
          instructions how to enable JavaScript in your web browser</a>.
        </noscript>
      </Head>

      <HomeHeaderDynamicComponentWithNoSSR />

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  )
}