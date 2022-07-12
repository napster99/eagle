# eagle

[![~](https://img.shields.io/badge/build-passing-success?style=flat&logo=GoogleChrome)](https://github.com/napster99/eagle)
[![~](https://img.shields.io/badge/npm-Grafana-%23F46800?style=flat&logo=Grafana)](https://github.com/grafana/grafana)
[![~](https://img.shields.io/badge/lastest-v0.0.1-critical)](https://github.com/napster99/eagle)
[![~](https://img.shields.io/badge/MIT-License-blue)](https://github.com/napster99/eagle/blob/master/LICENSE)

A page Performances Tool for Google Chrome Extension

## Feature List

<hr>

### I 指标数据

- #### 页面加载总耗时

  ```
  loadEventEnd - startTime
  指页面完全加载完所用的时间，这时候触发完成了 onload 事件
  ```

- #### DNS 解析耗时

  ```
  domainLookupEnd - domainLookupStart
  指通过域名解析服务（DNS），将指定的域名解析成IP地址所消耗的时间
  ```

- #### TCP 连接耗时

  ```
  connectEnd - connectStart
  指浏览器和WEB服务器建立TCP/IP连接所用的时间
  ```

- #### SSL 连接耗时

  ```
  location.protocol === 'https:' ? connectEnd - secureConnectionStart
  只在 HTTPS 下有效，属于TCP连接耗时的一部分，指安全连接握手耗时
  ```

- #### 网路请求耗时

  ```
  responseStart - requestStart
  指开始发送请求到服务器返回第一个字节所需要的时间
  ```

- #### 数据传输耗时

  ```
  responseEnd-responseStart
  指服务器端返回第一个字节到最后一个字节所需要的时间
  ```

- #### DOM 解析耗时

  ```
  domContentLoadedEventEnd - responseEnd
  指页面请求完成（responseEnd）后，到整个 DOM 解析完所用的时间，页面的复杂度决定了 DOM 解析耗时
  ```

- #### 资源加载耗时

  ```
  loadEventEnd - domContentLoadedEventEnd
  指 DOM 解析完成后到页面完全加载完所用的时间
  ```

- #### 首包时间

  ```
  responseStart - startTime
  指从页面请求到浏览器开始接收到数据所用的时间
  ```

- #### 页面渲染耗时

  ```
  loadEventEnd - responseEnd
  等于页面完全加载时间 - HTML 加载完成时间
  ```

- #### 页面完全加载时间

  ```
  loadEventEnd - startTime
  指页面完全加载完所用的时间，这时候触发完成了 onload 事件
  ```

- #### HTML 加载时间

  ```
  responseEnd - startTime
  指页面所有 HTML 加载完成（不包括页面渲染时间），即包括 DNS、TCP、Request 和 Response
  ```

- #### 首次交互时间

  ```
  domInteractive - startTime
  指页面 DOMContentLoaded 事件触发的开始时间，这时候页面可以交互
  ```

- #### 首屏时间
  ```
  window.MutationObserver
  首屏时间，也称用户完全可交互时间，即整个页面首屏完全渲染出来，用户完全可以交互，一般首屏时间小于页面完全加载时间，该指标值可以衡量页面访问速度
  ```

<hr>

### II Chrome Core Web Vitals

- #### LCP

  `LCP显示最大内容元素所需时间（衡量网站初次载入速度）`

- #### FID

  `FID首次输入延迟时间（衡量网站互动顺畅程度）`

- #### CLS
  `CLS累计版面配置移转（衡量网页元件视觉稳定性）`

<hr>

### III 接口统计

- #### 数量

- #### 耗时

- #### Tracer
  `类似FA工具，快捷追踪`

<hr>

### IV 内存监控 & 错误告警

- #### 内存使用状态
- #### 错误收集，告警处理

<hr>

### V DOM 延时提示

- #### 内容区域精准提示，所见即所得

## 插件打包目录结构

```
 dist目录
  |-_locales
      |-zh_CN
  |-public
      |-icon.png
  |-bg.bundle.js
  |-main.bundle.js
  |-manifest.json
  |-popup.html
```
