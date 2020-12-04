import { NextRouter } from "next/router"

export const routerToObj = (router: NextRouter) => {
  const paths = routerToArr(router)

  const titles = routerSplitToTitle(router)

  return titles.map((itm, ind) => ({
    "title": paths[ind] == "/" ? "Home" : itm,
    "path": paths[ind]
  }))
}

const routerToArr = (router: NextRouter) => {

  let res = []
  let pos = router.pathname.indexOf("/")

  while (-1 !== pos) {
    res.push({
      "path": router.pathname.slice(0, pos) + "/"
    })

    pos = router.pathname.indexOf("/", pos + 1)
  }
  return res


  // return ([...router.pathname]).reduce((acc, elt, idx, arr)=> {
  //
  //    if (elt === '/') {
  //      acc.push(arr.join('').slice(0, idx+1))
  //    }
  //    return acc;
  //  }, [])


}

export const routerLastPathToTitle = (router: NextRouter) => {
  return router.pathname
    .split("/")
    .pop()
    .split("-")
    .map(item => capitalizeFirstLetter(item))
    .join(" ")
}

const routerSplitToTitle = (router: NextRouter) => {
  return router.pathname
    .split("/")
    .map(item => item
      .split("-")
      .map(i => capitalizeFirstLetter(i))
      .join(" ")
    )
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}