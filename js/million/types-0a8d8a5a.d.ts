/**
 * Field on parent DOM node that stores the root DOM node reference
 */
declare const DOM_REF_FIELD = "__m_dom_ref";
/**
 * Field on DOM node that stores the previous VNode
 */
declare const OLD_VNODE_FIELD = "__m_old_vnode";
declare type VProps = Record<string, any>;
declare type DOMNode = HTMLElement | SVGElement | Text | Comment;
declare type VNode = VElement | Thunk | string;
declare type Delta = [DeltaTypes, number];
declare type Hook = (el?: DOMNode, newVNode?: VNode, oldVNode?: VNode) => boolean;
declare type Commit = (work: () => void, data: ReturnType<Driver>) => void;
declare type Driver = (el: DOMNode, newVNode?: VNode, oldVNode?: VNode, commit?: Commit, effects?: Effect[], driver?: Driver) => {
    el: DOMNode;
    newVNode?: VNode;
    oldVNode?: VNode;
    effects?: Effect[];
    commit?: Commit;
    driver?: Driver;
};
interface Effect {
    type: EffectTypes;
    el: DOMNode;
    flush: () => void;
}
declare enum HookTypes {
    CREATE = "create",
    REMOVE = "remove",
    UPDATE = "update",
    DIFF = "diff"
}
declare type Hooks = {
    [key in HookTypes]?: Hook | Hook[];
};
interface VElement extends V {
    flag: VElementFlags;
    tag: string;
    props?: VProps;
    children?: VNode[];
    key?: string;
    delta?: Delta[];
    hook?: Hooks;
}
interface Thunk extends V {
    flag: Flags.ELEMENT_THUNK;
    tag: string;
    props?: VProps;
    children?: VNode[];
    key?: string;
    delta?: Delta[];
    hook?: Hooks;
    args: any[];
}
interface V {
    flag: Flags;
    ref?: {
        current: any;
    };
}
declare enum Flags {
    ELEMENT = 0,
    ELEMENT_IGNORE = 1,
    ELEMENT_FORCE_UPDATE = 2,
    ELEMENT_SKIP_DRIVERS = 3,
    ELEMENT_NO_CHILDREN = 4,
    ELEMENT_TEXT_CHILDREN = 5,
    ELEMENT_KEYED_CHILDREN = 6,
    ELEMENT_THUNK = 7
}
declare type VElementFlags = Flags.ELEMENT | Flags.ELEMENT_FORCE_UPDATE | Flags.ELEMENT_IGNORE | Flags.ELEMENT_KEYED_CHILDREN | Flags.ELEMENT_NO_CHILDREN | Flags.ELEMENT_SKIP_DRIVERS | Flags.ELEMENT_TEXT_CHILDREN;
declare enum EffectTypes {
    CREATE = 0,
    REMOVE = 1,
    REPLACE = 2,
    UPDATE = 3,
    SET_PROP = 4,
    REMOVE_PROP = 5
}
declare const enum DeltaTypes {
    CREATE = 0,
    UPDATE = 1,
    REMOVE = 2
}

export { Commit as C, DOMNode as D, Effect as E, Flags as F, HookTypes as H, OLD_VNODE_FIELD as O, VNode as V, VElement as a, VProps as b, Delta as c, VElementFlags as d, Hooks as e, Hook as f, DeltaTypes as g, EffectTypes as h, DOM_REF_FIELD as i, Driver as j };
