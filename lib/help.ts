import { NextRouter } from "next/router"

export const routerToObj = (router: NextRouter) => {
  const paths = routerToArr(router)

  const titles = routerSplitToTitle(router)

  return titles.map((itm, ind) => ({
    "titles": paths[ind] == "/" ? "Home" : itm,
    "path": paths[ind]
  }))
}

export const routerToArr = (router: NextRouter) => {

  let indices = []
  // const arrPaths = router.pathname

  let arrPaths = "/1/2/3/4"
    .split("/")
    .map(i => `/${i}`)
    .reduce((acc, current, index) => {
      return acc.concat(current)
    }, [])
  let idx = arrPaths.indexOf("/")

  // .split("/")
  while (idx != -1) {
    indices.push(idx)
    idx = arrPaths.indexOf("/", idx + 1)
  }
  console.log(" asd", arrPaths.indexOf("/"))
  let ar = []
  console.log("includes", indices)
  // arrPaths


  console.log("arrPaths", arrPaths)

  // return arrPaths
  //   .reduce((acc, current, index) => {
  //     return acc.concat("/", current)
  //   })

  // .reduce((acc, current, index) => {
  //   acc = acc.concat("/" + current)
  //   return acc
  // }, [])
  //
  // .map((it, ind, arr) =>
  //   (ind === 0)
  //     ? "/"
  //     :
  //     ind === 1
  //       ? it
  //       : `${arr[ind - 1]}${it}`
  // )

}

export const routerLastPathToTitle = (router: NextRouter) => {
  return router.pathname
    .split("/")
    .pop()
    .split("-")
    .map(item => capitalizeFirstLetter(item))
    .join(" ")
}

export const routerSplitToTitle = (router: NextRouter) => {
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