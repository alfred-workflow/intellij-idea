# Alfred整合Jetbrains系列软件



## 前言

**Jetbrains系列的软件是我目前开发中最常用到的，比如：IDEA Webstorm Datagrip。这个工作流可以帮助快速检索查看和打开最近使用的项目 更重要的是只需要键盘就可以做到**



#### 支持Jetbrains系列软件

- @alfred-workflows/intellij-idea: [npm地址](https://www.npmjs.com/package/alfred-workflows/intellij-idea) [github仓库地址](https://github.com/alfred-workflow/intellij-idea) (option + I)

- @alfred-workflows/webstorm: [npm地址](https://www.npmjs.com/package/alfred-workflows/webstorm) [github仓库地址 ](https://github.com/alfred-workflow/webstorm) (option + W)

- @alfred-workflows/datagrip: [npm地址](https://www.npmjs.com/package/alfred-workflows/datagrip) [github仓库地址 ](https://github.com/alfred-workflow/datagrip) (option + D)

- @alfred-workflows/pycharm: [npm地址](https://www.npmjs.com/package/alfred-workflows/pycharm) [github仓库地址 ](https://github.com/alfred-workflow/ptcharm) (option + P)

先解释下为什么jetbrains系列不同的软件需要不同的包，主要目的是为了按需引用，尽可能少的污染全局快捷键

(option键在Mac上一般和control command键一起使用，很少会有软件使用option + 字母，所以一般使用option + 字母做为Alfred工作流的快捷键)


#### 先看工作流的效果这里先以Idea为例

使用 option + I 快捷键调出工作流 （或调出工作流然后中输入idea）可以列出最近使用Idea打开的文件

![](https://cdn.jsdelivr.net/gh/liangshen001/PicGo@latest/2022/images/alfredidea.png)



可以出入关键字进行搜索 同时也支持逻辑与(&)和逻辑或(|)

![](https://cdn.jsdelivr.net/gh/liangshen001/PicGo@latest/2022/images/alfredidea2.png)

选中一个项目后

- 直接回车会使用Idea打开此项目
- 使用Command + 回车可使用Finder打开项目所在位置



### 使用环境

- Alfred 5 (Powerpack)

- nodejs v6+(推荐使用最新稳定版本)
- Jetbrains系列软件如(Idea webstorm datagrip pycharm)



### 安装方法

这里需要按需引入需要使用的工作流这里以Idea为例（如果安装了多个工作流安装的包大小共用部分是共享的不会占用储存空间）

全局安装 @alfred-workflows/intellij-idea

```sh
npm i @alfred-workflows/intellij-idea -g
#npm i @alfred-workflows/webstorm -g
#npm i @alfred-workflows/datagrip -g
#npm i @alfred-workflows/pycharm -g
```

执行成功后工作流就已经安装完了，可以如效果图中正常使用了，Alfred会如下图多一个Workflows

![](https://cdn.jsdelivr.net/gh/liangshen001/PicGo@latest/2022/images/alfredidea3.png)

### 自定义配置

可以打开Alfred Workflows 进行查看，可以自定义修改快捷键和关键词这里默认是 option + I / idea

- 自定义快捷键 默认为option + I 可以点击Hotkey进行自定义配置

- 自定义Alfred关键词 默认为idea 可以点击Script Filter进行自定义配置

### 卸载

此卸载会完全卸载工作流不会遗留任何文件

```sh
npm uninstall @alfred-workflows/intellij-idea -g
#npm uninstall @alfred-workflows/webstorm -g
#npm uninstall @alfred-workflows/datagrip -g
#npm uninstall @alfred-workflows/pycharm -g
```



