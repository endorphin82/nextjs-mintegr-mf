import { useRouter } from "next/router"
import { routerLastPathToTitle, routerToObj } from "../../lib/help"
import Link from "next/link"
import { Breadcrumbs } from "nextjs-breadcrumbs"

export default function TitleOfAnyPage() {
  const router = useRouter()
  console.log("router", router)
  const routerTitle = routerLastPathToTitle(router)
  const routerObj = routerToObj(router)


  console.log("routerObj", routerObj)

  return (
    <>
      <h1 className="title-header">{routerTitle}</h1>
      {/*<div>{example}</div>*/}

      <ul className="breadcrumb breadcrumb__t">
        <li>
          <Link href={"/"}>
            <a>Home&nbsp;</a>
          </Link>
        </li>
        <li className="divider">
        </li>
        <li className="active">
          &nbsp;{routerTitle}
        </li>
      </ul>

      <ul className="breadcrumb breadcrumb__t">

      </ul>
    </>
  )
}