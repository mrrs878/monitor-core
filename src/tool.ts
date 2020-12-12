/*
 * @Author: your name
 * @Date: 2020-12-12 11:41:52
 * @LastEditTime: 2020-12-12 11:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor-core\src\tool.ts
 */
export function getLastEvent(): undefined | Event {
  let lastEvent;
  ['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach((eventType) => document.addEventListener(eventType, (event) => {
    lastEvent = event;
  }, {
    capture: true,
    passive: true,
  }));
  return lastEvent;
}

export function getSelector(path: Array<EventTarget>) {
  return '';
}

export function getCommonInfoFromEvent(event?: Event) {
  return {
    title: document.title.replace(/&/, ''),
    location: window.location.href.replace(/&/, ''),
    kind: 'stability',
    type: 'error',
  };
}

export function getLines(stack: string | undefined) {
  return stack?.split('\n').slice(1).map((item) => item.replace(/^\s+at\s+/g, '')).join('') || '';
}
