import { useSelector } from "react-redux"
import { useSetIsShowMenu } from "../../redux/hooks"
import { Menu, ActivityIndicator, NavBar } from "antd-mobile"
import { useState } from "react"
import { useRouter } from "next/router"

const data = [
  {
    value: "1",
    label: "Home",
    isLeaf: true,
    link: "/"
  },
  {
    value: "2",
    label: <span className="hasChildren">Services</span>,
    children: [
      {
        label: "Magento Development",
        value: "1",
        link: "/magento-development",
        disabled: false
      },
      {
        label: "Custom Web Development",
        link: "/custom-web-development",
        value: "2"
      }, {
        label: "Security Services",
        link: "/security-services",
        value: "3"
      }]
  }, {
    value: "3",
    label: <span className="hasChildren">Partnerships</span>,
    children: [
      {
        label: "Outsourcing",
        link: "/outsourcing",
        value: "1"
      }, {
        label: "Outstaffing",
        link: "/outstaffing",
        value: "2"
      }]
  },
  {
    value: "4",
    label: <span className="hasChildren">Company</span>,
    children: [
      {
        label: "About",
        link: "/about",
        value: "1"
      },
      {
        label: "Contacts",
        link: "/contacts",
        value: "2"
      },
      {
        label: "Testimonials",
        link: "/about/testi",
        value: "3"
      }]
  },
  {
    value: "5",
    label: <span className="hasChildren">Faq</span>,
    children: [
      {
        label: "General",
        link: "/general",
        value: "1"
      },
      {
        label: "Magento-2",
        link: "/magento-2",
        value: "2"
      }]
  },
  {
    value: "6",
    label: "Portfolio",
    isLeaf: true,
    link: "/portfolio"
  }
]

export function MobileNavigation() {
  const router = useRouter()
  const isShowMenu = useSelector(state => state.hamburger.isOpen)
  const setIsShowMenu = useSetIsShowMenu()
  const [initData, setInitData] = useState([])

  const onChange = (value) => {
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        if (dataItem.link != null) {
          router.push(dataItem.link)
          setIsShowMenu(false)
        }

        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              router.push(cItem.link)
              setIsShowMenu(false)
            }
          })
        }
      }
    })
  }

  const handleClick = (e) => {
    // e.preventDefault() // Fix event propagation on Android
    setIsShowMenu(!isShowMenu)

    // mock for async data loading
    if (initData.length == 0) {
      setTimeout(() => {
        setInitData(
          [...data]
        )
      }, 100)
    }
  }

  const onMaskClick = () => {
    setIsShowMenu(false)
  }

  const onOkHandle = () => {
    setIsShowMenu(false)
  }

  const menuEl = (
    <Menu
      onOk={onOkHandle}
      className="foo-menu"
      data={initData}
      value={["1", "3"]}
      onChange={onChange}
    />
  )
  const loadingEl = (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>
      <ActivityIndicator size="large" />
    </div>
  )
  return (

    <nav className={isShowMenu ? "menu-active" : ""}>


      <NavBar
        // leftContent={}
        rightContent={<a><img onClick={handleClick} src="/assets/imgs/menu.svg"
                              className="am-icon am-icon-md" alt="" /></a>}
        mode="light"
        // icon={<img src="/assets/imgs/menu.svg"
        //            className="am-icon am-icon-md" alt=""/>}
        onLeftClick={handleClick}
        className="top-nav-bar"
      >
        M-INTEGRATION
      </NavBar>
      {isShowMenu ? initData ? menuEl : loadingEl : null}
      {isShowMenu ? <div className="menu-mask" onClick={onMaskClick} /> : null}
    </nav>
  )
}
