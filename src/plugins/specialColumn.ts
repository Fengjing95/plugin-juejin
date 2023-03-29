/*
 * @Date: 2023-03-28 17:58:01
 * @Author: 枫
 * @LastEditors: 枫
 * @description: description
 * @LastEditTime: 2023-03-29 17:52:48
 */

import { createSVG } from "../utils/createSVGElement";

export function insertSpecialColumn() {
  // 获取 UID
  let uid = JSON.parse(localStorage.getItem(`user_first_visit_dispatch_coupon`) || '');

  if (uid) {
    const warp = document.querySelector('.side-navigator-wrap')
    if (warp) {
      const tabs = warp?.childNodes;
      // 克隆最后一个 tab
      const lastNode = tabs[tabs.length - 1];
      const cloneNode = lastNode.cloneNode(true);

      // 移除选中样式
      const sonNode = cloneNode.firstChild as HTMLDivElement;
      if (sonNode.classList.length > 1) {
        sonNode.classList.remove('active-nav');
      }

      // 修改跳转地址
      const aTag = sonNode?.firstChild as HTMLAnchorElement;
      aTag.href = `/user/${uid}/column_followed`;
      if (aTag.childElementCount > 1) {
        const svg = createSVG({
          width: 16,
          height: 16,
          fill: 'none',
          paths: [{
            d: 'M 14.2295 13.4775 c 0 0.494 -0.5677 1.0617 -1.128 1.2018 L 9.9901 13.1973 L 7.3728 14.6055 l -2.6173 -1.4156 L 1.6441 14.7456 C 1.0838 14.6055 0.5161 14.0378 0.5161 13.5438 V 1.2018 C 0.5161 0.494 1.0101 0 1.6441 0 h 11.5237 c 0.5677 0 1.0617 0.494 1.0617 1.2018 v 12.2757 z m -3.1187 -6.4143 H 3.6348 c -0.4202 0 -0.7078 0.2802 -0.7078 0.7078 c 0 0.4202 0.2802 0.7078 0.7078 0.7078 h 7.4834 c 0.4202 0 0.7078 -0.2802 0.7078 -0.7078 s -0.2875 -0.7078 -0.7152 -0.7078 z m 0 -4.2394 H 3.6348 c -0.4202 0 -0.7078 0.2802 -0.7078 0.7078 s 0.2802 0.7078 0.7078 0.7078 h 7.4834 c 0.4202 0 0.7078 -0.2802 0.7078 -0.7078 s -0.2875 -0.7078 -0.7152 -0.7078 z',
            'p-id': '3170',
            fill: 'currentColor',
          }]
        })
        aTag.firstChild?.replaceWith(svg);
        (aTag.lastChild as HTMLSpanElement).innerText = ' 关注专栏 ';
      }
      warp?.appendChild(cloneNode)
    } else {
      console.log('不在首页');
    }
  } else {
    console.log('未登录');
  }
}
