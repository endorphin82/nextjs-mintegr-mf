import Link from "next/link"
import { HomeLayout } from "../components/HomeLayout"

export default function Home() {
  return (
    <HomeLayout>
      <div className="home">
        <div className="content_plane">
          <div>Get in touch <Link href={"/contacts/"}><a
            title="contact us" className="btn-inline"
            target="_self">contact us</a></Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
