import { HomeLayout } from "../components/HomeLayout"

export default function Home() {
  return (
    <HomeLayout>
      <div className="home">
        <div className="content_plane">
          <p>Get in touch <a href="contacts/" title="contact us" className="btn-inline"
                             target="_self">contact us</a>
          </p>
          <div className="clear"></div>
        </div>
      </div>
    </HomeLayout>
  )
}
