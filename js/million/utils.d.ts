import { V as VNode, D as DOMNode } from './types-0a8d8a5a.js';

declare const fromStringToVNode: (htmlString: string) => VNode | VNode[];
declare const fromDomNodeToVNode: (el: DOMNode) => VNode | undefined;
declare const fromStringToDomNode: (html: string) => DOMNode;
declare const fromVNodeToString: (vnode: VNode) => string;
declare const htmlVoidElements: string[];

export { fromDomNodeToVNode, fromStringToDomNode, fromStringToVNode, fromVNodeToString, htmlVoidElements };
