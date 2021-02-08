import menuConf from './menuconf'
import { Menu } from 'antd'



const { SubMenu } = Menu



function getMenu(menuConf) {
  
    menuConf.map((item, index) => {
      if (item.subMenu && item.subMenu.length > 0) {
        return (
          <SubMenu
            title={item.tittle}
            icon={item.icon}
            key={item.key}
          >
            
          </SubMenu>
        )
      }
    })
  
}