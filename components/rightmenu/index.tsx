import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";
import { MouseEvent, useEffect } from "react";

type Props = {
  className?: string;
  id: string;
  onItemClick?: Function;
};
function Index(props: Props) {
  const { className, id, onItemClick } = props;

  const handleItemClick = ({
    id,
    event,
    props,
  }: {
    id: string;
    event: Event;
    props: any;
  }) => {
    switch (id) {
      case "addLabel":
        console.log(event, props);
        break;
      case "addCategory":
        console.log(event, props);
        break;
      case "theme":
        console.log(event, props);
        break;
      case "setting":
        console.log(event, props);
        break;
    }
    onItemClick(id);
  };

  return (
    <div>
      <Menu id={id}>
        <Item id="addLabel" onClick={handleItemClick}>
          添加图标
        </Item>
        <Item id="addCategory" onClick={handleItemClick}>
          添加分类
        </Item>
        <Item id="theme" onClick={handleItemClick}>
          更换壁纸
        </Item>
        <Separator />
        <Item id="setting" onClick={handleItemClick}>
          设置
        </Item>
      </Menu>
    </div>
  );
}

export default Index;
