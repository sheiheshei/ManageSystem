import { HomeOutlined } from "@ant-design/icons"

let menuConf = [
  {
    tittle: "工具",
    key: 'sub1',
    icon: HomeOutlined,
    subMenus: [
      {
        to: "/main/home",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '1',
        exact: true,
        strict: true,
        activeClassName: ''
      },
      {
        to: "/main/about",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '2',
        exact: true,
        strict: true,
        activeClassName: ''
      },
      {
        to: "/main/contact",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '3',
        exact: true,
        strict: true,
        activeClassName: ''
      },
    ]
  },
  {
    tittle: "工具",
    key: 'sub2',
    icon: HomeOutlined,
    subMenus: [
      {
        to: "/main/home",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '4',
        exact: true,
        strict: true,
        activeClassName: ''
      },
      {
        to: "/main/about",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '5',
        exact: true,
        strict: true,
        activeClassName: ''
      },
      {
        to: "/main/contact",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '6',
        exact: true,
        strict: true,
        activeClassName: ''
      },
    ]
  },
  {
    tittle: "工具",
    key: 'sub3',
    icon: HomeOutlined,
    subMenus: [
      {
        to: "/main/home",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '7',
        exact: true,
        strict: true,
        activeClassName: ''
      },
      {
        to: "/main/about",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '8',
        exact: true,
        strict: true,
        activeClassName: ''
      },
      {
        to: "/main/contact",
        tittle: "文本编辑",
        icon: HomeOutlined,
        key: '9',
        exact: true,
        strict: true,
        activeClassName: ''
      },
    ]
  }
]

export default menuConf 