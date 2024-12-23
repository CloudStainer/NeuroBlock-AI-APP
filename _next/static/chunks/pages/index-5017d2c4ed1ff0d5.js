(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(33076);
        },
      ]);
    },
    33076: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          __N_SSG: function () {
            return L;
          },
          default: function () {
            return I;
          },
        });
      var r = l(35944),
        a = l(68856),
        n = l(67294),
        o = l(25675),
        i = l.n(o),
        d = l(57338),
        s = l(90547),
        c = l(2593),
        m = l(61744),
        h = l(31429),
        u = l(34211),
        b = l(88580),
        f = l(93490),
        g = l(5155);
      let p = c.O$.from("1000000000000"),
        v = (e) => {
          let { details: t } = e,
            l = parseFloat(m.formatEther(t.claimableEthV2)),
            a = parseFloat(
              m.formatEther(
                t.claimableTokenV2.add(t.claimableV1).add(t.harvestableAmount)
              )
            ),
            n = t.claimableEthV2
              .add(t.claimableTokenV2)
              .add(t.claimableV1)
              .add(t.harvestableAmount);
          return n.lt(p)
            ? null
            : (0, r.BX)("div", {
                className: "flex justify-between font-body",
                children: [
                  (0, r.BX)("div", {
                    className: "flex",
                    children: [
                      (0, r.tZ)("div", {
                        className:
                          "w-12 p-1 h-fit bg-background rounded-full mr-4 border-3 border-foreground-alt-400",
                        children: (0, r.tZ)(i(), {
                          src: "/logo.png",
                          width: 200,
                          height: 200,
                          alt: "NUBAI AI",
                          title: "NUBAI AI",
                        }),
                      }),
                      (0, r.BX)("div", {
                        className: "flex flex-col text-left justify-center",
                        children: [
                          (0, r.tZ)("p", {
                            className:
                              "uppercase text-foreground-alt-200 font-bold text-xs",
                            children: t.descriptor,
                          }),
                          (0, r.BX)("p", {
                            className:
                              "text-primary font-bold text-lg align-bottom leading-6",
                            children: [
                              (0, f.RQ)(a, 5),
                              (0, r.tZ)("span", {
                                className: "text-foreground text-xs ml-2",
                                children: "MELAI",
                              }),
                            ],
                          }),
                          "dill" == t.rewarderType &&
                            (0, r.BX)("p", {
                              className:
                                "text-primary font-bold text-lg align-bottom leading-6",
                              children: [
                                (0, f.RQ)(l, 5),
                                (0, r.tZ)("span", {
                                  className: "text-foreground text-xs ml-2",
                                  children: "ETH",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.tZ)("div", {
                    className: "flex items-center",
                    children: (0, r.tZ)(g.Z, {
                      rewarderType: t.rewarderType,
                      asset: t.asset,
                      buttonSize: "small",
                      buttonType: "secondary",
                      harvestableAmount: t.harvestableAmount,
                      claimableV1: t.claimableV1,
                      claimableV2: t.claimableTokenV2,
                      claimableETHV2: t.claimableEthV2,
                      network: t.network,
                      showNetworkSwitch: !0,
                    }),
                  }),
                ],
              });
        };
      var x = (e) => {
          let { isOpen: t, closeModal: l, harvestables: n } = e,
            { t: o } = (0, a.$G)("common"),
            i = void 0 === n ? [] : n;
          return (
            0 === i.length && l(),
            (0, r.tZ)(b.Z, {
              size: "wide",
              isOpen: t,
              closeModal: l,
              title: o("v2.farms.harvestRewards"),
              children: (0, r.tZ)("div", {
                className: "grid gap-9",
                children: i.map((e) =>
                  (0, r.tZ)(v, { details: e }, e.descriptor)
                ),
              }),
            })
          );
        },
        Z = l(24834),
        N = l(86688),
        k = l(68073),
        w = l(12377),
        y = l(80963),
        B = l(50790),
        X = l(20859);
      let E = (e, t) => {
          let l = Object.entries(t.tokens).reduce((l, r) => {
            let [a] = r,
              n = (0, y.E5)(a, e);
            if (!n) return l;
            let o = (0, k.jg)(n, e, t);
            return (
              o &&
                (l +=
                  (o.depositTokensInJar.tokensUSD || 0) +
                  (o.depositTokensInFarm.tokensUSD || 0)),
              l
            );
          }, 0);
          return (0, w.gC)(l);
        },
        C = (e, t) => {
          let l = V(e, t),
            r = 0;
          for (let e = 0; e < l.length; e++) r += l[e].earnedMelons.tokensUSD;
          if (t.dill.claimable || t.dill.totalClaimableTokenV2) {
            let l = c.O$.from(t.dill.claimable).add(
                c.O$.from(t.dill.totalClaimableTokenV2)
              ),
              a = parseFloat(m.formatEther(l)) * e.prices.pickle;
            r += a;
          }
          if (t.dill.totalClaimableETHV2) {
            let l = c.O$.from(t.dill.totalClaimableETHV2),
              a = parseFloat(m.formatEther(l)) * e.prices.weth;
            r += a;
          }
          return (0, w.gC)(r);
        },
        T = (e, t) => {
          let l = 0;
          return (
            Object.entries(t.tokens).forEach((t) => {
              var r, a;
              let [n, o] = t,
                i = (0, y.E5)(n, e);
              if (!i) return;
              let d =
                null === (r = i.details) || void 0 === r
                  ? void 0
                  : r.tokenBalance;
              if (d) {
                let e =
                    (parseFloat(o.pAssetBalance || "0") +
                      parseFloat(o.pStakedBalance || "0")) /
                    (1e18 * d),
                  t =
                    null === (a = i.details.harvestStats) || void 0 === a
                      ? void 0
                      : a.harvestableUSD;
                t && (l += e * t * 0.8);
              }
            }),
            (0, w.gC)(l)
          );
        },
        V = (e, t) =>
          Object.entries(t.tokens).reduce((l, r) => {
            let [a] = r,
              n = (0, y.E5)(a, e);
            if (!n) return l;
            let o = (0, k.jg)(n, e, t);
            return o && l.push(o), l;
          }, []),
        F = (e, t, l) => {
          let r = [],
            a = V(e, t);
          for (let t = 0; t < a.length; t++) {
            let { assetId: l } = a[t],
              n = (0, y.zv)(l, e) || "",
              o = (0, y.fe)(l, e);
            if (!o) continue;
            let i = parseFloat(a[t].earnedMelons.tokens);
            i > 0 &&
              r.push({
                asset: o,
                descriptor: n,
                harvestableAmount: a[t].earnedMelons.wei,
                claimableV1: c.O$.from(0),
                claimableEthV2: c.O$.from(0),
                claimableTokenV2: c.O$.from(0),
                rewarderType: "farm",
                network: o.chain,
              });
          }
          return (
            t.dill &&
              (t.dill.claimable ||
                t.dill.totalClaimableETHV2 ||
                t.dill.totalClaimableTokenV2) &&
              (c.O$.from(t.dill.claimable),
              r.push({
                asset: void 0,
                descriptor: l("v2.dill.dillRewards"),
                harvestableAmount: c.O$.from(0),
                claimableV1: c.O$.from(t.dill.claimable),
                claimableTokenV2: c.O$.from(t.dill.claimableV2),
                claimableEthV2: c.O$.from(t.dill.claimableETHV2),
                rewarderType: "dill",
                network: h.ChainNetwork.Ethereum,
              })),
            r
          );
        };
      var O = () => {
          let { t: e } = (0, a.$G)("common"),
            t = (0, X.m)(),
            [l, o] = (0, n.useState)(!1),
            c = (0, B.CG)((e) => N.G0.selectData(e, t)),
            m = (0, B.CG)(Z.VH.selectCore),
            h = m && c ? E(m, c) : 0,
            b = m && c ? C(m, c) : 0,
            f = m && c ? T(m, c) : 0,
            g = m && c ? F(m, c, e) : [];
          return (0, r.BX)("div", {
            className:
              "bg-gradient rounded-2xl border border-foreground-alt-500 shadow",
            children: [
              (0, r.BX)("div", {
                className:
                  "relative px-6 pt-4 sm:px-8 sm:pt-6 border-b border-foreground-alt-500",
                children: [
                  (0, r.tZ)("h2", {
                    className:
                      "text-lg font-normal text-foreground-alt-200 mb-7",
                    children: e("v2.dashboard.performance"),
                  }),
                  (0, r.BX)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 mb-5",
                    children: [
                      (0, r.BX)("div", {
                        className: "flex mb-6 xl:mb-0",
                        children: [
                          (0, r.tZ)("div", {
                            className:
                              "bg-primary p-2 w-12 h-12 rounded-full mr-6",
                            children: (0, r.tZ)(d.Z, {
                              className: "text-foreground-button",
                            }),
                          }),
                          (0, r.BX)("div", {
                            children: [
                              (0, r.tZ)("p", {
                                className:
                                  "font-title font-medium text-2xl leading-7 mb-1",
                                children: h,
                              }),
                              (0, r.tZ)("p", {
                                className: "text-foreground-alt-200 text-sm",
                                children: e("v2.balances.balance"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.BX)("div", {
                        className: "flex mb-6 xl:mb-0",
                        children: [
                          (0, r.tZ)("div", {
                            className:
                              "bg-background p-2 w-12 h-12 rounded-full mr-6",
                            children: (0, r.tZ)(i(), {
                              src: "/logo.png",
                              width: 0,
                              height: 0,
                              style: { width: "200px", height: "auto" },
                              alt: "NUBAI AI",
                              title: "NUBAI AI",
                            }),
                          }),
                          (0, r.BX)("div", {
                            children: [
                              (0, r.tZ)("p", {
                                className:
                                  "font-title font-medium text-2xl leading-7 mb-1",
                                children: b,
                              }),
                              (0, r.tZ)("p", {
                                className: "text-foreground-alt-200 text-sm",
                                children: e("v2.dashboard.unclaimedRewards"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.BX)("div", {
                        className: "flex mb-6 xl:mb-0",
                        children: [
                          (0, r.tZ)("div", {
                            className:
                              "bg-primary p-2 w-12 h-12 rounded-full mr-6",
                            children: (0, r.tZ)(s.Z, {
                              className: "text-foreground-button",
                            }),
                          }),
                          (0, r.BX)("div", {
                            children: [
                              (0, r.tZ)("p", {
                                className:
                                  "font-title font-medium text-2xl leading-7 mb-1",
                                children: f,
                              }),
                              (0, r.tZ)("p", {
                                className: "text-foreground-alt-200 text-sm",
                                children: e("v2.dashboard.pendingHarvests"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.BX)("div", {
                className: "relative px-6 py-4 sm:px-8 sm:py-6",
                children: [
                  (0, r.tZ)(u.Z, {
                    onClick: () => o(!0),
                    size: "normal",
                    state: g.length > 0 ? "enabled" : "disabled",
                    children: e("v2.dashboard.harvestRewards"),
                  }),
                  (0, r.tZ)(x, {
                    isOpen: l,
                    closeModal: () => o(!1),
                    harvestables: g,
                  }),
                ],
              }),
            ],
          });
        },
        P = () => {
          let { t: e } = (0, a.$G)("common"),
            t = (0, X.m)(),
            l = (0, B.CG)((e) => N.G0.selectData(e, t)),
            n = "0.00",
            o = "0.00",
            d = 0,
            s = 0;
          if (l) {
            for (let e in l.pickles) {
              let t = l.pickles[e];
              void 0 !== t &&
                "0" !== t &&
                ((d += c.O$.from(t).div(1e10).toNumber() / 1e8), s++);
            }
            d = Math.floor(1e3 * d) / 1e3;
          }
          return (
            l &&
              l.dill &&
              l.dill.balance &&
              ((n = (
                c.O$.from(l.dill.balance).div(1e10).div(1e5).toNumber() / 1e3
              ).toString()),
              l.dill.pickleLocked &&
                (o = (
                  c.O$.from(l.dill.pickleLocked).div(1e10).div(1e5).toNumber() /
                  1e3
                ).toString())),
            (0, r.tZ)("div", {
              className:
                "bg-gradient rounded-2xl border border-foreground-alt-500 shadow",
              children: (0, r.BX)("div", {
                className: "relative p-6 sm:p-8",
                children: [
                  (0, r.BX)("div", {
                    className: "flex mr-20",
                    children: [
                      (0, r.tZ)("div", {
                        className:
                          "w-12 h-12 p-1 bg-background rounded-full mr-5",
                        children: (0, r.tZ)(i(), {
                          src: "/logo.png",
                          width: 48,
                          height: 48,
                          alt: "NUBAI AI",
                          title: "NUBAI AI",
                        }),
                      }),
                      (0, r.BX)("div", {
                        children: [
                          (0, r.tZ)("p", {
                            className:
                              "font-title font-medium text-2xl leading-7 mb-1",
                            children: d,
                          }),
                          (0, r.tZ)("p", {
                            className: "text-foreground-alt-200 text-sm",
                            children:
                              s > 1
                                ? e("v2.dashboard.picklesInWallet", {
                                    chains: s,
                                  })
                                : e("v2.dashboard.picklesInWalletZeroOrOne"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.BX)("div", {
                    className: "flex mr-20 mt-5",
                    children: [
                      (0, r.tZ)("div", {
                        className:
                          "w-12 h-12 p-2 bg-background rounded-full mr-5",
                        children: (0, r.tZ)(i(), {
                          src: "/watermelon.png",
                          width: 48,
                          height: 48,
                          alt: "NUBAI AI",
                          title: "NUBAI AI",
                        }),
                      }),
                      (0, r.BX)("div", {
                        children: [
                          (0, r.tZ)("p", {
                            className:
                              "font-title font-medium text-2xl leading-7 mb-1",
                            children: n,
                          }),
                          (0, r.tZ)("p", {
                            className: "text-foreground-alt-200 text-sm",
                            children: e("v2.dashboard.dillAmount"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.BX)("div", {
                    className: "flex mr-20 mt-5",
                    children: [
                      (0, r.tZ)("div", {
                        className:
                          "w-12 h-12 p-2 bg-background rounded-full mr-5",
                        children: (0, r.tZ)(i(), {
                          src: "/logo.png",
                          width: 48,
                          height: 48,
                          alt: "NUBAI AI",
                          title: "NUBAI AI",
                        }),
                      }),
                      (0, r.BX)("div", {
                        children: [
                          (0, r.tZ)("p", {
                            className:
                              "font-title font-medium text-2xl leading-7 mb-1",
                            children: o,
                          }),
                          (0, r.tZ)("p", {
                            className: "text-foreground-alt-200 text-sm",
                            children: e("v2.dashboard.lockedMelons"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        A = l(18205),
        $ = l(41664),
        R = l.n($),
        H = l(9473),
        S = l(71335),
        G = l(6607),
        j = l(20440),
        _ = l(40653),
        M = () => {
          let { t: e } = (0, a.$G)("common"),
            t = (0, H.v9)(Z.VH.selectMaxApy),
            l = (0, B.TL)();
          return (
            t ||
              (t = {
                name: "",
                chain: "Ethereum",
                apy: 0,
                tokens: [],
                protocol: G.AssetProtocol.UNISWAP,
              }),
            (0, r.tZ)(R(), {
              href: "/farms",
              passHref: !0,
              children: (0, r.tZ)("div", {
                className:
                  "group bg-background-light rounded-xl border border-foreground-alt-500 shadow cursor-pointer transition duration-300 ease-in-out hover:bg-background-lightest",
                onClick: () => {
                  (null == t ? void 0 : t.tokens) &&
                    t.apy &&
                    l((0, j.HD)({ type: j.ER.Apy, direction: "desc" }));
                },
                children: (0, r.BX)("div", {
                  className: "flex justify-between px-5 py-4 sm:px-8 sm:py-5",
                  children: [
                    (0, r.BX)("div", {
                      className: "pr-4",
                      children: [
                        (0, r.tZ)("p", {
                          className:
                            "font-body font-bold text-lg sm:text-xl leading-6 mb-1",
                          children: (0, r.BX)(a.cC, {
                            i18nKey: "v2.dashboard.earnUpTo",
                            children: [
                              "Earn up to",
                              (0, r.tZ)("span", {
                                className: "text-primary",
                                children: { percent: (0, f.rl)(t.apy) },
                              }),
                              (0, r.BX)(_.Z, {
                                children: [
                                  (0, r.tZ)("span", {
                                    className: "mr-2",
                                    children: t.name,
                                  }),
                                  (0, r.tZ)("span", {
                                    className:
                                      "text-foreground-alt-200 text-sm",
                                    children: t.chain,
                                  }),
                                ],
                              }),
                              "APY",
                            ],
                          }),
                        }),
                        (0, r.tZ)("p", {
                          className:
                            "text-foreground-alt-100 text-xs sm:text-sm font-normal leading-5",
                          children: e("v2.dashboard.extraBoost"),
                        }),
                      ],
                    }),
                    (0, r.tZ)("div", {
                      className: "flex items-center",
                      children: (0, r.tZ)(S.Z, {
                        className:
                          "w-6 h-6 text-foreground-alt-200 group-hover:text-accent transition duration-300 ease-in-out",
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      let D = () => {
        let { t: e } = (0, a.$G)("common");
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.BX)("div", {
              className: "block xl:flex mb-8 sm:mb-10",
              children: [
                (0, r.tZ)("div", {
                  className: "w-full mb-4 xl:w-1/2 xl:mr-8 xl:mb-0",
                  children: (0, r.tZ)(O, {}),
                }),
                (0, r.tZ)("div", {
                  className:
                    "flex flex-col md:justify-start 2xl:justify-between",
                  children: (0, r.tZ)(P, {}),
                }),
              ],
            }),
            (0, r.tZ)(A.Z, {
              title: e("v2.dashboard.joinedFarms"),
              dashboard: !0,
              requiresUserModel: !0,
            }),
            (0, r.tZ)("div", { className: "mt-4", children: (0, r.tZ)(M, {}) }),
          ],
        });
      };
      D.PageTitle = () => {
        let { t: e } = (0, a.$G)("common");
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)("h1", {
              className: "font-title font-medium text-2xl sm:text-3xl pt-2",
              children: e("v2.dashboard.pickleTitle"),
            }),
            (0, r.tZ)("h2", {
              className:
                "font-body font-normal text-foreground-alt-200 text-sm sm:text-base leading-4 sm:leading-6 mt-1",
              children: e("v2.dashboard.pickleSubtitle"),
            }),
          ],
        });
      };
      var L = !0,
        I = D;
    },
    18205: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return G;
        },
      });
      var r,
        a,
        n = l(35944),
        o = l(68856),
        i = l(63698),
        d = l(25675),
        s = l.n(d),
        c = l(9473),
        m = l(52697),
        h = l(24834),
        u = l(50790),
        b = l(20440),
        f = l(93490),
        g = l(44349),
        p = () => {
          let e = (0, c.v9)(h.VH.selectNetworks),
            t = (0, c.v9)(h.VH.selectFilters),
            l = (0, c.v9)(b.Wd.selectFilters),
            r = (0, u.TL)(),
            a = (0, g.V)(l, b.vA.Network);
          return (0, n.tZ)("div", {
            className: "flex flex-wrap justify-end space-x-2",
            children:
              null == e
                ? void 0
                : e.map((e) => {
                    let o = t.find(
                        (t) => t.value === e.name && t.type === b.vA.Network
                      ),
                      i = (0, g.Y)(l, o);
                    return (0, n.tZ)(
                      m.ZP,
                      {
                        duration: 0,
                        content: (0, n.tZ)("div", {
                          className:
                            "rounded-lg shadow-lg border border-foreground-alt-500 overflow-hidden",
                          children: (0, n.tZ)("div", {
                            className: "bg-background-light px-3 py-2",
                            children: (0, n.tZ)("div", {
                              className:
                                "text-foreground-alt-200 text-sm font-bold",
                              children: e.visibleName,
                            }),
                          }),
                        }),
                        children: (0, n.tZ)("div", {
                          className: (0, f.AK)(
                            "group border border-transparent bg-background-light px-4 py-2 2xl:px-5 2xl:py-3 rounded-lg cursor-pointer hover:bg-background-lightest hover:border-primary-light hover:grayscale-0 transition duration-300 ease-in-out",
                            i && "bg-background-lightest border-primary-light",
                            !i && a && "grayscale"
                          ),
                          onClick: () => r((0, b.cT)(o)),
                          children: (0, n.tZ)("div", {
                            className:
                              "w-6 h-6 group-hover:scale-105 transition duration-300 ease-in-out",
                            children: (0, n.tZ)(s(), {
                              src: "/networks/".concat(e.name, ".png"),
                              width: 200,
                              height: 200,
                              layout: "responsive",
                              alt: e.name,
                              title: e.name,
                              className: "rounded-full",
                              priority: !0,
                            }),
                          }),
                        }),
                      },
                      e.name
                    );
                  }),
          });
        },
        v = l(67294),
        x = l(99006),
        Z = l(30490),
        N = l(28670),
        k = l.n(N),
        w = l(69743),
        y = l(7930);
      let B = (e) => {
          let { children: t, ...l } = e;
          return (0, n.BX)(x.c.Control, {
            ...l,
            children: [
              (0, n.tZ)(w.Z, {
                className: "w-6 h-6 text-foreground-alt-200 ml-3 mr-1",
              }),
              t,
            ],
          });
        },
        X = (e) => {
          let { color: t, imageSrc: l, label: r } = e,
            [a, o] = (0, v.useState)(!1);
          return (0, n.tZ)("div", {
            className:
              "mr-3 w-8 h-8 rounded-full border-3 border-foreground-alt-400",
            style: { background: a ? y.J : t },
            children: (0, n.tZ)(s(), {
              src: l,
              className: "rounded-full",
              width: 32,
              height: 32,
              layout: "intrinsic",
              alt: r,
              title: r,
              onLoadingComplete: () => o(!0),
            }),
          });
        },
        E = (e) => {
          let { children: t, ...l } = e,
            { t: r } = (0, o.$G)("common"),
            { isFocused: a } = l,
            { type: i } = l.data;
          return (0, n.tZ)(x.c.Option, {
            ...l,
            className: "group",
            children: (0, n.BX)("div", {
              className: "flex items-center",
              children: [
                (0, n.tZ)(X, { ...l.data }),
                (0, n.BX)("div", {
                  children: [
                    (0, n.tZ)("p", {
                      className: (0, f.AK)(
                        "text-foreground font-title text-base group-hover:text-primary-light transition duration-200 ease-in-out",
                        a && "text-primary-light"
                      ),
                      children: t,
                    }),
                    (0, n.tZ)("p", {
                      className:
                        "font-normal text-sm text-foreground-alt-200 italic",
                      children: r("v2.farms.".concat(i)),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        C = {
          clearIndicator: (e) => ({
            ...e,
            color: "rgb(var(--color-foreground-alt-300))",
            ":hover": { color: "rgb(var(--color-foreground-alt-200))" },
          }),
          control: (e) => ({
            ...e,
            backgroundColor: "rgb(var(--color-background-lightest))",
            border: 0,
            boxShadow: "none",
            padding: "8px 0",
          }),
          input: (e) => ({ ...e, color: "rgb(var(--color-primary))" }),
          menu: (e) => ({
            ...e,
            backgroundColor: "rgb(var(--color-background-light))",
            padding: 8,
            zIndex: 200,
            boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))",
          }),
          multiValue: (e, t) => {
            let { data: l } = t;
            return { ...e, backgroundColor: k()(l.color).css() };
          },
          multiValueLabel: (e, t) => {
            let { data: l } = t,
              r = k()(l.color).darken(3);
            return {
              ...e,
              fontWeight: 700,
              color: k().contrast(r, "black") >= 3 ? r.css() : "white",
            };
          },
          multiValueRemove: (e, t) => {
            let { data: l } = t;
            return {
              ...e,
              color:
                k().contrast(l.color, "white") >= 7
                  ? "white"
                  : k()(l.color).darken(2.5).css(),
              ":hover": {
                color: "white",
                backgroundColor: "rgb(var(--color-accent))",
              },
            };
          },
          option: (e, t) => {
            let { data: l, isFocused: r } = t;
            return {
              ...e,
              backgroundColor: r
                ? "rgb(var(--color-background-lightest))"
                : void 0,
              borderRadius: 10,
              color: l.color,
              transition: "all 200ms ease-in-out",
            };
          },
        };
      var T = () => {
          let { t: e } = (0, o.$G)("common"),
            t = (0, c.v9)(h.VH.selectFilters),
            l = (0, c.v9)(b.Wd.selectFilters),
            r = (0, u.TL)();
          return (0, n.tZ)(Z.ZP, {
            autoFocus: !0,
            components: {
              Control: B,
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
              Option: E,
            },
            escapeClearsValue: !0,
            isClearable: !0,
            isMulti: !0,
            openMenuOnClick: !1,
            openMenuOnFocus: !1,
            placeholder: e("v2.farms.filter"),
            noOptionsMessage: () => e("v2.farms.noResults"),
            onChange: (e) => r((0, b.rr)(e)),
            options: t,
            styles: C,
            theme: (e) => ({
              ...e,
              borderRadius: 10,
              colors: { ...e.colors, primary: "black" },
            }),
            value: l,
          });
        },
        V = l(40653),
        F = l(52641),
        O = () => {
          let { t: e } = (0, o.$G)("common"),
            t = (0, u.TL)(),
            l = (0, c.v9)(b.Wd.selectMatchAllFilters);
          return (0, n.BX)(F.Z, {
            toggleOn: l,
            onChange: (e) => t((0, b.gA)(e)),
            children: [
              (0, n.tZ)("span", {
                className: "text-sm font-medium text-foreground-alt-200",
                children: e("v2.farms.matchAllFilters"),
              }),
              (0, n.tZ)(V.Z, {
                children: (0, n.tZ)("span", {
                  className: "text-foreground-alt-200 text-sm",
                  children: e(
                    l
                      ? "v2.farms.matchingAllFilters"
                      : "v2.farms.notMatchingAllFilters"
                  ),
                }),
              }),
            ],
          });
        },
        P = l(93973),
        A = l(63519);
      ((r = a || (a = {}))[(r.Forward = 1)] = "Forward"),
        (r[(r.Back = -1)] = "Back");
      let $ = (e) => {
        let { currentPage: t, pageCount: l, onClick: r, type: a } = e,
          o = "left" === a ? P.Z : A.Z;
        return (0, n.tZ)(o, {
          className: (0, f.AK)(
            "left" === a &&
              0 === t &&
              "cursor-not-allowed text-foreground-alt-400",
            "left" === a &&
              0 !== t &&
              "cursor-pointer hover:text-accent transition duration-300 ease-in-out text-foreground-alt-200",
            "right" === a &&
              t + 1 === l &&
              "cursor-not-allowed text-foreground-alt-400",
            "right" === a &&
              t + 1 !== l &&
              "cursor-pointer hover:text-accent transition duration-300 ease-in-out text-foreground-alt-200",
            "w-5 h-5"
          ),
          onClick: r,
        });
      };
      var R = () => {
          let { t: e } = (0, o.$G)("common"),
            t = (0, u.TL)(),
            { currentPage: l, itemsPerPage: r } = (0, c.v9)(
              b.Wd.selectPaginateParams
            ),
            i = (0, c.v9)(h.VH.selectFilteredAssets),
            d = Math.ceil(i.length / r),
            s = (e) => {
              let r = l + e;
              r < 0 || r >= d || t((0, b.D4)(r));
            };
          return 0 === i.length
            ? (0, n.tZ)("span", {
                className: "text-foreground-alt-200",
                children: e("v2.farms.noResults"),
              })
            : (0, n.tZ)(n.HY, {
                children: (0, n.BX)("div", {
                  className: "flex items-center select-none",
                  children: [
                    (0, n.tZ)($, {
                      type: "left",
                      currentPage: l,
                      pageCount: d,
                      onClick: () => s(a.Back),
                    }),
                    (0, n.tZ)("span", {
                      className: "px-3 text-foreground-alt-200",
                      children: e("v2.farms.pagination", {
                        current: l + 1,
                        total: d,
                      }),
                    }),
                    (0, n.tZ)($, {
                      type: "right",
                      currentPage: l,
                      pageCount: d,
                      onClick: () => s(a.Forward),
                    }),
                  ],
                }),
              });
        },
        H = () =>
          (0, n.BX)(n.HY, {
            children: [
              (0, n.BX)("div", {
                className: "block xl:flex justify-between",
                children: [
                  (0, n.tZ)("div", {
                    className: "flex-1 mb-2 xl:mb-0 xl:mr-4",
                    children: (0, n.tZ)(T, {}),
                  }),
                  (0, n.tZ)("div", {
                    className: "flex items-end",
                    children: (0, n.tZ)(p, {}),
                  }),
                ],
              }),
              (0, n.BX)("div", {
                className: "flex grow justify-between my-4",
                children: [(0, n.tZ)(O, {}), (0, n.tZ)(R, {})],
              }),
            ],
          }),
        S = l(39562),
        G = (e) => {
          let {
              simple: t,
              dashboard: l,
              title: r,
              requiresUserModel: a,
              singleAsset: d,
              hideDescription: s,
            } = e,
            { t: c } = (0, o.$G)("common");
          return (0, n.BX)(n.HY, {
            children: [
              r &&
                (0, n.tZ)("h2", {
                  className: "font-body font-bold text-xl mb-6",
                  children: r,
                }),
              (0, n.tZ)("div", {
                className: "flex flex-col",
                children: (0, n.tZ)("div", {
                  className: "-my-2 overflow-x-auto",
                  children: (0, n.BX)("div", {
                    className: "py-2 align-middle inline-block min-w-full",
                    children: [
                      !t && !d && !l && (0, n.tZ)(H, {}),
                      (0, n.BX)("table", {
                        className: "min-w-full table-auto border-collapse",
                        children: [
                          (0, n.tZ)("thead", {
                            className: "bg-background uppercase",
                            children: (0, n.BX)("tr", {
                              children: [
                                (0, n.tZ)(S.Z, {
                                  sortType: b.ER.None,
                                  label: c("v2.farms.asset"),
                                }),
                                (0, n.tZ)(S.Z, {
                                  sortType: d ? b.ER.None : b.ER.Earned,
                                  label: c("v2.farms.earned"),
                                }),
                                (0, n.tZ)(S.Z, {
                                  sortType: d ? b.ER.None : b.ER.Deposited,
                                  label: c("v2.farms.deposited"),
                                }),
                                (0, n.tZ)(S.Z, {
                                  sortType: d ? b.ER.None : b.ER.Apy,
                                  label: c("v2.farms.apy"),
                                }),
                                (0, n.tZ)(S.Z, {
                                  sortType: d ? b.ER.None : b.ER.Liquidity,
                                  label: c("v2.farms.liquidity"),
                                }),
                              ],
                            }),
                          }),
                          (0, n.tZ)("tbody", {
                            className: "text-foreground",
                            children: (0, n.tZ)(i.Z, {
                              simple: t,
                              dashboard: l,
                              requiresUserModel: a,
                              singleAsset: d,
                              hideDescription: s,
                            }),
                          }),
                        ],
                      }),
                      !t &&
                        !d &&
                        !l &&
                        (0, n.tZ)("div", {
                          className: "flex justify-center mt-4",
                          children: (0, n.tZ)(R, {}),
                        }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(
      0,
      [490, 4097, 212, 8324, 6666, 2179, 9711, 8922, 466, 9774, 2888, 179],
      function () {
        return e((e.s = 48312));
      }
    ),
      (_N_E = e.O());
  },
]);
