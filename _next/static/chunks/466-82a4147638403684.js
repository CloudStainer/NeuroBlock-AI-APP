"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [466], {
        872: function (e, t, a) {
            a.d(t, {
                BF: function () {
                    return d
                },
                BZ: function () {
                    return m
                },
                Cz: function () {
                    return l
                },
                Is: function () {
                    return o
                },
                Lm: function () {
                    return v
                },
                T$: function () {
                    return s
                },
                b0: function () {
                    return r
                },
                q0: function () {
                    return u
                },
                uM: function () {
                    return i
                },
                w: function () {
                    return p
                },
                z: function () {
                    return c
                }
            });
            var n = a(31429);
            let l = "#fafafa",
                r = "#33691E",
                o = "#ebebeb",
                i = "#000000",
                s = "#efefef",
                d = "#13854b",
                c = "#26ff91",
                m = "#292929",
                u = e => e === n.ChainNetwork.OKEx || e === n.ChainNetwork.Moonriver || e === n.ChainNetwork.Cronos || e === n.ChainNetwork.Moonbeam || e === n.ChainNetwork.Optimism || e === n.ChainNetwork.Fantom || e === n.ChainNetwork.Gnosis,
                p = "33202513960",
                v = e => e === n.ChainNetwork.Metis
        },
        52641: function (e, t, a) {
            var n = a(35944),
                l = a(93490),
                r = a(77768);
            t.Z = e => {
                let {
                    toggleOn: t,
                    onChange: a,
                    children: o
                } = e;
                return (0, n.BX)(r.r.Group, {
                    as: "div",
                    className: "flex items-center mb-4 ml-2",
                    children: [(0, n.tZ)(r.r, {
                        checked: t,
                        onChange: a,
                        className: (0, l.AK)(t ? "bg-primary" : "bg-foreground-alt-400", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-2000"),
                        children: (0, n.BX)("span", {
                            "aria-hidden": "true",
                            className: (0, l.AK)(t ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 rounded-full bg-foreground-button transform ring-0 transition ease-in-out duration-200"),
                            children: [(0, n.tZ)("span", {
                                className: (0, l.AK)(t ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),
                                "aria-hidden": "true",
                                children: (0, n.tZ)("svg", {
                                    className: "h-3 w-3 text-foreground-alt-300",
                                    fill: "none",
                                    viewBox: "0 0 12 12",
                                    children: (0, n.tZ)("path", {
                                        d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                })
                            }), (0, n.tZ)("span", {
                                className: (0, l.AK)(t ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),
                                "aria-hidden": "true",
                                children: (0, n.tZ)("svg", {
                                    className: "h-3 w-3 text-accent",
                                    fill: "currentColor",
                                    viewBox: "0 0 12 12",
                                    children: (0, n.tZ)("path", {
                                        d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                    })
                                })
                            })]
                        })
                    }), (0, n.tZ)(r.r.Label, {
                        as: "span",
                        className: "ml-3",
                        children: o
                    })]
                })
            }
        },
        63698: function (e, t, a) {
            a.d(t, {
                Z: function () {
                    return e6
                }
            });
            var n = a(35944),
                l = a(67294),
                r = a(68856),
                o = a(28368),
                i = a(11355),
                s = a(93490),
                d = () => (0, n.tZ)("tr", {
                    children: (0, n.tZ)("td", {
                        colSpan: 6,
                        className: "bg-background p-1"
                    })
                }),
                c = a(25675),
                m = a.n(c),
                u = a(13342),
                p = a(6607),
                v = a(27484),
                h = a.n(v),
                f = a(52697);
            let x = e => {
                let {
                    children: t
                } = e;
                return (0, n.tZ)("div", {
                    className: "rounded-lg shadow-lg border border-foreground-alt-500 overflow-hidden",
                    children: (0, n.tZ)("div", {
                        className: "bg-background-light px-3 py-2",
                        children: (0, n.tZ)("div", {
                            className: "text-foreground-alt-200 text-base font-normal",
                            children: t
                        })
                    })
                })
            };
            var g = e => {
                    let {
                        active: t
                    } = e, {
                        t: a
                    } = (0, r.$G)("common");
                    return (0, n.tZ)("div", {
                        className: (0, s.AK)(t ? "bg-primary" : "bg-foreground-alt-400", "rounded-xl py-1 px-2"),
                        children: (0, n.tZ)(f.ZP, {
                            duration: 0,
                            content: (0, n.tZ)(x, {
                                children: a(t ? "v2.farms.stakedTooltip" : "v2.farms.notStakedTooltip")
                            }),
                            children: (0, n.tZ)("span", {
                                className: (0, s.AK)(t ? "text-background" : "text-foreground-alt-300", "block font-title font-bold text-sm text-center leading-none", "cursor-pointer transition-colors duration-300 hover:text-accent"),
                                children: "S"
                            })
                        })
                    })
                },
                b = a(9473),
                k = a(24834),
                Z = a(7930);
            let N = e => {
                    let {
                        component: t,
                        index: a,
                        isLast: r
                    } = e, [o, i] = (0, l.useState)(!1);
                    return (0, n.tZ)("div", {
                        className: (0, s.AK)("w-10 h-10 rounded-full border-3 border-foreground-alt-400 hover:scale-125 duration-200 hover:z-80", 0 === a && "z-70", 1 === a && "z-60", 2 === a && "z-50", 3 === a && "z-40", 4 === a && "z-30", 5 === a && "z-20", a > 0 && "-ml-4", r && "mr-3"),
                        style: {
                            background: o ? Z.J : (0, Z.F)(t)
                        },
                        children: (0, n.tZ)(m(), {
                            src: "/tokens/".concat(t, ".png"),
                            className: "rounded-full",
                            width: 40,
                            height: 40,
                            layout: "intrinsic",
                            alt: t.toUpperCase(),
                            title: t.toUpperCase(),
                            onLoadingComplete: () => i(!0)
                        })
                    })
                },
                y = e => {
                    let {
                        protocol: t
                    } = e, [a, r] = (0, l.useState)(!1), o = t.replace(/\s|\./g, "").toLowerCase();
                    return (0, n.tZ)("div", {
                        className: "absolute -top-3 -right-3 z-80 w-7 h-7 rounded-full border-3 border-foreground-alt-400 -ml-3 mr-3 opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 duration-200",
                        style: {
                            background: a ? Z.J : (0, Z.F)(o)
                        },
                        children: (0, n.tZ)(m(), {
                            src: "/protocols/".concat(o, ".png"),
                            className: "rounded-full",
                            width: 28,
                            height: 28,
                            layout: "intrinsic",
                            alt: t,
                            title: t,
                            onLoadingComplete: () => r(!0)
                        })
                    })
                },
                w = e => {
                    let {
                        asset: t
                    } = e, {
                        components: a
                    } = t.depositToken;
                    return a ? (0, n.tZ)(n.HY, {
                        children: a.map((e, t) => (0, n.tZ)(N, {
                            component: e,
                            index: t,
                            isLast: t === a.length - 1
                        }, e))
                    }) : null
                };
            var T = e => {
                    let {
                        asset: t
                    } = e, {
                        protocol: a
                    } = t;
                    return (0, n.BX)("div", {
                        className: "flex relative mr-2",
                        children: [(0, n.tZ)(w, {
                            asset: t
                        }), (0, n.tZ)(y, {
                            protocol: a
                        })]
                    })
                },
                B = a(42837),
                C = a(31429),
                X = a(40653),
                A = a(80963),
                S = e => {
                    var t, a, l, o, i, d, c, m, u, p, v, h, f, x;
                    let g, b, k, Z, N, y, w, {
                            asset: T,
                            userDillRatio: B
                        } = e,
                        {
                            t: S
                        } = (0, r.$G)("common");
                    if ((0, A.nk)(T) || (0, A.Lq)(T)) g = (0, s.rl)((null === (t = T.aprStats) || void 0 === t ? void 0 : t.apy) || 0);
                    else {
                        let e = (0, A.hT)(T) ? T.details : null === (a = T.farm) || void 0 === a ? void 0 : a.details;
                        if (null == e ? void 0 : e.farmApyComponents) {
                            if ((null === (l = e.farmApyComponents[0]) || void 0 === l ? void 0 : l.maxApr) && T.chain === C.ChainNetwork.Ethereum) {
                                b = e.farmApyComponents[0].apr || 0, k = e.farmApyComponents[0].maxApr || 0;
                                let t = ((null === (o = T.aprStats) || void 0 === o ? void 0 : o.apy) || 0) + b,
                                    a = ((null === (i = T.aprStats) || void 0 === i ? void 0 : i.apy) || 0) + k;
                                g = "".concat((0, s.rl)(t), " ~ ").concat((0, s.rl)(a)), N = parseFloat((null === (d = T.depositTokensInFarm) || void 0 === d ? void 0 : d.tokens) || "0") + parseFloat((null === (c = T.depositTokensInJar) || void 0 === c ? void 0 : c.tokens) || "0");
                                let n = .4 * N,
                                    l = (e.tokenBalance || 0) * B * .6,
                                    r = ((null === (m = e.farmApyComponents[0]) || void 0 === m ? void 0 : m.maxApr) || 0) * Math.min(N, n + l) / (N || 1),
                                    p = r + ((null === (u = T.aprStats) || void 0 === u ? void 0 : u.apy) || 0);
                                y = S("v2.farms.yourApy", {
                                    apy: (0, s.rl)(p || 0)
                                })
                            } else {
                                Z = null === (p = e.farmApyComponents[0]) || void 0 === p ? void 0 : p.apr;
                                let t = null === (v = e.farmApyComponents) || void 0 === v ? void 0 : v.reduce((e, t) => e + (null !== (f = t.apr) && void 0 !== f ? f : 0), 0);
                                t - Z > 0 && (w = e.farmApyComponents[1]), g = (0, s.rl)(((null === (h = T.aprStats) || void 0 === h ? void 0 : h.apy) || 0) + (t || 0))
                            }
                        } else g = (0, s.rl)((null === (x = T.aprStats) || void 0 === x ? void 0 : x.apy) || 0)
                    }
                    let E = g.substring(0, g.indexOf("%")).replace(/,/g, ""),
                        I = parseFloat(E) > 1e4,
                        {
                            aprStats: F
                        } = T,
                        G = ((null == F ? void 0 : F.apy) || 0) - ((null == F ? void 0 : F.apr) || 0),
                        U = S("farms.harvestable");
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("span", {
                            className: "font-title font-medium text-base leading-5",
                            children: I ? ">10,000%" : g
                        }), (0, n.tZ)(X.Z, {
                            children: (0, n.BX)("div", {
                                className: "text-foreground-alt-200 text-sm",
                                children: [(0, n.tZ)("p", {
                                    className: "font-bold text-primary",
                                    children: "".concat(S("farms.baseAPRs"))
                                }), Z && (0, n.BX)("div", {
                                    className: "flex justify-between items-end",
                                    children: [(0, n.BX)("div", {
                                        className: "font-bold mr-2",
                                        children: ["NUBAI (", U, "):"]
                                    }), (0, n.tZ)("div", {
                                        className: "text-foreground",
                                        children: (0, s.rl)(Z || 0)
                                    })]
                                }), b && k && (0, n.BX)("div", {
                                    className: "flex justify-between items-end",
                                    children: [(0, n.BX)("div", {
                                        className: "font-bold mr-2",
                                        children: ["NUBAI (", U, "):"]
                                    }), (0, n.tZ)("div", {
                                        className: "text-foreground",
                                        children: "".concat((0, s.rl)(b || 0), " ~ ").concat((0, s.rl)(k || 0))
                                    })]
                                }), w && (0, n.BX)("div", {
                                    className: "flex justify-between items-end",
                                    children: [(0, n.tZ)("div", {
                                        className: "font-bold mr-2",
                                        children: "".concat(w.name.toUpperCase(), " (").concat(U, "):")
                                    }), (0, n.tZ)("div", {
                                        className: "text-foreground",
                                        children: (0, s.rl)(w.apr || 0)
                                    })]
                                }), (null == F ? void 0 : F.components.length) && F.components.map(e => {
                                    let {
                                        name: t,
                                        apr: a
                                    } = e;
                                    return isNaN(a) || a > 1e6 ? null : (0, n.BX)("div", {
                                        className: "flex justify-between items-end",
                                        children: [(0, n.BX)("div", {
                                            className: "font-bold mr-2",
                                            children: [t.toUpperCase(), ":"]
                                        }), (0, n.tZ)("div", {
                                            className: "text-foreground",
                                            children: (0, s.rl)(a)
                                        })]
                                    }, t)
                                }), (0, n.BX)("div", {
                                    className: "flex justify-between items-end",
                                    children: [(0, n.BX)("span", {
                                        className: "font-bold mr-2",
                                        children: [S("v2.farms.compounding"), " ✨:"]
                                    }), (0, n.tZ)("span", {
                                        className: "text-foreground",
                                        children: (0, s.rl)(G)
                                    })]
                                })]
                            })
                        }), T.chain === C.ChainNetwork.Ethereum && !!N && (0, n.tZ)("p", {
                            className: "font-normal text-xs text-foreground-alt-200",
                            children: y
                        })]
                    })
                };
            let E = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, n.tZ)("td", {
                        className: (0, s.AK)("bg-background-light p-4 whitespace-nowrap text-sm text-foreground sm:p-6 group-hover:bg-background-lightest transition duration-300 ease-in-out", a),
                        children: t
                    })
                },
                I = (e, t) => {
                    var a, l, r, o, i, d;
                    let c = e.protocol === p.AssetProtocol.UNISWAP_V3,
                        m = null === (a = e.depositToken.range) || void 0 === a ? void 0 : a.isStable,
                        u = null === (l = e.depositToken.range) || void 0 === l ? void 0 : l.isNotUsdPegged,
                        v = u || m ? "" : "$";
                    if (!c || !e.depositToken.range) return (0, n.tZ)(n.HY, {});
                    let h = "".concat(t("v2.farms.range"), ": ").concat(v).concat((0, s.RQ)(+((null === (r = e.depositToken.range) || void 0 === r ? void 0 : r.lowerUsd) || 0), m ? 3 : 1), " ↔ ").concat(v).concat((0, s.RQ)(+((null === (o = e.depositToken.range) || void 0 === o ? void 0 : o.upperUsd) || 0), m ? 3 : 1)),
                        f = "".concat(u || m ? "".concat(null === (i = e.depositToken.range) || void 0 === i ? void 0 : i.numeratorToken.toUpperCase(), " / ").concat(null === (d = e.depositToken.range) || void 0 === d ? void 0 : d.denomToken.toUpperCase()) : "");
                    return (0, n.tZ)("p", {
                        className: "font-normal text-foreground-alt-200",
                        children: "".concat(h, " ").concat(f, "\n    ")
                    })
                },
                F = (e, t, a, l) => {
                    var r;
                    let o = (null === (r = e.details) || void 0 === r ? void 0 : r.apiKey) ? "/stats?jar=" + e.details.apiKey : void 0;
                    return (0, n.BX)("div", {
                        children: [(0, n.tZ)("p", {
                            className: "font-title font-medium text-base leading-5 group-hover:text-primary-light transition duration-300 ease-in-out",
                            children: e.depositToken.name.replace("PICKLE","MELAI")
                        }), a && o && (0, n.tZ)(B.Z, {
                            href: o,
                            className: "font-bold group-hover:text-primary-light",
                            primary: !0,
                            children: l("v2.farms.statsAndDocs")
                        }), (0, n.BX)("div", {
                            className: "flex mt-1",
                            children: [(0, n.tZ)("div", {
                                className: "w-4 h-4 mr-1",
                                children: (0, n.tZ)(m(), {
                                    src: U(e.chain, t),
                                    className: "rounded-full",
                                    width: 20,
                                    height: 20,
                                    layout: "responsive",
                                    alt: e.chain,
                                    title: e.chain
                                })
                            }), (0, n.tZ)("p", {
                                className: "italic font-normal text-xs text-foreground-alt-200",
                                children: e.protocol
                            })]
                        }), (0, n.tZ)("p", {
                            children: I(e, l)
                        })]
                    })
                },
                G = (e, t) => {
                    var a;
                    let l = (null === (a = e.details.harvestStats) || void 0 === a ? void 0 : a.balanceUSD) || 0,
                        r = (0, s.qx)(l),
                        o = h().unix(e.startTimestamp || 0),
                        i = h()().subtract(1, "month"),
                        d = o.isAfter(i),
                        c = l < 1e3,
                        m = l > 1e4;
                    return !d && c ? (0, n.tZ)(n.HY, {
                        children: "<$1k"
                    }) : d && !m ? (0, n.BX)(n.HY, {
                        children: [t("v2.farms.new"), " ✨"]
                    }) : (0, n.tZ)(n.HY, {
                        children: r
                    })
                },
                U = (e, t) => {
                    let a = null == t ? void 0 : t.find(t => t.name === e);
                    return a ? "/networks/".concat(a.name, ".png") : "/pickle.png"
                };
            var R = e => {
                    let {
                        asset: t,
                        simple: a,
                        dashboard: l,
                        open: o,
                        userDillRatio: i
                    } = e, {
                        t: d
                    } = (0, r.$G)("common"), c = (0, b.v9)(k.VH.selectNetworks), m = parseFloat(t.depositTokensInJar.tokens) + parseFloat(t.depositTokensInFarm.tokens), p = t.depositTokensInJar.tokensUSD + t.depositTokensInFarm.tokensUSD, v = t.depositTokensInFarm.tokensUSD, h = t.earnedMelons.tokensUSD, f = t.earnedMelons.tokensVisible, x = d("v2.farms.tokens", {
                        amount: m
                    });
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.BX)(E, {
                            className: (0, s.AK)(!o && "rounded-bl-xl", "rounded-tl-xl flex items-center"),
                            children: [(0, n.tZ)(T, {
                                asset: t
                            }), F(t, c, l, d)]
                        }), (0, n.BX)(E, {
                            children: [(0, n.tZ)("p", {
                                className: "font-title font-medium text-base leading-5",
                                children: (0, s.qx)(h)
                            }), (0, n.BX)("p", {
                                className: "font-normal text-xs text-foreground-alt-200",
                                children: [f, " NUBAIs"]
                            })]
                        }), (0, n.tZ)(E, {
                            children: (0, n.BX)("div", {
                                className: "flex items-center",
                                children: [(0, n.tZ)(g, {
                                    active: v > 0
                                }), (0, n.BX)("div", {
                                    className: "ml-2",
                                    children: [(0, n.tZ)("p", {
                                        className: "font-title font-medium text-base leading-5",
                                        children: (0, s.qx)(p)
                                    }), (0, n.tZ)("p", {
                                        className: "font-normal text-xs text-foreground-alt-200",
                                        children: x
                                    })]
                                })]
                            })
                        }), (0, n.tZ)(E, {
                            children: (0, n.tZ)(S, {
                                asset: t,
                                userDillRatio: i
                            })
                        }), (0, n.tZ)(E, {
                            className: (0, s.AK)(a && "rounded-r-xl"),
                            children: (0, n.tZ)("p", {
                                className: "font-title font-medium text-base leading-5",
                                children: G(t, d)
                            })
                        }), !a && (0, n.tZ)(E, {
                            className: (0, s.AK)(!o && "rounded-br-xl", "rounded-tr-xl w-10"),
                            children: (0, n.tZ)("div", {
                                className: "flex justify-end pr-3",
                                children: (0, n.tZ)(u.Z, {
                                    className: (0, s.AK)(o && "rotate-180", "text-foreground ml-2 h-5 w-5 transition duration-300 ease-in-out"),
                                    "aria-hidden": "true"
                                })
                            })
                        })]
                    })
                },
                H = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, n.tZ)("td", {
                        className: (0, s.AK)("bg-background-light p-4 whitespace-nowrap text-sm text-foreground sm:p-6 group-hover:bg-background-lightest transition duration-300 ease-in-out", a),
                        children: t
                    })
                },
                D = a(28187),
                K = e => {
                    let {
                        asset: t,
                        networks: a
                    } = e;
                    return (0, n.BX)("div", {
                        children: [(0, n.tZ)("p", {
                            className: "font-title font-medium text-base leading-5 group-hover:text-primary-light transition duration-300 ease-in-out",
                            children: t.depositToken.name.replace("PICKLE","MELAI")
                        }), (0, n.BX)("div", {
                            className: "flex mt-1",
                            children: [(0, n.tZ)("div", {
                                className: "w-4 h-4 mr-1",
                                children: (0, n.tZ)(m(), {
                                    src: (0, D.Qr)(t.chain, a),
                                    className: "rounded-full",
                                    width: 20,
                                    height: 20,
                                    layout: "responsive",
                                    alt: t.chain,
                                    title: t.chain
                                })
                            }), (0, n.tZ)("p", {
                                className: "italic font-normal text-xs text-foreground-alt-200",
                                children: t.protocol
                            })]
                        })]
                    })
                },
                O = e => {
                    var t;
                    let {
                        brinery: a,
                        simple: l,
                        open: o,
                        userDillRatio: i
                    } = e, {
                        t: d
                    } = (0, r.$G)("common"), c = (0, b.v9)(k.VH.selectNetworks), m = a.brineryBalance.tokensUSD, u = a.earnedRewards.tokensUSD, p = a.earnedRewards.tokensVisible, v = d("v2.farms.tokens", {
                        amount: a.brineryBalance.tokens
                    });
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.BX)(H, {
                            className: (0, s.AK)(!o && "rounded-bl-xl", "rounded-tl-xl flex items-center"),
                            children: [(0, n.tZ)(T, {
                                asset: a
                            }), (0, n.tZ)(K, {
                                asset: a,
                                networks: c
                            })]
                        }), (0, n.BX)(H, {
                            children: [(0, n.tZ)("p", {
                                className: "font-title font-medium text-base leading-5",
                                children: (0, s.qx)(u)
                            }), (0, n.tZ)("p", {
                                className: "font-normal text-xs text-foreground-alt-200",
                                children: "".concat(p, " ").concat(a.depositToken.name)
                            })]
                        }), (0, n.tZ)(H, {
                            children: (0, n.BX)("div", {
                                className: "flex items-center",
                                children: [(0, n.tZ)(g, {
                                    active: m > 0
                                }), (0, n.BX)("div", {
                                    className: "ml-2",
                                    children: [(0, n.tZ)("p", {
                                        className: "font-title font-medium text-base leading-5",
                                        children: (0, s.qx)(m)
                                    }), (0, n.tZ)("p", {
                                        className: "font-normal text-xs text-foreground-alt-200",
                                        children: v
                                    })]
                                })]
                            })
                        }), (0, n.tZ)(H, {
                            children: (0, n.tZ)(S, {
                                asset: a,
                                userDillRatio: i
                            })
                        }), (0, n.tZ)(H, {
                            className: (0, s.AK)("rounded-tr-xl"),
                            children: (0, n.tZ)("p", {
                                className: "font-title font-medium text-base leading-5",
                                children: (0, s.qx)((null === (t = a.details.harvestStats) || void 0 === t ? void 0 : t.balanceUSD) || 0)
                            })
                        })]
                    })
                },
                j = a(98955),
                $ = a(77044),
                M = a(34211),
                L = e => {
                    let {
                        open: t,
                        isBrinery: a
                    } = e, {
                        t: l
                    } = (0, r.$G)("common");
                    return (0, n.tZ)("div", {
                        className: "flex group pt-2 justify-center text-foreground-alt-200 hover:text-foreground-alt-300 cursor-pointer transition duration-300 ease-in-out",
                        children: (0, n.BX)("div", {
                            className: "flex justify-end items-center pr-3",
                            children: [(0, n.tZ)(u.Z, {
                                className: (0, s.AK)(t && "rotate-180", "text-foreground mr-1 h-5 w-5 group-hover:text-accent transition-colors duration-300 ease-in-out"),
                                "aria-hidden": "true"
                            }), (0, n.tZ)("span", {
                                children: l(t ? "v2.actions.close" : a ? "v2.brinery.seeBrineryDetails" : "v2.farms.seeFarmDetails")
                            })]
                        })
                    })
                },
                P = a(86281),
                W = a(50790),
                _ = a(69876),
                Y = e => {
                    let {
                        asset: t,
                        hideDescription: a
                    } = e, {
                        t: l
                    } = (0, r.$G)("common"), o = (0, W.CG)(e => P.Ad.selectJarDocs(e, t.details.apiKey));
                    if (!o) return (0, n.tZ)(_.Z, {
                        waitForDocs: !0,
                        className: "py-8"
                    });
                    let {
                        description: i
                    } = o;
                    return (0, n.tZ)(n.HY, {
                        children: !a && (0, n.BX)("div", {
                            className: "mb-2",
                            children: [(0, n.tZ)("h2", {
                                className: "font-body font-bold text-foreground-alt-200 mb-1",
                                children: l("v2.farms.docs.description")
                            }), (0, n.tZ)("div", {
                                className: "text-sm text-foreground",
                                children: (0, s.m_)(i)
                            })]
                        })
                    })
                };
            let V = e => {
                    let {
                        label: t,
                        tooltipText: a,
                        value: l
                    } = e;
                    return (0, n.BX)("p", {
                        className: "flex py-2 text-foreground-alt-200 justify-between",
                        children: [(0, n.BX)("span", {
                            className: "font-body font-bold",
                            children: [t, a && (0, n.tZ)(X.Z, {
                                children: (0, n.tZ)("span", {
                                    className: "text-foreground-alt-200 text-sm",
                                    children: a
                                })
                            })]
                        }), (0, n.tZ)("span", {
                            className: "font-medium text-primary text-base",
                            children: l
                        })]
                    })
                },
                z = e => {
                    let {
                        property: t,
                        value: a
                    } = e;
                    return (0, n.BX)("p", {
                        className: "flex justify-between",
                        children: [(0, n.tZ)("span", {
                            className: "ml-4 font-body font-medium text-sm",
                            children: t
                        }), (0, n.tZ)("span", {
                            className: "text-primary font-medium text-sm",
                            children: a
                        })]
                    })
                };
            var J = e => {
                    var t;
                    let {
                        asset: a,
                        hideDescription: d
                    } = e, {
                        t: c
                    } = (0, r.$G)("common"), m = C.Chains.get(a.chain), {
                        library: u
                    } = (0, $.Ge)(), p = parseFloat(a.depositTokensInJar.tokens) + parseFloat(a.depositTokensInFarm.tokens), v = ((0, A.R1)(a) || (0, A.hT)(a)) && a.details.tokenBalance ? p / a.details.tokenBalance : 0, h = v * ((null === (t = a.details.harvestStats) || void 0 === t ? void 0 : t.harvestableUSD) || 0) * (1 - ((null == m ? void 0 : m.defaultPerformanceFee) || .2));
                    return (0, n.tZ)(o.p, {
                        as: l.Fragment,
                        children: e => {
                            var t, v, f, x, g, b, k, Z, N, y;
                            let {
                                open: w
                            } = e;
                            return (0, n.BX)(n.HY, {
                                children: [(0, n.tZ)(i.u, {
                                    as: l.Fragment,
                                    enter: "transition duration-100 ease-out",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "transition duration-100 ease-out",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, n.BX)(o.p.Panel, {
                                        as: "div",
                                        className: "grid grid-cols-4 py-4 gap-2",
                                        children: [(0, n.BX)("div", {
                                            className: "pr-4 col-span-3 border-r border-foreground-alt-500",
                                            children: [(0, n.BX)("div", {
                                                className: "flex justify-between",
                                                children: [(0, n.BX)("span", {
                                                    className: "font-title text-foreground-alt-200 inline-flex items-center font-medium text-base leading-5",
                                                    children: [(0, n.BX)(r.cC, {
                                                        i18nKey: "v2.farms.tokensDeposited",
                                                        children: ["You have", (0, n.tZ)("span", {
                                                            className: "text-primary mx-2",
                                                            children: {
                                                                amount: (0, s.RQ)(p, 7)
                                                            }
                                                        }), "pTokens"]
                                                    }), (0, n.tZ)(X.Z, {
                                                        children: (0, n.tZ)("span", {
                                                            className: "text-foreground-alt-200 text-sm",
                                                            children: c("v2.farms.pToken")
                                                        })
                                                    })]
                                                }), (0, n.tZ)(M.Z, {
                                                    onClick: () => (0, D.Xv)(a, u),
                                                    type: "secondary",
                                                    children: c("v2.farms.metamaskAdd")
                                                })]
                                            }), (0, n.tZ)("div", {
                                                className: "pt-2 mb-4",
                                                children: (0, n.tZ)(Y, {
                                                    asset: a,
                                                    hideDescription: d
                                                })
                                            }), (0, n.BX)("div", {
                                                className: "grid grid-cols-3 py-1",
                                                children: [(0, n.tZ)("div", {
                                                    children: (0, n.tZ)("span", {
                                                        className: "font-body font-bold text-foreground-alt-200",
                                                        children: c("v2.farms.jarAddress")
                                                    })
                                                }), (0, n.tZ)("div", {
                                                    children: (0, n.tZ)("span", {
                                                        className: "ml-auto",
                                                        children: (0, n.tZ)(B.Z, {
                                                            href: "".concat(null == m ? void 0 : m.explorer, "/address/").concat(a.contract),
                                                            external: !0,
                                                            primary: !0,
                                                            children: (0, s.Xn)(a.contract)
                                                        })
                                                    })
                                                })]
                                            }), (0, A.R1)(a) && (null === (t = a.details) || void 0 === t ? void 0 : t.strategyAddr) != j.NULL_ADDRESS && (null === (v = a.details) || void 0 === v ? void 0 : v.strategyAddr) !== void 0 && (0, n.BX)("div", {
                                                className: "grid grid-cols-3 py-1",
                                                children: [(0, n.tZ)("div", {
                                                    children: (0, n.tZ)("span", {
                                                        className: "font-body font-bold text-foreground-alt-200",
                                                        children: c("v2.farms.strategyAddress")
                                                    })
                                                }), (0, n.tZ)("div", {
                                                    children: (0, n.tZ)("span", {
                                                        className: "ml-auto",
                                                        children: (0, n.tZ)(B.Z, {
                                                            href: "".concat(null == m ? void 0 : m.explorer, "/address/").concat(null === (f = a.details) || void 0 === f ? void 0 : f.strategyAddr),
                                                            external: !0,
                                                            primary: !0,
                                                            children: (0, s.Xn)(null === (x = a.details) || void 0 === x ? void 0 : x.strategyAddr)
                                                        })
                                                    })
                                                })]
                                            }), (0, A.er)(a) && (0, n.BX)("div", {
                                                className: "grid grid-cols-3 py-1",
                                                children: [(0, n.tZ)("div", {
                                                    children: (0, n.tZ)("span", {
                                                        className: "font-body font-bold text-foreground-alt-200",
                                                        children: c("v2.farms.farmAddress")
                                                    })
                                                }), (0, n.tZ)("div", {
                                                    children: (0, n.tZ)("span", {
                                                        className: "ml-auto",
                                                        children: (0, n.tZ)(B.Z, {
                                                            href: "".concat(null == m ? void 0 : m.explorer, "/address/").concat(null === (g = a.farm) || void 0 === g ? void 0 : g.farmAddress),
                                                            external: !0,
                                                            primary: !0,
                                                            children: (0, s.Xn)(null === (b = a.farm) || void 0 === b ? void 0 : b.farmAddress)
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, n.BX)("div", {
                                            className: "px-4 border-r border-foreground-alt-500",
                                            children: [(0, A.R1)(a) && (0, n.tZ)(V, {
                                                label: c("v2.farms.ratio"),
                                                tooltipText: c("v2.farms.ratioTooltip"),
                                                value: (null === (k = a.details.ratio) || void 0 === k ? void 0 : k.toFixed(4)) || ""
                                            }), (0, n.tZ)(V, {
                                                label: c("v2.farms.pending"),
                                                tooltipText: c("v2.farms.pendingTooltip"),
                                                value: "$".concat(h.toFixed(4))
                                            }), (0, n.tZ)(V, {
                                                label: c("v2.farms.baseApr"),
                                                tooltipText: c("v2.farms.baseAprTooltip"),
                                                value: "".concat(null === (Z = a.aprStats) || void 0 === Z ? void 0 : Z.apr.toFixed(3), "%")
                                            }), (0, n.tZ)(V, {
                                                label: c("v2.farms.yieldRates"),
                                                tooltipText: null,
                                                value: ""
                                            }), (0, n.tZ)(z, {
                                                property: c("v2.time.weekly"),
                                                value: "".concat((((null === (N = a.aprStats) || void 0 === N ? void 0 : N.apr) || 0) / 52).toFixed(2), "%")
                                            }), (0, n.tZ)(z, {
                                                property: c("v2.time.monthly"),
                                                value: "".concat((((null === (y = a.aprStats) || void 0 === y ? void 0 : y.apr) || 0) / 12).toFixed(2), "%")
                                            })]
                                        })]
                                    })
                                }), (0, n.tZ)(o.p.Button, {
                                    as: "div",
                                    children: (0, n.tZ)(L, {
                                        open: w
                                    })
                                })]
                            })
                        }
                    })
                },
                q = a(61744),
                Q = a(19485),
                ee = a(2593),
                et = a(86688),
                ea = a(68073),
                en = a(40665),
                el = a(410),
                er = a(88580),
                eo = a(4390),
                ei = a(56371),
                es = a(94358);
            let ed = [{
                value: .25
            }, {
                value: .5
            }, {
                value: .75
            }, {
                value: 1
            }];
            var ec = e => {
                    let {
                        setTransactionAmount: t
                    } = e, [a, r] = (0, l.useState)(1);
                    return (0, n.tZ)("nav", {
                        "aria-label": "Progress",
                        children: (0, n.tZ)("ol", {
                            role: "list",
                            className: "flex space-x-2",
                            children: ed.map(e => (0, n.tZ)("li", {
                                className: "flex-1",
                                children: (0, n.tZ)("a", {
                                    onClick: () => {
                                        r(e.value), t(e.value)
                                    },
                                    className: (0, s.AK)("flex justify-end cursor-pointer border-t-4 pt-2 transition duration-300 ease-in-out", e.value < a && "border-primary hover:border-primary-light", e.value === a && "border-primary", e.value > a && "border-background-lightest hover:border-primary-light"),
                                    children: (0, n.tZ)("span", {
                                        className: "text-xs text-foreground-alt-200 font-semibold tracking-wide uppercase",
                                        children: (0, s.rl)(100 * e.value, 0)
                                    })
                                })
                            }, e.value))
                        })
                    })
                },
                em = e => {
                    let {
                        balance: t,
                        decimals: a,
                        nextStep: o
                    } = e, {
                        t: i
                    } = (0, r.$G)("common"), s = (0, ei.formatUnits)(t, a), [d, c] = (0, l.useState)(s), m = Error(i("v2.farms.invalidAmount")), [u, p] = (0, l.useState)(), v = e => {
                        if (!e) {
                            p(m);
                            return
                        }
                        let n = (0, ei.parseUnits)(e, a),
                            l = n.gt(0) && n.lte(ee.O$.from(t));
                        l ? p(void 0) : p(m)
                    };
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.BX)("div", {
                            className: "bg-background-lightest rounded-xl px-4 py-2 mb-6",
                            children: [(0, n.BX)("div", {
                                className: "flex justify-between mb-2",
                                children: [(0, n.tZ)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: i("v2.balances.amount")
                                }), (0, n.BX)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: [i("v2.balances.balance"), ": ", s]
                                })]
                            }), (0, n.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, n.tZ)("input", {
                                    type: "number",
                                    className: "w-3/5 bg-transparent focus:outline-none flex-shrink-0 font-medium text-primary leading-7",
                                    value: d,
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e.target;
                                        c(t), v(t)
                                    }
                                }), (0, n.tZ)(M.Z, {
                                    size: "small",
                                    onClick: () => {
                                        c(s), v(s)
                                    },
                                    children: i("v2.balances.max")
                                })]
                            })]
                        }), (0, n.tZ)("div", {
                            className: "mb-5",
                            children: (0, n.tZ)(ec, {
                                setTransactionAmount: e => c((0, ei.formatUnits)(ee.O$.from(t).mul((100 * e).toString()).div(100).toString(), a))
                            })
                        }), (0, n.tZ)(es.Z, {
                            error: u
                        }), (0, n.tZ)(M.Z, {
                            state: u ? "disabled" : "enabled",
                            onClick: () => {
                                u || o(d)
                            },
                            children: i("v2.actions.confirm")
                        })]
                    })
                },
                eu = a(9177),
                ep = e => {
                    let {
                        amount: t,
                        cta: a,
                        equivalentValue: l,
                        error: o,
                        isWaiting: i,
                        previousStep: d,
                        sendTransaction: c,
                        title: u,
                        tokenName: p
                    } = e, {
                        t: v
                    } = (0, r.$G)("common");
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("div", {
                            className: "flex justify-center my-2",
                            children: (0, n.tZ)("div", {
                                className: "w-1/2 min-h-[200px]",
                                children: (0, n.tZ)(m(), {
                                    src: "/animations/working.gif",
                                    alt: v("v2.prompts.pleaseConfirm"),
                                    title: v("v2.prompts.pleaseConfirm"),
                                    width: 0,
                                    height: 0,
                                    style: {
                                        width: "200px",
                                        height: "auto"
                                    }
                                })
                            })
                        }), (0, n.tZ)("h2", {
                            className: "text-foreground-alt-100 font-title text-lg mt-6 mb-4",
                            children: u
                        }), (0, n.BX)("p", {
                            className: "text-foreground-alt-200 text-sm mb-8",
                            children: [(0, n.tZ)("span", {
                                className: "font-title text-primary text-base mr-2",
                                children: t
                            }), p, l && (0, n.tZ)(X.Z, {
                                children: (0, n.tZ)("span", {
                                    className: "text-foreground-alt-200 text-sm",
                                    children: l
                                })
                            })]
                        }), (0, n.tZ)(es.Z, {
                            error: o
                        }), (0, n.BX)("div", {
                            className: "flex justify-center items-center",
                            children: [(0, n.tZ)(M.Z, {
                                type: "secondary",
                                onClick: d,
                                className: "mr-3",
                                children: v("v2.actions.back")
                            }), (0, n.BX)(M.Z, {
                                onClick: c,
                                state: i ? "disabled" : "enabled",
                                className: (0, s.AK)(i && "p-3"),
                                children: [i && (0, n.tZ)("div", {
                                    className: "w-5 h-5 mr-3",
                                    children: (0, n.tZ)(eu.Z, {})
                                }), a]
                            })]
                        })]
                    })
                },
                ev = a(66546),
                eh = a(96887),
                ef = a(65623),
                ex = a(80780),
                eg = e => {
                    let {
                        asset: t,
                        balances: a,
                        type: o
                    } = e, {
                        t: i
                    } = (0, r.$G)("common"), [d, c] = (0, l.useState)(!1), [m, u] = (0, el.e)(eo.XE), {
                        account: p
                    } = (0, $.Ge)(), v = C.Chains.get(t.chain), {
                        contract: h
                    } = t, f = (0, ex.xl)(h), x = (0, ea.it)(t), g = ee.O$.from((null == a ? void 0 : a.depositTokenBalance) || "0"), {
                        sendTransaction: b,
                        error: k,
                        setError: Z,
                        isWaiting: N
                    } = (0, ex.kF)((() => {
                        if (!f) return;
                        let e = q.parseUnits((0, s.ow)(m.context.amount), x);
                        return () => f.deposit(e)
                    })(), (e, n) => {
                        if (!p) return;
                        let l = (0, D._$)(e, "Transfer"),
                            r = l.find(e => e.args.from === p),
                            i = l.find(e => e.args.to === p),
                            s = g.sub(r.args.value).toString();
                        if ("brinery" === o) {
                            let e = (null == a ? void 0 : a.balance) || "0",
                                l = ee.O$.from(e).add(i.args.value).toString();
                            n(et.EJ.setBrineryData({
                                account: p,
                                apiKey: t.details.apiKey,
                                data: {
                                    depositTokenBalance: s,
                                    balance: l
                                }
                            }))
                        } else {
                            let e = ee.O$.from((null == a ? void 0 : a.pAssetBalance) || "0"),
                                l = e.add(i.args.value).toString();
                            n(et.EJ.setTokenData({
                                account: p,
                                apiKey: t.details.apiKey,
                                data: {
                                    depositTokenBalance: s,
                                    pAssetBalance: l
                                }
                            }))
                        }
                    }, u, !0), y = () => c(!1);
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(M.Z, {
                            type: "primary",
                            state: (0, A.Ud)(t) && g.gt(0) ? "enabled" : "disabled",
                            onClick: () => {
                                u(eo.eX.RESET), c(!0)
                            },
                            children: "brinery" === o ? i("v2.actions.deposit") : "+"
                        }), (0, n.BX)(er.Z, {
                            isOpen: d,
                            closeModal: y,
                            title: i("v2.farms.depositToken", {
                                token: t.depositToken.name
                            }),
                            children: [m.matches(eo.GC.FORM) && (0, n.tZ)(em, {
                                balance: (null == a ? void 0 : a.depositTokenBalance) || "0",
                                decimals: x,
                                nextStep: e => u(eo.eX.SUBMIT_FORM, {
                                    amount: e
                                })
                            }), m.matches(eo.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(ep, {
                                title: i("v2.farms.confirmDeposit"),
                                cta: i("v2.actions.deposit"),
                                tokenName: t.depositToken.name,
                                amount: m.context.amount,
                                equivalentValue: (() => {
                                    let e = t.depositToken.price;
                                    if (!e) return;
                                    let a = parseFloat(m.context.amount) * e;
                                    return "~ ".concat((0, s.qx)(a))
                                })(),
                                error: k,
                                sendTransaction: b,
                                isWaiting: N,
                                previousStep: () => {
                                    Z(void 0), u(eo.eX.EDIT)
                                }
                            }), m.matches(eo.GC.AWAITING_RECEIPT) && (0, n.tZ)(ev.Z, {
                                chainExplorer: null == v ? void 0 : v.explorer,
                                txHash: m.context.txHash
                            }), m.matches(eo.GC.SUCCESS) && (0, n.tZ)(eh.Z, {
                                chainExplorer: null == v ? void 0 : v.explorer,
                                txHash: m.context.txHash,
                                closeModal: y
                            }), m.matches(eo.GC.FAILURE) && (0, n.tZ)(ef.Z, {
                                chainExplorer: null == v ? void 0 : v.explorer,
                                txHash: m.context.txHash,
                                retry: () => u(eo.eX.RESET)
                            })]
                        })]
                    })
                },
                eb = e => {
                    var t, a;
                    let {
                        asset: o,
                        balances: i,
                        isUniV3: d = !1
                    } = e, {
                        t: c
                    } = (0, r.$G)("common"), [m, u] = (0, l.useState)(!1), [p, v] = (0, el.e)(eo.XE), {
                        account: h
                    } = (0, $.Ge)(), {
                        contract: f
                    } = o, x = (0, ex.xl)(f), g = C.Chains.get(o.chain), b = (0, ea.it)(o), k = ee.O$.from((null == i ? void 0 : i.depositTokenBalance) || "0"), Z = ee.O$.from((null == i ? void 0 : i.pAssetBalance) || "0"), {
                        sendTransaction: N,
                        error: y,
                        setError: w,
                        isWaiting: T
                    } = (0, ex.kF)((() => {
                        if (!x) return;
                        let e = q.parseUnits((0, s.ow)(p.context.amount), b);
                        return () => x.withdraw(e)
                    })(), (e, t) => {
                        if (!h) return;
                        let a = (0, D._$)(e, "Transfer"),
                            n = a.find(e => e.args.from === h),
                            l = Z.sub(n.args.value).toString();
                        if (d && (0, A.R1)(o)) {
                            let e = o.token0.name,
                                n = o.token1.name,
                                r = null == i ? void 0 : i.componentTokenBalances[e],
                                s = null == i ? void 0 : i.componentTokenBalances[n],
                                d = ee.O$.from((null == r ? void 0 : r.balance) || "0"),
                                c = ee.O$.from((null == s ? void 0 : s.balance) || "0"),
                                m = a.find(e => e.args.to === h && e.address.toLowerCase() === o.token0.address.toLowerCase()),
                                u = a.find(e => e.args.to === h && e.address.toLowerCase() === o.token1.address.toLowerCase()),
                                p = d.sub(m.args.value).toString(),
                                v = c.sub(u.args.value).toString();
                            t(et.EJ.setTokenData({
                                account: h,
                                apiKey: o.details.apiKey,
                                data: {
                                    componentTokenBalances: {
                                        [e]: {
                                            ...i.componentTokenBalances[e],
                                            balance: p
                                        },
                                        [n]: {
                                            ...i.componentTokenBalances[n],
                                            balance: v
                                        }
                                    },
                                    pAssetBalance: l
                                }
                            }))
                        } else {
                            let e = a.find(e => e.args.to === h),
                                n = k.add(e.args.value).toString();
                            t(et.EJ.setTokenData({
                                account: h,
                                apiKey: o.details.apiKey,
                                data: {
                                    depositTokenBalance: n,
                                    pAssetBalance: l
                                }
                            }))
                        }
                    }, v), B = () => u(!1);
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(M.Z, {
                            type: "secondary",
                            state: Z.gt(0) ? "enabled" : "disabled",
                            onClick: () => {
                                v(eo.eX.RESET), u(!0)
                            },
                            className: "w-11",
                            children: "-"
                        }), (0, n.BX)(er.Z, {
                            isOpen: m,
                            closeModal: B,
                            title: c("v2.farms.withdrawToken", {
                                token: (0, A.R1)(o) ? null === (t = o.farm) || void 0 === t ? void 0 : t.farmDepositTokenName : o.depositToken.name
                            }),
                            children: [p.matches(eo.GC.FORM) && (0, n.tZ)(em, {
                                balance: (null == i ? void 0 : i.pAssetBalance) || "0",
                                decimals: b,
                                nextStep: e => v(eo.eX.SUBMIT_FORM, {
                                    amount: e
                                })
                            }), p.matches(eo.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(ep, {
                                title: c("v2.farms.confirmWithdrawal"),
                                cta: c("v2.actions.withdraw"),
                                tokenName: (0, A.R1)(o) ? null === (a = o.farm) || void 0 === a ? void 0 : a.farmDepositTokenName : o.depositToken.name,
                                amount: p.context.amount,
                                equivalentValue: (() => {
                                    if (!(0, A.R1)(o)) return;
                                    let e = o.depositToken.name,
                                        t = o.details.ratio;
                                    if (t) return "~ ".concat(parseFloat(p.context.amount) * t, " ").concat(e)
                                })(),
                                error: y,
                                sendTransaction: N,
                                isWaiting: T,
                                previousStep: () => {
                                    w(void 0), v(eo.eX.EDIT)
                                }
                            }), p.matches(eo.GC.AWAITING_RECEIPT) && (0, n.tZ)(ev.Z, {
                                chainExplorer: null == g ? void 0 : g.explorer,
                                txHash: p.context.txHash
                            }), p.matches(eo.GC.SUCCESS) && (0, n.tZ)(eh.Z, {
                                chainExplorer: null == g ? void 0 : g.explorer,
                                txHash: p.context.txHash,
                                closeModal: B
                            }), p.matches(eo.GC.FAILURE) && (0, n.tZ)(ef.Z, {
                                chainExplorer: null == g ? void 0 : g.explorer,
                                txHash: p.context.txHash,
                                retry: () => v(eo.eX.RESET)
                            })]
                        })]
                    })
                },
                ek = e => {
                    var t, a, o;
                    let {
                        asset: i,
                        balances: d
                    } = e;
                    if (!(0, A.er)(i)) return null;
                    let {
                        t: c
                    } = (0, r.$G)("common"), [m, u] = (0, l.useState)(!1), p = (0, b.v9)(k.VH.selectCore), [v, h] = (0, el.e)(eo.XE), {
                        account: f
                    } = (0, $.Ge)(), x = null == p ? void 0 : p.chains.find(e => e.network === i.chain), g = (0, ex.mR)(null === (t = i.farm) || void 0 === t ? void 0 : t.farmAddress, x), Z = (0, ea.it)(i), N = ee.O$.from((null == d ? void 0 : d.pAssetBalance) || "0"), y = ee.O$.from((null == d ? void 0 : d.pStakedBalance) || "0"), {
                        sendTransaction: w,
                        error: T,
                        setError: B,
                        isWaiting: X
                    } = (0, ex.kF)((() => {
                        var e, t;
                        if (!g || !f) return;
                        let {
                            chain: a
                        } = i, n = q.parseUnits((0, s.ow)(v.context.amount), Z);
                        if (a === C.ChainNetwork.Ethereum) return () => g.deposit(n);
                        let l = null === (e = i.farm) || void 0 === e ? void 0 : null === (t = e.details) || void 0 === t ? void 0 : t.poolId;
                        if (void 0 !== l) return () => g.deposit(l, n, f)
                    })(), (e, t) => {
                        let a;
                        if (!f) return;
                        let {
                            chain: n
                        } = i;
                        if (n === C.ChainNetwork.Ethereum) {
                            let t = (0, D._$)(e, "Staked");
                            a = t[0].args.amount
                        } else {
                            let t = (0, D._$)(e, "Deposit");
                            a = t[0].args.amount
                        }
                        let l = N.sub(a).toString(),
                            r = y.add(a).toString();
                        t(et.EJ.setTokenData({
                            account: f,
                            apiKey: i.details.apiKey,
                            data: {
                                pAssetBalance: l,
                                pStakedBalance: r
                            }
                        }))
                    }, h, !0), S = () => u(!1);
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(M.Z, {
                            type: "primary",
                            state: (0, A.Ud)(i) && N.gt(0) ? "enabled" : "disabled",
                            onClick: () => {
                                h(eo.eX.RESET), u(!0)
                            },
                            className: "w-11",
                            children: "+"
                        }), (0, n.BX)(er.Z, {
                            isOpen: m,
                            closeModal: S,
                            title: c("v2.farms.stakeToken", {
                                token: null === (a = i.farm) || void 0 === a ? void 0 : a.farmDepositTokenName
                            }),
                            children: [v.matches(eo.GC.FORM) && (0, n.tZ)(em, {
                                balance: (null == d ? void 0 : d.pAssetBalance) || "0",
                                decimals: Z,
                                nextStep: e => h(eo.eX.SUBMIT_FORM, {
                                    amount: e
                                })
                            }), v.matches(eo.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(ep, {
                                title: c("v2.farms.confirmStake"),
                                cta: c("v2.actions.stake"),
                                tokenName: null === (o = i.farm) || void 0 === o ? void 0 : o.farmDepositTokenName,
                                amount: v.context.amount,
                                error: T,
                                sendTransaction: w,
                                isWaiting: X,
                                previousStep: () => {
                                    B(void 0), h(eo.eX.EDIT)
                                }
                            }), v.matches(eo.GC.AWAITING_RECEIPT) && (0, n.tZ)(ev.Z, {
                                chainExplorer: null == x ? void 0 : x.explorer,
                                txHash: v.context.txHash
                            }), v.matches(eo.GC.SUCCESS) && (0, n.tZ)(eh.Z, {
                                chainExplorer: null == x ? void 0 : x.explorer,
                                txHash: v.context.txHash,
                                closeModal: S
                            }), v.matches(eo.GC.FAILURE) && (0, n.tZ)(ef.Z, {
                                chainExplorer: null == x ? void 0 : x.explorer,
                                txHash: v.context.txHash,
                                retry: () => h(eo.eX.RESET)
                            })]
                        })]
                    })
                },
                eZ = e => {
                    var t, a, o;
                    let {
                        asset: i,
                        balances: d
                    } = e;
                    if (!(0, A.er)(i)) return null;
                    let {
                        t: c
                    } = (0, r.$G)("common"), [m, u] = (0, l.useState)(!1), p = (0, b.v9)(k.VH.selectCore), [v, h] = (0, el.e)(eo.XE), {
                        account: f
                    } = (0, $.Ge)(), x = null == p ? void 0 : p.chains.find(e => e.network === i.chain), g = (0, ex.mR)(null === (t = i.farm) || void 0 === t ? void 0 : t.farmAddress, x), Z = (0, ea.it)(i), N = ee.O$.from((null == d ? void 0 : d.pAssetBalance) || "0"), y = ee.O$.from((null == d ? void 0 : d.pStakedBalance) || "0"), w = ee.O$.from((null == d ? void 0 : d.picklePending) || "0"), T = q.formatUnits(y, Z) === v.context.amount, {
                        sendTransaction: B,
                        error: X,
                        setError: S,
                        isWaiting: E
                    } = (0, ex.kF)((() => {
                        var e, t;
                        if (!g || !f) return;
                        let {
                            chain: a
                        } = i, n = q.parseUnits((0, s.ow)(v.context.amount), Z);
                        if (a === C.ChainNetwork.Ethereum) return T ? () => g.exit() : () => g.withdraw(n);
                        let l = null === (e = i.farm) || void 0 === e ? void 0 : null === (t = e.details) || void 0 === t ? void 0 : t.poolId;
                        if (void 0 !== l) return T ? () => g.withdrawAndHarvest(l, n, f) : () => g.withdraw(l, n, f)
                    })(), (e, t) => {
                        let a;
                        if (!f) return;
                        let {
                            chain: n
                        } = i, l = ee.O$.from(0);
                        if (n === C.ChainNetwork.Ethereum) {
                            let t = (0, D._$)(e, "Withdrawn");
                            if (a = t[0].args.amount, T) {
                                let t = (0, D._$)(e, "RewardPaid");
                                l = t[0].args.reward
                            }
                        } else {
                            let t = (0, D._$)(e, "Withdraw");
                            if (a = t[0].args.amount, T) {
                                let t = (0, D._$)(e, "Harvest");
                                l = t[0].args.amount
                            }
                        }
                        let r = N.add(a).toString(),
                            o = y.sub(a).toString(),
                            s = w.sub(l).toString();
                        t(et.EJ.setTokenData({
                            account: f,
                            apiKey: i.details.apiKey,
                            data: {
                                pAssetBalance: r,
                                pStakedBalance: o,
                                picklePending: s
                            }
                        })), t(et.EJ.addHarvestedMelons({
                            account: f,
                            chain: n,
                            amount: l.toString()
                        }))
                    }, h, !0), I = () => u(!1);
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(M.Z, {
                            type: "secondary",
                            state: y.gt(0) ? "enabled" : "disabled",
                            onClick: () => {
                                h(eo.eX.RESET), u(!0)
                            },
                            className: "w-11",
                            children: "-"
                        }), (0, n.BX)(er.Z, {
                            isOpen: m,
                            closeModal: I,
                            title: c("v2.farms.unstakeToken", {
                                token: null === (a = i.farm) || void 0 === a ? void 0 : a.farmDepositTokenName
                            }),
                            children: [v.matches(eo.GC.FORM) && (0, n.tZ)(em, {
                                balance: (null == d ? void 0 : d.pStakedBalance) || "0",
                                decimals: Z,
                                nextStep: e => h(eo.eX.SUBMIT_FORM, {
                                    amount: e
                                })
                            }), v.matches(eo.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(ep, {
                                title: c("v2.farms.confirmUnstake"),
                                cta: c(T ? "v2.actions.harvestAndExit" : "v2.actions.unstake"),
                                tokenName: null === (o = i.farm) || void 0 === o ? void 0 : o.farmDepositTokenName,
                                amount: v.context.amount,
                                error: X,
                                sendTransaction: B,
                                isWaiting: E,
                                previousStep: () => {
                                    S(void 0), h(eo.eX.EDIT)
                                }
                            }), v.matches(eo.GC.AWAITING_RECEIPT) && (0, n.tZ)(ev.Z, {
                                chainExplorer: null == x ? void 0 : x.explorer,
                                txHash: v.context.txHash
                            }), v.matches(eo.GC.SUCCESS) && (0, n.tZ)(eh.Z, {
                                chainExplorer: null == x ? void 0 : x.explorer,
                                txHash: v.context.txHash,
                                closeModal: I
                            }), v.matches(eo.GC.FAILURE) && (0, n.tZ)(ef.Z, {
                                chainExplorer: null == x ? void 0 : x.explorer,
                                txHash: v.context.txHash,
                                retry: () => h(eo.eX.RESET)
                            })]
                        })]
                    })
                },
                eN = a(5155),
                ey = a(20859),
                ew = a(9279),
                eT = a(8198),
                eB = a(21046),
                eC = a(96618),
                eX = a(30490);
            let eA = {
                control: e => ({
                    ...e,
                    color: "rgb(var(--color-primary))",
                    backgroundColor: "rgb(var(--color-background-lightest))",
                    border: 0,
                    boxShadow: "none",
                    marginLeft: "-15px"
                }),
                menu: e => ({
                    ...e,
                    color: "rgb(var(--color-foreground-alt-200))",
                    backgroundColor: "rgb(var(--color-background-light))",
                    padding: 8,
                    zIndex: 55,
                    boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))",
                    marginLeft: "-15px"
                }),
                menuList: e => ({
                    ...e,
                    maxHeight: "200px",
                    "::-webkit-scrollbar": {
                        width: "0px"
                    }
                }),
                singleValue: e => ({
                    ...e,
                    color: "rgb(var(--color-foreground-alt-200))"
                }),
                option: (e, t) => {
                    let {
                        isFocused: a
                    } = t;
                    return {
                        ...e,
                        backgroundColor: a ? "rgb(var(--color-background-lightest))" : void 0,
                        borderRadius: 10,
                        transition: "all 200ms ease-in-out"
                    }
                }
            };
            var eS = e => {
                    let {
                        selectedToken: t,
                        setSelectedToken: a,
                        options: l
                    } = e, r = e => {
                        a(e)
                    };
                    return (0, n.tZ)(n.HY, {
                        children: (0, n.tZ)(eX.ZP, {
                            className: "mt-5 w-1/3",
                            defaultValue: t,
                            closeMenuOnSelect: !0,
                            styles: eA,
                            onChange: e => r(e),
                            options: l
                        })
                    })
                },
                eE = a(24905),
                eI = a(22227),
                eF = e => {
                    let {
                        jar: t,
                        nextStep: a,
                        zapTokens: o,
                        balances: i
                    } = e, {
                        t: d
                    } = (0, r.$G)("common"), {
                        account: c
                    } = (0, $.Ge)(), m = (0, W.TL)(), u = (0, W.CG)(k.VH.selectCore), p = null == u ? void 0 : u.chains.find(e => e.network === t.chain), [v, h] = (0, l.useState)({
                        label: (null == p ? void 0 : p.gasTokenSymbol.toUpperCase()) || "",
                        value: "native"
                    }), [f, x] = (0, l.useState)(void 0), g = o[v.label], [b, Z] = (0, el.e)(eE.XE), [N, y] = (0, l.useState)(null), w = (0, ex.Ib)((null == g ? void 0 : g.address) || eI.r_), T = (0, l.useCallback)(async () => {
                        if (c && t.chain == C.ChainNetwork.Ethereum && w && w.address != eI.r_) {
                            let e = await (0, eI.iq)({
                                    chainId: 1,
                                    fromToken: null == g ? void 0 : g.address,
                                    toToken: t.contract
                                }),
                                a = (await w.balanceOf(c)).toString(),
                                n = (await w.allowance(c, e)).toString();
                            x(e), y({
                                balance: a,
                                allowance: n
                            })
                        }
                    }, [c, w]);
                    (0, l.useEffect)(() => {
                        let e = setInterval(() => {
                            T()
                        }, 5e3);
                        return () => clearInterval(e)
                    }, [T]), (0, l.useEffect)(() => {
                        y(null), F("0"), T()
                    }, [T, v]), (0, l.useEffect)(() => {
                        h({
                            label: (null == p ? void 0 : p.gasTokenSymbol.toUpperCase()) || "",
                            value: "native"
                        })
                    }, [c]);
                    let X = parseFloat((null == N ? void 0 : N.balance) || "0") > 0,
                        A = X ? null == N ? void 0 : N.balance : null == g ? void 0 : g.balance,
                        S = null == g ? void 0 : g.decimals,
                        E = (0, ei.formatUnits)(A, S),
                        [I, F] = (0, l.useState)(E),
                        G = Object.keys(o).map(e => ({
                            label: e,
                            value: o[e].type
                        })),
                        U = parseInt((t.chain === C.ChainNetwork.Ethereum ? null == N ? void 0 : N.allowance : null == g ? void 0 : g.allowance) || "0") > 0 || "native" === v.value,
                        {
                            sendTransaction: R,
                            error: H,
                            isWaiting: D
                        } = (0, ex.kF)((() => {
                            if (w && f) return () => w.approve(f, eB.Bz)
                        })(), e => {
                            var a;
                            if (!c) return;
                            let n = null === (a = e.events) || void 0 === a ? void 0 : a.find(e => {
                                    let {
                                        event: t
                                    } = e;
                                    return "Approval" === t
                                }),
                                l = n.args[2],
                                r = v.label.toLowerCase();
                            "token" === v.value && m(et.EJ.setTokenData({
                                account: c,
                                apiKey: t.details.apiKey,
                                data: {
                                    componentTokenBalances: {
                                        ...i.componentTokenBalances,
                                        [r]: {
                                            ...i.componentTokenBalances[r],
                                            allowance: l.toString()
                                        }
                                    }
                                }
                            })), "wrapped" === v.value && m(et.EJ.setNativeData({
                                account: c,
                                chain: t.chain,
                                isWrapped: !0,
                                data: {
                                    wrappedAllowances: {
                                        [t.protocol]: l.toString()
                                    }
                                }
                            }))
                        }, Z, !0),
                        K = Error(d("v2.farms.invalidAmount")),
                        [O, j] = (0, l.useState)(),
                        L = e => {
                            if (!e) {
                                j(K);
                                return
                            }
                            let t = (0, ei.parseUnits)(e, S),
                                a = t.gt(0) && t.lte(ee.O$.from(A));
                            a ? j(void 0) : j(K)
                        };
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("h2", {
                            className: "text-foreground-alt-100 flex font-title text-lg mb-4 ml-4",
                            children: (0, n.tZ)(eS, {
                                selectedToken: v,
                                setSelectedToken: h,
                                options: G
                            })
                        }), (0, n.BX)("div", {
                            className: "bg-background-lightest rounded-xl px-4 py-2 mb-6",
                            children: [(0, n.BX)("div", {
                                className: "flex justify-between mb-2",
                                children: [(0, n.tZ)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: d("v2.balances.amount")
                                }), (0, n.BX)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: [d("v2.balances.balance"), ": ", E]
                                })]
                            }), (0, n.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, n.tZ)("input", {
                                    type: "number",
                                    className: "w-3/5 bg-transparent focus:outline-none flex-shrink-0 font-medium text-primary leading-7",
                                    value: I,
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e.target;
                                        F(t), L(t)
                                    }
                                }), (0, n.tZ)(M.Z, {
                                    size: "small",
                                    onClick: () => {
                                        F(E), L(E)
                                    },
                                    children: d("v2.balances.max")
                                })]
                            })]
                        }), (0, n.tZ)("div", {
                            className: "mb-5",
                            children: (0, n.tZ)(ec, {
                                setTransactionAmount: e => F((0, ei.formatUnits)(ee.O$.from(A).mul((100 * e).toString()).div(100).toString(), S))
                            })
                        }), (0, n.tZ)(es.Z, {
                            error: O || H
                        }), U ? (0, n.tZ)(M.Z, {
                            state: O ? "disabled" : "enabled",
                            onClick: () => {
                                O || a(I, v)
                            },
                            children: d("v2.actions.confirmZap")
                        }) : (0, n.BX)(M.Z, {
                            onClick: R,
                            state: D ? "disabled" : "enabled",
                            className: (0, s.AK)(D && "p-3"),
                            children: [D && (0, n.tZ)("div", {
                                className: "w-5 h-5 mr-3",
                                children: (0, n.tZ)(eu.Z, {})
                            }), d("v2.farms.approveToken", {
                                token: v.label
                            })]
                        }), t.chain == C.ChainNetwork.Ethereum && (0, n.tZ)(B.Z, {
                            href: "https://joinwido.com",
                            className: "pt-3 font-bold text-foreground-alt-300 w-full place-content-center text-base",
                            iconClassName: "text-foreground-alt-300",
                            external: !0,
                            children: d("v2.actions.poweredBy")
                        })]
                    })
                },
                eG = a(872),
                eU = a(89602),
                eR = a(23338);
            let eH = () => {
                    let {
                        library: e,
                        account: t
                    } = (0, $.Ge)(), a = e.getSigner(), n = async e => {
                        let {
                            fromToken: n,
                            toToken: l,
                            amount: r
                        } = e, o = await (0, eI.mW)({
                            fromChainId: 1,
                            fromToken: n,
                            toChainId: 1,
                            toToken: l,
                            amount: r.toString(),
                            slippagePercentage: .3,
                            user: t,
                            partner: "0xaCfE4511CE883C14c4eA40563F176C3C09b4c47C"
                        });
                        return a.sendTransaction({
                            value: o.value,
                            data: o.data,
                            to: o.to || "0x7Fb69e8fb1525ceEc03783FFd8a317bafbDfD394"
                        })
                    };
                    (0, l.useMemo)(() => {}, []);
                    let r = {
                            jars: "@jars",
                            tokens: "@tokens"
                        },
                        [o, i] = (0, l.useState)([]),
                        [s, d] = (0, l.useState)([]),
                        [c, m] = (0, l.useState)([]);
                    return (0, l.useEffect)(() => {
                        let e = async () => {
                            let e = sessionStorage.getItem(r.jars);
                            if (!(null == e ? void 0 : e.length)) {
                                let e = await (0, eI._g)({
                                    chainId: [1],
                                    protocol: ["pickle.finance"]
                                });
                                i(e), sessionStorage.setItem(r.jars, JSON.stringify(e))
                            }
                        }, a = async () => {
                            let e = sessionStorage.getItem(r.tokens);
                            if (!(null == e ? void 0 : e.length)) {
                                let e = await (0, eI._g)({
                                    chainId: [1]
                                });
                                d(e), sessionStorage.setItem(r.tokens, JSON.stringify(e))
                            }
                        }, n = async () => {
                            if (0 == s.length || !t) return;
                            let e = await (0, eI.ld)(t, [1]),
                                a = s.filter(t => e.find(e => e.address == t.address));
                            m(a)
                        };
                        e(), a(), n()
                    }, [r.jars, r.tokens, t, s]), {
                        supportedTokensWithBalance: c,
                        supportedTokens: s,
                        supportedJars: o,
                        swapWido: n
                    }
                },
                eD = (e, t, a, n, l) => {
                    var r;
                    if (a.chain === C.ChainNetwork.Ethereum) {
                        let t = n.reduce((e, t) => {
                            let {
                                address: a,
                                decimals: n,
                                symbol: l
                            } = t;
                            return e = {
                                ...e,
                                [l]: {
                                    address: a,
                                    decimals: n,
                                    balance: "0",
                                    allowance: "0",
                                    type: "token"
                                }
                            }
                        }, {});
                        return t.ETH = {
                            address: eR.xb,
                            decimals: 18,
                            balance: (null == e ? void 0 : e.native.balance) || "0",
                            allowance: "0",
                            type: "native"
                        }, t
                    }
                    let o = (null == t ? void 0 : t.componentTokenBalances) || void 0,
                        i = null == l ? void 0 : l.chains.find(e => e.network === a.chain),
                        s = i ? (0, D.aN)(i.gasTokenSymbol) : void 0,
                        d = s && "W" + s,
                        c = (null === (r = null == l ? void 0 : l.tokens.find(e => e.chain === a.chain && e.id === s)) || void 0 === r ? void 0 : r.decimals) || 18;
                    return {
                        ...o && Object.keys(o).reduce((e, t) => {
                            var n, r;
                            let i = null == l ? void 0 : l.tokens.find(e => e.chain === a.chain && e.id === t.toLowerCase()),
                                s = (null == i ? void 0 : i.decimals) || 18;
                            return {
                                ...e,
                                [t.toUpperCase()]: {
                                    balance: null === (n = o[t]) || void 0 === n ? void 0 : n.balance,
                                    allowance: null === (r = o[t]) || void 0 === r ? void 0 : r.allowance,
                                    decimals: s,
                                    type: "token",
                                    address: (null == i ? void 0 : i.contractAddr) || ew.d
                                }
                            }
                        }, {}),
                        ...s && d && {
                            [s]: {
                                balance: null == e ? void 0 : e.native.balance,
                                allowance: null == e ? void 0 : e.native.allowance,
                                decimals: c,
                                type: "native",
                                address: ew.d
                            },
                            [d]: {
                                balance: null == e ? void 0 : e.wrappedBalance,
                                allowance: null == e ? void 0 : e.wrappedAllowances[Object.keys(null == e ? void 0 : e.wrappedAllowances).find(e => e === a.protocol) || ""],
                                decimals: c,
                                type: "wrapped",
                                address: null == i ? void 0 : i.wrappedNativeAddress
                            }
                        }
                    }
                };
            var eK = e => {
                    var t;
                    let {
                        asset: a,
                        nativeBalances: o,
                        balances: i
                    } = e, {
                        t: d
                    } = (0, r.$G)("common"), [c, m] = (0, l.useState)(!1), [u, p] = (0, el.e)(eo.XE), [v, h] = (0, l.useState)(void 0), [f, x] = (0, l.useState)(void 0), {
                        account: g
                    } = (0, $.Ge)(), {
                        swapWido: Z,
                        supportedTokensWithBalance: N
                    } = eH(), y = (0, b.v9)(k.VH.selectCore), w = C.Chains.get(a.chain), T = null == y ? void 0 : y.chains.find(e => e.network === a.chain), {
                        chain: B,
                        protocol: X
                    } = a, {
                        UniV2Router: S,
                        ZapContract: E
                    } = (0, ex.XE)(B, X);
                    (0, l.useEffect)(() => {
                        let e = async () => {
                            var e, t;
                            let {
                                token: n,
                                amount: l
                            } = u.context;
                            if (!n || !f || B === C.ChainNetwork.Ethereum) return;
                            let r = f[n.label.toUpperCase()].decimals,
                                o = q.parseUnits((0, s.ow)(l), r);
                            S && E && n && y && a.depositToken.nativePath && h("native" === n.value ? await S.populateTransaction.swapExactETHForTokens(0, (null === (e = a.depositToken.nativePath) || void 0 === e ? void 0 : e.path) || [], E.address, ee.O$.from(eG.w)) : await S.populateTransaction.swapExactTokensForTokens(o, 0, (null === (t = a.depositToken.nativePath) || void 0 === t ? void 0 : t.path) || [], E.address, ee.O$.from(eG.w)))
                        };
                        e()
                    }, [u.context.amount]), (0, l.useEffect)(() => {
                        x(eD(o, i, a, N, y))
                    }, [null == o ? void 0 : o.native, null == o ? void 0 : o.wrappedBalance, null == i ? void 0 : i.componentTokenBalances, N]);
                    let {
                        sendTransaction: I,
                        error: F,
                        setError: G,
                        isWaiting: U
                    } = (0, ex.kF)((() => {
                        var e;
                        let {
                            token: t,
                            amount: n
                        } = u.context;
                        if (!f || !t) return;
                        let l = f[t.label.toUpperCase()],
                            r = null == l ? void 0 : l.decimals,
                            o = q.parseUnits((0, s.ow)(n), r);
                        if (B === C.ChainNetwork.Ethereum) return () => Z({
                            fromToken: null == l ? void 0 : l.address,
                            toToken: a.contract,
                            amount: o
                        });
                        if (!S || !E || !v || !y || !a.depositToken.nativePath) return;
                        console.log();
                        let i = "native" === t.value ? ew.d : (null === (e = y.tokens.find(e => (t.label.toLowerCase() === e.id || (0, D.aN)(null == T ? void 0 : T.gasTokenSymbol).toLowerCase() === e.id) && e.chain == B)) || void 0 === e ? void 0 : e.contractAddr) || ew.d;
                        return () => E.ZapIn(i, o, a.depositToken.addr, a.contract, 0, a.depositToken.nativePath.target, v.data || ew.d, !0, S.address, !1, {
                            value: "native" === t.value ? o : ee.O$.from(0)
                        })
                    })(), (e, t, n) => {
                        var l;
                        if (!g || !f) return;
                        let {
                            token: r
                        } = u.context, o = new eT.vU(eU.Fs.abi), s = null === (l = e.logs) || void 0 === l ? void 0 : l.map(e => {
                            try {
                                let t = o.parseLog(e);
                                if ("Transfer" === t.name) return t
                            } catch (e) {
                                return null
                            }
                        }), d = null == s ? void 0 : s.flatMap(e => e ? [e] : []), c = null == d ? void 0 : d.find(e => e.args.to === g), m = null == d ? void 0 : d.find(e => e.args.from === g), p = ee.O$.from(f[(null == r ? void 0 : r.label) || ""].balance || "0").sub((null == m ? void 0 : m.args.value) || n || "0").toString(), v = ee.O$.from((null == i ? void 0 : i.pAssetBalance) || "0"), h = v.add(c.args.value).toString(), x = null == r ? void 0 : r.label.toLowerCase();
                        t(et.EJ.setTokenData({
                            account: g,
                            apiKey: a.details.apiKey,
                            data: {
                                pAssetBalance: h,
                                ...(null == r ? void 0 : r.value) === "token" && B != C.ChainNetwork.Ethereum && {
                                    componentTokenBalances: {
                                        ...null == i ? void 0 : i.componentTokenBalances,
                                        [x]: {
                                            balance: p,
                                            allowance: null == i ? void 0 : i.componentTokenBalances[x].allowance
                                        }
                                    }
                                }
                            }
                        })), (null == r ? void 0 : r.value) === "wrapped" && t(et.EJ.setNativeData({
                            account: g,
                            chain: a.chain,
                            isWrapped: !0,
                            data: {
                                wrappedBalance: p
                            }
                        })), (null == r ? void 0 : r.value) === "native" && t(et.EJ.setNativeData({
                            account: g,
                            chain: a.chain,
                            isWrapped: !0,
                            data: {
                                native: {
                                    balance: p,
                                    allowance: eB.Bz.toString()
                                }
                            }
                        }))
                    }, p, !0), R = () => m(!1);
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(M.Z, {
                            type: "primary",
                            state: (0, A.Ud)(a) ? "enabled" : "disabled",
                            onClick: () => {
                                p(eo.eX.RESET), m(!0)
                            },
                            children: (0, n.tZ)(eC.Z, {
                                className: "w-3 h-3"
                            })
                        }), (0, n.BX)(er.Z, {
                            isOpen: c,
                            closeModal: R,
                            title: d("v2.farms.zapToToken", {
                                token: a.depositToken.name
                            }),
                            children: [u.matches(eo.GC.FORM) && (0, n.tZ)(eF, {
                                jar: a,
                                nextStep: (e, t) => p(eo.eX.SUBMIT_FORM, {
                                    amount: e,
                                    token: t
                                }),
                                zapTokens: f,
                                balances: i
                            }), u.matches(eo.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(ep, {
                                title: d("v2.farms.confirmDeposit"),
                                cta: d("v2.actions.zap"),
                                tokenName: null === (t = u.context.token) || void 0 === t ? void 0 : t.label,
                                amount: u.context.amount,
                                equivalentValue: (() => {
                                    var e;
                                    let {
                                        token: t,
                                        amount: a
                                    } = u.context, n = null === (e = null == y ? void 0 : y.tokens.find(e => {
                                        let a = (null == t ? void 0 : t.value) === "token" ? (null == t ? void 0 : t.label.toLowerCase()) === e.id : (0, D.aN)(null == T ? void 0 : T.gasTokenSymbol).toLowerCase() === e.id;
                                        return a && e.chain == B
                                    })) || void 0 === e ? void 0 : e.price;
                                    if (!n) return;
                                    let l = parseFloat(a) * n;
                                    return "~ ".concat((0, s.qx)(l))
                                })(),
                                error: F,
                                sendTransaction: I,
                                isWaiting: U,
                                previousStep: () => {
                                    G(void 0), p(eo.eX.EDIT)
                                }
                            }), u.matches(eo.GC.AWAITING_RECEIPT) && (0, n.tZ)(ev.Z, {
                                chainExplorer: null == w ? void 0 : w.explorer,
                                txHash: u.context.txHash
                            }), u.matches(eo.GC.SUCCESS) && (0, n.tZ)(eh.Z, {
                                chainExplorer: null == w ? void 0 : w.explorer,
                                txHash: u.context.txHash,
                                closeModal: R
                            }), u.matches(eo.GC.FAILURE) && (0, n.tZ)(ef.Z, {
                                chainExplorer: null == w ? void 0 : w.explorer,
                                txHash: u.context.txHash,
                                retry: () => p(eo.eX.RESET)
                            })]
                        })]
                    })
                },
                eO = e => {
                    var t, a, l, o, i;
                    let {
                        asset: d
                    } = e, {
                        t: c
                    } = (0, r.$G)("common"), {
                        supportedJars: m
                    } = eH(), u = (0, ey.m)(), p = (0, W.CG)(et.G0.selectIsFetching), v = (0, W.CG)(e => {
                        var t;
                        let a = et.G0.selectTokenDataById(e, d.details.apiKey, u);
                        return a || {
                            assetKey: d.details.apiKey,
                            componentTokenBalances: null === (t = d.depositToken.components) || void 0 === t ? void 0 : t.reduce((e, t) => (e[t] = {
                                balance: "0",
                                allowance: "0"
                            }, e), {}),
                            depositTokenBalance: "0",
                            farmAllowance: "0",
                            jarAllowance: "0",
                            pAssetBalance: "0",
                            pStakedBalance: "0",
                            picklePending: "0"
                        }
                    }), h = (0, W.CG)(e => et.G0.selectNativeTokenDataByChain(e, d.chain, u)), f = (0, ea.it)(d), x = parseInt((null == v ? void 0 : v.jarAllowance) || "0") > parseInt((null == v ? void 0 : v.depositTokenBalance) || "0"), g = parseFloat(q.formatUnits((null == v ? void 0 : v.pAssetBalance) || "0", f)), b = parseFloat(q.formatUnits((null == v ? void 0 : v.pStakedBalance) || "0", f)), k = parseFloat(q.formatUnits((null == v ? void 0 : v.picklePending) || "0", 18)), Z = null == v ? void 0 : null === (t = v.extraReward) || void 0 === t ? void 0 : t.name, N = parseFloat(q.formatUnits((null == v ? void 0 : null === (a = v.extraReward) || void 0 === a ? void 0 : a.pending) || "0", 18)), y = parseInt((null == v ? void 0 : v.farmAllowance) || "0") > parseInt((null == v ? void 0 : v.pAssetBalance) || "0"), w = d.chain === C.ChainNetwork.Ethereum && m.some(e => {
                        let {
                            address: t
                        } = e;
                        return Q.getAddress(t) === Q.getAddress(d.contract)
                    });
                    return (0, n.BX)("div", {
                        className: "flex space-x-3",
                        children: [(0, n.BX)("div", {
                            className: (0, s.AK)((0, A.er)(d) ? "grow self-start" : "w-1/2"),
                            children: [(0, n.BX)("div", {
                                className: "border border-foreground-alt-500 rounded-xl p-4",
                                children: [(0, n.BX)("p", {
                                    className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                    children: ["p", c("v2.farms.depositedToken", {
                                        token: d.depositToken.name
                                    })]
                                }), (0, n.BX)("div", {
                                    className: "flex items-end justify-between",
                                    children: [(0, n.BX)("span", {
                                        className: "font-title text-primary font-medium text-base leading-5",
                                        children: [(0, n.tZ)("p", {
                                            children: g
                                        }), !!((0, A.R1)(d) && g) && (0, n.BX)("p", {
                                            className: "text-sm text-foreground-alt-300",
                                            children: ["(", d.depositTokensInJar.tokens, " ", d.depositToken.name, ")"]
                                        })]
                                    }), (0, n.BX)("span", {
                                        className: "flex gap-3",
                                        children: [!!(d.depositToken.nativePath || w) && (0, n.tZ)(eK, {
                                            asset: d,
                                            nativeBalances: h,
                                            balances: v
                                        }), (0, n.tZ)(en.Z, {
                                            apiKey: d.details.apiKey,
                                            tokenAddress: d.depositToken.addr,
                                            tokenName: d.depositToken.name,
                                            spenderAddress: d.contract,
                                            storeAttribute: "jarAllowance",
                                            chainName: d.chain,
                                            visible: !x,
                                            state: (0, A.Ud)(d) ? "enabled" : "disabled",
                                            type: "jar"
                                        }), x && (0, n.tZ)(eg, {
                                            asset: d,
                                            balances: v,
                                            type: "jar"
                                        }), (x || g > 0) && (0, n.tZ)(eb, {
                                            asset: d,
                                            balances: v
                                        })]
                                    })]
                                })]
                            }), (0, n.tZ)("div", {
                                className: "relative",
                                children: !(0, A.er)(d) && p && (0, n.tZ)(_.Z, {
                                    waitForUserModel: !0,
                                    className: "absolute r-0 t-0 mt-1"
                                })
                            })]
                        }), (0, A.er)(d) && (0, n.BX)(n.HY, {
                            children: [(0, n.tZ)("div", {
                                className: "grow self-start",
                                children: (0, n.BX)("div", {
                                    className: "border border-foreground-alt-500 rounded-xl p-4",
                                    children: [(0, n.BX)("p", {
                                        className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                        children: ["p", c("v2.farms.stakedToken", {
                                            token: d.depositToken.name
                                        })]
                                    }), (0, n.BX)("div", {
                                        className: "flex items-end justify-between",
                                        children: [(0, n.tZ)("span", {
                                            className: "font-title text-primary font-medium text-base leading-5",
                                            children: b
                                        }), (0, n.tZ)(en.Z, {
                                            apiKey: d.details.apiKey,
                                            tokenAddress: d.contract,
                                            tokenName: null === (l = d.farm) || void 0 === l ? void 0 : l.farmDepositTokenName,
                                            spenderAddress: null === (o = d.farm) || void 0 === o ? void 0 : o.farmAddress,
                                            storeAttribute: "farmAllowance",
                                            chainName: d.chain,
                                            visible: !y,
                                            state: (0, A.Ud)(d) ? "enabled" : "disabled",
                                            type: "farm"
                                        }), y && (0, n.BX)("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [(0, n.tZ)(ek, {
                                                asset: d,
                                                balances: v
                                            }), (0, n.tZ)(eZ, {
                                                asset: d,
                                                balances: v
                                            })]
                                        })]
                                    })]
                                })
                            }), Z && (0, n.BX)("div", {
                                className: "grow self-start",
                                children: [(0, n.BX)("div", {
                                    className: "border border-foreground-alt-500 rounded-xl p-4",
                                    children: [(0, n.tZ)("p", {
                                        className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-0",
                                        children: c("v2.farms.earnedToken", {
                                            token: Z.toUpperCase()
                                        })
                                    }), (0, n.tZ)("p", {
                                        className: "text-foreground-alt-200 font-medium italic text-xs leading-5 mb-4",
                                        children: c("v2.farms.extraRewardNotice")
                                    }), (0, n.tZ)("div", {
                                        className: "flex items-end justify-between",
                                        children: (0, n.tZ)("span", {
                                            className: "font-title text-primary font-medium text-base leading-5",
                                            children: (0, s.RQ)(N, 3)
                                        })
                                    })]
                                }), (0, n.tZ)("div", {
                                    className: "relative",
                                    children: p && (0, n.tZ)(_.Z, {
                                        waitForUserModel: !0,
                                        className: "absolute r-0 t-0 mt-1"
                                    })
                                })]
                            }), (0, n.BX)("div", {
                                className: "grow self-start",
                                children: [(0, n.BX)("div", {
                                    className: "border border-foreground-alt-500 rounded-xl p-4",
                                    children: [(0, n.tZ)("p", {
                                        className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                        children: c("v2.farms.earnedToken", {
                                            token: "NUBAIs"
                                        })
                                    }), (0, n.BX)("div", {
                                        className: "flex items-end justify-between",
                                        children: [(0, n.tZ)("span", {
                                            className: "font-title text-primary font-medium text-base leading-5",
                                            children: (0, s.RQ)(k, 3)
                                        }), (0, n.tZ)(eN.Z, {
                                            rewarderType: "farm",
                                            asset: d,
                                            harvestableAmount: ee.O$.from((null == v ? void 0 : v.picklePending) || 0),
                                            extraHarvestableAmount1: ee.O$.from((null == v ? void 0 : null === (i = v.extraReward) || void 0 === i ? void 0 : i.pending) || 0),
                                            extraRewardName1: Z,
                                            network: d.chain
                                        })]
                                    })]
                                }), (0, n.tZ)("div", {
                                    className: "relative",
                                    children: p && (0, n.tZ)(_.Z, {
                                        waitForUserModel: !0,
                                        className: "absolute r-0 t-0 mt-1"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                ej = a(66558),
                e$ = e => {
                    let {
                        error: t,
                        sendTransaction0: a,
                        sendTransaction1: l,
                        isWaiting0: o,
                        isWaiting1: i,
                        balances: d,
                        closeModal: c
                    } = e, {
                        t: u
                    } = (0, r.$G)("common");
                    if (!d) return (0, n.tZ)(n.HY, {
                        children: (0, n.tZ)("div", {
                            className: "font-title mb-2 text-lg text-foreground-alt-200",
                            children: u("v2.farms.approvalBalanceError")
                        })
                    });
                    let p = u("v2.farms.givePermissionV3"),
                        [v, h] = Object.keys(d.componentTokenBalances),
                        f = parseFloat(d.componentTokenBalances[v].allowance || "0") > 0,
                        x = parseFloat(d.componentTokenBalances[h].allowance || "0") > 0;
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("div", {
                            className: "flex justify-center my-2",
                            children: (0, n.tZ)("div", {
                                className: "w-1/2 min-h-[200px]",
                                children: (0, n.tZ)(m(), {
                                    src: "/animations/working.gif",
                                    alt: u("v2.prompts.pleaseConfirm"),
                                    title: u("v2.prompts.pleaseConfirm"),
                                    width: 0,
                                    height: 0,
                                    style: {
                                        width: "200px",
                                        height: "auto"
                                    }
                                })
                            })
                        }), (0, n.tZ)("h2", {
                            className: "text-foreground-alt-100 font-title text-lg my-6",
                            children: p
                        }), (0, n.tZ)(es.Z, {
                            error: t
                        }), (0, n.BX)("div", {
                            className: "grid grid-cols-2",
                            children: [(0, n.BX)(M.Z, {
                                onClick: a,
                                state: o || f ? "disabled" : "enabled",
                                className: (0, s.AK)(o && "p-3"),
                                children: [o && (0, n.tZ)("div", {
                                    className: "w-5 h-5 mr-3",
                                    children: (0, n.tZ)(eu.Z, {})
                                }), u("v2.farms.approveToken", {
                                    token: v.toUpperCase()
                                })]
                            }), (0, n.BX)(M.Z, {
                                onClick: l,
                                state: i || x ? "disabled" : "enabled",
                                className: (0, s.AK)(i && "p-3"),
                                children: [i && (0, n.tZ)("div", {
                                    className: "w-5 h-5 mr-3",
                                    children: (0, n.tZ)(eu.Z, {})
                                }), u("v2.farms.approveToken", {
                                    token: h.toUpperCase()
                                })]
                            })]
                        }), f && x && (0, n.BX)(n.HY, {
                            children: [(0, n.tZ)("h2", {
                                className: "text-foreground-alt-100 font-title text-lg my-2",
                                children: u("v2.farms.allApproved")
                            }), (0, n.tZ)(M.Z, {
                                onClick: c,
                                children: u("v2.actions.close")
                            })]
                        })]
                    })
                };
            let eM = (e, t) => "jar" === t && e.depositToken.components && e.token0 && e.token1 ? {
                spenderAddress: e.contract,
                tokens: {
                    [e.depositToken.components[0]]: {
                        tokenAddress: e.token0.address,
                        tokenName: e.token0.name.toUpperCase()
                    },
                    [e.depositToken.components[1]]: {
                        tokenAddress: e.token1.address,
                        tokenName: e.token1.name.toUpperCase()
                    }
                }
            } : {
                spenderAddress: e.contract,
                tokens: {}
            };
            var eL = e => {
                    let {
                        jar: t,
                        visible: a,
                        type: o,
                        state: i,
                        balances: s
                    } = e, {
                        t: d
                    } = (0, r.$G)("common"), {
                        account: c
                    } = (0, $.Ge)(), [m, u] = (0, l.useState)(!1), [, p] = (0, el.e)(eE.XE), v = (0, W.TL)(), h = eM(t, o), f = h.tokens[t.token0.name], x = h.tokens[t.token1.name], g = (0, ex.Ib)(f.tokenAddress), b = (0, ex.Ib)(x.tokenAddress), k = eB.Bz, Z = e => {
                        let {
                            spenderAddress: t
                        } = h;
                        if (e && t) return () => e.approve(t, k)
                    }, N = e => {
                        var a;
                        if (!c) return;
                        let n = null === (a = e.events) || void 0 === a ? void 0 : a.find(e => {
                                let {
                                    event: t
                                } = e;
                                return "Approval" === t
                            }),
                            l = n.args[2],
                            r = n.address,
                            o = Object.keys(h.tokens).find(e => h.tokens[e].tokenAddress.toLowerCase() === r.toLowerCase());
                        void 0 != o && v(et.EJ.setTokenData({
                            account: c,
                            apiKey: t.details.apiKey,
                            data: {
                                componentTokenBalances: {
                                    ...s.componentTokenBalances,
                                    [o]: {
                                        ...s.componentTokenBalances[o],
                                        allowance: l.toString()
                                    }
                                }
                            }
                        }))
                    }, {
                        sendTransaction: y,
                        error: w,
                        isWaiting: T
                    } = (0, ex.kF)(Z(g), N, p), {
                        sendTransaction: B,
                        error: C,
                        isWaiting: X
                    } = (0, ex.kF)(Z(b), N, p), A = () => u(!1);
                    return (0, n.BX)(n.HY, {
                        children: [a && (0, n.tZ)(M.Z, {
                            onClick: () => {
                                p(eE.eX.RESET), u(!0)
                            },
                            state: i,
                            children: d("v2.actions.approve")
                        }), (0, n.tZ)(er.Z, {
                            isOpen: m,
                            closeModal: A,
                            title: d("v2.farms.approveTokens"),
                            children: (0, n.tZ)(e$, {
                                error: w || C,
                                sendTransaction0: y,
                                sendTransaction1: B,
                                isWaiting0: T,
                                isWaiting1: X,
                                balances: s,
                                closeModal: A
                            })
                        })]
                    })
                },
                eP = e => {
                    let {
                        amount0: t,
                        amount1: a,
                        cta: l,
                        equivalentValue: o,
                        error: i,
                        isWaiting: d,
                        previousStep: c,
                        sendTransaction: u,
                        title: p,
                        token0Name: v,
                        token1Name: h
                    } = e, {
                        t: f
                    } = (0, r.$G)("common");
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("div", {
                            className: "flex justify-center my-2",
                            children: (0, n.tZ)("div", {
                                className: "w-1/2 min-h-[200px]",
                                children: (0, n.tZ)(m(), {
                                    src: "/animations/working.gif",
                                    alt: f("v2.prompts.pleaseConfirm"),
                                    title: f("v2.prompts.pleaseConfirm"),
                                    width: 0,
                                    height: 0,
                                    style: {
                                        width: "200px",
                                        height: "auto"
                                    }
                                })
                            })
                        }), (0, n.tZ)("h2", {
                            className: "text-foreground-alt-100 font-title text-lg mt-6 mb-4",
                            children: p
                        }), (0, n.BX)("div", {
                            className: "flex justify-center items-center mb-4",
                            children: [(0, n.BX)("span", {
                                className: "text-foreground-alt-200 text-sm mr-3",
                                children: [(0, n.tZ)("span", {
                                    className: "font-title text-primary text-base mr-2",
                                    children: parseFloat(t).toFixed(4)
                                }), null == v ? void 0 : v.toUpperCase()]
                            }), (0, n.BX)("span", {
                                className: "text-foreground-alt-200 text-sm",
                                children: [(0, n.tZ)("span", {
                                    className: "font-title text-primary text-base mr-2",
                                    children: parseFloat(a).toFixed(4)
                                }), null == h ? void 0 : h.toUpperCase(), o && (0, n.tZ)(X.Z, {
                                    children: (0, n.tZ)("span", {
                                        className: "text-foreground-alt-200 text-sm",
                                        children: o
                                    })
                                })]
                            })]
                        }), (0, n.tZ)(es.Z, {
                            error: i
                        }), (0, n.BX)("div", {
                            className: "flex justify-center items-center",
                            children: [(0, n.tZ)(M.Z, {
                                type: "secondary",
                                onClick: c,
                                className: "mr-3",
                                children: f("v2.actions.back")
                            }), (0, n.BX)(M.Z, {
                                onClick: u,
                                state: d ? "disabled" : "enabled",
                                className: (0, s.AK)(d && "p-3"),
                                children: [d && (0, n.tZ)("div", {
                                    className: "w-5 h-5 mr-3",
                                    children: (0, n.tZ)(eu.Z, {})
                                }), l]
                            })]
                        })]
                    })
                },
                eW = a(52641),
                e_ = e => {
                    var t, a, o, i, d, c, m, u, p;
                    let v, h, {
                            jar: f,
                            balance0: x,
                            balance1: g,
                            token0Decimals: b,
                            token1Decimals: Z,
                            canZap: N,
                            shouldZap: y,
                            setShouldZap: w,
                            nextStep: T
                        } = e,
                        {
                            t: B
                        } = (0, r.$G)("common"),
                        C = (0, W.CG)(k.VH.selectCore),
                        [X, A] = (0, l.useState)("0"),
                        [S, E] = (0, l.useState)("0"),
                        [I, F] = (0, l.useState)("0"),
                        {
                            library: G
                        } = (0, $.Ge)(),
                        U = null == C ? void 0 : C.chains.find(e => e.network === f.chain),
                        [R, H] = (0, l.useState)({
                            label: (null == U ? void 0 : U.gasTokenSymbol.toUpperCase()) || "",
                            value: "native"
                        }),
                        K = (null === (t = f.token0) || void 0 === t ? void 0 : t.isNative) && "native" === R.value ? I : x,
                        O = (null === (a = f.token1) || void 0 === a ? void 0 : a.isNative) && "native" === R.value ? I : g,
                        j = (null === (o = f.token0) || void 0 === o ? void 0 : o.isNative) ? (0, D.aN)(f.token0.name) : (null === (i = f.token1) || void 0 === i ? void 0 : i.isNative) ? (0, D.aN)(null === (d = f.token1) || void 0 === d ? void 0 : d.name) : void 0,
                        L = [{
                            label: j || "",
                            value: "native"
                        }, {
                            label: j && "W" + j || "",
                            value: "wrapped"
                        }],
                        P = (0, ei.formatUnits)(K, b),
                        _ = (0, ei.formatUnits)(O, Z),
                        Y = Error(B("v2.farms.invalidAmount")),
                        [V, z] = (0, l.useState)(),
                        J = () => {
                            let e = (0, ei.parseUnits)(X || "0", b),
                                t = (0, ei.parseUnits)(S || "0", Z);
                            if (e.eq(0) && t.eq(0)) {
                                z(Y);
                                return
                            }
                            let a = e.lte(K) && t.lte(O);
                            a ? z(void 0) : z(Y)
                        },
                        q = e => {
                            if (e.target) {
                                let {
                                    value: t
                                } = e.target;
                                v = t
                            } else v = P;
                            if (A(v), !y && v) {
                                let e = (0, ei.parseUnits)(v, b).mul(f.depositToken.proportion || (0, ei.parseEther)("1")).div((0, ei.parseEther)("1"));
                                E((0, s.ow)((0, ei.formatUnits)(e, Z), Z))
                            }
                        },
                        Q = e => {
                            if (e.target) {
                                let {
                                    value: t
                                } = e.target;
                                h = t
                            } else h = _;
                            if (E(h), !y && h) {
                                let e = (0, ei.parseUnits)(h, Z).mul((0, ei.parseEther)("1")).div(f.depositToken.proportion || (0, ei.parseEther)("1"));
                                A((0, s.ow)((0, ei.formatUnits)(e, b), b))
                            }
                        };
                    return (0, l.useEffect)(() => {
                        J()
                    }, [X, S]), (0, l.useEffect)(() => {
                        let e = async () => {
                            var e, t;
                            return F((null === (e = await (null === (t = null == G ? void 0 : G.getSigner()) || void 0 === t ? void 0 : t.getBalance())) || void 0 === e ? void 0 : e.toString()) || "0")
                        };
                        e()
                    }, [G]), (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("h2", {
                            className: "text-foreground-alt-100 flex font-title text-lg mb-4 ml-4",
                            children: (null == f ? void 0 : null === (c = f.token0) || void 0 === c ? void 0 : c.isNative) ? (0, n.tZ)(eS, {
                                selectedToken: R,
                                setSelectedToken: H,
                                options: L
                            }) : null === (m = f.token0) || void 0 === m ? void 0 : m.name.toUpperCase()
                        }), (0, n.BX)("div", {
                            className: "bg-background-lightest rounded-xl px-4 py-2 mb-6",
                            children: [(0, n.BX)("div", {
                                className: "flex justify-between mb-2",
                                children: [(0, n.tZ)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: B("v2.balances.amount")
                                }), (0, n.BX)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: [B("v2.balances.balance"), ": ", P]
                                })]
                            }), (0, n.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, n.tZ)("input", {
                                    type: "number",
                                    className: "w-3/5 bg-transparent focus:outline-none flex-shrink-0 font-medium text-primary leading-7",
                                    value: X,
                                    onChange: q
                                }), (0, n.tZ)(M.Z, {
                                    size: "small",
                                    onClick: () => {
                                        q(x)
                                    },
                                    children: B("v2.balances.max")
                                })]
                            })]
                        }), (0, n.tZ)("h2", {
                            className: "text-foreground-alt-100 flex font-title text-lg mt-6 mb-4 ml-4",
                            children: (null == f ? void 0 : null === (u = f.token1) || void 0 === u ? void 0 : u.isNative) ? (0, n.tZ)(eS, {
                                selectedToken: R,
                                setSelectedToken: H,
                                options: L
                            }) : null === (p = f.token1) || void 0 === p ? void 0 : p.name.toUpperCase()
                        }), (0, n.BX)("div", {
                            className: "bg-background-lightest rounded-xl px-4 py-2 mb-6",
                            children: [(0, n.BX)("div", {
                                className: "flex justify-between mb-2",
                                children: [(0, n.tZ)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: B("v2.balances.amount")
                                }), (0, n.BX)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: [B("v2.balances.balance"), ": ", _]
                                })]
                            }), (0, n.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, n.tZ)("input", {
                                    type: "number",
                                    className: "w-3/5 bg-transparent focus:outline-none flex-shrink-0 font-medium text-primary leading-7",
                                    value: S,
                                    onChange: Q
                                }), (0, n.tZ)(M.Z, {
                                    size: "small",
                                    onClick: () => {
                                        Q(g)
                                    },
                                    children: B("v2.balances.max")
                                })]
                            })]
                        }), (0, n.tZ)(eW.Z, {
                            toggleOn: y,
                            onChange: () => w(!y),
                            children: (0, n.tZ)("span", {
                                className: "text-sm font-medium text-foreground-alt-200",
                                children: B("v2.farms.autoswap")
                            })
                        }), (0, n.tZ)(es.Z, {
                            error: V
                        }), (0, n.tZ)(M.Z, {
                            state: V ? "disabled" : "enabled",
                            onClick: () => {
                                V || T(X, S, "native" === R.value)
                            },
                            children: B("v2.actions.confirm")
                        })]
                    })
                },
                eY = e => {
                    var t, a, o, i;
                    let {
                        jar: d,
                        balances: c
                    } = e, {
                        t: m
                    } = (0, r.$G)("common"), [u, p] = (0, l.useState)(!1), v = (0, b.v9)(k.VH.selectCore), [h, f] = (0, el.e)(eo.XE), [x, g] = (0, l.useState)(!1), {
                        account: Z
                    } = (0, $.Ge)(), {
                        contract: N
                    } = d, y = (0, ex.uD)(N), w = null == v ? void 0 : v.chains.find(e => e.network === d.chain), T = d.token0.name, B = d.token1.name, X = (0, D.aN)(T), S = (0, D.aN)(B), E = (null === (t = null == v ? void 0 : v.tokens.find(e => e.chain === d.chain && e.id === T)) || void 0 === t ? void 0 : t.decimals) || 18, I = (null === (a = null == v ? void 0 : v.tokens.find(e => e.chain === d.chain && e.id === B)) || void 0 === a ? void 0 : a.decimals) || 18, F = null == c ? void 0 : c.componentTokenBalances[T], G = null == c ? void 0 : c.componentTokenBalances[B], U = ee.O$.from((null == F ? void 0 : F.balance) || "0"), R = ee.O$.from((null == G ? void 0 : G.balance) || "0"), H = ee.O$.from((null == c ? void 0 : c.pAssetBalance) || "0"), K = "frax" !== T && "frax" !== B && d.chain === C.ChainNetwork.Ethereum, {
                        sendTransaction: O,
                        error: j,
                        setError: L,
                        isWaiting: P
                    } = (0, ex.kF)((() => {
                        var e, t, a, n, l;
                        if (!y) return;
                        let r = h.context.useNative && ((null === (e = d.token0) || void 0 === e ? void 0 : e.isNative) || (null === (t = d.token1) || void 0 === t ? void 0 : t.isNative)),
                            o = (0, ei.parseEther)(r ? (null === (a = d.token0) || void 0 === a ? void 0 : a.isNative) ? h.context.amount : h.context.amount1 : "0"),
                            i = q.parseUnits(r && (null === (n = d.token0) || void 0 === n ? void 0 : n.isNative) ? "0" : (0, s.ow)(h.context.amount || "0"), E),
                            c = q.parseUnits(r && (null === (l = d.token1) || void 0 === l ? void 0 : l.isNative) ? "0" : (0, s.ow)(h.context.amount1 || "0"), I);
                        return K ? () => y["deposit(uint256,uint256,bool)"](i, c, x, {
                            value: o
                        }) : () => y["deposit(uint256,uint256)"](i, c, {
                            value: o
                        })
                    })(), (e, t) => {
                        var a;
                        if (!Z) return;
                        let n = null === (a = e.events) || void 0 === a ? void 0 : a.filter(e => {
                                let {
                                    event: t
                                } = e;
                                return "Transfer" === t
                            }),
                            l = n.find(e => e.args.from === Z && e.address.toLowerCase() === d.token0.address.toLowerCase()),
                            r = n.find(e => e.args.from === Z && e.address.toLowerCase() === d.token1.address.toLowerCase()),
                            o = n.find(e => e.args.to === Q.getAddress(Z) && e.address === Q.getAddress(d.contract)),
                            i = (l ? U.sub(l.args.value) : U).toString(),
                            s = (r ? R.sub(r.args.value) : R).toString(),
                            m = H.add(o.args.value).toString();
                        t(et.EJ.setTokenData({
                            account: Z,
                            apiKey: d.details.apiKey,
                            data: {
                                componentTokenBalances: {
                                    [T]: {
                                        ...c.componentTokenBalances[T],
                                        balance: i
                                    },
                                    [B]: {
                                        ...c.componentTokenBalances[B],
                                        balance: s
                                    }
                                },
                                pAssetBalance: m
                            }
                        }))
                    }, f, !0), W = () => {
                        f(eo.eX.RESET), p(!0)
                    }, _ = () => p(!1), Y = (0, A.Ud)(d) && (U.gt(0) || R.gt(0));
                    return (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(M.Z, {
                            type: "primary",
                            state: Y ? "enabled" : "disabled",
                            onClick: () => {
                                Y && W()
                            },
                            className: "w-11",
                            children: "+"
                        }), (0, n.BX)(er.Z, {
                            isOpen: u,
                            closeModal: _,
                            title: m("v2.farms.depositToken", {
                                token: d.depositToken.name
                            }),
                            children: [h.matches(eo.GC.FORM) && (0, n.tZ)(e_, {
                                balance0: (null == F ? void 0 : F.balance) || "0",
                                balance1: (null == G ? void 0 : G.balance) || "0",
                                token0Decimals: E,
                                token1Decimals: I,
                                jar: d,
                                canZap: K,
                                shouldZap: x,
                                setShouldZap: g,
                                nextStep: (e, t, a) => f(eo.eX.SUBMIT_FORM, {
                                    amount: e,
                                    amount1: t,
                                    useNative: a
                                })
                            }), h.matches(eo.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(eP, {
                                title: m("v2.farms.confirmDeposit"),
                                cta: m("v2.actions.deposit"),
                                token0Name: h.context.useNative && (null === (o = d.token0) || void 0 === o ? void 0 : o.isNative) ? X : T,
                                token1Name: h.context.useNative && (null === (i = d.token1) || void 0 === i ? void 0 : i.isNative) ? S : B,
                                amount0: h.context.amount,
                                amount1: h.context.amount1 || "0",
                                equivalentValue: (() => {
                                    var e, t;
                                    let a = (null === (e = null == v ? void 0 : v.tokens.find(e => e.id === T)) || void 0 === e ? void 0 : e.price) || 0,
                                        n = (null === (t = null == v ? void 0 : v.tokens.find(e => e.id === B)) || void 0 === t ? void 0 : t.price) || 0;
                                    if (!a || !n) return "$0";
                                    let l = parseFloat(h.context.amount) * a + parseFloat(h.context.amount1 || "0") * n;
                                    return "~ ".concat((0, s.qx)(l))
                                })(),
                                error: j,
                                sendTransaction: O,
                                isWaiting: P,
                                previousStep: () => {
                                    L(void 0), f(eo.eX.EDIT)
                                }
                            }), h.matches(eo.GC.AWAITING_RECEIPT) && (0, n.tZ)(ev.Z, {
                                chainExplorer: null == w ? void 0 : w.explorer,
                                txHash: h.context.txHash
                            }), h.matches(eo.GC.SUCCESS) && (0, n.tZ)(eh.Z, {
                                chainExplorer: null == w ? void 0 : w.explorer,
                                txHash: h.context.txHash,
                                closeModal: _
                            }), h.matches(eo.GC.FAILURE) && (0, n.tZ)(ef.Z, {
                                chainExplorer: null == w ? void 0 : w.explorer,
                                txHash: h.context.txHash,
                                retry: () => f(eo.eX.RESET)
                            })]
                        })]
                    })
                },
                eV = e => {
                    var t, a, l, o, i, d, c, m, u;
                    let {
                        jar: p
                    } = e, {
                        t: v
                    } = (0, r.$G)("common"), h = (0, ey.m)(), f = (0, W.CG)(k.VH.selectCore), x = (0, W.CG)(e => et.G0.selectData(e, h)), g = (0, W.CG)(et.G0.selectIsFetching), b = (0, W.CG)(e => et.G0.selectTokenDataById(e, p.details.apiKey, h)), Z = (0, ea.jg)(p, f, x), N = Z.depositTokensInFarm.tokens, y = parseFloat(q.formatUnits((null == b ? void 0 : b.picklePending) || "0", 18)), w = null == b ? void 0 : null === (t = b.extraReward) || void 0 === t ? void 0 : t.name, T = parseFloat(q.formatUnits((null == b ? void 0 : null === (a = b.extraReward) || void 0 === a ? void 0 : a.pending) || "0", 18)), B = (0, ea.it)(p), C = null == b ? void 0 : b.componentTokenBalances[null === (l = p.token0) || void 0 === l ? void 0 : l.name].allowance, X = null == b ? void 0 : b.componentTokenBalances[null === (o = p.token1) || void 0 === o ? void 0 : o.name].allowance, S = null == b ? void 0 : b.componentTokenBalances[null === (i = p.token0) || void 0 === i ? void 0 : i.name].balance, E = null == b ? void 0 : b.componentTokenBalances[null === (d = p.token1) || void 0 === d ? void 0 : d.name].balance, I = parseInt(C || "0") > parseInt(S || "0") && parseInt(X || "0") > parseInt(E || "0"), F = parseFloat(q.formatUnits((null == b ? void 0 : b.pAssetBalance) || "0", B)), G = parseInt((null == b ? void 0 : b.farmAllowance) || "0") > parseInt((null == b ? void 0 : b.pAssetBalance) || "0");
                    return (0, n.BX)("div", {
                        className: "flex",
                        children: [(0, n.BX)("div", {
                            className: "grow border self-start border-foreground-alt-500 rounded-xl p-4 mb-2 sm:mb-0 mr-3 sm:mr-6",
                            children: [(0, n.tZ)("p", {
                                className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                children: v("v2.farms.depositedToken", {
                                    token: p.depositToken.name
                                })
                            }), (0, n.BX)("div", {
                                className: "flex items-end justify-between",
                                children: [(0, n.tZ)("span", {
                                    className: "font-title text-primary font-medium text-base leading-5",
                                    children: F
                                }), (0, n.tZ)(eL, {
                                    type: "jar",
                                    jar: p,
                                    visible: !I,
                                    balances: b,
                                    state: (0, A.Ud)(p) ? "enabled" : "disabled"
                                }), I && (0, n.BX)("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [(0, n.tZ)(eY, {
                                        jar: p,
                                        balances: b
                                    }), (0, n.tZ)(eb, {
                                        asset: p,
                                        balances: b,
                                        isUniV3: !0
                                    })]
                                })]
                            })]
                        }), (0, n.BX)("div", {
                            className: "grow border self-start border-foreground-alt-500 rounded-xl p-4 mb-2 sm:mb-0 mr-3 sm:mr-6",
                            children: [(0, n.tZ)("p", {
                                className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                children: v("v2.farms.stakedToken", {
                                    token: p.depositToken.name
                                })
                            }), (0, n.BX)("div", {
                                className: "flex items-end justify-between",
                                children: [(0, n.tZ)("span", {
                                    className: "font-title text-primary font-medium text-base leading-5",
                                    children: N
                                }), (0, n.tZ)(en.Z, {
                                    apiKey: p.details.apiKey,
                                    tokenAddress: p.contract,
                                    tokenName: null === (c = p.farm) || void 0 === c ? void 0 : c.farmDepositTokenName,
                                    spenderAddress: null === (m = p.farm) || void 0 === m ? void 0 : m.farmAddress,
                                    storeAttribute: "farmAllowance",
                                    chainName: p.chain,
                                    visible: !G,
                                    state: (0, A.Ud)(p) ? "enabled" : "disabled",
                                    type: "farm"
                                }), G && (0, n.BX)("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [(0, n.tZ)(ek, {
                                        asset: p,
                                        balances: b
                                    }), (0, n.tZ)(eZ, {
                                        asset: p,
                                        balances: b
                                    })]
                                })]
                            })]
                        }), w && (0, n.BX)("div", {
                            className: "grow self-start",
                            children: [(0, n.BX)("div", {
                                className: "border border-foreground-alt-500 rounded-xl p-4",
                                children: [(0, n.tZ)("p", {
                                    className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-0",
                                    children: v("v2.farms.earnedToken", {
                                        token: w.toUpperCase()
                                    })
                                }), (0, n.tZ)("p", {
                                    className: "text-foreground-alt-200 font-medium italic text-xs leading-5 mb-4",
                                    children: v("v2.farms.extraRewardNotice")
                                }), (0, n.tZ)("div", {
                                    className: "flex items-end justify-between",
                                    children: (0, n.tZ)("span", {
                                        className: "font-title text-primary font-medium text-base leading-5",
                                        children: (0, s.RQ)(T, 3)
                                    })
                                })]
                            }), (0, n.tZ)("div", {
                                className: "relative",
                                children: g && (0, n.tZ)(_.Z, {
                                    waitForUserModel: !0,
                                    className: "absolute r-0 t-0 mt-1"
                                })
                            })]
                        }), (0, n.BX)("div", {
                            className: "grow self-start",
                            children: [(0, n.BX)("div", {
                                className: "border border-foreground-alt-500 rounded-xl p-4",
                                children: [(0, n.tZ)("p", {
                                    className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                    children: v("v2.farms.earnedToken", {
                                        token: "NUBAIs"
                                    })
                                }), (0, n.BX)("div", {
                                    className: "flex items-end justify-between",
                                    children: [(0, n.tZ)("span", {
                                        className: "font-title text-primary font-medium text-base leading-5",
                                        children: (0, s.RQ)(y, 3)
                                    }), (0, n.tZ)(eN.Z, {
                                        rewarderType: "farm",
                                        asset: p,
                                        harvestableAmount: ee.O$.from((null == b ? void 0 : b.picklePending) || 0),
                                        extraHarvestableAmount1: ee.O$.from((null == b ? void 0 : null === (u = b.extraReward) || void 0 === u ? void 0 : u.pending) || 0),
                                        extraRewardName1: w,
                                        network: p.chain
                                    })]
                                })]
                            }), (0, n.tZ)("div", {
                                className: "relative",
                                children: g && (0, n.tZ)(_.Z, {
                                    waitForUserModel: !0,
                                    className: "absolute r-0 t-0 mt-1"
                                })
                            })]
                        })]
                    })
                },
                ez = e => {
                    let {
                        brinery: t
                    } = e, {
                        t: a
                    } = (0, r.$G)("common"), l = (0, ey.m)(), o = (0, W.CG)(et.G0.selectIsFetching), i = (0, W.CG)(e => et.G0.selectBrineryDataById(e, t.details.apiKey, l)), d = parseInt((null == i ? void 0 : i.allowance) || "0") > parseInt((null == i ? void 0 : i.depositTokenBalance) || "0"), c = t.brineryBalance.tokens, m = t.earnedRewards.tokens;
                    return (0, n.BX)("div", {
                        className: "flex space-x-3",
                        children: [(0, n.tZ)("div", {
                            className: "grow self-start",
                            children: (0, n.BX)("div", {
                                className: "border border-foreground-alt-500 rounded-xl p-4",
                                children: [(0, n.tZ)("p", {
                                    className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                    children: a("v2.farms.depositedToken", {
                                        token: t.depositToken.name
                                    })
                                }), (0, n.BX)("div", {
                                    className: "flex items-end justify-between",
                                    children: [(0, n.tZ)("span", {
                                        className: "font-title text-primary font-medium text-base leading-5",
                                        children: c
                                    }), (0, n.tZ)(en.Z, {
                                        apiKey: t.details.apiKey,
                                        tokenAddress: t.depositToken.addr,
                                        tokenName: t.depositToken.name,
                                        spenderAddress: t.contract,
                                        storeAttribute: "allowance",
                                        chainName: t.chain,
                                        visible: !d,
                                        state: (0, A.Ud)(t) ? "enabled" : "disabled",
                                        type: "brinery"
                                    }), d && (0, n.tZ)("div", {
                                        children: (0, n.tZ)(eg, {
                                            asset: t,
                                            balances: i,
                                            type: "brinery"
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.BX)("div", {
                            className: "grow self-start",
                            children: [(0, n.BX)("div", {
                                className: "border border-foreground-alt-500 rounded-xl p-4",
                                children: [(0, n.tZ)("p", {
                                    className: "font-title text-foreground-alt-200 font-medium text-base leading-5 mb-2",
                                    children: a("v2.farms.earnedToken", {
                                        token: t.depositToken.name
                                    })
                                }), (0, n.BX)("div", {
                                    className: "flex items-end justify-between",
                                    children: [(0, n.tZ)("span", {
                                        className: "font-title text-primary font-medium text-base leading-5",
                                        children: (0, s.RQ)(parseFloat(m), 3)
                                    }), (0, n.tZ)(eN.Z, {
                                        rewarderType: "brinery",
                                        asset: t,
                                        harvestableAmount: t.earnedRewards.wei,
                                        network: t.chain,
                                        balances: i
                                    })]
                                })]
                            }), (0, n.tZ)("div", {
                                className: "relative",
                                children: o && (0, n.tZ)(_.Z, {
                                    waitForUserModel: !0,
                                    className: "absolute r-0 t-0 mt-1"
                                })
                            })]
                        })]
                    })
                };
            let eJ = e => {
                    let {
                        label: t,
                        tooltipText: a,
                        value: l
                    } = e;
                    return (0, n.BX)("p", {
                        className: "flex py-2 text-foreground-alt-200 justify-between",
                        children: [(0, n.BX)("span", {
                            className: "font-body font-bold",
                            children: [t, a && (0, n.tZ)(X.Z, {
                                children: (0, n.tZ)("span", {
                                    className: "text-foreground-alt-200 text-sm",
                                    children: a
                                })
                            })]
                        }), (0, n.tZ)("span", {
                            className: "font-medium text-primary text-base",
                            children: l
                        })]
                    })
                },
                eq = e => {
                    let {
                        property: t,
                        value: a
                    } = e;
                    return (0, n.BX)("p", {
                        className: "flex justify-between",
                        children: [(0, n.tZ)("span", {
                            className: "ml-4 font-body font-medium text-sm",
                            children: t
                        }), (0, n.tZ)("span", {
                            className: "text-primary font-medium text-sm",
                            children: a
                        })]
                    })
                };
            var eQ = e => {
                    let {
                        brinery: t,
                        hideDescription: a
                    } = e, {
                        t: d
                    } = (0, r.$G)("common"), c = C.Chains.get(t.chain), {
                        library: m
                    } = (0, $.Ge)(), u = parseFloat(t.brineryBalance.tokens);
                    return (0, n.tZ)(o.p, {
                        as: l.Fragment,
                        children: e => {
                            var p, v, h, f, x;
                            let {
                                open: g
                            } = e;
                            return (0, n.BX)(n.HY, {
                                children: [(0, n.tZ)(i.u, {
                                    as: l.Fragment,
                                    enter: "transition duration-100 ease-out",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "transition duration-100 ease-out",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, n.BX)(o.p.Panel, {
                                        as: "div",
                                        className: "grid grid-cols-4 py-4 gap-2",
                                        children: [(0, n.BX)("div", {
                                            className: "pr-4 col-span-3 border-r border-foreground-alt-500",
                                            children: [(0, n.BX)("div", {
                                                className: "flex justify-between",
                                                children: [(0, n.BX)("span", {
                                                    className: "font-title text-foreground-alt-200 inline-flex items-center font-medium text-base leading-5",
                                                    children: [(0, n.BX)(r.cC, {
                                                        i18nKey: "v2.farms.tokensDeposited",
                                                        children: ["You have", (0, n.tZ)("span", {
                                                            className: "text-primary mx-2",
                                                            children: {
                                                                amount: (0, s.RQ)(u, 7)
                                                            }
                                                        }), "pTokens"]
                                                    }), (0, n.tZ)(X.Z, {
                                                        children: (0, n.tZ)("span", {
                                                            className: "text-foreground-alt-200 text-sm",
                                                            children: d("v2.farms.pToken")
                                                        })
                                                    })]
                                                }), (0, n.tZ)(M.Z, {
                                                    onClick: () => (0, D.Xv)(t, m),
                                                    type: "secondary",
                                                    children: d("v2.farms.metamaskAdd")
                                                })]
                                            }), (0, n.tZ)("div", {
                                                className: "pt-2 mb-4",
                                                children: (0, n.tZ)(Y, {
                                                    asset: t,
                                                    hideDescription: a
                                                })
                                            })]
                                        }), (0, n.BX)("div", {
                                            className: "px-4 border-r border-foreground-alt-500",
                                            children: [(0, n.tZ)(eJ, {
                                                label: d("v2.farms.baseApr"),
                                                tooltipText: d("v2.farms.baseAprTooltip"),
                                                value: "".concat(null === (h = t.aprStats) || void 0 === h ? void 0 : h.apr.toFixed(3), "%")
                                            }), (0, n.tZ)(eJ, {
                                                label: d("v2.farms.yieldRates"),
                                                tooltipText: null,
                                                value: ""
                                            }), (0, n.tZ)(eq, {
                                                property: d("v2.time.weekly"),
                                                value: "".concat((((null === (f = t.aprStats) || void 0 === f ? void 0 : f.apr) || 0) / 52).toFixed(2), "%")
                                            }), (0, n.tZ)(eq, {
                                                property: d("v2.time.monthly"),
                                                value: "".concat((((null === (x = t.aprStats) || void 0 === x ? void 0 : x.apr) || 0) / 12).toFixed(2), "%")
                                            })]
                                        })]
                                    })
                                }), (0, n.tZ)(o.p.Button, {
                                    as: "div",
                                    children: (0, n.tZ)(L, {
                                        open: g,
                                        isBrinery: !0
                                    })
                                })]
                            })
                        }
                    })
                },
                e0 = a(79771),
                e2 = e => {
                    let t, {
                            asset: a
                        } = e,
                        {
                            t: l
                        } = (0, r.$G)("common");
                    return ((0, A.Ud)(a) || (t = l("v2.farms.withdrawOnly")), "B.Protocol" === a.protocol && (t = l("v2.farms.bProtocolInfo")), t) ? (0, n.BX)("div", {
                        className: "flex justify-center text-foreground-alt-200 text-sm mt-1 mb-6",
                        children: [(0, n.tZ)(e0.Z, {
                            className: "w-5 h-5 text-accent mr-2"
                        }), t]
                    }) : null
                },
                e1 = e => {
                    var t, a, l, o, i;
                    let s, d, c, m, {
                            asset: u,
                            hideDescription: v
                        } = e,
                        {
                            t: h
                        } = (0, r.$G)("common"),
                        {
                            network: f,
                            needsNetworkSwitch: x
                        } = (0, ey.D)(u.chain),
                        g = u.depositTokensInWallet.tokensVisible,
                        b = u.depositTokensInWallet.tokensUSD,
                        k = h("v2.farms.tokens", {
                            amount: g
                        }),
                        Z = (null === (t = u.details) || void 0 === t ? void 0 : t.apiKey) ? "/stats?jar=" + u.details.apiKey : void 0,
                        N = u.protocol === p.AssetProtocol.UNISWAP_V3;
                    return N && (0, A.R1)(u) && (s = null === (a = u.depositToken.components) || void 0 === a ? void 0 : a[0], d = null === (l = u.depositToken.components) || void 0 === l ? void 0 : l[1], c = null === (o = u.walletComponentTokens[s || ""]) || void 0 === o ? void 0 : o.tokensVisible, m = null === (i = u.walletComponentTokens[d || ""]) || void 0 === i ? void 0 : i.tokensVisible), (0, n.BX)("td", {
                        colSpan: 6,
                        className: "bg-background-light rounded-b-xl p-6 border-t border-foreground-alt-500",
                        children: [(0, n.tZ)(e2, {
                            asset: u
                        }), (0, n.BX)("div", {
                            className: "flex",
                            children: [(0, n.BX)("div", {
                                className: "pt-4 pb-6 flex-shrink-0 mr-6",
                                children: [N && (0, n.BX)(n.HY, {
                                    children: [(0, n.tZ)("p", {
                                        className: "font-title font-medium text-base leading-5",
                                        children: "".concat(c || "0", " ").concat(null == s ? void 0 : s.toUpperCase())
                                    }), (0, n.tZ)("p", {
                                        className: "my-2 font-title font-medium text-base leading-5",
                                        children: "".concat(m || "0", " ").concat(null == d ? void 0 : d.toUpperCase())
                                    })]
                                }) || (0, n.BX)("p", {
                                    className: "font-title font-medium text-base leading-5",
                                    children: [k, " ", (0, n.tZ)("br", {}), b, " USD"]
                                }), (0, n.tZ)("p", {
                                    className: "font-normal text-xs text-foreground-alt-200 mb-6",
                                    children: h("v2.balances.balance")
                                })]
                            }), (0, n.BX)("div", {
                                className: "relative w-full mb-2",
                                children: [N && (0, A.R1)(u) ? (0, n.tZ)(eV, {
                                    jar: u
                                }) : (0, A.nk)(u) ? (0, n.tZ)(ez, {
                                    brinery: u
                                }) : (0, n.tZ)(eO, {
                                    asset: u
                                }), x && (0, n.tZ)("div", {
                                    className: "absolute inset-0 flex grow justify-center items-center border border-foreground-alt-500 rounded-xl bg-background-light bg-opacity-90 backdrop-filter backdrop-blur-sm",
                                    children: (0, n.tZ)(ej.Z, {
                                        network: f
                                    })
                                })]
                            })]
                        }), (0, A.nk)(u) ? (0, n.tZ)(eQ, {
                            brinery: u,
                            hideDescription: v
                        }) : (0, n.tZ)(J, {
                            asset: u,
                            hideDescription: v
                        })]
                    })
                },
                e4 = e => {
                    let {
                        asset: t,
                        simple: a,
                        dashboard: r,
                        hideDescription: c,
                        userDillRatio: m
                    } = e, u = (0, ey.m)(), v = (0, W.CG)(e => et.G0.selectData(e, u));
                    if (t.depositToken.components) {
                        var h;
                        for (let e = 0; e < (null === (h = t.depositToken.components) || void 0 === h ? void 0 : h.length); e++)
                            if (t.enablement === p.AssetEnablement.WITHDRAW_ONLY && v && v.tokens[t.details.apiKey] && "0" !== v.tokens[t.details.apiKey].depositTokenBalance) return null
                    }
                    return (0, A.nk)(t) ? (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("tr", {
                            children: (0, n.tZ)(O, {
                                open: !0,
                                simple: a,
                                brinery: t,
                                userDillRatio: m
                            })
                        }), (0, n.tZ)(e1, {
                            asset: t,
                            hideDescription: c
                        })]
                    }) : a ? (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)("tr", {
                            className: "group",
                            children: (0, n.tZ)(R, {
                                open: !1,
                                simple: a,
                                asset: t,
                                dashboard: r,
                                userDillRatio: m
                            })
                        }), (0, n.tZ)(d, {})]
                    }) : (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(o.p, {
                            as: l.Fragment,
                            children: e => {
                                let {
                                    open: r
                                } = e;
                                return (0, n.BX)(n.HY, {
                                    children: [(0, n.tZ)(o.p.Button, {
                                        as: "tr",
                                        className: (0, s.AK)(!r && "group", !a && "cursor-pointer"),
                                        children: (0, n.tZ)(R, {
                                            open: r,
                                            simple: a,
                                            asset: t,
                                            userDillRatio: m
                                        })
                                    }), (0, n.tZ)(i.u, {
                                        as: l.Fragment,
                                        enter: "transition duration-100 ease-out",
                                        enterFrom: "opacity-0",
                                        enterTo: "opacity-100",
                                        leave: "transition duration-100 ease-out",
                                        leaveFrom: "opacity-100",
                                        leaveTo: "opacity-0",
                                        children: (0, n.tZ)(o.p.Panel, {
                                            as: "tr",
                                            children: (0, n.tZ)(e1, {
                                                asset: t,
                                                hideDescription: c
                                            })
                                        })
                                    })]
                                })
                            }
                        }), (0, n.tZ)(d, {})]
                    })
                };
            let e3 = e => "0" !== e,
                e5 = e => e3(e.pAssetBalance) || e3(e.pStakedBalance) || e3(e.picklePending);
            var e6 = e => {
                var t, a, l;
                let {
                    simple: o,
                    requiresUserModel: i,
                    hideDescription: s,
                    isBrinery: d,
                    dashboard: c,
                    singleAsset: m
                } = e, {
                    t: u
                } = (0, r.$G)("common"), p = (0, ey.m)(), v = (0, W.CG)(k.VH.selectCore), h = (0, W.CG)(e => et.G0.selectData(e, p)), f = parseFloat((0, ei.formatEther)((null == h ? void 0 : null === (t = h.dill) || void 0 === t ? void 0 : t.balance) || "0")) / ((null == v ? void 0 : null === (a = v.dill) || void 0 === a ? void 0 : a.totalDill) || 1), x = (0, W.CG)(k.VH.makeAssetsSelector({
                    account: p,
                    filtered: !o,
                    paginated: !o
                })), g = (0, W.CG)(e => et.G0.selectUpdatedAt(e, p)), b = (0, W.CG)(k.VH.makeBrinerySelector({
                    account: p
                }));
                if (i && h) {
                    let e = Object.entries(h.tokens).filter(e => {
                        let [t, a] = e;
                        return e5(a)
                    }).map(e => {
                        let [t] = e;
                        return t.toUpperCase()
                    });
                    x = x.filter(t => e.includes(t.details.apiKey.toUpperCase()))
                }
                let Z = !v || i && !h;
                return Z ? (0, n.tZ)("tr", {
                    children: (0, n.tZ)("td", {
                        colSpan: 6,
                        children: (0, n.tZ)(_.Z, {
                            waitForCore: !0,
                            waitForUserModel: !0,
                            className: "py-8"
                        })
                    })
                }) : 0 === x.length ? (0, n.tZ)("tr", {
                    children: (0, n.tZ)("td", {
                        colSpan: 6,
                        className: "bg-background-light text-foreground-alt-200 text-center p-8 rounded-xl",
                        children: u(g ? "v2.farms.noResults" : "v2.farms.loadingInvestments")
                    })
                }) : d ? (0, n.tZ)(n.HY, {
                    children: b.map(e => (0, n.tZ)(e4, {
                        asset: e,
                        simple: o,
                        userDillRatio: f
                    }, e.details.apiKey))
                }) : m ? (0, n.tZ)(e4, {
                    asset: m,
                    simple: o,
                    hideDescription: s,
                    userDillRatio: f
                }, null === (l = m.details) || void 0 === l ? void 0 : l.apiKey) : (0, n.tZ)(n.HY, {
                    children: x.map(e => (0, n.tZ)(e4, {
                        asset: e,
                        simple: o,
                        dashboard: c,
                        userDillRatio: f
                    }, e.details.apiKey))
                })
            }
        },
        39562: function (e, t, a) {
            var n = a(35944),
                l = a(10822),
                r = a(61782),
                o = a(20440),
                i = a(9473),
                s = a(50790),
                d = a(93490);
            let c = e => "desc" === e ? "asc" : "desc";
            t.Z = e => {
                let {
                    sortType: t,
                    label: a
                } = e, m = t !== o.ER.None, u = (0, i.v9)(o.Wd.selectSort), p = (0, s.TL)();
                return (0, n.BX)("th", {
                    scope: "col",
                    className: (0, d.AK)("px-4 py-1 h-8 text-left text-xs font-bold text-foreground-alt-200 tracking-normal sm:px-6", m && "cursor-pointer transition duration-300 ease-in-out hover:bg-background-light rounded-t-xl"),
                    onClick: () => {
                        if (!m) return;
                        let e = u.direction;
                        t === u.type && (e = c(u.direction)), p((0, o.HD)({
                            type: t,
                            direction: e
                        }))
                    },
                    children: [a, m && (() => {
                        if (t !== u.type) return null;
                        let e = "asc" === u.direction ? l.Z : r.Z;
                        return (0, n.tZ)(e, {
                            className: "mb-1 w-5 h-5 text-foreground-alt-200 transition duration-300 ease-in-out inline-block"
                        })
                    })()]
                })
            }
        }
    }
]);