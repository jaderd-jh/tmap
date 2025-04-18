## 控件

## API

### Control
| 参数     | 说明             | 是否可控 | 类型                          | 默认值                    |
| -------- | ---------------- | -------- | ----------------------------- | ------------------------- |
| offset   | 控件停靠的偏移量 | 是       | Point \| Vector2              |                           |
| position | 控件的位置       | 是       | [PositionType](#positiontype) | window.T_ANCHOR_TOP_RIGHT |
| visible  | 是否可见         | 是       | boolean                       | true                      |

#### PositionType
| 值                    | 描述   |
| --------------------- | ------ |
| T_ANCHOR_TOP_LEFT     | 左上角 |
| T_ANCHOR_TOP_RIGHT    | 右上角 |
| T_ANCHOR_BOTTOM_LEFT  | 左下角 |
| T_ANCHOR_BOTTOM_RIGHT | 右下角 |

### 实例方法

此类是所有控件类的基类，可以通过此类来自定义控件，所有控件均包含Control类的属性、方法和事件。

| 方法         | 说明                                                                   | 类型                                 |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------ |
| setPosition  | 设置控件的位置                                                         | (position?: ControlPosition) => void |
| getPosition  | 返回控件的位置                                                         | () => ControlPosition                |
| onAdd        | 添加叠加物，调用map.addControl时，将调用此方法。自定义控件需实现此方法 | (map: Map) => void                   |
| onRemove     | 移除控件释放内存。自定义控件需实现此方法                               | () => void                           |
| getContainer | 返回控件所在的容器的标签                                               | () => HTMLElement                    |
| show         | 显示控件                                                               | () => void                           |
| hide         | 隐藏控件                                                               | () => void                           |
| isVisible    | 判断控件的可见性                                                       | () => boolean                        |
| setOffset    | 设置控件停靠的偏移量                                                   | (offset: Point) => void              |
| getOffset    | 返回控件停靠的偏移量                                                   | () => Point                          |
| setOptions   | 对ControlOptions属性值赋值                                             | (opt: ControlOptions ) => void       |
