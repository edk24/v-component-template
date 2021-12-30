# vue组件开发脚手架

## 项目结构

```shell
├── dist                        // 编译输出目录
├── example                     // 示例目录
├── node_modules                // 包依赖目录
├── package.json                // 包信息
├── README.md                   // 自述文件
├── src                         // 源码目录
│   ├── index.js                // 导出js
│   ├── waterfall-item.vue
│   └── waterfall.vue
└── webpack                     // webpack 配置
    ├── webpack.base.conf.js
    └── webpack.min.conf.js
```


- 组件导出包名在 `webpack/webpack.base.conf.js` 中的 `output` 修改
- `src` 中的 `*.vue` 文件是组件代码，需要导出则在 `index.js` 中配置
- 记得修改 `package.json` 中的信息为自己的

## 如何调试

```bash
# 编译
npm run build
```

编辑 example 中的示例文件，刷新浏览器查看效果


## 如何使用

### 浏览器引入

```html
<!-- 你的组件标签 -->
<Waterfall></Waterfall>

<script src="../dist/vue-waterfall.min.js"></script>
<script>
    console.log('组件对象 :>> ', VWaterfallLazy);
    var vm = new Vue({
        components:{
            Waterfall:VWaterfallLazy.Waterfall,
            WaterfallItem:VWaterfallLazy.WaterfallItem
        }
    });
</script>
```


### vue使用

```js
import {Waterfall, WaterfallItem} from 'VWaterfallLazy';

export default {
    components: {
        Waterfall,
        WaterfallItem
    },
};
```