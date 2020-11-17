import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <h1> NotFound <strong>404</strong></h1>
      <Link href={"/"}><a>Home</a></Link>
    </>
  )
}
