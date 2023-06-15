import { y as h, M as compat, t as thunk, w as batch, B as Fragment, N as hook, P as createContext, q as startTransition, Q as useId, R as useCallback, S as useContext, T as useDebugValue, U as useDeferredValue, V as useEffect, W as useImperativeHandle, X as useLayoutEffect, Y as useMemo, Z as useSyncExternalStore, _ as useReducer, $ as useRef, a0 as useState, a1 as useTransition, z as jsx, l as hydrate, r as render$1, p as patch, a as DOM_REF_FIELD, C as fromDomNodeToVNode, a2 as ReactCompat } from './chunks/render.mjs';
export { B as Fragment, M as compat, a4 as createClass, a3 as createComponent, P as createContext, q as flushSync, N as hook, z as jsx, z as jsxDEV, z as jsxs, q as startTransition, q as unstable_startTransition, U as unstable_useDeferredValue, Z as unstable_useMutableSource, a1 as unstable_useTransition, R as useCallback, S as useContext, T as useDebugValue, U as useDeferredValue, V as useEffect, Q as useId, W as useImperativeHandle, V as useInsertionEffect, X as useLayoutEffect, Y as useMemo, Z as useMutableSource, _ as useReducer, $ as useRef, a0 as useState, Z as useSyncExternalStore, a1 as useTransition } from './chunks/render.mjs';

const cloneElement = (vnode) => {
  if (typeof vnode === "string")
    return vnode;
  return h(vnode.tag, vnode.props, ...vnode.children ?? []);
};
const createElement = compat(h);
const isValidElement = (vnode) => {
  if (vnode && vnode !== null && vnode.constructor === void 0) {
    if (typeof vnode === "string")
      return true;
    if (vnode.tag)
      return true;
  }
  return false;
};
const memo = (component) => () => {
  return (props) => {
    return thunk(component, Object.values(props));
  };
};
const toChildArray = (children) => {
  return h("_", {}, ...children).children;
};
const mapFn = (children, fn) => {
  if (children == null)
    return null;
  return toChildArray(toChildArray(children).map(fn));
};
const Children = {
  map: mapFn,
  forEach: mapFn,
  count(children) {
    return children ? toChildArray(children).length : 0;
  },
  only(children) {
    const normalized = toChildArray(children);
    if (normalized.length !== 1)
      throw "Children.only";
    return normalized[0];
  },
  toArray: toChildArray
};
const lazy = (loader) => {
  let promise;
  let component;
  let err;
  return (props) => {
    if (!promise) {
      promise = loader();
      promise.then((exports) => component = exports.default || exports, (e) => err = e);
    }
    if (err)
      throw err;
    if (!component)
      throw promise;
    return h(component, props);
  };
};
const createRef = () => {
  return { current: null };
};
const forwardRef = (fn) => {
  return function Forwarded(props) {
    const clone = { ...props };
    delete clone.ref;
    return fn(clone, props.ref || null);
  };
};
const Suspense = (props) => {
  return props?.children;
};
const SuspenseList = (props) => {
  return props?.children;
};
const StrictMode = (props) => {
  return props?.children;
};
class Component {
  constructor(props, context) {
    this.props = props;
    this.context = context;
    this.state = {};
    this.queueRender = batch();
  }
  componentDidMount() {
    return false;
  }
  componentDidUnmount() {
    return false;
  }
  componentDidUpdate() {
    return true;
  }
  shouldComponentUpdate(_newProps, _newState) {
    return true;
  }
  setState(update, callback) {
    const newState = {
      ...this.state,
      ...typeof update === "function" ? update(this.state, this.props) : update
    };
    if (!this.shouldComponentUpdate(this.props, newState))
      return;
    if (callback)
      callback(this.state, this.props);
    this.state = newState;
    this.queueRender(() => {
      if (this.rerender)
        this.rerender();
    });
  }
  render(props) {
    return Fragment(props);
  }
}
class PureComponent extends Component {
  shouldComponentUpdate(newProps, newState) {
    return newProps !== this.props && newState !== this.state;
  }
}

const React = {
  __proto__: null,
  hook: hook,
  Children: Children,
  Component: Component,
  Fragment: Fragment,
  PureComponent: PureComponent,
  StrictMode: StrictMode,
  Suspense: Suspense,
  SuspenseList: SuspenseList,
  unstable_SuspenseList: SuspenseList,
  cloneElement: cloneElement,
  createContext: createContext,
  createElement: createElement,
  createRef: createRef,
  forwardRef: forwardRef,
  isValidElement: isValidElement,
  lazy: lazy,
  memo: memo,
  startTransition: startTransition,
  unstable_startTransition: startTransition,
  useId: useId,
  useCallback: useCallback,
  useContext: useContext,
  useDebugValue: useDebugValue,
  useDeferredValue: useDeferredValue,
  unstable_useDeferredValue: useDeferredValue,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useInsertionEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useMutableSource: useSyncExternalStore,
  unstable_useMutableSource: useSyncExternalStore,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useSyncExternalStore: useSyncExternalStore,
  useTransition: useTransition,
  unstable_useTransition: useTransition,
  jsx: jsx,
  jsxs: jsx,
  jsxDEV: jsx
};

const hydrateRoot = (vnode, root) => {
  hydrate(root, vnode);
  return root;
};
const createRoot = (root) => {
  const renderer = (renderFn, patchFn) => {
    return (vnode) => {
      if (!vnode)
        return;
      startTransition(() => {
        if (Array.isArray(vnode)) {
          const rootVNode = fromDomNodeToVNode(root);
          patchFn(root, h(rootVNode.tag, rootVNode.props, ...vnode));
          requestAnimationFrame(() => root[DOM_REF_FIELD] = root.firstChild);
        } else {
          renderFn(root, vnode);
        }
      });
    };
  };
  return {
    render: renderer(render$1, patch),
    hydrate: renderer(hydrate, patch),
    unmount: () => {
      root.textContent = "";
      root[DOM_REF_FIELD] = void 0;
    }
  };
};
const render = (vnode, root) => {
  startTransition(() => {
    if (Array.isArray(vnode)) {
      const rootVNode = fromDomNodeToVNode(root);
      patch(root, h(rootVNode.tag, rootVNode.props, ...vnode));
      requestAnimationFrame(() => root[DOM_REF_FIELD] = root.firstChild);
    } else {
      render$1(root, vnode);
    }
  });
};
const createPortal = (children, el) => {
  const rootVNode = fromDomNodeToVNode(el);
  patch(el, h(rootVNode.tag, rootVNode.props, ...children));
};

const ReactDOM = {
  __proto__: null,
  render: render,
  createPortal: createPortal,
  createRoot: createRoot,
  hydrateRoot: hydrateRoot,
  flushSync: startTransition
};

const version = "18.1.0";
const index = {
  version,
  ...React,
  ...ReactDOM,
  ...ReactCompat
};

export { Children, Component, PureComponent, StrictMode, Suspense, SuspenseList, cloneElement, createElement, createPortal, createRef, createRoot, index as default, forwardRef, hydrateRoot, isValidElement, lazy, memo, render, SuspenseList as unstable_SuspenseList, version };
