(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7669], {
        60165: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/farms", function () {
                return r(96316)
            }])
        },
        96316: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function () {
                    return i
                }
            });
            var n = r(35944),
                o = r(68856),
                l = r(18205);
            let a = () => (0, n.tZ)(l.Z, {});
            a.PageTitle = () => {
                let {
                    t: e
                } = (0, o.$G)("common");
                return (0, n.tZ)("h1", {
                    className: "font-title font-medium text-2xl sm:text-3xl pt-2",
                    children: e("v2.nav.jarsAndFarms")
                })
            };
            var i = !0;
            t.default = a
        },
        18205: function (e, t, r) {
            "use strict";
            r.d(t, {
                Z: function () {
                    return j
                }
            });
            var n, o, l = r(35944),
                a = r(68856),
                i = r(63698),
                s = r(25675),
                c = r.n(s),
                u = r(9473),
                d = r(52697),
                f = r(24834),
                p = r(50790),
                m = r(20440),
                h = r(93490),
                g = r(44349),
                v = () => {
                    let e = (0, u.v9)(f.VH.selectNetworks),
                        t = (0, u.v9)(f.VH.selectFilters),
                        r = (0, u.v9)(m.Wd.selectFilters),
                        n = (0, p.TL)(),
                        o = (0, g.V)(r, m.vA.Network);
                    return (0, l.tZ)("div", {
                        className: "flex flex-wrap justify-end space-x-2",
                        children: null == e ? void 0 : e.map(e => {
                            let a = t.find(t => t.value === e.name && t.type === m.vA.Network),
                                i = (0, g.Y)(r, a);
                            return (0, l.tZ)(d.ZP, {
                                duration: 0,
                                content: (0, l.tZ)("div", {
                                    className: "rounded-lg shadow-lg border border-foreground-alt-500 overflow-hidden",
                                    children: (0, l.tZ)("div", {
                                        className: "bg-background-light px-3 py-2",
                                        children: (0, l.tZ)("div", {
                                            className: "text-foreground-alt-200 text-sm font-bold",
                                            children: e.visibleName
                                        })
                                    })
                                }),
                                children: (0, l.tZ)("div", {
                                    className: (0, h.AK)("group border border-transparent bg-background-light px-4 py-2 2xl:px-5 2xl:py-3 rounded-lg cursor-pointer hover:bg-background-lightest hover:border-primary-light hover:grayscale-0 transition duration-300 ease-in-out", i && "bg-background-lightest border-primary-light", !i && o && "grayscale"),
                                    onClick: () => n((0, m.cT)(a)),
                                    children: (0, l.tZ)("div", {
                                        className: "w-6 h-6 group-hover:scale-105 transition duration-300 ease-in-out",
                                        children: (0, l.tZ)(c(), {
                                            src: "/networks/".concat(e.name, ".png"),
                                            width: 200,
                                            height: 200,
                                            layout: "responsive",
                                            alt: e.name,
                                            title: e.name,
                                            className: "rounded-full",
                                            priority: !0
                                        })
                                    })
                                })
                            }, e.name)
                        })
                    })
                },
                b = r(67294),
                w = r(99006),
                k = r(30490),
                y = r(28670),
                x = r.n(y),
                Z = r(69743),
                E = r(7930);
            let _ = e => {
                    let {
                        children: t,
                        ...r
                    } = e;
                    return (0, l.BX)(w.c.Control, {
                        ...r,
                        children: [(0, l.tZ)(Z.Z, {
                            className: "w-6 h-6 text-foreground-alt-200 ml-3 mr-1"
                        }), t]
                    })
                },
                P = e => {
                    let {
                        color: t,
                        imageSrc: r,
                        label: n
                    } = e, [o, a] = (0, b.useState)(!1);
                    return (0, l.tZ)("div", {
                        className: "mr-3 w-8 h-8 rounded-full border-3 border-foreground-alt-400",
                        style: {
                            background: o ? E.J : t
                        },
                        children: (0, l.tZ)(c(), {
                            src: r,
                            className: "rounded-full",
                            width: 32,
                            height: 32,
                            layout: "intrinsic",
                            alt: n,
                            title: n,
                            onLoadingComplete: () => a(!0)
                        })
                    })
                },
                N = e => {
                    let {
                        children: t,
                        ...r
                    } = e, {
                        t: n
                    } = (0, a.$G)("common"), {
                        isFocused: o
                    } = r, {
                        type: i
                    } = r.data;
                    return (0, l.tZ)(w.c.Option, {
                        ...r,
                        className: "group",
                        children: (0, l.BX)("div", {
                            className: "flex items-center",
                            children: [(0, l.tZ)(P, {
                                ...r.data
                            }), (0, l.BX)("div", {
                                children: [(0, l.tZ)("p", {
                                    className: (0, h.AK)("text-foreground font-title text-base group-hover:text-primary-light transition duration-200 ease-in-out", o && "text-primary-light"),
                                    children: t
                                }), (0, l.tZ)("p", {
                                    className: "font-normal text-sm text-foreground-alt-200 italic",
                                    children: n("v2.farms.".concat(i))
                                })]
                            })]
                        })
                    })
                },
                S = {
                    clearIndicator: e => ({
                        ...e,
                        color: "rgb(var(--color-foreground-alt-300))",
                        ":hover": {
                            color: "rgb(var(--color-foreground-alt-200))"
                        }
                    }),
                    control: e => ({
                        ...e,
                        backgroundColor: "rgb(var(--color-background-lightest))",
                        border: 0,
                        boxShadow: "none",
                        padding: "8px 0"
                    }),
                    input: e => ({
                        ...e,
                        color: "rgb(var(--color-primary))"
                    }),
                    menu: e => ({
                        ...e,
                        backgroundColor: "rgb(var(--color-background-light))",
                        padding: 8,
                        zIndex: 200,
                        boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))"
                    }),
                    multiValue: (e, t) => {
                        let {
                            data: r
                        } = t;
                        return {
                            ...e,
                            backgroundColor: x()(r.color).css()
                        }
                    },
                    multiValueLabel: (e, t) => {
                        let {
                            data: r
                        } = t, n = x()(r.color).darken(3);
                        return {
                            ...e,
                            fontWeight: 700,
                            color: x().contrast(n, "black") >= 3 ? n.css() : "white"
                        }
                    },
                    multiValueRemove: (e, t) => {
                        let {
                            data: r
                        } = t;
                        return {
                            ...e,
                            color: x().contrast(r.color, "white") >= 7 ? "white" : x()(r.color).darken(2.5).css(),
                            ":hover": {
                                color: "white",
                                backgroundColor: "rgb(var(--color-accent))"
                            }
                        }
                    },
                    option: (e, t) => {
                        let {
                            data: r,
                            isFocused: n
                        } = t;
                        return {
                            ...e,
                            backgroundColor: n ? "rgb(var(--color-background-lightest))" : void 0,
                            borderRadius: 10,
                            color: r.color,
                            transition: "all 200ms ease-in-out"
                        }
                    }
                };
            var R = () => {
                    let {
                        t: e
                    } = (0, a.$G)("common"), t = (0, u.v9)(f.VH.selectFilters), r = (0, u.v9)(m.Wd.selectFilters), n = (0, p.TL)();
                    return (0, l.tZ)(k.ZP, {
                        autoFocus: !0,
                        components: {
                            Control: _,
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null,
                            Option: N
                        },
                        escapeClearsValue: !0,
                        isClearable: !0,
                        isMulti: !0,
                        openMenuOnClick: !1,
                        openMenuOnFocus: !1,
                        placeholder: e("v2.farms.filter"),
                        noOptionsMessage: () => e("v2.farms.noResults"),
                        onChange: e => n((0, m.rr)(e)),
                        options: t,
                        styles: S,
                        theme: e => ({
                            ...e,
                            borderRadius: 10,
                            colors: {
                                ...e.colors,
                                primary: "black"
                            }
                        }),
                        value: r
                    })
                },
                C = r(40653),
                T = r(52641),
                I = () => {
                    let {
                        t: e
                    } = (0, a.$G)("common"), t = (0, p.TL)(), r = (0, u.v9)(m.Wd.selectMatchAllFilters);
                    return (0, l.BX)(T.Z, {
                        toggleOn: r,
                        onChange: e => t((0, m.gA)(e)),
                        children: [(0, l.tZ)("span", {
                            className: "text-sm font-medium text-foreground-alt-200",
                            children: e("v2.farms.matchAllFilters")
                        }), (0, l.tZ)(C.Z, {
                            children: (0, l.tZ)("span", {
                                className: "text-foreground-alt-200 text-sm",
                                children: e(r ? "v2.farms.matchingAllFilters" : "v2.farms.notMatchingAllFilters")
                            })
                        })]
                    })
                },
                D = r(93973),
                L = r(63519);
            (n = o || (o = {}))[n.Forward = 1] = "Forward", n[n.Back = -1] = "Back";
            let A = e => {
                let {
                    currentPage: t,
                    pageCount: r,
                    onClick: n,
                    type: o
                } = e, a = "left" === o ? D.Z : L.Z;
                return (0, l.tZ)(a, {
                    className: (0, h.AK)("left" === o && 0 === t && "cursor-not-allowed text-foreground-alt-400", "left" === o && 0 !== t && "cursor-pointer hover:text-accent transition duration-300 ease-in-out text-foreground-alt-200", "right" === o && t + 1 === r && "cursor-not-allowed text-foreground-alt-400", "right" === o && t + 1 !== r && "cursor-pointer hover:text-accent transition duration-300 ease-in-out text-foreground-alt-200", "w-5 h-5"),
                    onClick: n
                })
            };
            var M = () => {
                    let {
                        t: e
                    } = (0, a.$G)("common"), t = (0, p.TL)(), {
                        currentPage: r,
                        itemsPerPage: n
                    } = (0, u.v9)(m.Wd.selectPaginateParams), i = (0, u.v9)(f.VH.selectFilteredAssets), s = Math.ceil(i.length / n), c = e => {
                        let n = r + e;
                        n < 0 || n >= s || t((0, m.D4)(n))
                    };
                    return 0 === i.length ? (0, l.tZ)("span", {
                        className: "text-foreground-alt-200",
                        children: e("v2.farms.noResults")
                    }) : (0, l.tZ)(l.HY, {
                        children: (0, l.BX)("div", {
                            className: "flex items-center select-none",
                            children: [(0, l.tZ)(A, {
                                type: "left",
                                currentPage: r,
                                pageCount: s,
                                onClick: () => c(o.Back)
                            }), (0, l.tZ)("span", {
                                className: "px-3 text-foreground-alt-200",
                                children: e("v2.farms.pagination", {
                                    current: r + 1,
                                    total: s
                                })
                            }), (0, l.tZ)(A, {
                                type: "right",
                                currentPage: r,
                                pageCount: s,
                                onClick: () => c(o.Forward)
                            })]
                        })
                    })
                },
                B = () => (0, l.BX)(l.HY, {
                    children: [(0, l.BX)("div", {
                        className: "block xl:flex justify-between",
                        children: [(0, l.tZ)("div", {
                            className: "flex-1 mb-2 xl:mb-0 xl:mr-4",
                            children: (0, l.tZ)(R, {})
                        }), (0, l.tZ)("div", {
                            className: "flex items-end",
                            children: (0, l.tZ)(v, {})
                        })]
                    }), (0, l.BX)("div", {
                        className: "flex grow justify-between my-4",
                        children: [(0, l.tZ)(I, {}), (0, l.tZ)(M, {})]
                    })]
                }),
                O = r(39562),
                j = e => {
                    let {
                        simple: t,
                        dashboard: r,
                        title: n,
                        requiresUserModel: o,
                        singleAsset: s,
                        hideDescription: c
                    } = e, {
                        t: u
                    } = (0, a.$G)("common");
                    return (0, l.BX)(l.HY, {
                        children: [n && (0, l.tZ)("h2", {
                            className: "font-body font-bold text-xl mb-6",
                            children: n
                        }), (0, l.tZ)("div", {
                            className: "flex flex-col",
                            children: (0, l.tZ)("div", {
                                className: "-my-2 overflow-x-auto",
                                children: (0, l.BX)("div", {
                                    className: "py-2 align-middle inline-block min-w-full",
                                    children: [!t && !s && !r && (0, l.tZ)(B, {}), (0, l.BX)("table", {
                                        className: "min-w-full table-auto border-collapse",
                                        children: [(0, l.tZ)("thead", {
                                            className: "bg-background uppercase",
                                            children: (0, l.BX)("tr", {
                                                children: [(0, l.tZ)(O.Z, {
                                                    sortType: m.ER.None,
                                                    label: u("v2.farms.asset")
                                                }), (0, l.tZ)(O.Z, {
                                                    sortType: s ? m.ER.None : m.ER.Earned,
                                                    label: u("v2.farms.earned")
                                                }), (0, l.tZ)(O.Z, {
                                                    sortType: s ? m.ER.None : m.ER.Deposited,
                                                    label: u("v2.farms.deposited")
                                                }), (0, l.tZ)(O.Z, {
                                                    sortType: s ? m.ER.None : m.ER.Apy,
                                                    label: u("v2.farms.apy")
                                                }), (0, l.tZ)(O.Z, {
                                                    sortType: s ? m.ER.None : m.ER.Liquidity,
                                                    label: u("v2.farms.liquidity")
                                                })]
                                            })
                                        }), (0, l.tZ)("tbody", {
                                            className: "text-foreground",
                                            children: (0, l.tZ)(i.Z, {
                                                simple: t,
                                                dashboard: r,
                                                requiresUserModel: o,
                                                singleAsset: s,
                                                hideDescription: c
                                            })
                                        })]
                                    }), !t && !s && !r && (0, l.tZ)("div", {
                                        className: "flex justify-center mt-4",
                                        children: (0, l.tZ)(M, {})
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        28368: function (e, t, r) {
            "use strict";
            r.d(t, {
                p: function () {
                    return S
                }
            });
            var n, o, l, a = r(67294),
                i = r(32984),
                s = r(12351),
                c = r(23784),
                u = r(19946),
                d = r(61363),
                f = r(64103),
                p = r(16567),
                m = r(14157),
                h = r(15466),
                g = r(73781);
            let v = null != (l = a.startTransition) ? l : function (e) {
                e()
            };
            var b = ((n = b || {})[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n),
                w = ((o = w || {})[o.ToggleDisclosure = 0] = "ToggleDisclosure", o[o.CloseDisclosure = 1] = "CloseDisclosure", o[o.SetButtonId = 2] = "SetButtonId", o[o.SetPanelId = 3] = "SetPanelId", o[o.LinkPanel = 4] = "LinkPanel", o[o.UnlinkPanel = 5] = "UnlinkPanel", o);
            let k = {
                    0: e => ({
                        ...e,
                        disclosureState: (0, i.E)(e.disclosureState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.disclosureState ? e : {
                        ...e,
                        disclosureState: 1
                    },
                    4: e => !0 === e.linkedPanel ? e : {
                        ...e,
                        linkedPanel: !0
                    },
                    5: e => !1 === e.linkedPanel ? e : {
                        ...e,
                        linkedPanel: !1
                    },
                    2: (e, t) => e.buttonId === t.buttonId ? e : {
                        ...e,
                        buttonId: t.buttonId
                    },
                    3: (e, t) => e.panelId === t.panelId ? e : {
                        ...e,
                        panelId: t.panelId
                    }
                },
                y = (0, a.createContext)(null);

            function x(e) {
                let t = (0, a.useContext)(y);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, x), t
                }
                return t
            }
            y.displayName = "DisclosureContext";
            let Z = (0, a.createContext)(null);
            Z.displayName = "DisclosureAPIContext";
            let E = (0, a.createContext)(null);

            function _(e, t) {
                return (0, i.E)(t.type, k, e, t)
            }
            E.displayName = "DisclosurePanelContext";
            let P = a.Fragment,
                N = s.AN.RenderStrategy | s.AN.Static,
                S = Object.assign((0, s.yV)(function (e, t) {
                    let {
                        defaultOpen: r = !1,
                        ...n
                    } = e, o = (0, a.useRef)(null), l = (0, c.T)(t, (0, c.h)(e => {
                        o.current = e
                    }, void 0 === e.as || e.as === a.Fragment)), u = (0, a.useRef)(null), d = (0, a.useRef)(null), f = (0, a.useReducer)(_, {
                        disclosureState: r ? 0 : 1,
                        linkedPanel: !1,
                        buttonRef: d,
                        panelRef: u,
                        buttonId: null,
                        panelId: null
                    }), [{
                        disclosureState: m,
                        buttonId: v
                    }, b] = f, w = (0, g.z)(e => {
                        b({
                            type: 1
                        });
                        let t = (0, h.r)(o);
                        if (!t || !v) return;
                        let r = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(v) : t.getElementById(v);
                        null == r || r.focus()
                    }), k = (0, a.useMemo)(() => ({
                        close: w
                    }), [w]), x = (0, a.useMemo)(() => ({
                        open: 0 === m,
                        close: w
                    }), [m, w]);
                    return a.createElement(y.Provider, {
                        value: f
                    }, a.createElement(Z.Provider, {
                        value: k
                    }, a.createElement(p.up, {
                        value: (0, i.E)(m, {
                            0: p.ZM.Open,
                            1: p.ZM.Closed
                        })
                    }, (0, s.sY)({
                        ourProps: {
                            ref: l
                        },
                        theirProps: n,
                        slot: x,
                        defaultTag: P,
                        name: "Disclosure"
                    }))))
                }), {
                    Button: (0, s.yV)(function (e, t) {
                        let r = (0, u.M)(),
                            {
                                id: n = `headlessui-disclosure-button-${r}`,
                                ...o
                            } = e,
                            [l, i] = x("Disclosure.Button"),
                            p = (0, a.useContext)(E),
                            h = null !== p && p === l.panelId,
                            v = (0, a.useRef)(null),
                            b = (0, c.T)(v, t, h ? null : l.buttonRef);
                        (0, a.useEffect)(() => {
                            if (!h) return i({
                                type: 2,
                                buttonId: n
                            }), () => {
                                i({
                                    type: 2,
                                    buttonId: null
                                })
                            }
                        }, [n, i, h]);
                        let w = (0, g.z)(e => {
                                var t;
                                if (h) {
                                    if (1 === l.disclosureState) return;
                                    switch (e.key) {
                                        case d.R.Space:
                                        case d.R.Enter:
                                            e.preventDefault(), e.stopPropagation(), i({
                                                type: 0
                                            }), null == (t = l.buttonRef.current) || t.focus()
                                    }
                                } else switch (e.key) {
                                    case d.R.Space:
                                    case d.R.Enter:
                                        e.preventDefault(), e.stopPropagation(), i({
                                            type: 0
                                        })
                                }
                            }),
                            k = (0, g.z)(e => {
                                e.key === d.R.Space && e.preventDefault()
                            }),
                            y = (0, g.z)(t => {
                                var r;
                                (0, f.P)(t.currentTarget) || e.disabled || (h ? (i({
                                    type: 0
                                }), null == (r = l.buttonRef.current) || r.focus()) : i({
                                    type: 0
                                }))
                            }),
                            Z = (0, a.useMemo)(() => ({
                                open: 0 === l.disclosureState
                            }), [l]),
                            _ = (0, m.f)(e, v),
                            P = h ? {
                                ref: b,
                                type: _,
                                onKeyDown: w,
                                onClick: y
                            } : {
                                ref: b,
                                id: n,
                                type: _,
                                "aria-expanded": e.disabled ? void 0 : 0 === l.disclosureState,
                                "aria-controls": l.linkedPanel ? l.panelId : void 0,
                                onKeyDown: w,
                                onKeyUp: k,
                                onClick: y
                            };
                        return (0, s.sY)({
                            ourProps: P,
                            theirProps: o,
                            slot: Z,
                            defaultTag: "button",
                            name: "Disclosure.Button"
                        })
                    }),
                    Panel: (0, s.yV)(function (e, t) {
                        let r = (0, u.M)(),
                            {
                                id: n = `headlessui-disclosure-panel-${r}`,
                                ...o
                            } = e,
                            [l, i] = x("Disclosure.Panel"),
                            {
                                close: d
                            } = function e(t) {
                                let r = (0, a.useContext)(Z);
                                if (null === r) {
                                    let r = Error(`<${t} /> is missing a parent <Disclosure /> component.`);
                                    throw Error.captureStackTrace && Error.captureStackTrace(r, e), r
                                }
                                return r
                            }("Disclosure.Panel"),
                            f = (0, c.T)(t, l.panelRef, e => {
                                v(() => i({
                                    type: e ? 4 : 5
                                }))
                            });
                        (0, a.useEffect)(() => (i({
                            type: 3,
                            panelId: n
                        }), () => {
                            i({
                                type: 3,
                                panelId: null
                            })
                        }), [n, i]);
                        let m = (0, p.oJ)(),
                            h = null !== m ? (m & p.ZM.Open) === p.ZM.Open : 0 === l.disclosureState,
                            g = (0, a.useMemo)(() => ({
                                open: 0 === l.disclosureState,
                                close: d
                            }), [l, d]);
                        return a.createElement(E.Provider, {
                            value: l.panelId
                        }, (0, s.sY)({
                            ourProps: {
                                ref: f,
                                id: n
                            },
                            theirProps: o,
                            slot: g,
                            defaultTag: "div",
                            features: N,
                            visible: h,
                            name: "Disclosure.Panel"
                        }))
                    })
                })
        },
        77768: function (e, t, r) {
            "use strict";
            r.d(t, {
                r: function () {
                    return w
                }
            });
            var n = r(67294),
                o = r(12351),
                l = r(19946),
                a = r(61363),
                i = r(64103),
                s = r(95389),
                c = r(39516),
                u = r(14157),
                d = r(23784),
                f = r(46045),
                p = r(18689),
                m = r(73781),
                h = r(31147),
                g = r(94192);
            let v = (0, n.createContext)(null);
            v.displayName = "GroupContext";
            let b = n.Fragment,
                w = Object.assign((0, o.yV)(function (e, t) {
                    let r = (0, l.M)(),
                        {
                            id: s = `headlessui-switch-${r}`,
                            checked: c,
                            defaultChecked: b = !1,
                            onChange: w,
                            name: k,
                            value: y,
                            form: x,
                            ...Z
                        } = e,
                        E = (0, n.useContext)(v),
                        _ = (0, n.useRef)(null),
                        P = (0, d.T)(_, t, null === E ? null : E.setSwitch),
                        [N, S] = (0, h.q)(c, w, b),
                        R = (0, m.z)(() => null == S ? void 0 : S(!N)),
                        C = (0, m.z)(e => {
                            if ((0, i.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), R()
                        }),
                        T = (0, m.z)(e => {
                            e.key === a.R.Space ? (e.preventDefault(), R()) : e.key === a.R.Enter && (0, p.g)(e.currentTarget)
                        }),
                        I = (0, m.z)(e => e.preventDefault()),
                        D = (0, n.useMemo)(() => ({
                            checked: N
                        }), [N]),
                        L = {
                            id: s,
                            ref: P,
                            role: "switch",
                            type: (0, u.f)(e, _),
                            tabIndex: 0,
                            "aria-checked": N,
                            "aria-labelledby": null == E ? void 0 : E.labelledby,
                            "aria-describedby": null == E ? void 0 : E.describedby,
                            onClick: C,
                            onKeyUp: T,
                            onKeyPress: I
                        },
                        A = (0, g.G)();
                    return (0, n.useEffect)(() => {
                        var e;
                        let t = null == (e = _.current) ? void 0 : e.closest("form");
                        t && void 0 !== b && A.addEventListener(t, "reset", () => {
                            S(b)
                        })
                    }, [_, S]), n.createElement(n.Fragment, null, null != k && N && n.createElement(f._, {
                        features: f.A.Hidden,
                        ...(0, o.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            form: x,
                            checked: N,
                            name: k,
                            value: y
                        })
                    }), (0, o.sY)({
                        ourProps: L,
                        theirProps: Z,
                        slot: D,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                }), {
                    Group: function (e) {
                        var t;
                        let [r, l] = (0, n.useState)(null), [a, i] = (0, s.b)(), [u, d] = (0, c.f)(), f = (0, n.useMemo)(() => ({
                            switch: r,
                            setSwitch: l,
                            labelledby: a,
                            describedby: u
                        }), [r, l, a, u]);
                        return n.createElement(d, {
                            name: "Switch.Description"
                        }, n.createElement(i, {
                            name: "Switch.Label",
                            props: {
                                htmlFor: null == (t = f.switch) ? void 0 : t.id,
                                onClick(e) {
                                    r && ("LABEL" === e.currentTarget.tagName && e.preventDefault(), r.click(), r.focus({
                                        preventScroll: !0
                                    }))
                                }
                            }
                        }, n.createElement(v.Provider, {
                            value: f
                        }, (0, o.sY)({
                            ourProps: {},
                            theirProps: e,
                            defaultTag: b,
                            name: "Switch.Group"
                        }))))
                    },
                    Label: s._,
                    Description: c.d
                })
        },
        61782: function (e, t, r) {
            "use strict";
            var n = r(67294);
            let o = n.forwardRef(function (e, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M19 9l-7 7-7-7"
                }))
            });
            t.Z = o
        },
        10822: function (e, t, r) {
            "use strict";
            var n = r(67294);
            let o = n.forwardRef(function (e, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 15l7-7 7 7"
                }))
            });
            t.Z = o
        },
        93973: function (e, t, r) {
            "use strict";
            var n = r(67294);
            let o = n.forwardRef(function (e, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = o
        },
        63519: function (e, t, r) {
            "use strict";
            var n = r(67294);
            let o = n.forwardRef(function (e, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = o
        },
        69743: function (e, t, r) {
            "use strict";
            var n = r(67294);
            let o = n.forwardRef(function (e, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = o
        },
        22227: function (e, t, r) {
            "use strict";
            r.d(t, {
                _g: function () {
                    return d
                },
                iq: function () {
                    return c
                },
                ld: function () {
                    return f
                },
                mW: function () {
                    return p
                },
                r_: function () {
                    return i
                }
            });
            var n = Object.defineProperty,
                o = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                l = (e, t, r) => (o(e, "symbol" != typeof t ? t + "" : t, r), r);
            class a extends Error {
                constructor(e, t, r) {
                    let n;
                    super("INVALID_REQUEST" === e ? `${t}: ${null==r?void 0:r.map(e=>e.msg).join(", ")}` : `${e}: ${t}`), l(this, "name", "WidoError"), l(this, "code"), l(this, "detail"), l(this, "validationErrors"), this.detail = t, this.code = e, this.validationErrors = r
                }
                static from_api_response(e) {
                    return new a(e.code, e.detail, e.validationErrors)
                }
            }
            let i = "0x0000000000000000000000000000000000000000",
                s = {
                    WIDO_API_URL: "https://api.joinwido.com",
                    SEGMENT_KEY: "G4ttHjzxUXZ2ORLGHpXE8yEfCCkqjPXx",
                    DEBUG: !1
                };
            async function c(e) {
                let {
                    chainId: t,
                    fromToken: r,
                    toChainId: n,
                    toToken: o
                } = e, l = {
                    chain_id: String(t),
                    from_token: r,
                    to_chain_id: String(n),
                    to_token: o
                }, i = new URLSearchParams(l), c = `${s.WIDO_API_URL}/contract_address?${i}`, u = await fetch(c);
                if (!u.ok) throw a.from_api_response(await u.json());
                let d = await u.json();
                return d.spender
            }
            async function u(e) {
                let {
                    chainId: t = [],
                    protocol: r = [],
                    includePricing: n = !1,
                    includePreview: o = !1,
                    toChainId: l,
                    toToken: i
                } = e || {}, c = {
                    include_pricing: String(n),
                    include_preview: String(o)
                };
                l && (c.to_chain_id = String(l)), i && (c.to_token = i);
                let u = new URLSearchParams(c);
                t.forEach(e => u.append("chain_id", String(e))), r.forEach(e => u.append("protocol", e));
                let d = `${s.WIDO_API_URL}/tokens?${u}`,
                    f = await fetch(d);
                if (!f.ok) throw a.from_api_response(await f.json());
                return (await f.json()).tokens
            }
            async function d(e) {
                return await u(e)
            }
            async function f(e, t) {
                let r = new URLSearchParams({
                    user: e
                });
                null == t || t.forEach(e => r.append("chain_id", String(e)));
                let n = `${s.WIDO_API_URL}/balances?${r}`,
                    o = await fetch(n);
                if (!o.ok) throw a.from_api_response(await o.json());
                return (await o.json()).balances
            }
            async function p(e) {
                let {
                    user: t,
                    fromChainId: r,
                    fromToken: n,
                    toChainId: o,
                    toToken: l,
                    amount: i,
                    slippagePercentage: c = .01,
                    varsOverride: u = {},
                    partner: d,
                    lowerTick: f,
                    upperTick: p,
                    tokenId: m,
                    recipient: h
                } = e, g = {
                    from_chain_id: String(r),
                    from_token: n,
                    to_chain_id: String(o),
                    to_token: l,
                    ...u
                };
                c && (g.slippage_percentage = String(c)), i && (g.amount = i), t && (g.user = t), d && (g.partner = d), f && (g.lower_tick = f), p && (g.upper_tick = p), m && (g.token_id = m), h && (g.recipient = h);
                let v = new URLSearchParams(g),
                    b = `${s.WIDO_API_URL}/quote_v2?${v}`,
                    w = await fetch(b);
                if (!w.ok) throw a.from_api_response(await w.json());
                let k = await w.json(),
                    {
                        is_supported: y,
                        steps: x,
                        steps_count: Z,
                        messages: E
                    } = k,
                    _ = {
                        isSupported: y,
                        steps: x,
                        stepsCount: Z,
                        messages: E || []
                    };
                if (!i && !t) return _;
                let {
                    price: P,
                    min_price: N,
                    from_token_usd_price: S,
                    from_token_amount: R,
                    from_token_amount_usd_value: C,
                    to_token_usd_price: T,
                    to_token_amount: I,
                    to_token_amount_usd_value: D,
                    expected_slippage: L,
                    min_to_token_amount: A,
                    from: M,
                    to: B,
                    data: O,
                    value: j,
                    gas_fee: $,
                    gas_fee_usd: F
                } = k;
                return {
                    ..._,
                    price: P,
                    minPrice: N,
                    fromTokenUsdPrice: S,
                    fromTokenAmount: R,
                    fromTokenAmountUsdValue: C,
                    toTokenUsdPrice: T,
                    toTokenAmount: I,
                    toTokenAmountUsdValue: D,
                    expectedSlippage: L,
                    minToTokenAmount: A,
                    from: M,
                    to: B,
                    data: O,
                    value: j,
                    gasFee: $,
                    gasFeeUsdValue: F
                }
            }
        }
    },
    function (e) {
        e.O(0, [490, 4097, 212, 8324, 2179, 9711, 8922, 466, 9774, 2888, 179], function () {
            return e(e.s = 60165)
        }), _N_E = e.O()
    }
]);