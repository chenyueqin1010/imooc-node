### Node.js+MongoDB建站练习（一期）

此程序基于[慕课网](http://www.imooc.com/learn/75)Scott

#### ★★使用流程★★
##### 1、 **安装`Node.js`**
* 具体的安装方法请自行探索，多找几篇博客文章熟悉后再尝试，适用于对**Node.js**有一定了解的同学
##### 2、 **安装`MongoDB`**，请自行安装
* 2.1、 `MongoDB 数据储存路径&运行数据库`在安装路径下的`bin`文件目录启动命令窗口，输入mongod -dbpath=安装路径，例如mongod -dbpath=d:\\ProgramFiles\MongoDB\db(注意，db文件夹自己先新建好)
* 2.2、 `MongoDB查询`上一步运行窗口别关，重新打开个命令窗口，输入mongo，就进入了数据库，show dbs-->查看所有数据库，use 数据库名-->切换到某个数据库，db.表名.find()-->查看数据库中某个表的所有记录；
##### 4、 安装`bower`依赖：`bower install`
* 在项目文件夹下，按住`shift`键的同时按下鼠标右键，选择在此处打开命令窗口，执行命令：`bower install`；
##### 5、 安装`npm`依赖：`npm install`
* 在项目文件夹下，按住`shift`键的同时按下鼠标右键，选择在此处打开命令窗口，执行命令：`npm install`；
##### 7、 启动项目入口文件：`node app.js`
* 在项目文件夹下，按住`shift`键的同时按下鼠标右键，选择在此处打开命令窗口，执行命令：`node app`；
##### 8、 浏览器查看效果
* 8.1  `http://localhost`查看首页效果。
##### 如有疑问，请联系Andy Chen：`chenyueqin1010@sina.com`
