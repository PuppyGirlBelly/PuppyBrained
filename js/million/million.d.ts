import { V as VNode, D as DOMNode, H as HookTypes, E as Effect, a as VElement, b as VProps, c as Delta, d as VElementFlags, e as Hooks, f as Hook } from './types-0a8d8a5a.js';
export { C as Commit, D as DOMNode, i as DOM_REF_FIELD, c as Delta, g as DeltaTypes, j as Driver, E as Effect, h as EffectTypes, F as Flags, O as OLD_VNODE_FIELD, a as VElement, V as VNode, b as VProps } from './types-0a8d8a5a.js';
export { b as batch, f as flushQueue, i as isPending, s as startTransition } from './scheduler-025ed245.js';

/**
 * Creates an Element from a VNode
 */
declare const createElement: (vnode?: VNode | null, attachField?: boolean) => DOMNode;

/**
 * Diffs two VNode children and modifies the DOM node based on the necessary changes
 */
declare const useChildren: (drivers?: any[]) => any;

/**
 * Diffs a single DOM node and modifies the DOM node based on the necessary changes
 */
declare const useNode: (drivers: any[]) => any;

declare const hook: (el: DOMNode, newVNode?: VNode, oldVNode?: VNode) => (hookName: HookTypes, vnode?: VNode) => boolean;

declare const updateProp: (el: HTMLElement | SVGElement, propName: string, oldPropValue: unknown, newPropValue: unknown, effects: Effect[], invokeHook: ReturnType<typeof hook>) => void;
/**
 * Diffs two VNode props and modifies the DOM node based on the necessary changes
 */
declare const useProps: (drivers?: any[]) => any;

/**
 * Attaches ns props to svg element
 */
declare const svg: (vnode: VElement) => VElement;
/**
 * Attaches ns props to an arbitrary element
 */
declare const ns: (tag: string, props: VProps, children?: VNode[]) => void;
/**
 * Generates a className string based on a classObject
 */
declare const className: (classObject: Record<string, boolean>) => string;
/**
 * Generates a style string based on a styleObject
 */
declare const style: (styleObject: Record<string, string>) => string;
/**
 * Converts key names from camelCase to kebab-case
 */
declare const kebab: (camelCaseObject: Record<string, unknown>) => Record<string, unknown>;
declare const Deltas: {
    CREATE: (i?: number) => Delta;
    UPDATE: (i?: number) => Delta;
    REMOVE: (i?: number) => Delta;
};
/**
 * Helper method for creating a VNode
 */
declare const m: (tag: string, props?: VProps, children?: VNode[], flag?: VElementFlags, delta?: Delta[], hook?: Hooks) => VElement;
declare const mergeHooks: (hooksArray: Hooks[]) => Hooks;
declare const thunk: (fn: (...args: any[]) => VNode, args: any[]) => VNode;

/**
 * Diffs two VNodes
 */
declare const diff: any;
/**
 * Patches two VNodes and modifies the DOM node based on the necessary changes
 */
declare const patch: (el: DOMNode, newVNode?: VNode, oldVNode?: VNode, hook?: Hook, effects?: Effect[]) => DOMNode;
/**
 * Renders a VNode to the DOM
 */
declare const render: (parentEl: DOMNode, newVNode?: VNode, oldVNode?: VNode, hook?: Hook) => DOMNode;
declare const hydrate: (el: HTMLElement, vnode: VNode, intersect?: boolean) => void;

declare const _: undefined;

export { Deltas, _, className, createElement, diff, hydrate, kebab, m, mergeHooks, ns, patch, render, style, svg, thunk, updateProp, useChildren, useNode, useProps };