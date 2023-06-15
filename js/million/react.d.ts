import * as src_jsx_runtime from 'src/jsx-runtime';
import { V as VNode, b as VProps, D as DOMNode } from './types-0a8d8a5a.js';
import { F as FC } from './types-2f7b1674.js';
export { F as Fragment, j as jsx, j as jsxDEV, j as jsxs } from './jsx-2dc4b8b6.js';
export { s as flushSync, s as startTransition, s as unstable_startTransition } from './scheduler-025ed245.js';

declare const hook: (fn: any) => () => any;
declare const useReducer: (reducer: any, value: any, init?: any, options?: any) => any[];
declare const useState: (value: any, options?: any) => any[];
declare const createContext: (value: any) => {
    value: any;
};
declare const useContext: (context: any) => any;
declare const useEffect: (effect: any, guards?: any) => void;
declare const useLayoutEffect: (effect: any, guards?: any) => void;
declare const useMemo: (memo: any, guards?: any) => any;
declare const useCallback: (fn: any, guards?: any) => any;
declare const useRef: (value: any) => never;
declare const useTransition: () => ((work: () => void) => void)[];
declare const useId: () => any;
declare const useDebugValue: (value: any) => void;
declare const useDeferredValue: (value: any) => any;
declare const useSyncExternalStore: (subscribe: any, getSnapshot: any) => any[];
declare const useImperativeHandle: (ref: any, create: any) => void;

declare const cloneElement: (vnode: VNode) => VNode | VNode[];
declare const createElement: unknown;
declare const isValidElement: (vnode: VNode) => boolean;
declare const memo: (component: Function) => () => (props: VProps) => VNode;
declare const Children: {
    map: (children: VNode[], fn: (this: VNode) => VNode) => VNode[] | null;
    forEach: (children: VNode[], fn: (this: VNode) => VNode) => VNode[] | null;
    count(children: VNode[]): number;
    only(children: VNode[]): VNode;
    toArray: (children: VNode[]) => VNode[];
};
declare const lazy: (loader: () => Promise<FC>) => (props: VProps) => VNode | VNode[];
declare const createRef: () => {
    current: null;
};
declare const forwardRef: (fn: Function) => (props: VProps) => any;
declare const Suspense: (props: {
    fallback: VNode;
    children: VNode[];
}) => VNode[];
declare const SuspenseList: (props: VProps) => any;
declare const StrictMode: (props: {
    children: VNode[];
}) => VNode[];
declare class Component {
    props: VProps;
    context: any;
    queueRender: (_callback: () => any) => void;
    state: VProps;
    rerender?: Function;
    constructor(props: VProps, context: any);
    componentDidMount(): boolean;
    componentDidUnmount(): boolean;
    componentDidUpdate(): boolean;
    shouldComponentUpdate(_newProps: VProps, _newState: VProps): boolean;
    setState(update: VProps, callback?: (state: VProps, props: VProps) => VProps): void;
    render(props?: any): any;
}
declare class PureComponent extends Component {
    shouldComponentUpdate(newProps: VProps, newState: VProps): boolean;
}

declare const hydrateRoot: (vnode: VNode, root: HTMLElement) => HTMLElement;
declare const createRoot: (root: DOMNode) => {
    render: (vnode?: VNode | VNode[] | null) => void;
    hydrate: (vnode?: VNode | VNode[] | null) => void;
    unmount: () => void;
};
declare const render: (vnode: VNode | VNode[], root: DOMNode) => void;
declare const createPortal: (children: VNode[], el: HTMLElement) => void;

declare const createComponent: (fn: Function, props?: VProps, key?: string | null) => any;
declare const createClass: (klass: typeof Component, props?: VProps) => any;
declare const compat: <T>(jsxFactoryRaw: Function) => T;

declare const version = "18.1.0";
declare const _default: {
    createComponent: (fn: Function, props?: VProps | undefined, key?: string | null | undefined) => any;
    createClass: (klass: typeof Component, props?: VProps | undefined) => any;
    compat: <T>(jsxFactoryRaw: Function) => T;
    render: (vnode: VNode | VNode[], root: DOMNode) => void;
    createPortal: (children: VNode[], el: HTMLElement) => void;
    createRoot: (root: DOMNode) => {
        render: (vnode?: VNode | VNode[] | null | undefined) => void;
        hydrate: (vnode?: VNode | VNode[] | null | undefined) => void;
        unmount: () => void;
    };
    hydrateRoot: (vnode: VNode, root: HTMLElement) => HTMLElement;
    flushSync: (work: () => void) => void;
    hook: (fn: any) => () => any;
    Children: {
        map: (children: VNode[], fn: (this: VNode) => VNode) => VNode[] | null;
        forEach: (children: VNode[], fn: (this: VNode) => VNode) => VNode[] | null;
        count(children: VNode[]): number;
        only(children: VNode[]): VNode;
        toArray: (children: VNode[]) => VNode[];
    };
    Component: typeof Component;
    Fragment: (props?: VProps | undefined) => VNode[] | undefined;
    PureComponent: typeof PureComponent;
    StrictMode: (props: {
        children: VNode[];
    }) => VNode[];
    Suspense: (props: {
        fallback: VNode;
        children: VNode[];
    }) => VNode[];
    SuspenseList: (props: VProps) => any;
    unstable_SuspenseList: (props: VProps) => any;
    cloneElement: (vnode: VNode) => VNode | VNode[];
    createContext: (value: any) => {
        value: any;
    };
    createElement: unknown;
    createRef: () => {
        current: null;
    };
    forwardRef: (fn: Function) => (props: VProps) => any;
    isValidElement: (vnode: VNode) => boolean;
    lazy: (loader: () => Promise<src_jsx_runtime.FC>) => (props: VProps) => VNode | VNode[];
    memo: (component: Function) => () => (props: VProps) => VNode;
    startTransition: (work: () => void) => void;
    unstable_startTransition: (work: () => void) => void;
    useId: () => any;
    useCallback: (fn: any, guards?: any) => any;
    useContext: (context: any) => any;
    useDebugValue: (value: any) => void;
    useDeferredValue: (value: any) => any;
    unstable_useDeferredValue: (value: any) => any;
    useEffect: (effect: any, guards?: any) => void;
    useImperativeHandle: (ref: any, create: any) => void;
    useInsertionEffect: (effect: any, guards?: any) => void;
    useLayoutEffect: (effect: any, guards?: any) => void;
    useMemo: (memo: any, guards?: any) => any;
    useMutableSource: (subscribe: any, getSnapshot: any) => any[];
    unstable_useMutableSource: (subscribe: any, getSnapshot: any) => any[];
    useReducer: (reducer: any, value: any, init?: any, options?: any) => any[];
    useRef: (value: any) => never;
    useState: (value: any, options?: any) => any[];
    useSyncExternalStore: (subscribe: any, getSnapshot: any) => any[];
    useTransition: () => ((work: () => void) => void)[];
    unstable_useTransition: () => ((work: () => void) => void)[];
    jsx: unknown;
    jsxs: unknown;
    jsxDEV: unknown;
    version: string;
};

export { Children, Component, PureComponent, StrictMode, Suspense, SuspenseList, cloneElement, compat, createClass, createComponent, createContext, createElement, createPortal, createRef, createRoot, _default as default, forwardRef, hook, hydrateRoot, isValidElement, lazy, memo, render, SuspenseList as unstable_SuspenseList, useDeferredValue as unstable_useDeferredValue, useSyncExternalStore as unstable_useMutableSource, useTransition as unstable_useTransition, useCallback, useContext, useDebugValue, useDeferredValue, useEffect, useId, useImperativeHandle, useEffect as useInsertionEffect, useLayoutEffect, useMemo, useSyncExternalStore as useMutableSource, useReducer, useRef, useState, useSyncExternalStore, useTransition, version };
