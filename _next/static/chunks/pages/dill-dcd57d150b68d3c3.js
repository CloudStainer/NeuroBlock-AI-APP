(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3143], {
        35921: function (e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/dill", function () {
                return l(36127)
            }])
        },
        36127: function (e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                __N_SSG: function () {
                    return eA
                },
                default: function () {
                    return eP
                }
            });
            var r = l(35944),
                a = l(68856),
                i = l(9473),
                o = l(42837),
                n = l(67294),
                d = l(18882),
                c = l(93490);
            let s = e => {
                let {
                    label: t,
                    value: l
                } = e;
                return (0, r.BX)("tr", {
                    className: "border-b border-dotted border-foreground-alt-200",
                    children: [(0, r.tZ)("td", {
                        children: (0, r.tZ)("p", {
                            className: "text-foreground-alt-200",
                            children: t
                        })
                    }), (0, r.tZ)("td", {
                        className: "ml-16 pl-16",
                        children: (0, r.tZ)("p", {
                            className: "text-foreground-alt-200",
                            children: l
                        })
                    })]
                })
            };
            var m = e => {
                    let {
                        active: t,
                        payload: l,
                        chartMode: i
                    } = e, {
                        t: o
                    } = (0, a.$G)("common");
                    if (t && l && l.length > 0) {
                        let e = l[0].payload,
                            t = 0 !== e.pickleAmount,
                            a = 0 !== e.ethAmount,
                            n = (0, c.qx)(e.ethPriceUsd * e.ethAmount + e.picklePriceUsd * e.pickleAmount),
                            m = "monthly" === i ? (0, d.Z)(e.distributionTime).format("MMM YYYY") : e.distributionTime,
                            u = (0, c.qx)(e.ethPriceUsd, 2),
                            h = (0, c.uf)(e.ethAmount, 3),
                            p = (0, c.qx)(e.ethAmount * e.ethPriceUsd),
                            f = (0, c.qx)(e.picklePriceUsd, 2),
                            v = (0, c.uf)(e.pickleAmount),
                            g = (0, c.qx)(e.pickleAmount * e.picklePriceUsd),
                            x = (0, c.uf)(e.usdPerDill, 4);
                        return (0, r.BX)("div", {
                            className: "bg-background-lightest p-5 rounded border border-foreground-alt-200",
                            children: [(0, r.tZ)("div", {
                                className: "flex justify-center mb-4",
                                children: (0, r.tZ)("p", {
                                    className: "text-foregroung-alt-200 text-lg",
                                    children: o("v2.dill.tooltip.title")
                                })
                            }), (0, r.tZ)("table", {
                                children: (0, r.BX)("tbody", {
                                    children: [m && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.distributionTime"),
                                        value: m
                                    }), n && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.periodRewardsUsd", {
                                            period: "monthly" === i ? "Month" : "Week"
                                        }),
                                        value: n
                                    }), a && u && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.ethPriceUsd"),
                                        value: u
                                    }), a && h && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.ethAmount"),
                                        value: h
                                    }), a && p && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.ethThisPeriod"),
                                        value: p
                                    }), t && f && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.picklePriceUsd"),
                                        value: f
                                    }), t && v && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.pickleAmount"),
                                        value: v
                                    }), t && g && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.pickleThisPeriod"),
                                        value: g
                                    }), x && (0, r.tZ)(s, {
                                        label: o("v2.dill.tooltip.usdPerDill"),
                                        value: x
                                    })]
                                })
                            })]
                        })
                    }
                    return null
                },
                u = l(30490);
            let h = {
                control: e => ({
                    ...e,
                    color: "rgb(var(--color-primary))",
                    backgroundColor: "rgb(var(--color-background-lightest))",
                    borderRadius: 10,
                    border: 0,
                    boxShadow: "none"
                }),
                menu: e => ({
                    ...e,
                    color: "rgb(var(--color-foreground-alt-200))",
                    backgroundColor: "rgb(var(--color-background-light))",
                    border: "1px solid rgb(var(--color-accent))",
                    borderRadius: 10,
                    zIndex: 55,
                    boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))"
                }),
                singleValue: e => ({
                    ...e,
                    color: "rgb(var(--color-foreground-alt-200))"
                }),
                option: (e, t) => {
                    let {
                        isFocused: l
                    } = t;
                    return {
                        ...e,
                        backgroundColor: l ? "rgb(var(--color-background-lightest))" : void 0,
                        borderRadius: 10,
                        transition: "all 200ms ease-in-out"
                    }
                },
                placeholder: e => ({
                    ...e,
                    color: "rgb(var(--color-foreground-alt-200))"
                })
            };
            var p = e => {
                    let {
                        chart: t,
                        setChart: l
                    } = e, i = e => {
                        l(e)
                    }, {
                        t: o
                    } = (0, a.$G)("common"), n = [{
                        label: o("v2.dill.totalRewardsUsd"),
                        value: "totalRewardsUsd"
                    }, {
                        label: o("v2.dill.rewardsUsd"),
                        value: "rewardsUsd"
                    }, {
                        label: o("v2.dill.usdPerDill"),
                        value: "usdPerDill"
                    }];
                    return (0, r.tZ)(u.ZP, {
                        className: "mt-5 w-1/3 rounded-xl border border-accent p-1",
                        defaultValue: t,
                        closeMenuOnSelect: !0,
                        styles: h,
                        placeholder: "Select Chart",
                        onChange: e => i(e),
                        options: n
                    })
                },
                f = l(9253),
                v = l(98687),
                g = l(3023),
                x = l(75358),
                b = l(25048),
                Z = l(14888),
                k = l(56880),
                w = l(88078),
                N = l(95057),
                y = l(24834);
            let E = e => {
                    let t = {};
                    return null == e || e.map(e => {
                        let l = new Date(e.distributionTime),
                            r = (l.getUTCFullYear() - 1970) * 12 + l.getUTCMonth();
                        t[r] = t[r] || [], t[r].push(e)
                    }), t
                },
                C = (e, t) => "monthly" === t ? (0, d.Z)(e).format("MMM YYYY") : (0, d.Z)(e).format("DD MMM"),
                X = e => new Date("".concat(e % 12 + 1, "/1/").concat(Math.floor(e / 12 + 1970))),
                B = e => {
                    let {
                        series: t,
                        chartMode: l
                    } = e, i = t.find(e => e.isProjected), {
                        t: o
                    } = (0, a.$G)("common");
                    return i ? (0, r.BX)("aside", {
                        className: "px-4",
                        children: ["*", " ", o("dill.projectedData", {
                            date: C(new Date(i.distributionTime), l)
                        })]
                    }) : null
                },
                T = e => {
                    let {
                        chartMode: t,
                        setChartMode: l
                    } = e, {
                        t: i
                    } = (0, a.$G)("common");
                    return (0, r.tZ)(N.E, {
                        value: t,
                        onChange: l,
                        className: "pt-4",
                        children: (0, r.BX)("div", {
                            className: "flex",
                            children: [(0, r.tZ)(N.E.Option, {
                                value: "weekly",
                                className: e => {
                                    let {
                                        checked: t
                                    } = e;
                                    return (0, c.AK)(t ? "bg-accent" : "bg-background-light hover:bg-background-lightest", "border-y border-l border-accent font-title rounded-l-full cursor-pointer text-foreground py-3 px-6 flex items-center justify-center text-sm font-medium")
                                },
                                children: (0, r.tZ)(N.E.Label, {
                                    as: "div",
                                    children: (0, r.tZ)("p", {
                                        children: i("v2.time.weekly")
                                    })
                                })
                            }, "weekly"), (0, r.tZ)(N.E.Option, {
                                value: "monthly",
                                className: e => {
                                    let {
                                        checked: t
                                    } = e;
                                    return (0, c.AK)(t ? "bg-accent" : "bg-background-light hover:bg-background-lightest", "border-y border-r border-accent font-title rounded-r-full cursor-pointer text-foreground py-3 px-6 flex items-center justify-center text-sm font-medium")
                                },
                                children: (0, r.tZ)(N.E.Label, {
                                    as: "div",
                                    children: (0, r.tZ)("p", {
                                        children: i("v2.time.monthly")
                                    })
                                })
                            }, "monthly")]
                        })
                    })
                },
                A = (e, t) => {
                    let l = 0;
                    for (let r = 0; r < e.length; r++) e[r][t] > l && (l = e[r][t]);
                    return l
                };
            var P = () => {
                    let {
                        t: e
                    } = (0, a.$G)("common"), t = (0, i.v9)(y.VH.selectCore), [l, o] = (0, n.useState)([]), [d, c] = (0, n.useState)("weekly"), [s, u] = (0, n.useState)(null);
                    (0, n.useEffect)(() => {
                        h(d)
                    }, [t, d]);
                    let h = async e => {
                        var l;
                        let r = null == t ? void 0 : null === (l = t.dill) || void 0 === l ? void 0 : l.dillWeeks;
                        if (!r) return;
                        let a = [];
                        if (r.forEach((e, t) => {
                                var l;
                                let r = e.weeklyMelonAmount * e.picklePriceUsd + e.weeklyEthAmount * e.ethPriceUsd,
                                    i = new Date(e.distributionTime),
                                    o = {
                                        ...e,
                                        pickleAmount: e.weeklyMelonAmount,
                                        ethAmount: e.weeklyEthAmount,
                                        dillAmount: e.weeklyDillAmount,
                                        distributionTime: "".concat(i.getUTCFullYear(), "-").concat(i.getUTCMonth() + 1, "-").concat(i.getUTCDate()),
                                        rewardsUsd: r,
                                        totalRewardsUsd: 0,
                                        usdPerDill: r / e.totalDillAmount
                                    };
                                o.totalRewardsUsd = ((null === (l = a[t - 1]) || void 0 === l ? void 0 : l.totalRewardsUsd) || 0) + o.pickleAmount * o.picklePriceUsd + o.ethAmount * o.ethPriceUsd, a.push(o)
                            }), "monthly" === e) {
                            let e = E(a),
                                t = Object.keys(e),
                                l = t.reduce((t, l) => {
                                    let r = e[l].reduce((e, t, r, a) => {
                                        let {
                                            length: i
                                        } = a;
                                        return e = {
                                            pickleAmount: (e.pickleAmount || 0) + t.pickleAmount,
                                            totalMelonAmount: t.totalMelonAmount || e.totalMelonAmount,
                                            dillAmount: (e.dillAmount || 0) + t.dillAmount,
                                            ethAmount: (e.ethAmount || 0) + t.ethAmount,
                                            totalDillAmount: t.totalDillAmount,
                                            pickleDillRatio: t.pickleDillRatio || e.pickleDillRatio,
                                            isProjected: t.isProjected,
                                            picklePriceUsd: (e.picklePriceUsd || 0) + t.picklePriceUsd / i,
                                            ethPriceUsd: (e.ethPriceUsd || 0) + t.ethPriceUsd / i,
                                            rewardsUsd: (e.rewardsUsd || 0) + (t.rewardsUsd || 0),
                                            totalRewardsUsd: (e.totalRewardsUsd || 0) + (t.totalRewardsUsd || 0) / i,
                                            distributionTime: X(l).toUTCString(),
                                            usdPerDill: (e.usdPerDill || 0) + (t.usdPerDill || 0) / i
                                        }
                                    }, {});
                                    return t.concat(r)
                                }, []);
                            o(l)
                        } else o(a)
                    }, N = l.length > 0 ? A(l, s ? s.value : "totalRewardsUsd") : 0;
                    return (0, r.BX)("div", {
                        className: "bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8",
                        children: [(0, r.tZ)("h2", {
                            className: "font-body font-bold text-xl",
                            children: e("v2.dill.historic")
                        }), (0, r.BX)("div", {
                            className: "flex justify-between",
                            children: [(0, r.tZ)(T, {
                                chartMode: d,
                                setChartMode: c
                            }), (0, r.tZ)(p, {
                                chart: s,
                                setChart: u
                            })]
                        }), (0, r.tZ)("aside", {
                            className: "h-[600px] p-4",
                            children: l.length > 0 ? (0, r.tZ)(f.h, {
                                children: (0, r.BX)(v.w, {
                                    data: [...l],
                                    children: [(0, r.tZ)(g.K, {
                                        dataKey: "distributionTime",
                                        tickFormatter: e => C(e, d),
                                        height: 75,
                                        angle: 300,
                                        interval: "monthly" === d ? 0 : 1,
                                        tickMargin: 35,
                                        tick: {
                                            fill: "rgb(var(--color-foreground-alt-300))",
                                            dx: -25
                                        }
                                    }), (0, r.tZ)(x.B, {
                                        tickFormatter: e => new Intl.NumberFormat("en", {
                                            notation: "compact",
                                            compactDisplay: "short"
                                        }).format(e),
                                        domain: [0, N],
                                        width: 100,
                                        padding: {
                                            top: 20
                                        },
                                        tick: {
                                            fill: "rgb(var(--color-foreground-alt-300))"
                                        },
                                        tickCount: 9,
                                        type: "number",
                                        children: (0, r.tZ)(b._, {
                                            value: e("v2.dill.totalRewardsUsd"),
                                            position: "insideLeft",
                                            angle: -90,
                                            fill: "rgb(var(--color-foreground-alt-100))",
                                            style: {
                                                textAnchor: "middle"
                                            }
                                        })
                                    }), (0, r.tZ)(Z.u, {
                                        content: e => {
                                            let {
                                                active: t,
                                                payload: l
                                            } = e;
                                            return (0, r.tZ)(m, {
                                                active: t,
                                                payload: l,
                                                chartMode: d
                                            })
                                        }
                                    }), (0, r.tZ)(k.x, {
                                        type: "linear",
                                        dataKey: s ? s.value : "totalRewardsUsd",
                                        stroke: "rgb(var(--color-accent))",
                                        strokeWidth: 2
                                    })]
                                })
                            }) : (0, r.tZ)(w.Z, {
                                variant: "rectangular",
                                animation: "wave",
                                width: "100%",
                                height: "100%",
                                style: {
                                    backgroundColor: "#FFF",
                                    opacity: .1
                                }
                            })
                        }), (0, r.tZ)(B, {
                            series: l,
                            chartMode: d
                        })]
                    })
                },
                F = l(25675),
                L = l.n(F),
                D = l(40653),
                U = l(31429),
                S = e => {
                    let {
                        dill: t
                    } = e, {
                        t: l
                    } = (0, a.$G)("common"), o = (0, i.v9)(y.VH.selectCore), n = Number(null == o ? void 0 : o.platform.picklePerBlock), d = (0, i.v9)(y.VH.selectMelonPrice), s = (0, i.v9)(y.VH.selectETHPrice), m = 1 / U.Chains.get(U.ChainNetwork.Ethereum).secondsPerBlock * 604800;
                    if (!t) return (0, r.tZ)(r.HY, {});
                    let {
                        dillWeeks: u,
                        totalMelon: h,
                        pickleLocked: p,
                        totalDill: f
                    } = t;
                    if (!u || !h || !n || !m) return (0, r.tZ)(r.HY, {});
                    let v = u[u.length - 1],
                        {
                            picklePriceUsd: g,
                            weeklyMelonAmount: x,
                            ethPriceUsd: b,
                            weeklyEthAmount: Z
                        } = u[u.length - 1],
                        k = g * x / (f * d) * 5200,
                        w = b * Z / (f * d) * 5200,
                        N = w + k;
                    return (0, r.BX)(r.HY, {
                        children: [(0, r.tZ)("h1", {
                            className: "font-body font-bold text-xl mb-4",
                            children: l("v2.dill.revenueShareStats")
                        }), (0, r.BX)("div", {
                            className: "grid grid-cols-2 xl:grid-cols-5 justify-items-center bg-background-light rounded-xl border border-foreground-alt-500 shadow py-7",
                            children: [(0, r.BX)("div", {
                                className: "mb-6 xl:mb-0",
                                children: [(0, r.BX)("h2", {
                                    className: "font-title font-medium text-foreground text-lg leading-5",
                                    children: [(0, c.qx)(t.pickleLocked * d), (0, r.tZ)(D.Z, {
                                        children: (0, r.BX)("div", {
                                            className: "flex items-center font-bold text-sm",
                                            children: [(0, r.tZ)("span", {
                                                className: "text-foreground mr-1",
                                                children: (0, c.uf)(t.pickleLocked)
                                            }), (0, r.tZ)("div", {
                                                className: "inline-block w-6 h-6",
                                                children: (0, r.tZ)(L(), {
                                                    src: "/logo.png",
                                                    width: 24,
                                                    height: 24,
                                                    alt: "MELAI",
                                                    title: "MELAI"
                                                })
                                            }), (0, r.tZ)("span", {
                                                className: "mr-2 text-foreground-alt-200",
                                                children: "="
                                            }), (0, r.tZ)("span", {
                                                className: "text-foreground mr-1",
                                                children: (0, c.uf)(t.totalDill)
                                            }), (0, r.tZ)("div", {
                                                className: "inline-block w-6 h-6",
                                                children: (0, r.tZ)(L(), {
                                                    src: "/watermelon.png",
                                                    width: 14,
                                                    height: 24,
                                                    alt: "WNUBAI",
                                                    title: "WNUBAI"
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, r.tZ)("p", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: l("v2.dill.totalValueLocked")
                                })]
                            }), (0, r.BX)("div", {
                                className: "mb-6 xl:mb-0",
                                children: [(0, r.BX)("h2", {
                                    className: "font-title font-medium text-foreground text-lg leading-5",
                                    children: [(0, c.rl)(N, 2), (0, r.BX)(D.Z, {
                                        children: [(0, r.tZ)("p", {
                                            className: "font-bold text-primary",
                                            children: "".concat(l("v2.dill.rewards"))
                                        }), (0, r.BX)("div", {
                                            className: "flex justify-between items-end",
                                            children: [(0, r.tZ)("div", {
                                                className: "font-bold text-foreground text-xs mr-2",
                                                children: "ETH:"
                                            }), (0, r.tZ)("div", {
                                                className: "text-foreground text-xs",
                                                children: (0, c.rl)(w)
                                            })]
                                        }), (0, r.BX)("div", {
                                            className: "flex justify-between items-end",
                                            children: [(0, r.tZ)("div", {
                                                className: "font-bold text-foreground text-xs mr-2",
                                                children: "MELAI:"
                                            }), (0, r.tZ)("div", {
                                                className: "text-foreground text-xs",
                                                children: (0, c.rl)(k, 2)
                                            })]
                                        })]
                                    })]
                                }), (0, r.tZ)("p", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: l("v2.dill.currentAPY")
                                })]
                            }), (0, r.BX)("div", {
                                children: [(0, r.BX)("h2", {
                                    className: "font-title font-medium text-foreground text-lg leading-5",
                                    children: [(0, c.qx)(v.weeklyMelonAmount * d + v.weeklyEthAmount * s), (0, r.BX)(D.Z, {
                                        children: [(0, r.BX)("div", {
                                            className: "flex justify-between items-end font-bold text-sm mb-1",
                                            children: [(0, r.tZ)("span", {
                                                className: "text-foreground mr-1",
                                                children: (0, c.uf)(v.weeklyMelonAmount)
                                            }), (0, r.tZ)("div", {
                                                className: "inline-block w-5 h-5 ml-2",
                                                children: (0, r.tZ)(L(), {
                                                    src: "/logo.png",
                                                    width: 24,
                                                    height: 24,
                                                    alt: "MELAI",
                                                    title: "MELAI"
                                                })
                                            })]
                                        }), (0, r.BX)("div", {
                                            className: "flex justify-between items-end font-bold text-sm mb-1",
                                            children: [(0, r.tZ)("span", {
                                                className: "text-foreground mr-1",
                                                children: (0, c.uf)(v.weeklyEthAmount, 3)
                                            }), (0, r.tZ)("div", {
                                                className: "inline-block w-5 h-5 ml-2",
                                                children: (0, r.tZ)(L(), {
                                                    src: "/tokens/eth.png",
                                                    width: 24,
                                                    height: 24,
                                                    alt: "ETH",
                                                    title: "ETH"
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, r.tZ)("p", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: l("v2.dill.upcomingDistributionValue")
                                })]
                            }), (0, r.BX)("div", {
                                className: "mb-6 xl:mb-0",
                                children: [(0, r.tZ)("h2", {
                                    className: "font-title font-medium text-foreground text-lg leading-5",
                                    children: (0, c.p6)(new Date(v.distributionTime))
                                }), (0, r.tZ)("p", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: l("v2.dill.upcomingDistributionDate")
                                })]
                            }), (0, r.BX)("div", {
                                children: [(0, r.tZ)("h2", {
                                    className: "font-title font-medium text-foreground text-lg leading-5",
                                    children: l("v2.time.year_plural", {
                                        count: Math.round(400 * (f / p)) / 100
                                    })
                                }), (0, r.tZ)("p", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: l("v2.dill.averageLock")
                                })]
                            })]
                        })]
                    })
                },
                H = l(86688),
                I = l(69876),
                M = l(56371),
                G = l(27484),
                _ = l.n(G),
                R = l(34211),
                O = l(88580);
            let j = (e, t) => {
                    let l = new Date(e);
                    return l.setDate(l.getDate() + t), l
                },
                Y = e => e ? 86400 * Math.ceil(e.getTime() / 864e5) : 0,
                $ = (e, t) => Math.ceil((t.getTime() - e.getTime()) / 6048e5),
                V = function (e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        r = 604800 * Math.floor(Y(t) / 604800);
                    return (r - (l ? +l : +new Date) / 1e3) / 126144e3 * e
                };
            var K = e => {
                    let {
                        showValue: t = !1,
                        setLockTime: l,
                        dill: i
                    } = e, {
                        t: o
                    } = (0, a.$G)("common"), d = (null == i ? void 0 : i.lockEnd) ? _().unix(parseFloat(null == i ? void 0 : i.lockEnd)) : void 0, s = [{
                        value: 1 / 4 / 12,
                        unit: o("v2.time.day_plural", {
                            count: void 0
                        }),
                        count: 30,
                        weeks: 4.3
                    }, {
                        value: 1 / 4,
                        unit: o("v2.time.year_singular"),
                        count: 1,
                        weeks: 52.1429
                    }, {
                        value: .5,
                        unit: o("v2.time.year_plural", {
                            count: void 0
                        }),
                        count: 2,
                        weeks: 104.2858
                    }, {
                        value: 1,
                        unit: o("v2.time.year_plural", {
                            count: void 0
                        }),
                        count: 4,
                        weeks: 208.5716
                    }], [m, u] = (0, n.useState)(4);
                    return (0, r.tZ)(N.E, {
                        value: m,
                        onChange: e => {
                            u(e), l(j(new Date, 7 * s[e - 1].weeks))
                        },
                        children: (0, r.tZ)("div", {
                            className: "grid grid-cols-4 gap-2",
                            children: s.map((e, l) => (0, r.tZ)(N.E.Option, {
                                value: l + 1,
                                disabled: null == d ? void 0 : d.isAfter(_()().add(e.weeks, "week")),
                                className: e => {
                                    let {
                                        checked: t,
                                        disabled: l
                                    } = e;
                                    return (0, c.AK)(t ? "bg-background-lightest border-primary-light" : "bg-background-light border-foreground-alt-500 hover:bg-background-lightest", l ? "text-foreground-alt-400" : "text-foreground", "font-title border rounded-xl cursor-pointer py-4 px-6 flex items-center justify-center text-sm font-medium")
                                },
                                children: (0, r.BX)(N.E.Label, {
                                    as: "div",
                                    children: [(0, r.tZ)("p", {
                                        children: e.count
                                    }), (0, r.tZ)("p", {
                                        children: e.unit
                                    }), t && (0, r.tZ)("p", {
                                        className: "mt-4 text-primary",
                                        children: e.value.toFixed(4)
                                    })]
                                })
                            }, e.weeks))
                        })
                    })
                },
                W = l(40665),
                q = l(410),
                z = l(61744),
                J = l(2593),
                Q = l(77044),
                ee = l(4390),
                et = l(94358),
                el = l(9177),
                er = e => {
                    let {
                        error: t,
                        sendTransaction: l,
                        tokenName: i,
                        amount: o,
                        depositTokenPrice: n,
                        isWaiting: d,
                        previousStep: s,
                        lockEnd: m = null
                    } = e, {
                        t: u
                    } = (0, a.$G)("common"), h = u(m ? "v2.dill.confirmLock" : "v2.farms.confirmDeposit"), p = parseFloat(o) * (n || 0);
                    return (0, r.BX)(r.HY, {
                        children: [(0, r.tZ)("div", {
                            className: "flex justify-center my-2",
                            children: (0, r.tZ)("div", {
                                className: "w-1/2 min-h-[200px]",
                                children: (0, r.tZ)(L(), {
                                    src: "/animations/working.gif",
                                    alt: u("v2.prompts.pleaseConfirm"),
                                    title: u("v2.prompts.pleaseConfirm"),
                                    width: 0,
                                    height: 0,
                                    sizes: "100vw",
                                    style: {
                                        width: "auto",
                                        height: "auto",
                                        maxWidth: "100%",
                                        maxHeight: "100%"
                                    }
                                })
                            })
                        }), (0, r.tZ)("h2", {
                            className: "text-foreground-alt-100 font-title text-lg mt-6 mb-4",
                            children: h
                        }), (0, r.BX)("p", {
                            className: "text-foreground-alt-200 text-sm mb-4",
                            children: [(0, r.tZ)("span", {
                                className: "font-title text-primary text-base mr-2",
                                children: o
                            }), i, p && (0, r.tZ)(D.Z, {
                                children: (0, r.tZ)("span", {
                                    className: "text-foreground-alt-200 text-sm",
                                    children: "~ ".concat((0, c.qx)(p))
                                })
                            })]
                        }), m && (0, r.BX)("p", {
                            className: "text-foreground-alt-200 text-sm mb-4",
                            children: [u("v2.dill.lockingUntil"), " ", (0, r.tZ)("span", {
                                className: "font-title text-primary text-base mr-2",
                                children: _()(m).format("LL")
                            })]
                        }), (0, r.tZ)(et.Z, {
                            error: t
                        }), (0, r.BX)("div", {
                            className: "flex justify-center items-center pt-4",
                            children: [(0, r.tZ)(R.Z, {
                                type: "secondary",
                                onClick: s,
                                className: "mr-3",
                                children: u("v2.actions.back")
                            }), (0, r.BX)(R.Z, {
                                onClick: l,
                                state: d ? "disabled" : "enabled",
                                className: (0, c.AK)(d && "p-3"),
                                children: [d && (0, r.tZ)("div", {
                                    className: "w-5 h-5 mr-3",
                                    children: (0, r.tZ)(el.Z, {})
                                }), u(m ? "v2.actions.lock" : "v2.actions.deposit")]
                            })]
                        })]
                    })
                },
                ea = l(66546),
                ei = l(96887),
                eo = l(65623),
                en = l(77381),
                ed = l(80780),
                ec = e => {
                    var t;
                    let {
                        visible: l,
                        userInput: o,
                        error: d,
                        lockTime: s,
                        dillBalance: m,
                        closeParentModal: u
                    } = e, {
                        t: h
                    } = (0, a.$G)("common"), [p, f] = (0, n.useState)(!1), [v, g] = (0, q.e)(ee.XE), x = (0, i.v9)(y.VH.selectCore), b = U.Chains.get(U.ChainNetwork.Ethereum), {
                        account: Z
                    } = (0, Q.Ge)(), k = (0, en.Ko)(c.mg), w = async (e, t) => {
                        if (k && Z) {
                            for (;;) {
                                let e = await k["balanceOf(address)"](Z),
                                    t = e.gt(z.parseEther(m.toString()));
                                if (t) break;
                                await (0, c._v)(1e3)
                            }
                            t(H.EJ.refresh())
                        }
                    }, {
                        sendTransaction: N,
                        error: E,
                        isWaiting: C
                    } = (0, ed.kF)((() => {
                        if (!k) return;
                        let e = o ? z.parseEther(o) : J.O$.from(0);
                        return () => m ? k.increase_amount(e, {
                            gasLimit: 35e4
                        }) : k.create_lock(e, Y(s), {
                            gasLimit: 6e5
                        })
                    })(), w, g, !0), X = () => f(!0);
                    return (0, n.useEffect)(() => {
                        g(ee.eX.SUBMIT_FORM, {
                            amount: o
                        })
                    }, []), (0, r.BX)(r.HY, {
                        children: [l && (0, r.BX)(r.HY, {
                            children: [(0, r.tZ)(et.Z, {
                                error: d
                            }), (0, r.tZ)(R.Z, {
                                type: "primary",
                                state: parseFloat(o) > 0 && !d ? "enabled" : "disabled",
                                onClick: () => {
                                    parseFloat(o) > 0 && (X(), g(ee.eX.SUBMIT_FORM, {
                                        userInput: o
                                    }))
                                },
                                children: h(m ? "v2.dill.addMelon" : "v2.dill.createLock")
                            })]
                        }), (0, r.BX)(O.Z, {
                            isOpen: p,
                            closeModal: () => f(!1),
                            title: h(m ? "v2.dill.addDill" : "v2.dill.depositMelon"),
                            children: [v.matches(ee.GC.AWAITING_CONFIRMATION) && (0, r.tZ)(er, {
                                tokenName: h("v2.dill.pickle"),
                                amount: o,
                                depositTokenPrice: null == x ? void 0 : null === (t = x.prices) || void 0 === t ? void 0 : t.pickle,
                                error: E,
                                sendTransaction: N,
                                isWaiting: C,
                                previousStep: () => f(!1),
                                lockEnd: m ? void 0 : s
                            }), v.matches(ee.GC.AWAITING_RECEIPT) && (0, r.tZ)(ea.Z, {
                                chainExplorer: null == b ? void 0 : b.explorer,
                                txHash: v.context.txHash
                            }), v.matches(ee.GC.SUCCESS) && (0, r.tZ)(ei.Z, {
                                chainExplorer: null == b ? void 0 : b.explorer,
                                txHash: v.context.txHash,
                                closeModal: () => {
                                    f(!1), u()
                                }
                            }), v.matches(ee.GC.FAILURE) && (0, r.tZ)(eo.Z, {
                                chainExplorer: null == b ? void 0 : b.explorer,
                                txHash: v.context.txHash,
                                retry: () => g(ee.eX.RESET)
                            })]
                        })]
                    })
                },
                es = l(88936);
            l(85213);
            var em = l(50517),
                eu = e => {
                    let {
                        setLockTime: t,
                        dill: l
                    } = e;
                    if (!(null == l ? void 0 : l.lockEnd)) return (0, r.tZ)(r.HY, {});
                    let a = parseFloat(null == l ? void 0 : l.lockEnd) ? (0, em.Cr)(parseFloat(null == l ? void 0 : l.lockEnd)) : new Date,
                        i = $(a, j(new Date, 1453)),
                        [o, d] = (0, n.useState)(i);
                    return (0, r.tZ)(es.Z, {
                        style: {
                            width: "auto"
                        },
                        className: "m-5",
                        max: i,
                        value: o,
                        onChange: e => {
                            d(e), t(j(a, 7 * e))
                        },
                        handleStyle: {
                            backgroundColor: "rgb(var(--color-accent))",
                            borderColor: "rgb(var(--color-accent))",
                            boxShadow: "none",
                            opacity: 1
                        },
                        trackStyle: {
                            backgroundColor: "rgb(var(--color-accent))",
                            borderColor: "rgb(var(--color-accent))"
                        },
                        railStyle: {
                            backgroundColor: "rgb(var(--color-foreground-alt-400))"
                        }
                    })
                },
                eh = e => {
                    let {
                        isOpen: t,
                        closeModal: l,
                        pickles: i,
                        dill: o
                    } = e, {
                        t: d
                    } = (0, a.$G)("common"), [s, m] = (0, n.useState)(), u = Error(d("v2.farms.invalidAmount")), h = i[U.ChainNetwork.Ethereum] ? (0, M.formatEther)(i[U.ChainNetwork.Ethereum]) : "0", [p, f] = (0, n.useState)(h), [v, g] = (0, n.useState)(j(new Date, 1459)), x = e => {
                        if (!e) {
                            m(u);
                            return
                        }
                        let t = parseFloat(e),
                            l = t > 0 && t <= parseFloat(h);
                        l ? m(void 0) : m(u)
                    }, b = parseInt((null == o ? void 0 : o.dillApproval) || "0") > parseInt(i[U.ChainNetwork.Ethereum] || "0");
                    return (0, r.BX)(O.Z, {
                        isOpen: t,
                        closeModal: l,
                        title: d(o.balance ? "v2.dill.addDill" : "v2.dill.getDill"),
                        children: [(0, r.BX)("div", {
                            className: "bg-background-lightest rounded-xl px-4 py-2",
                            children: [(0, r.BX)("div", {
                                className: "flex justify-between mb-2",
                                children: [(0, r.tZ)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: d("v2.balances.amount")
                                }), (0, r.BX)("p", {
                                    className: "font-bold text-foreground-alt-300 text-xs tracking-normal leading-4",
                                    children: [d("v2.dill.pickleBalance"), ": ", parseFloat(h).toFixed(4)]
                                })]
                            }), (0, r.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, r.tZ)("input", {
                                    type: "number",
                                    className: "w-3/5 bg-transparent focus:outline-none flex-shrink-0 font-medium text-primary leading-7",
                                    value: p,
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e.target;
                                        f(t), x(t)
                                    }
                                }), (0, r.tZ)(R.Z, {
                                    size: "small",
                                    onClick: () => {
                                        f(h), x(h)
                                    },
                                    children: d("v2.balances.max")
                                }), " "]
                            })]
                        }), (0, r.tZ)("div", {
                            className: "my-6",
                            children: !parseFloat(o.balance) && (0, r.BX)(r.HY, {
                                children: [(0, r.tZ)(K, {
                                    showValue: !0,
                                    setLockTime: g
                                }), (0, r.tZ)(eu, {
                                    lockTime: v,
                                    setLockTime: g,
                                    dill: o
                                }), (0, r.BX)("p", {
                                    className: "text-foreground-alt-200 text-sm mb-4",
                                    children: [" ", d("v2.dill.lockingUntil"), " ", (0, r.tZ)("span", {
                                        className: "font-title text-primary text-base mr-2",
                                        children: _()(v).format("LL")
                                    })]
                                }), (0, r.BX)("p", {
                                    className: "text-foreground-alt-200 text-sm mb-4",
                                    children: [d("v2.dill.estimatedDill"), " ", (0, r.BX)("span", {
                                        className: "font-title text-primary text-base mr-2",
                                        children: [V(parseFloat(p), v).toFixed(3), " WNUBAI"]
                                    })]
                                })]
                            })
                        }), (0, r.tZ)(W.Z, {
                            tokenAddress: c.UI,
                            tokenName: "MELAI",
                            spenderAddress: c.mg,
                            storeAttribute: "dillApproval",
                            chainName: U.ChainNetwork.Ethereum,
                            visible: !b,
                            state: "enabled",
                            type: "dill"
                        }), (0, r.tZ)(ec, {
                            visible: b,
                            lockTime: v,
                            userInput: p,
                            error: s,
                            dillBalance: +o.balance,
                            closeParentModal: l
                        })]
                    })
                },
                ep = e => {
                    var t;
                    let {
                        userDill: l,
                        pickles: o
                    } = e, d = (0, i.v9)(y.VH.selectMelonPrice), {
                        t: s
                    } = (0, a.$G)("common"), [m, u] = (0, n.useState)(!1), h = (0, i.v9)(y.VH.selectCore), p = parseFloat((0, M.formatEther)(l.balance)), f = (null == h ? void 0 : null === (t = h.dill) || void 0 === t ? void 0 : t.totalDill) || 0, v = parseFloat((0, M.formatEther)(l.pickleLocked || "0")), g = parseFloat((0, M.formatEther)(o[U.ChainNetwork.Ethereum] || "0"));
                    return (0, r.BX)(r.HY, {
                        children: [(0, r.tZ)("div", {
                            children: (0, r.BX)("aside", {
                                className: "border border-foreground-alt-500 grow font-title rounded-lg tracking-normal p-4",
                                children: [(0, r.BX)("h1", {
                                    className: "font-medium text-foreground-alt-200 text-base leading-5",
                                    children: [s("v2.dill.dillAmount"), !!p && (0, r.tZ)(D.Z, {
                                        children: (0, r.tZ)("span", {
                                            className: "text-foreground font-bold text-sm",
                                            children: s("v2.dill.yourShare", {
                                                percentage: (0, c.rl)(p / f * 100, 6)
                                            })
                                        })
                                    })]
                                }), (0, r.BX)("div", {
                                    className: "flex justify-between items-top",
                                    children: [(0, r.BX)("div", {
                                        children: [(0, r.tZ)("br", {}), (0, r.tZ)("p", {
                                            className: "text-primary whitespace-pre font-medium text-base",
                                            children: p.toFixed(4)
                                        }), (0, r.tZ)("br", {}), (0, r.BX)("h1", {
                                            className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                            children: [v.toFixed(2), " ", s("v2.dill.pickle"), " (", (0, c.qx)(v * d), ") ", s("v2.dill.locked")]
                                        }), (0, r.BX)("h1", {
                                            className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                            children: [g.toFixed(0), " ", s("v2.dill.pickle"), 0 !== g ? " (".concat((0, c.qx)(g * d), ") ") : " ", s("v2.dill.inWallet")]
                                        })]
                                    }), (0, r.tZ)(R.Z, {
                                        type: "primary",
                                        onClick: () => u(!0),
                                        children: s(p ? "v2.dill.addDill" : "v2.dill.getDill")
                                    })]
                                }), (0, r.tZ)("br", {})]
                            })
                        }), (0, r.tZ)(eh, {
                            isOpen: m,
                            dill: l,
                            pickles: o,
                            closeModal: () => u(!1)
                        })]
                    })
                },
                ef = l(71335),
                ev = l(25604),
                eg = l(50790),
                ex = l(7518),
                eb = e => {
                    let {
                        isOpen: t,
                        closeModal: l,
                        dill: i
                    } = e, {
                        t: d
                    } = (0, a.$G)("common"), [s, m] = (0, n.useState)(j(new Date, 1459)), [u, h] = (0, q.e)(ee.XE), [p, f] = (0, n.useState)(!1), [v, g] = (0, n.useState)(), x = (0, eg.TL)(), [b, Z] = (0, n.useState)(void 0), k = "".concat(U.Chains.get(U.ChainNetwork.Ethereum).explorer, "/tx/");
                    (0, n.useEffect)(() => {
                        h(ee.eX.SUBMIT_FORM, {
                            amount: null
                        })
                    }, [t]);
                    let {
                        account: w
                    } = (0, Q.Ge)(), N = (0, en.Ko)(c.mg);
                    if (!parseFloat(null == i ? void 0 : i.pickleLocked)) return (0, r.tZ)(r.HY, {});
                    if (!N || !w) return null;
                    let y = async () => {
                        g(void 0), f(!0);
                        try {
                            let e = Y(s),
                                t = await N.increase_unlock_time(e, {
                                    gasLimit: 41e4
                                });
                            h(ee.eX.TRANSACTION_SENT, {
                                txHash: t.hash
                            }), Z(d("v2.farms.waitingToBeProcessed")), t.wait().then(async () => {
                                for (;;) {
                                    let e = await N.locked__end(w),
                                        t = e.gt(J.O$.from((null == i ? void 0 : i.lockEnd) || "0"));
                                    if (t) break;
                                    await (0, ev._)(1e3)
                                }
                                x(H.EJ.refresh()), h(ee.eX.SUCCESS), Z(d("v2.farms.success"))
                            }, () => {
                                h(ee.eX.FAILURE), Z(d("v2.farms.transactionFailed"))
                            }).finally(() => f(!1))
                        } catch (e) {
                            g(e), f(!1)
                        }
                    };
                    return (0, r.BX)(O.Z, {
                        isOpen: t,
                        closeModal: l,
                        title: d("v2.dill.increaseLockDate"),
                        children: [(0, r.BX)("div", {
                            className: "mb-6",
                            children: [(0, r.tZ)(K, {
                                setLockTime: m,
                                dill: i
                            }), (0, r.tZ)(eu, {
                                lockTime: s,
                                setLockTime: m,
                                dill: i
                            })]
                        }), (0, r.BX)("div", {
                            className: "flex justify-center pb-2",
                            children: [(0, r.tZ)("span", {
                                className: "text-foreground whitespace-pre font-medium text-base",
                                children: _().unix(parseFloat(null == i ? void 0 : i.lockEnd)).format("LL")
                            }), (0, r.tZ)(ef.Z, {
                                className: "mx-4 pt-1 w-6 h-6 text-foreground-alt-200"
                            }), (0, r.tZ)("span", {
                                className: "text-primary font-bold whitespace-pre text-base",
                                children: _()(s).format("LL")
                            })]
                        }), (0, r.BX)("div", {
                            className: "flex justify-center pb-6",
                            children: [(0, r.BX)("span", {
                                className: "text-foreground whitespace-pre font-medium text-base",
                                children: [parseFloat((0, M.formatUnits)(i.balance)).toFixed(3), " WNUBAI"]
                            }), (0, r.tZ)(ef.Z, {
                                className: "mx-4 pt-1 w-6 h-6 text-foreground-alt-200"
                            }), (0, r.BX)("span", {
                                className: "text-primary font-bold whitespace-pre text-base",
                                children: ["~", (V(parseFloat((0, M.formatUnits)(i.pickleLocked)), s, new Date(1e3 * parseFloat(null == i ? void 0 : i.lockEnd))) + +parseFloat((0, M.formatUnits)(i.balance))).toFixed(3), " ", "WNUBAI"]
                            })]
                        }), (0, r.tZ)(et.Z, {
                            error: v
                        }), (0, r.BX)(R.Z, {
                            state: p ? "disabled" : "enabled",
                            onClick: u.matches(ee.GC.SUCCESS) ? l : y,
                            children: [p && (0, r.tZ)("div", {
                                className: "w-5 h-5 mr-3",
                                children: (0, r.tZ)(el.Z, {})
                            }), (u.matches(ee.GC.AWAITING_CONFIRMATION) || u.matches(ee.GC.AWAITING_RECEIPT) || u.matches(ee.GC.FAILURE)) && d("v2.actions.confirm"), u.matches(ee.GC.SUCCESS) && d("v2.actions.close")]
                        }), b && (0, r.BX)(r.HY, {
                            children: [(0, r.tZ)("p", {
                                className: "text-foreground-alt-300 text-sm my-4",
                                children: b
                            }), (0, r.BX)("div", {
                                className: "flex items-center justify-center space-x-3",
                                children: [u.matches(ee.GC.AWAITING_RECEIPT) && (0, r.tZ)(ex.Z, {}), (0, r.tZ)(o.Z, {
                                    href: k.concat(u.context.txHash || ""),
                                    external: !0,
                                    primary: !0,
                                    className: "grow-0",
                                    children: (0, c.Xn)(u.context.txHash || "")
                                })]
                            })]
                        })]
                    })
                },
                eZ = e => {
                    let {
                        error: t,
                        sendTransaction: l,
                        isWaiting: i,
                        previousStep: o
                    } = e, {
                        t: n
                    } = (0, a.$G)("common"), d = n("v2.dill.confirmWithdraw");
                    return (0, r.BX)(r.HY, {
                        children: [(0, r.tZ)("div", {
                            className: "flex justify-center my-2",
                            children: (0, r.tZ)("div", {
                                className: "w-1/2 min-h-[200px]",
                                children: (0, r.tZ)(L(), {
                                    src: "/animations/working.gif",
                                    alt: n("v2.prompts.pleaseConfirm"),
                                    title: n("v2.prompts.pleaseConfirm"),
                                    height: 0,
                                    width: 0,
                                    sizes: "100vw",
                                    style: {
                                        width: "200px",
                                        height: "auto"
                                    },
                                    loading: "eager"
                                })
                            })
                        }), (0, r.tZ)("h2", {
                            className: "text-foreground-alt-100 font-title text-lg mt-6 mb-4",
                            children: d
                        }), (0, r.tZ)(et.Z, {
                            error: t
                        }), (0, r.BX)("div", {
                            className: "flex justify-center items-center pt-4",
                            children: [(0, r.tZ)(R.Z, {
                                type: "secondary",
                                onClick: o,
                                className: "mr-3",
                                children: n("v2.actions.back")
                            }), (0, r.BX)(R.Z, {
                                onClick: l,
                                state: i ? "disabled" : "enabled",
                                className: (0, c.AK)(i && "p-3"),
                                children: [i && (0, r.tZ)("div", {
                                    className: "w-5 h-5 mr-3",
                                    children: (0, r.tZ)(el.Z, {})
                                }), "".concat(n("v2.actions.withdraw"), " NUBAIs")]
                            })]
                        })]
                    })
                },
                ek = e => {
                    let {
                        visible: t,
                        dill: l,
                        error: i,
                        closeParentModal: o
                    } = e, {
                        t: d
                    } = (0, a.$G)("common"), [s, m] = (0, n.useState)(!1), [u, h] = (0, q.e)(ee.XE), p = U.Chains.get(U.ChainNetwork.Ethereum), {
                        account: f
                    } = (0, Q.Ge)(), v = (0, en.Ko)(c.mg), g = async (e, t) => {
                        if (v && f) {
                            for (;;) {
                                let e = await v.locked(f, {
                                        gasLimit: 41e4
                                    }),
                                    t = e.amount.isZero();
                                if (t) break;
                                await (0, c._v)(1e3)
                            }
                            t(H.EJ.refresh())
                        }
                    }, {
                        sendTransaction: x,
                        error: b,
                        isWaiting: Z
                    } = (0, ed.kF)((() => {
                        if (v) return () => v.withdraw({
                            gasLimit: 41e4
                        })
                    })(), g, h, !0), k = () => m(!0);
                    return (0, n.useEffect)(() => {
                        h(ee.eX.SUBMIT_FORM)
                    }, []), (0, r.BX)(r.HY, {
                        children: [t && (0, r.BX)(r.HY, {
                            children: [(0, r.tZ)(et.Z, {
                                error: i
                            }), (0, r.tZ)(R.Z, {
                                type: "primary",
                                state: i ? "disabled" : "enabled",
                                onClick: () => {
                                    k(), h(ee.eX.SUBMIT_FORM)
                                },
                                children: "".concat(d("v2.dill.withdraw", {
                                    nMelons: parseFloat((0, M.formatEther)(l.pickleLocked)).toFixed(2)
                                }))
                            })]
                        }), (0, r.BX)(O.Z, {
                            isOpen: s,
                            closeModal: () => m(!1),
                            title: "".concat(d("v2.actions.withdraw"), " MELAI"),
                            children: [u.matches(ee.GC.AWAITING_CONFIRMATION) && (0, r.tZ)(eZ, {
                                error: b,
                                sendTransaction: x,
                                isWaiting: Z,
                                previousStep: () => m(!1)
                            }), u.matches(ee.GC.AWAITING_RECEIPT) && (0, r.tZ)(ea.Z, {
                                chainExplorer: null == p ? void 0 : p.explorer,
                                txHash: u.context.txHash
                            }), u.matches(ee.GC.SUCCESS) && (0, r.tZ)(ei.Z, {
                                chainExplorer: null == p ? void 0 : p.explorer,
                                txHash: u.context.txHash,
                                closeModal: () => {
                                    m(!1), o()
                                }
                            }), u.matches(ee.GC.FAILURE) && (0, r.tZ)(eo.Z, {
                                chainExplorer: null == p ? void 0 : p.explorer,
                                txHash: u.context.txHash,
                                retry: () => h(ee.eX.RESET)
                            })]
                        })]
                    })
                },
                ew = e => {
                    let {
                        isOpen: t,
                        closeModal: l,
                        dill: o
                    } = e, {
                        t: d
                    } = (0, a.$G)("common"), [s, m] = (0, n.useState)(), u = Error(d("v2.dill.invalidBalance")), {
                        account: h
                    } = (0, Q.Ge)(), p = (0, i.v9)(y.VH.selectMelonPrice), f = (0, en.Ko)(c.mg), v = parseFloat((0, M.formatEther)(o.pickleLocked)).toFixed(2), g = (0, c.qx)(parseFloat((0, M.formatEther)(o.pickleLocked)) * p), x = parseFloat(null == o ? void 0 : o.lockEnd) ? _().unix(parseFloat(null == o ? void 0 : o.lockEnd)) : void 0, b = _()(x), Z = () => {
                        +v > 0 ? m(void 0) : m(u)
                    };
                    return ((0, n.useEffect)(() => Z(), [o]), parseFloat(null == o ? void 0 : o.pickleLocked)) ? f && h ? (0, r.BX)(O.Z, {
                        isOpen: t,
                        closeModal: l,
                        title: "".concat(d("v2.actions.withdraw"), " NUBAIs"),
                        children: [(0, r.tZ)("div", {
                            className: "flex justify-center pb-6",
                            children: (0, r.tZ)("span", {
                                className: "text-foreground whitespace-wrap font-medium text-base",
                                children: d("v2.dill.withdrawModalText", {
                                    unlockDate: _()(b).format("LL"),
                                    nMelons: v,
                                    pickleValue: g
                                })
                            })
                        }), (0, r.tZ)(ek, {
                            visible: !0,
                            dill: o,
                            error: s,
                            closeParentModal: l
                        })]
                    }) : null : (0, r.tZ)(r.HY, {})
                },
                eN = e => {
                    let {
                        dill: t
                    } = e, {
                        t: l
                    } = (0, a.$G)("common"), i = parseFloat(null == t ? void 0 : t.lockEnd) ? _().unix(parseFloat(null == t ? void 0 : t.lockEnd)) : void 0, o = _()(), d = _()(i), c = d < o, s = _().duration(d.diff(o)), m = s.days(), u = s.years(), h = s.months(), [p, f] = (0, n.useState)(!1), [v, g] = (0, n.useState)(!1);
                    return (0, r.BX)(r.HY, {
                        children: [(0, r.BX)("aside", {
                            className: "border border-foreground-alt-500 grow font-title rounded-lg tracking-normal p-4",
                            children: [(0, r.tZ)("h1", {
                                className: "font-medium text-foreground-alt-200 text-base leading-5",
                                children: l("v2.dill.unlockDate")
                            }), (0, r.BX)("div", {
                                className: "flex justify-between items-top",
                                children: [(0, r.tZ)("p", {
                                    className: "py-6 text-primary whitespace-pre font-medium text-base",
                                    children: i ? c ? l("v2.dill.lockExpired", {
                                        date: _()(d).format("L")
                                    }) : _()(i).format("LL") : "--"
                                }), c ? (0, r.tZ)(R.Z, {
                                    state: parseFloat(null == t ? void 0 : t.pickleLocked) ? "enabled" : "disabled",
                                    onClick: () => g(!0),
                                    children: l("v2.actions.withdraw")
                                }) : (0, r.tZ)(R.Z, {
                                    state: parseFloat(null == t ? void 0 : t.pickleLocked) ? "enabled" : "disabled",
                                    onClick: () => f(!0),
                                    children: "+"
                                })]
                            }), c ? (0, r.tZ)("h1", {
                                className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                children: l("v2.dill.withdraw")
                            }) : (0, r.BX)("h1", {
                                className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                children: [u ? 1 == u ? l("v2.time.year") : l("v2.time.year_plural", {
                                    count: u
                                }) : "", " ", h ? 1 == h ? l("v2.time.month") : l("v2.time.month_plural", {
                                    count: h
                                }) : "", " ", m ? 1 == m ? l("v2.time.day") : l("v2.time.day_plural", {
                                    count: m
                                }) : "", u || h || m ? "" : l("v2.dill.noTimeLockFound")]
                            })]
                        }), !!parseFloat(null == t ? void 0 : t.pickleLocked) && (0, r.tZ)(eb, {
                            isOpen: p,
                            closeModal: () => f(!1),
                            dill: t
                        }), c && (0, r.tZ)(ew, {
                            isOpen: v,
                            closeModal: () => g(!1),
                            dill: t
                        })]
                    })
                },
                ey = l(5155),
                eE = e => {
                    let {
                        dill: t
                    } = e, l = J.O$.from(t.claimableETHV2), o = J.O$.from(t.claimableV2), n = J.O$.from(t.claimable), d = J.O$.from(t.totalClaimableETHV2), s = J.O$.from(t.totalClaimableTokenV2), {
                        t: m
                    } = (0, a.$G)("common"), u = (0, i.v9)(y.VH.selectMelonPrice), h = (0, i.v9)(y.VH.selectETHPrice), p = parseFloat((0, M.formatEther)(d)), f = parseFloat((0, M.formatEther)(s.add(n)));
                    return (0, r.BX)("aside", {
                        className: "border border-foreground-alt-500 grow font-title rounded-lg tracking-normal p-4",
                        children: [(0, r.BX)("h1", {
                            className: "font-medium text-foreground-alt-200 text-base leading-5",
                            children: [m("v2.dill.earnedRewards"), (0, r.tZ)(D.Z, {
                                children: (0, r.tZ)("div", {
                                    className: "flex justify-between items-end",
                                    children: (0, r.tZ)("div", {
                                        className: "text-foreground text-xs",
                                        children: m("v2.dill.earnedRewardToolTip")
                                    })
                                })
                            })]
                        }), (0, r.BX)("div", {
                            className: "flex justify-between items-top",
                            children: [(0, r.BX)("div", {
                                children: [(0, r.tZ)("br", {}), (0, r.tZ)("p", {
                                    className: "text-primary whitespace-pre font-medium text-base",
                                    children: "".concat(p.toFixed(8), " ETH")
                                }), (0, r.tZ)("h1", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: "(".concat((0, c.qx)(p * h), ")")
                                }), (0, r.tZ)("p", {
                                    className: "text-primary whitespace-pre font-medium text-base",
                                    children: "".concat(f.toFixed(4), " MELAI")
                                }), (0, r.tZ)("h1", {
                                    className: "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                                    children: "(".concat((0, c.qx)(f * u), ")")
                                }), (0, r.tZ)("br", {})]
                            }), (0, r.tZ)(ey.Z, {
                                rewarderType: "dill",
                                claimableV1: n,
                                claimableV2: o,
                                claimableETHV2: l,
                                network: U.ChainNetwork.Ethereum
                            })]
                        })]
                    })
                },
                eC = l(20859),
                eX = l(66558),
                eB = () => {
                    let e = (0, eC.m)(),
                        t = (0, eg.CG)(t => H.G0.selectData(t, e)),
                        {
                            network: l,
                            needsNetworkSwitch: a
                        } = (0, eC.D)(U.ChainNetwork.Ethereum);
                    if (!t) return (0, r.tZ)("div", {
                        className: "col-span-3",
                        children: (0, r.tZ)(I.Z, {
                            waitForUserModel: !0,
                            className: "py-8"
                        })
                    });
                    let {
                        pickles: i,
                        dill: o
                    } = t;
                    return (0, r.BX)(r.HY, {
                        children: [(0, r.tZ)(ep, {
                            pickles: i,
                            userDill: o
                        }), (0, r.tZ)(eN, {
                            dill: o
                        }), (0, r.tZ)(eE, {
                            dill: o
                        }), a && (0, r.tZ)("div", {
                            className: "absolute inset-0 flex grow justify-center items-center border border-foreground-alt-500 rounded-lg bg-background-light bg-opacity-90 backdrop-filter backdrop-blur-sm",
                            children: (0, r.tZ)(eX.Z, {
                                network: l
                            })
                        })]
                    })
                };
            let eT = () => {
                let e = (0, i.v9)(y.VH.selectCore);
                return (0, r.tZ)("div", {
                    className: "w-full xl:w-4/5 mb-5",
                    children: e ? (0, r.BX)(r.HY, {
                        children: [(0, r.tZ)("div", {
                            className: "grid relative grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-10",
                            children: (0, r.tZ)(eB, {})
                        }), (0, r.tZ)("div", {
                            className: "mb-3",
                            children: (0, r.tZ)(S, {
                                dill: e.dill
                            })
                        }), (0, r.tZ)(P, {})]
                    }) : (0, r.tZ)(I.Z, {
                        waitForCore: !0,
                        className: "py-8"
                    })
                })
            };
            eT.PageTitle = () => {
                let {
                    t: e
                } = (0, a.$G)("common");
                return (0, r.BX)(r.HY, {
                    children: [(0, r.tZ)("h1", {
                        className: "font-title font-medium text-2xl sm:text-3xl pt-2",
                        children: e("v2.nav.dill")
                    }), (0, r.BX)("h2", {
                        className: "font-body font-normal text-foreground-alt-200 text-sm sm:text-base leading-4 sm:leading-6 mt-1",
                        children: [e("v2.dill.description")]
                    })]
                })
            };
            var eA = !0,
                eP = eT
        },
        50517: function (e, t, l) {
            "use strict";
            l.d(t, {
                Cr: function () {
                    return d
                },
                Nj: function () {
                    return r
                },
                jw: function () {
                    return a
                },
                oz: function () {
                    return o
                },
                p6: function () {
                    return n
                },
                pz: function () {
                    return i
                }
            });
            let r = (e, t) => Math.ceil((t.getTime() - e.getTime()) / 864e5),
                a = (e, t) => {
                    let l = new Date(e);
                    return l.setDate(l.getDate() + t), l
                },
                i = e => 86400 * Math.ceil(e.getTime() / 864e5),
                o = (e, t) => Math.ceil((t.getTime() - e.getTime()) / 6048e5),
                n = e => "".concat(e.getFullYear(), "-").concat(e.getMonth() + 1, "-").concat(e.getDate()),
                d = e => {
                    let t = new Date;
                    return t.setTime(1e3 * e), t
                }
        }
    },
    function (e) {
        e.O(0, [490, 6955, 2182, 4097, 212, 8324, 9253, 6880, 9778, 2179, 9711, 8922, 9774, 2888, 179], function () {
            return e(e.s = 35921)
        }), _N_E = e.O()
    }
]);