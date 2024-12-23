"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8922], {
        69876: function (e, t, r) {
            var n = r(35944),
                a = r(9473),
                i = r(75426),
                o = r(68856),
                l = r(24834),
                s = r(86688),
                c = r(7518),
                d = r(86281),
                u = r(93490),
                m = r(69742);
            let f = e => {
                let {
                    isLoading: t
                } = e;
                return t ? (0, n.tZ)(c.Z, {}) : (0, n.tZ)(i.Z, {
                    className: "w-4 h-4 mr-1 text-primary-light"
                })
            };
            t.Z = e => {
                let {
                    waitForCore: t,
                    waitForDocs: r,
                    waitForUserModel: i,
                    waitForVoteData: c,
                    customText: h,
                    className: v
                } = e, {
                    t: p
                } = (0, o.$G)("common"), E = (0, a.v9)(l.VH.selectLoadingState), g = (0, a.v9)(s.G0.selectIsFetching), I = (0, a.v9)(d.Ad.selectDocs), C = (0, a.v9)(m.E6.selectVoteData);
                return (0, n.BX)("div", {
                    className: (0, u.AK)("bg-background-light text-center text-sm text-foreground-alt-200 rounded-xl w-full", v),
                    children: [t && (0, n.BX)("div", {
                        className: "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                        children: [(0, n.tZ)(f, {
                            isLoading: "fulfilled" !== E
                        }), (0, n.tZ)("span", {
                            children: h || p("v2.farms.loadingCoreData")
                        })]
                    }), i && (0, n.BX)("div", {
                        className: "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                        children: [(0, n.tZ)(f, {
                            isLoading: g
                        }), (0, n.tZ)("span", {
                            children: h || p("v2.farms.loadingUserModel")
                        })]
                    }), r && (0, n.BX)("div", {
                        className: "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                        children: [(0, n.tZ)(f, {
                            isLoading: !I
                        }), (0, n.tZ)("span", {
                            children: h || p("v2.farms.loadingDocs")
                        })]
                    }), c && (0, n.BX)("div", {
                        className: "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                        children: [(0, n.tZ)(f, {
                            isLoading: !C
                        }), (0, n.tZ)("span", {
                            children: h || p("v2.farms.loadingVotes")
                        })]
                    })]
                })
            }
        },
        40653: function (e, t, r) {
            var n = r(35944),
                a = r(67294),
                i = r(2905),
                o = r(52697);
            let l = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.tZ)("div", {
                        className: "rounded-lg shadow-lg border border-foreground-alt-500 overflow-hidden",
                        children: (0, n.tZ)("div", {
                            className: "bg-background-light px-3 py-2",
                            children: (0, n.tZ)("div", {
                                className: "text-primary-light text-base font-normal",
                                children: t
                            })
                        })
                    })
                },
                s = (0, a.forwardRef)(function (e, t) {
                    return (0, n.tZ)("span", {
                        ref: t,
                        className: "cursor-pointer transition-colors duration-300 hover:text-accent ml-1",
                        ...e,
                        children: (0, n.tZ)(i.Z, {
                            className: "inline-block w-4 h-4 mx-1 align-top"
                        })
                    })
                });
            t.Z = e => {
                let {
                    children: t
                } = e;
                return (0, n.tZ)(o.ZP, {
                    duration: 0,
                    content: (0, n.tZ)(l, {
                        children: t
                    }),
                    children: (0, n.tZ)(s, {})
                })
            }
        },
        77381: function (e, t, r) {
            r.d(t, {
                $O: function () {
                    return d
                },
                Ko: function () {
                    return s
                },
                NQ: function () {
                    return c
                }
            });
            var n = r(67294),
                a = r(77044),
                i = r(28543),
                o = r(55495),
                l = r(83397);
            let s = e => {
                    let {
                        library: t
                    } = (0, a.Ge)(), r = (0, n.useMemo)(() => {
                        if (t) return i.j.connect(e, t.getSigner())
                    }, [t, e]);
                    return r
                },
                c = e => {
                    let {
                        library: t
                    } = (0, a.Ge)(), r = (0, n.useMemo)(() => {
                        if (t) return o.B.connect(e, t.getSigner())
                    }, [t, e]);
                    return r
                },
                d = e => {
                    let {
                        library: t
                    } = (0, a.Ge)(), r = (0, n.useMemo)(() => {
                        if (t) return l.Y.connect(e, t.getSigner())
                    }, [t, e]);
                    return r
                }
        },
        66558: function (e, t, r) {
            var n = r(35944),
                a = r(25675),
                i = r.n(a),
                o = r(68856),
                l = r(77044),
                s = r(50790),
                c = r(34211),
                d = r(24834),
                u = r(85008),
                m = r(59908);
            t.Z = e => {
                let {
                    size: t,
                    type: r,
                    network: a
                } = e, {
                    t: f
                } = (0, o.$G)("common"), {
                    library: h
                } = (0, l.Ge)(), v = (0, s.CG)(d.VH.selectCore);
                return a && v && h ? (0, n.BX)(c.Z, {
                    size: t,
                    type: r,
                    onClick: () => (0, u.c)(h, a.chainId, v),
                    children: [(0, n.tZ)("span", {
                        children: f("connection.connectTo")
                    }), (0, n.tZ)("div", {
                        className: "w-4 h-4 mr-1 ml-1",
                        children: (0, n.tZ)(i(), {
                            src: "/networks/".concat(a.name, ".png"),
                            width: 16,
                            height: 16,
                            layout: "intrinsic",
                            alt: a.name,
                            title: a.name,
                            className: "rounded-full",
                            priority: !0
                        })
                    }), (0, n.tZ)("span", {
                        children: a.visibleName
                    })]
                }) : (0, n.tZ)(m.Z, {})
            }
        },
        40665: function (e, t, r) {
            var n = r(35944),
                a = r(67294),
                i = r(68856),
                o = r(21046),
                l = r(410),
                s = r(31429),
                c = r(77044),
                d = r(34211),
                u = r(88580),
                m = r(24905),
                f = r(57093),
                h = r(66546),
                v = r(96887),
                p = r(65623),
                E = r(80780),
                g = r(86688),
                I = r(28187);
            t.Z = e => {
                let {
                    apiKey: t,
                    tokenAddress: r,
                    tokenName: C,
                    spenderAddress: N,
                    storeAttribute: Z,
                    chainName: x,
                    state: T,
                    visible: A,
                    type: S
                } = e, {
                    t: R
                } = (0, i.$G)("common"), [b, k] = (0, a.useState)(!1), [G, y] = (0, l.e)(m.XE), w = (0, E.Ib)(r), {
                    account: O
                } = (0, c.Ge)(), _ = s.Chains.get(x), H = o.Bz, {
                    sendTransaction: U,
                    error: F,
                    isWaiting: X
                } = (0, E.kF)((() => {
                    if (w && N) return () => w.approve(N, H)
                })(), (e, r) => {
                    if (!O) return;
                    let n = (0, I._$)(e, "Approval"),
                        a = n[0].args[2];
                    if (!t || "dill" === S) {
                        r(g.EJ.setDillData({
                            account: O,
                            data: {
                                [Z]: a.toString()
                            }
                        }));
                        return
                    }
                    if ("brinery" === S) {
                        r(g.EJ.setBrineryData({
                            account: O,
                            apiKey: t,
                            data: {
                                [Z]: a.toString()
                            }
                        }));
                        return
                    }
                    r(g.EJ.setTokenData({
                        account: O,
                        apiKey: t,
                        data: {
                            [Z]: a.toString()
                        }
                    }))
                }, y), $ = () => k(!1);
                return (0, n.BX)(n.HY, {
                    children: [A && (0, n.tZ)(d.Z, {
                        onClick: () => {
                            y(m.eX.RESET), k(!0)
                        },
                        state: T,
                        children: R("v2.actions.approve")
                    }), (0, n.BX)(u.Z, {
                        isOpen: b,
                        closeModal: $,
                        title: R("v2.farms.approveToken", {
                            token: C
                        }),
                        children: [G.matches(m.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(f.Z, {
                            title: R("v2.farms.givePermission", {
                                token: C
                            }),
                            error: F,
                            sendTransaction: U,
                            isWaiting: X,
                            cta: R("v2.actions.approve")
                        }), G.matches(m.GC.AWAITING_RECEIPT) && (0, n.tZ)(h.Z, {
                            chainExplorer: null == _ ? void 0 : _.explorer,
                            txHash: G.context.txHash
                        }), G.matches(m.GC.SUCCESS) && (0, n.tZ)(v.Z, {
                            chainExplorer: null == _ ? void 0 : _.explorer,
                            txHash: G.context.txHash,
                            closeModal: $
                        }), G.matches(m.GC.FAILURE) && (0, n.tZ)(p.Z, {
                            chainExplorer: null == _ ? void 0 : _.explorer,
                            txHash: G.context.txHash,
                            retry: () => y(m.eX.RESET)
                        })]
                    })]
                })
            }
        },
        5155: function (e, t, r) {
            var n = r(35944),
                a = r(67294),
                i = r(68856),
                o = r(61744),
                l = r(9279),
                s = r(2593),
                c = r(410),
                d = r(9473),
                u = r(77044),
                m = r(31429),
                f = r(34211),
                h = r(88580),
                v = r(24905),
                p = r(57093),
                E = r(66546),
                g = r(96887),
                I = r(65623),
                C = r(80780),
                N = r(86688),
                Z = r(28187),
                x = r(24834),
                T = r(80963),
                A = r(40653),
                S = r(93490),
                R = r(77381),
                b = r(66558),
                k = r(20859);
            t.Z = e => {
                var t;
                let r, {
                        asset: G,
                        buttonSize: y,
                        buttonType: w,
                        harvestableAmount: O,
                        extraHarvestableAmount1: _,
                        extraRewardName1: H,
                        claimableV1: U,
                        claimableV2: F,
                        claimableETHV2: X,
                        network: $,
                        rewarderType: B,
                        showNetworkSwitch: L,
                        balances: M
                    } = e,
                    {
                        t: W
                    } = (0, i.$G)("common"),
                    [D, P] = (0, a.useState)(!1),
                    K = (0, d.v9)(x.VH.selectCore),
                    V = (0, d.v9)(x.VH.selectMelonPrice),
                    J = (0, d.v9)(x.VH.selectETHPrice),
                    [Q, j] = (0, c.e)(v.XE),
                    {
                        account: z
                    } = (0, u.Ge)(),
                    {
                        network: q,
                        needsNetworkSwitch: Y
                    } = (0, k.D)($),
                    ee = null == K ? void 0 : K.chains.find(e => e.network === $),
                    et = (0, C.mR)(null === (t = (0, T.rN)(G)) || void 0 === t ? void 0 : t.farmAddress, ee),
                    er = (0, R.$O)(S.IU),
                    en = (0, R.NQ)(S.Hs),
                    ea = parseFloat(o.formatEther(U || 0)),
                    ei = parseFloat(o.formatEther(F || 0)),
                    eo = parseFloat(o.formatEther(X || 0)),
                    el = parseFloat(o.formatEther(O || 0)),
                    es = parseFloat(o.formatEther(_ || 0)),
                    ec = 0;
                switch (B) {
                    case "farm":
                        r = el, ec = es;
                        break;
                    case "brinery":
                        r = el;
                        break;
                    default:
                        r = ea > 0 ? ea : ei
                }
                let ed = "dill" === B && 0 === ea && eo > 0,
                    eu = (0, C.wU)((null == G ? void 0 : G.contract) || l.d),
                    em = "brinery" === B ? (null == K ? void 0 : K.prices[null == G ? void 0 : G.details.rewardToken]) || 0 : V,
                    ef = "brinery" === B ? null == G ? void 0 : G.depositToken.name : "MELAI",
                    {
                        sendTransaction: eh,
                        error: ev,
                        isWaiting: ep
                    } = (0, C.kF)((() => {
                        if (z) {
                            if ("farm" === B) {
                                var e, t;
                                if (!et) return;
                                if ($ === m.ChainNetwork.Ethereum) return () => et.getReward();
                                let r = null === (e = (0, T.rN)(G)) || void 0 === e ? void 0 : null === (t = e.details) || void 0 === t ? void 0 : t.poolId;
                                if (void 0 === r) return;
                                return () => et.harvest(r, z)
                            }
                            if ("brinery" === B) {
                                if (!eu) return;
                                return () => eu.claim()
                            }
                            if (en && er) {
                                if (ea > 0) return () => er["claim()"]();
                                if (ei > 0 || eo > 0) return () => en["claim()"]()
                            }
                        }
                    })(), (e, t) => {
                        if (!z) return;
                        let r = s.O$.from(0),
                            n = s.O$.from(0);
                        if ("farm" === B) {
                            if (!G) return;
                            if ($ === m.ChainNetwork.Ethereum) {
                                let t = (0, Z._$)(e, "RewardPaid");
                                r = t[0].args.reward
                            } else {
                                let t = (0, Z._$)(e, "Harvest");
                                r = t[0].args.amount
                            }
                            t(N.EJ.setTokenData({
                                account: z,
                                apiKey: G.details.apiKey,
                                data: {
                                    picklePending: "0"
                                }
                            }))
                        } else if ("brinery" === B) {
                            if (!G || !M) return;
                            let r = (0, Z._$)(e, "Transfer"),
                                n = r.find(e => e.args.to === z),
                                a = s.O$.from((null == M ? void 0 : M.depositTokenBalance) || "0"),
                                i = n.args.amount || s.O$.from("0"),
                                o = a.add(i).toString();
                            t(N.EJ.setBrineryData({
                                account: z,
                                apiKey: G.details.apiKey,
                                data: {
                                    depositTokenBalance: o
                                }
                            }));
                            return
                        } else if (ea > 0) {
                            let n = (0, Z._$)(e, "Claimed");
                            r = n[0].args.amount, t(N.EJ.setDillData({
                                account: z,
                                data: {
                                    claimable: s.O$.from(U).sub(r).toString()
                                }
                            }))
                        } else if (eo > 0 || ei > 0) {
                            let a = (0, Z._$)(e, "Claimed");
                            r = a[0].args.amount, n = a[0].args.amount_eth, t(N.EJ.setDillData({
                                account: z,
                                data: {
                                    claimableV2: s.O$.from(F).sub(r).toString(),
                                    totalClaimableETHV2: s.O$.from(X).sub(n).toString()
                                }
                            }))
                        }
                        t(N.EJ.addHarvestedMelons({
                            account: z,
                            chain: $,
                            amount: r.toString()
                        }))
                    }, j, !0),
                    eE = () => P(!1);
                return (0, n.BX)(n.HY, {
                    children: [Y && L ? (0, n.tZ)(b.Z, {
                        size: y,
                        network: q
                    }) : (0, n.tZ)(f.Z, {
                        type: w,
                        size: y,
                        state: r + ec + eo > 0 ? "enabled" : "disabled",
                        onClick: () => {
                            j(v.eX.RESET), P(!0)
                        },
                        children: W("v2.farms.harvest")
                    }), (0, n.BX)(h.Z, {
                        isOpen: D,
                        closeModal: eE,
                        title: W("v2.dashboard.harvestRewards"),
                        children: [Q.matches(v.GC.AWAITING_CONFIRMATION) && (0, n.tZ)(p.Z, {
                            title: (0, n.BX)("p", {
                                children: [W("v2.farms.harvesting"), (0, n.tZ)("span", {
                                    className: "text-primary ml-2",
                                    children: "".concat((0, S.RQ)(r, 3), " ").concat(ef).concat(ed ? " ".concat(W("v2.dill.and"), " ").concat((0, S.RQ)(eo, 3), " ETH") : "", " ").concat(ec ? " ".concat(W("v2.dill.and"), " ").concat((0, S.RQ)(ec, 3), " ").concat(null == H ? void 0 : H.toUpperCase()) : "")
                                }), (0, n.tZ)(A.Z, {
                                    children: (0, n.tZ)("span", {
                                        className: "text-foreground-alt-200 text-sm",
                                        children: (0, S.qx)(r * em + (ed ? eo * J : 0), 3)
                                    })
                                })]
                            }),
                            cta: W("v2.actions.harvest"),
                            error: ev,
                            sendTransaction: eh,
                            isWaiting: ep
                        }), Q.matches(v.GC.AWAITING_RECEIPT) && (0, n.tZ)(E.Z, {
                            chainExplorer: null == ee ? void 0 : ee.explorer,
                            txHash: Q.context.txHash
                        }), Q.matches(v.GC.SUCCESS) && (0, n.tZ)(g.Z, {
                            chainExplorer: null == ee ? void 0 : ee.explorer,
                            txHash: Q.context.txHash,
                            closeModal: eE
                        }), Q.matches(v.GC.FAILURE) && (0, n.tZ)(I.Z, {
                            chainExplorer: null == ee ? void 0 : ee.explorer,
                            txHash: Q.context.txHash,
                            retry: () => j(v.eX.RESET)
                        })]
                    })]
                })
            }
        },
        24905: function (e, t, r) {
            r.d(t, {
                GC: function () {
                    return i
                },
                XE: function () {
                    return c
                },
                eX: function () {
                    return o
                }
            });
            var n, a, i, o, l = r(4723),
                s = r(62494);
            (n = i || (i = {})).AWAITING_CONFIRMATION = "AWAITING_CONFIRMATION", n.AWAITING_RECEIPT = "AWAITING_RECEIPT", n.FAILURE = "FAILURE", n.SUCCESS = "SUCCESS", (a = o || (o = {})).TRANSACTION_SENT = "TRANSACTION_SENT", a.FAILURE = "FAILURE", a.SUCCESS = "SUCCESS", a.RESET = "RESET";
            let c = (0, l.C)({
                predictableActionArguments: !0,
                initial: i.AWAITING_CONFIRMATION,
                context: {
                    txHash: void 0
                },
                states: {
                    [i.AWAITING_CONFIRMATION]: {
                        entry: (0, s.f0)({
                            txHash: void 0
                        }),
                        on: {
                            [o.TRANSACTION_SENT]: {
                                target: i.AWAITING_RECEIPT
                            }
                        }
                    },
                    [i.AWAITING_RECEIPT]: {
                        entry: (0, s.f0)({
                            txHash: (e, t) => t.txHash
                        }),
                        on: {
                            [o.SUCCESS]: {
                                target: i.SUCCESS
                            },
                            [o.FAILURE]: {
                                target: i.FAILURE
                            }
                        }
                    },
                    [i.FAILURE]: {
                        on: {
                            [o.RESET]: {
                                target: i.AWAITING_CONFIRMATION
                            }
                        }
                    },
                    [i.SUCCESS]: {
                        on: {
                            [o.RESET]: {
                                target: i.AWAITING_CONFIRMATION
                            }
                        }
                    }
                }
            })
        },
        28187: function (e, t, r) {
            r.d(t, {
                Qr: function () {
                    return i
                },
                Xv: function () {
                    return o
                },
                _$: function () {
                    return a
                },
                aN: function () {
                    return n
                }
            });
            let n = e => {
                    let t = "w" === e.charAt(0).toLowerCase(),
                        r = t ? e.substring(1).toUpperCase() : e.toUpperCase();
                    return r
                },
                a = (e, t) => {
                    var r;
                    return null === (r = e.events) || void 0 === r ? void 0 : r.filter(e => {
                        let {
                            event: r
                        } = e;
                        return r === t
                    })
                },
                i = (e, t) => {
                    let r = null == t ? void 0 : t.find(t => t.name === e);
                    return r ? "/networks/".concat(r.name, ".png") : "/pickle.png"
                },
                o = async (e, t) => {
                    let r = e.contract,
                        n = "p".concat(e.depositToken.name.replace(/[\s\/-]/g, "").substring(0, 10)),
                        a = new URL("/tokens/pickle.png", document.baseURI).href;
                    if ((null == t ? void 0 : t.provider.request) !== void 0) try {
                        await t.provider.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: r,
                                    symbol: n,
                                    decimals: 18,
                                    image: a
                                }
                            }
                        })
                    } catch (e) {}
                }
        }
    }
]);