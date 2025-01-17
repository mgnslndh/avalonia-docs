---
id: create-a-project
title: 创建并运行项目
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 安装模板

在开始之前，请确保您已经[安装了Avalonia模板](../install.md)：

```bash
dotnet new install Avalonia.Templates
```

## 创建项目

首先，我们将使用最简单的Avalonia模板：`Avalonia Application`（或是CLI中的`avalonia.app`）。

<Tabs>
  <TabItem value="cli" label="命令行" default>
运行以下命令：

```bash
dotnet new avalonia.app -o GetStartedApp
```

这将创建一个名为`GetStartedApp`的新文件夹，其中包含新的项目。
  </TabItem>
  <TabItem value="rider" label="Rider">

- 在Rider启动界面上，选择**New Solution**

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/test-drive/rider-splashscreen.png" width="600"/>
</div>

- 在侧边栏中向下滚动并选择**Avalonia App**
- 在**Solution Name**字段中输入`GetStartedApp`
- 点击**Create**

该模板将创建一个新的解决方案和项目。

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/test-drive/rider-solution.png"/>
</div>

  </TabItem>
  <TabItem value="vs" label="Visual Studio">

- 在**Visual Studio**中，点击**Create a new project**。
- 在搜索框中输入`Avalonia`。
- 点击**Avalonia Application**，然后点击**Next**。

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/choose-a-solution-template/image (31) (1) (1).png" />
</div>

- 将项目命名为`GetStartedApp`，然后点击**Create**。

该模板将创建一个新的解决方案和项目。

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/choose-a-solution-template/image (27) (1).png" />
</div>
  </TabItem>
</Tabs>

## 运行项目

现在我们准备好运行项目了！

<Tabs>
  <TabItem value="cli" label="命令行" default>


进入`GetStartedApp`目录并运行：

```bash
dotnet run
```
  </TabItem>
  <TabItem value="rider" label="Rider">

在Rider工具栏中点击**Run**按钮：

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/test-drive/rider-run.png"/>
</div>
  </TabItem>
  <TabItem value="vs" label="Visual Studio">

- 在**Visual Studio**中，点击**Create a new project**。
- 在搜索框中输入 `Avalonia`。
- 点击**Avalonia Application**，然后点击**Next**。

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/choose-a-solution-template/image (31) (1) (1).png" />
</div>

- 将项目命名为`GetStartedApp`，然后点击**Create**。

该模板将创建一个新的解决方案和项目。

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/choose-a-solution-template/image (27) (1).png" />
</div>
  </TabItem>
</Tabs>

现在您应该正在运行您的第一个Avalonia应用程序了！

<div style={{textAlign: 'center'}}>
    <img src="/img/get-started/test-drive/initial-window.png" />
</div>