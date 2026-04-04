# SSMT

SSMT4是一款非常简单的基于3Dmigoto的综合Mod工具箱

基于Rust + Tauri架构开发

![alt text](image.png)

# 发展历史

- SSMT4前身是SSMT3，使用WinUI3开发
- SSMT3前身是DBMT，前期使用WinForm架构，后期使用WinUI3开发
- DBMT前身是MMT，使用C++内核 + WinForm开发
- MMT前身是NMBT，使用C++内核 + Python界面开发
- NMBT前身是3Dmigoto-Wheel，一个使用Json文件配置好之后，直接运行的C++内核的exe控制台程序
- 3Dmigoto-Wheel的前身是3Dmigoto-Tailor，一个综合性的Python脚本工具集

> SSMT第一个版本诞生于2022年，至今已持续更新并开发运维4年时间
# 设计哲学
- 简单

在支持复杂使用情况的前提下，尽可能把设计做到极致简单

- 优雅

颜值必须高，用着必须爽

- 统一

多个游戏复用一套流程，免去N多工具的学习流程

# 天生支持把Mod导入Blender二次编辑用于修复旧Mod

> 我一般称之为Mod逆向，但其本质并非“逆向”，而是对Mod文件做一个数据格式转换，使得它能够被导入到Blender中。

SSMT系列工具从第一个版本诞生至今，每个版本都天生支持Mod逆向。

SSMT基于数据类型的架构可以做到正向和逆向提取通吃，配置自由增删。

在其它游戏中，Mod的模型都可以很轻松的被提取出来进行修复，以便于修复版本更新后坏掉的Mod，但是3Dmigoto类Mod转换格式比较复杂，SSMT系列工具解决了这个问题。

Mod逆向功能正是为了修复旧Mod而诞生并逐渐完善的。


