import { R as RawVNode } from './types-2f7b1674.js';
import { b as VProps, V as VNode } from './types-0a8d8a5a.js';

/*! (c) Jason Miller - Apache */
declare const htm: (statics: any) => any;
declare const html: (statics: any) => any;
declare const treeify: (built: any, fields: any) => any;
declare const evaluate: (h: any, built: any, fields: any, args: any) => any;
declare const build: (statics: any) => number[];

declare const factory: (tagName: string) => {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const input: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const textarea: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const checkbox: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const address: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const article: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const aside: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const footer: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const header: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const h1: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const h2: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const h3: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const h4: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const h5: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const h6: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const hgroup: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const nav: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const section: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const blockquote: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const dd: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const div: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const dl: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const dt: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const figcaption: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const figure: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const hr: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const li: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const main: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const ol: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const p: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const pre: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const ul: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const a: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const abbr: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const b: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const bdi: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const bdo: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const br: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const cite: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const code: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const data: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const dfn: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const em: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const i: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const kbd: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const mark: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const q: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const rp: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const rt: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const rtc: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const ruby: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const s: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const samp: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const small: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const span: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const strong: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const sub: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const sup: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const time: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const u: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const varElement: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const wbr: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const area: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const audio: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const img: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const map: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const track: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const video: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const embed: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const object: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const param: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const picture: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const source: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const canvas: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const script: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const del: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const ins: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const caption: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const col: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const colgroup: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const table: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const tbody: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const td: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const tfoot: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const th: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const thead: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const tr: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const button: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const datalist: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const fieldset: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const form: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const label: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const legend: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const meter: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const optgroup: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const option: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const output: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const progress: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const select: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const details: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const menuitem: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const summary: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const slot: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const template: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const circle: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const rect: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const ellipse: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const g: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const image: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const line: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const mask: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const path: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const polygon: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const polyline: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const svg: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const svgText: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const marker: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const linearGradient: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};
declare const foreignObject: {
    (props: VProps): VNode;
    (children: RawVNode[]): VNode;
    (props: VProps, children: RawVNode[]): VNode;
};

export { a, abbr, address, area, article, aside, audio, b, bdi, bdo, blockquote, br, build, button, canvas, caption, checkbox, circle, cite, code, col, colgroup, data, datalist, dd, del, details, dfn, div, dl, dt, ellipse, em, embed, evaluate, factory, fieldset, figcaption, figure, footer, foreignObject, form, g, h1, h2, h3, h4, h5, h6, header, hgroup, hr, htm, html, i, image, img, input, ins, kbd, label, legend, li, line, linearGradient, main, map, mark, marker, mask, menuitem, meter, nav, object, ol, optgroup, option, output, p, param, path, picture, polygon, polyline, pre, progress, q, rect, rp, rt, rtc, ruby, s, samp, script, section, select, slot, small, source, span, strong, sub, summary, sup, svg, svgText, table, tbody, td, template, textarea, tfoot, th, thead, time, tr, track, treeify, u, ul, varElement, video, wbr };