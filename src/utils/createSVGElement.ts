/*
 * @Date: 2023-03-28 16:35:51
 * @Author: 枫
 * @LastEditors: 枫
 * @description: 生成一个 svg 元素
 * @LastEditTime: 2023-03-28 17:16:27
 */
interface IOptions {
  width: number;
  height: number;
  fill: string;
  paths: Record<string, string>[];
}

export function createSVG(options: IOptions) {
  const {width, height, fill, paths} = options

  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.setAttribute('version', '1.1');
  svgElement.setAttribute('width', `${width}`);
  svgElement.setAttribute('height', `${height}`);
  svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svgElement.setAttribute('fill', fill);


  paths.forEach((path) => {
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    Object.entries(path).forEach(([key, value]) => {
      pathElement.setAttribute(key, value);
    })
    svgElement.appendChild(pathElement);
  })

  return svgElement;
}
