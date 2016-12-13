Win-mock
---

### Introduce
具有图形化操作界面的前端数据mock server.具备下面的功能
- 接口分类
- 数据快速生成
- CORS
- 接口CRUD，使用lowdb存储

### Install
- 使用wishare命令工具快速生成
```bash
wishare win-mock init
```
如果你还没有安装wishare,可以先安装wishare
```bash
npm install -g wishare-cli
```
当然，你也可以直接clone
```bash
git clone https://github.com/WinFED/win-mock.git
npm install 
```

### Usage
在有wishare的情况下，可以使用下面的命令启动
```bash
wishare win-mock start
```
当然也可以使用当年目录下执行下面的命令启动
```bash
npm run dev
```
默认使用3000端口，可以在上面启动时，添加--port <端口号>来指定端口。

### License
ISC
