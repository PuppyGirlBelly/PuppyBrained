import { a as VElement } from './types-0a8d8a5a.js';

interface Route {
    vnode?: VElement;
    html?: Document;
    hook?: RouteHook;
}
declare type RouteHook = (url: URL, route: Route) => boolean;

declare const queueNavigation: (_callback: () => any) => (flush: boolean) => boolean;
declare const queuePrefetch: (_callback: () => any) => (flush: boolean) => boolean;
declare const setRoute: (path: string, route: Route) => void;
declare const getRoute: (path: string) => Route | undefined;
declare const createRoute: (vnode: VElement, hook?: (url: URL) => boolean) => {
    vnode: VElement;
    hook: (url: URL) => boolean;
};
declare const getEl: (el: HTMLElement, selector?: string) => HTMLElement;
declare const apply: (fn: (doc: Document, url: URL) => any) => void;
declare const parseContent: (content: string, url: URL) => Document;
declare const request: (url: URL | string, options?: RequestInit) => Promise<string | void>;
declare const navigate: (url: URL, selector?: string, opts?: RequestInit, goBack?: boolean, scroll?: number) => Promise<void>;
declare const router: (selector?: string, routes?: Record<string, Route>) => (() => void);
declare const prefetch: (path: string | URL) => Promise<void>;

declare const setAttribute: (el: Element, attr: string, base: string | URL) => void;
declare const normalizeRelativeURLs: (el: Element | Document, base: string | URL) => void;
declare const isLocalURL: (href: string) => boolean;
declare const getURL: ({ target }: Event) => URL | undefined;

export { apply, createRoute, getEl, getRoute, getURL, isLocalURL, navigate, normalizeRelativeURLs, parseContent, prefetch, queueNavigation, queuePrefetch, request, router, setAttribute, setRoute };