/*
 * @Author: your name
 * @Date: 2020-12-11 19:20:05
 * @LastEditTime: 2020-12-11 19:20:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor-core\src\interfaces\index.d.ts
 */
interface ConfigI {
  reportUrl: string;
}

interface BaseInfoI {
  title: string;
  location: string;
  message: string;
  kind: string;
  type: string;
  errorType: string;
}

interface JSRunTimeErrorEventI extends BaseInfoI {
  filename: string;
  position: string;
  stack: string;
  selector: string;
}

interface AssetsErrorI extends BaseInfoI {
  url: string;
  nodeName: string;
}

interface AjaxErrorEventI extends BaseInfoI {
  response: string;
  status: number;
  method: string;
  url: string;
}

interface PromiseErrorI extends BaseInfoI {
  message: string;
  stack: string;
}