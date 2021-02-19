import { HomeOutlined } from "@ant-design/icons"

let menuConf = [
  {
    tittle: "导航",
    key: 'sub1',
    icon: HomeOutlined,
    subMenus: [
      {
        to: "/main/steps",
        tittle: "Steps 步骤条",
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
    tittle: "表单",
    key: 'sub2',
    icon: HomeOutlined,
    subMenus: [
      {
        to: "/form/basic",
        tittle: "基础表单",
        icon: HomeOutlined,
        key: '4',
        exact: true,
        strict: true,
        activeClassName: ''
      },
    ]
  },
  {
    tittle: "测试",
    key: 'sub3',
    icon: HomeOutlined,
    subMenus: [
      {
        to: "/test/children",
        tittle: "子组件测试",
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