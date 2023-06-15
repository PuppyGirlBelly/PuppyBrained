import { b as VProps, V as VNode } from './types-0a8d8a5a.js';

declare type FC = (props?: VProps, key?: string | null) => any;
declare type RawVNode = VNode | number | boolean | undefined | null;
declare namespace JSX {
    type Element = VNode;
    interface IntrinsicElements {
        [el: string]: VProps;
    }
}

export { FC as F, JSX as J, RawVNode as R };
