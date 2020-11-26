import { useRouter } from "next/router"
import { routerLastPathToTitle, routerSplitToTitle, routerToArr, routerToObj } from "../../lib/help"
import Link from "next/link"
import { Breadcrumbs } from "nextjs-breadcrumbs"

export default function TitleOfAnyPage() {
  const router = useRouter()
  console.log("router", router)
  const routerTitle = routerLastPathToTitle(router)
  const routerSplitTitle = routerSplitToTitle(router)
  const routerArr = routerToArr(router)
  // const routerObj = routerToObj(router)
  // console.log("routerObj", routerObj)
  // console.log("routerSplitTitle", routerSplitTitle)
  console.log("routeArr", routerArr)
  // console.log("routerLastPathToTitle", routerLastPathToTitle(router))
  // const example = Breadcrumbs()
  // console.log(example?.props?.children?.props)
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