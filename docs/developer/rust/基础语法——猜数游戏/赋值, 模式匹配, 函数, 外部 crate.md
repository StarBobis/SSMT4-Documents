首先请新建工作空间:
```shell
cargo new gessing_game
```
现在在命令行中打开工作空间并尝试运行:
```shell
cargo run
```
将得到一行打印为 `Hello, world` 的文本.

## 本小节目标
1. 让玩家完成一次猜测;
2. 打印玩家猜的的内容.
## 代码编写
请复制粘贴以下代码:
```rust
// ./src/main.rs
use std::io;

fn main() {
    println!("请猜测一个数");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("读取有误时的报错");
    println!("你猜的是: {}", guess);
}
```

下面详细讲解代码:

1. `let mut guess = String::new();` *定义 (令, `let`)* 了一个*可变的 (<span style="color:cyan">mut</span>able)* 变量, 名为 `guess`, 并且将其赋值为一个*新建 (`new`)*的空*字符串 (`String`)*. 其中
    - `let` 关键字用于定义变量. 不同于 C/C++, Rust 不以类型名为定义变量的关键字;
    - `mut` 表示当前*变量 (variable)* 可变. 尽管变量一词无论从中文还是英文看都理应可变, 但实际上 Rust 中的变量默认不可变, 用户必须通过手动输入 `mut` 关键字显式声明变量可变, 否则变量在初次赋值后不再可变;
    - `=` 左右连接欲赋值的变量与将赋的值;
    - `String::new` 为*字符串 (String)* 类型下的*新建 (new)* 方法, 返回一个空字符串;
:::tip
定义变量语句可以与赋值语句分开写:
```rust
let guess;
guess = String::new();
```
:::
:::tip
语法将在下一章系统性介绍.
:::
2. `io::stdin().read_line(&mut guess).expect("读取有误时的报错");` 调用了*标准库 (<span style="color:cyan">st</span>an<span style="color:cyan">d</span>ard crate)* 下的 *输入输出 (<span style="color:cyan">i</span>nput & <span style="color:cyan">o</span>utput)* 子库的*标准输入 (<span style="color:cyan">st</span>an<span style="color:cyan">d</span>ard <span style="color:cyan">in</span>put)* 方法