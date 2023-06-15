import { D as DOMNode, V as VNode } from './types-0a8d8a5a.js';

declare const memo: (node: DOMNode | string) => VNode | undefined;

/**
 * Patches two DOM nodes and modifies the DOM node based on the necessary changes
 */
declare const morph: (newDOMNode: DOMNode | string, oldDOMNode: DOMNode) => DOMNode;

export { memo, morph };
