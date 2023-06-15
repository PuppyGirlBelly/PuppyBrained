import { V as VNode, b as VProps } from './types-0a8d8a5a.js';
import { R as RawVNode, F as FC } from './types-2f7b1674.js';
export { F as FC, J as JSX, R as RawVNode } from './types-2f7b1674.js';
export { F as Fragment, j as jsx, a as jsxRaw, j as jsxs } from './jsx-2dc4b8b6.js';

declare const normalize: (rawVNode: RawVNode | RawVNode[]) => VNode | VNode[] | undefined;
declare function h(this: any, tag: string | FC, props?: VProps, ...children: RawVNode[]): VNode | VNode[];

export { h, normalize };
