(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1786],
  {
    90333: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/vote",
        function () {
          return a(61768);
        },
      ]);
    },
    61768: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return eM;
          },
          default: function () {
            return eE;
          },
        });
      var l = a(35944),
        n = a(67294),
        r = a(68856),
        i = a(24834),
        o = a(77044),
        s = a(69742),
        d = a(86688),
        c = a(72132),
        u = () =>
          (0, l.tZ)(c.Ix, {
            toastClassName: () =>
              "relative flex p-1 mb-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-background-light",
            bodyClassName: () =>
              "flex text-sm text-foreground-alt-200 font-med block p-3",
            position: "bottom-right",
            autoClose: 5e3,
            hideProgressBar: !0,
            newestOnTop: !1,
            closeOnClick: !0,
            rtl: !1,
            pauseOnFocusLoss: !1,
            draggable: !1,
            pauseOnHover: !0,
          }),
        p = a(69876),
        m = a(9253),
        h = a(73604),
        v = a(46208),
        f = a(43815),
        g = a(2763),
        y = a(14888),
        b = a(93490),
        Z = a(96486);
      let x = (e) => {
        let { label: t, value: a } = e;
        return (0, l.BX)("tr", {
          className: "grid grid-cols-2 gap-5",
          children: [
            (0, l.tZ)("td", {
              children: (0, l.tZ)("p", {
                className: "text-foreground-alt-200 col-span-1",
                children: t,
              }),
            }),
            (0, l.tZ)("td", {
              children: (0, l.tZ)("p", {
                className: "text-foreground-alt-200 col-span-2",
                children: a,
              }),
            }),
          ],
        });
      };
      var w = (e) => {
        let { active: t, payload: a } = e,
          { t: n } = (0, r.$G)("common");
        if (t && a && a.length) {
          a[0].payload.chain;
          let e = a[0].payload.chainVisible || void 0,
            t = a[0].payload.jar || void 0,
            r = a[0].value || void 0,
            i = a[0].payload.platformWeight || void 0;
          return (0, l.tZ)("div", {
            className:
              "bg-background-light p-5 rounded border border-foreground-alt-300",
            children: (0, l.BX)("table", {
              children: [
                e &&
                  (0, l.tZ)(x, {
                    label: n("v2.dill.vote.charts.tooltips.chain"),
                    value: e,
                  }),
                t &&
                  (0, l.tZ)(x, {
                    label: n("v2.dill.vote.charts.tooltips.asset"),
                    value: t,
                  }),
                r &&
                  (0, l.tZ)(x, {
                    label: n("v2.dill.vote.charts.tooltips.chainWeight"),
                    value: (0, b.rl)(100 * r, 3),
                  }),
                i &&
                  (0, l.tZ)(x, {
                    label: n("v2.dill.vote.charts.tooltips.platformWeight"),
                    value: (0, b.rl)(100 * i, 5),
                  }),
              ],
            }),
          });
        }
        return null;
      };
      let N = Math.PI / 180,
        k = (e) => {
          let {
              cx: t,
              cy: a,
              midAngle: n,
              innerRadius: r,
              outerRadius: i,
              percent: o,
            } = e,
            s = r + (i - r) * 0.7,
            d = t + s * Math.cos(-n * N);
          return (0, l.tZ)("text", {
            x: d,
            y: a + s * Math.sin(-n * N),
            fill: "white",
            textAnchor: d > t ? "start" : "end",
            dominantBaseline: "central",
            children: (0, b.rl)(100 * o, 1),
          });
        },
        C = (e, t) => {
          let a = e ? e.assets.jars.filter((e) => "eth" === e.chain) : [],
            l =
              null == t ? void 0 : t.chains.filter((e) => "eth" === e.chain)[0],
            n = null == l ? void 0 : l.rawChainWeight,
            r = [];
          for (let e = 0; e < a.length; e++) {
            var i, o, s, d, c, u;
            if (
              (null === (i = a[e].farm) || void 0 === i
                ? void 0
                : null === (o = i.details) || void 0 === o
                ? void 0
                : o.allocShare) !== void 0
            ) {
              let t = a[e].details.apiKey,
                l =
                  ((null === (s = a[e].farm) || void 0 === s
                    ? void 0
                    : null === (d = s.details) || void 0 === d
                    ? void 0
                    : d.allocShare) &&
                    (null === (c = a[e].farm) || void 0 === c
                      ? void 0
                      : null === (u = c.details) || void 0 === u
                      ? void 0
                      : u.allocShare)) ||
                  0,
                i = n ? l * n : 0;
              r.push({ jar: t, weight: l, platformWeight: i });
            }
          }
          let p = r.filter((e) => e.weight < 0.03),
            m = p.reduce((e, t) => e + t.weight, 0);
          return (
            (r = E(r)
              .filter((e) => e.weight >= 0.03)
              .slice(-10)).push({ jar: "Other", weight: m }),
            r
          );
        },
        T = (e, t) => {
          let a = (e && e.chains) || [],
            l = [];
          for (let e = 0; e < a.length; e++)
            if (a[e].chain === t) {
              let t = a[e].jarVotes;
              for (let e = 0; e < t.length; e++)
                l.push({
                  jar: t[e].key,
                  weight: t[e].jarVoteAsChainEmissionShare || 0,
                  platformWeight: t[e].jarVoteAsEmissionShare || 0,
                });
            }
          let n = l.filter((e) => 0.03 >= (0, Z.round)(e.weight, 2)),
            r = n.reduce((e, t) => e + t.weight, 0);
          return (
            (l = E(l)
              .filter((e) => (0, Z.round)(e.weight, 2) > 0.03)
              .slice(-15)).push({ jar: "Other", weight: r }),
            l
          );
        },
        M = (e, t, a) =>
          e.length % 2 == 0
            ? ["rgb(var(--color-primary-light))", "rgb(var(--color-primary))"][
                a % 2
              ]
            : e.indexOf(t) === e.length - 1 && a % 3 == 0
            ? "rgb(var(--color-primary))"
            : [
                "rgb(var(--color-primary-light))",
                "rgb(var(--color-primary))",
                "rgb(var(--color-primary-dark))",
              ][a % 3],
        E = (e) => (e ? e.sort((e, t) => (e.weight > t.weight ? 1 : -1)) : []),
        S = (e) => {
          let t = [
              {
                label: "Delegate to the Melon Team",
                value: "strategy.delegate.team",
              },
              { label: "Vote By TVL", value: "strategy.tvl" },
              { label: "Vote By Profit", value: "strategy.profit" },
            ],
            a = e;
          for (let l = 0; l < t.length; l++)
            t[l].value === e && (a = t[l].label);
          return a;
        };
      var j = (e) => {
        let { chain: t, core: a, offchainVoteData: n } = e,
          r = "eth" === t,
          i = r ? C(a, n) : T(n, t);
        return i.length < 1
          ? (0, l.tZ)("div", {
              className: "h-full",
              children: (0, l.tZ)("p", {
                className: "text-center",
                children: "Chart Unavailable",
              }),
            })
          : (0, l.tZ)(m.h, {
              width: 500,
              children: (0, l.BX)(h.u, {
                children: [
                  (0, l.BX)(v.b, {
                    data: i,
                    dataKey: "weight",
                    nameKey: "jar",
                    cx: "50%",
                    cy: "50%",
                    label: k,
                    labelLine: {
                      stroke: "rgb(var(--color-foreground-alt-100))",
                    },
                    outerRadius: 150,
                    strokeWidth: i.length >= 1 ? 1 : 10,
                    stroke: "rgb(var(--color-foreground-alt-100))",
                    children: [
                      i.map((e, t) =>
                        (0, l.tZ)(f.b, { fill: M(i, e, t) }, "cell-".concat(t))
                      ),
                      (0, l.tZ)(g.e, {
                        dataKey: "jar",
                        position: "outside",
                        offset: 20,
                        formatter: S,
                      }),
                    ],
                  }),
                  (0, l.tZ)(y.u, {
                    content: (e) => {
                      let { active: t, payload: a } = e;
                      return (0, l.tZ)(w, { active: t, payload: a });
                    },
                  }),
                ],
              }),
            });
      };
      let B = () => {
          let { t: e } = (0, r.$G)("common");
          return (0, l.tZ)("thead", {
            className: "bg-background uppercase",
            children: (0, l.BX)("tr", {
              children: [
                (0, l.tZ)(V, {
                  children: (0, l.tZ)("p", {
                    className: "text-left",
                    children: e("v2.dill.vote.rowAssetName"),
                  }),
                }),
                (0, l.tZ)(V, {
                  children: (0, l.tZ)("p", {
                    className: "text-center",
                    children: e("v2.dill.vote.rewardPct"),
                  }),
                }),
              ],
            }),
          });
        },
        V = (e) => {
          let { children: t } = e;
          return (0, l.tZ)("th", {
            scope: "col",
            className:
              "px-4 py-1 h-8 text-xs font-bold text-foreground-alt-200 tracking-normal sm:px-6",
            children: t,
          });
        },
        A = (e) => {
          let { jar: t, weight: a, tableData: n } = e,
            r = "",
            i = "";
          return (
            t.toLowerCase() === n[0].jar.toLowerCase() &&
              ((r = "rounded-tl-xl"), (i = "rounded-tr-xl")),
            t === n[n.length - 1].jar &&
              ((r = "rounded-bl-xl"), (i = "rounded-br-xl")),
            (0, l.tZ)(l.HY, {
              children: (0, l.BX)("tr", {
                className: "group",
                children: [
                  (0, l.tZ)(L, {
                    className: r,
                    children: (0, l.tZ)(X, { text: t, className: "text-left" }),
                  }),
                  (0, l.tZ)(L, {
                    className: i,
                    children: (0, l.tZ)(X, { text: (0, b.rl)(100 * a, 3) }),
                  }),
                ],
              }),
            })
          );
        },
        L = (e) => {
          let { children: t, className: a } = e;
          return (0, l.tZ)("td", {
            className: (0, b.AK)(
              "bg-background-light p-4 whitespace-nowrap text-sm text-foreground text-center sm:p-6 group-hover:bg-background-lightest",
              a
            ),
            children: t,
          });
        },
        X = (e) => {
          let { text: t, className: a } = e;
          return (0, l.tZ)("p", {
            className: (0, b.AK)(
              "font-title font-medium text-base leading-5",
              a
            ),
            children: t,
          });
        },
        G = (e) => {
          var t;
          return (null === (t = e.details) || void 0 === t ? void 0 : t.apiKey)
            ? e.details.apiKey + " (" + e.id + ")"
            : e.id;
        },
        D = (e) => {
          let t = e ? e.assets.jars.filter((e) => "eth" === e.chain) : [],
            a = [];
          for (let e = 0; e < t.length; e++) {
            var l, n, r, i;
            (null === (l = t[e].farm) || void 0 === l
              ? void 0
              : null === (n = l.details) || void 0 === n
              ? void 0
              : n.allocShare) !== void 0 &&
              a.push({
                jar: G(t[e]),
                weight:
                  (null === (r = t[e].farm) || void 0 === r
                    ? void 0
                    : null === (i = r.details) || void 0 === i
                    ? void 0
                    : i.allocShare) || 0,
              });
          }
          return K(a);
        },
        _ = (e, t) => {
          let a = (e && e.chains) || [],
            l = [];
          for (let e = 0; e < a.length; e++)
            if (a[e].chain === t) {
              let t = a[e].jarVotes;
              for (let e = 0; e < t.length; e++)
                l.push({
                  jar: t[e].key,
                  weight: t[e].jarVoteAsChainEmissionShare || 0,
                });
            }
          return K(l);
        },
        K = (e) => (e ? e.sort((e, t) => (e.weight > t.weight ? -1 : 1)) : []);
      var I = (e) => {
          let { core: t, offchainVoteData: a, chain: n } = e,
            r = "eth" === n ? t && D(t) : a && _(a, n);
          return (0, l.tZ)("div", {
            className: "flex flex-col mb-10 w-full max-h-[400px]",
            children: (0, l.tZ)("div", {
              className: "-my-2 overflow-x-auto",
              children: (0, l.tZ)("div", {
                className: "py-2 align-middle inline-block min-w-full",
                children: (0, l.BX)("table", {
                  className: "min-w-full table-auto border-collapse",
                  children: [
                    (0, l.tZ)(B, {}),
                    (0, l.tZ)("tbody", {
                      children: (0, l.tZ)(l.HY, {
                        children:
                          r &&
                          r.map((e) => {
                            let { jar: t, weight: a } = e;
                            return (0, l.tZ)(
                              A,
                              { jar: t, weight: a, tableData: r },
                              t
                            );
                          }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        O = (e) => {
          let { core: t, offchainVoteData: a, showTable: n } = e;
          return (0, l.tZ)("div", {
            className: "w-full h-[500px] grid place-items-center p-5",
            children: n
              ? (0, l.tZ)(I, { chain: "eth", core: t, offchainVoteData: a })
              : (0, l.tZ)(j, { chain: "eth", core: t, offchainVoteData: a }),
          });
        },
        P = (e) => {
          let { core: t, offchainVoteData: a } = e,
            { t: n } = (0, r.$G)("common");
          return (0, l.BX)(l.HY, {
            children: [
              (0, l.tZ)("h2", {
                className: "font-body font-bold text-xl p-4",
                children: n("v2.dill.vote.charts.jarWeight"),
              }),
              (0, l.BX)("div", {
                className:
                  "xl:inline-block xl:flex min-w-min gap-4 border border-foreground-alt-500 rounded-xl",
                children: [
                  (0, l.tZ)(O, { core: t, offchainVoteData: a }),
                  (0, l.tZ)(O, { core: t, offchainVoteData: a, showTable: !0 }),
                ],
              }),
            ],
          });
        },
        H = a(2593),
        $ = a(64146),
        W = JSON.parse(
          '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WNUBAI","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASTER","outputs":[{"internalType":"contract MasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MELAI","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"addGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"gauges","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getGauge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingGovernance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"poke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"setPID","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenVote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usedWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokenVote","type":"address[]"},{"internalType":"uint256[]","name":"_weights","type":"uint256[]"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"weights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
        ),
        Y = a(80963);
      let F = async (e, t, a) => {
          try {
            a &&
              (await new $.Contract(
                "0x2e57627ACf6c1812F99e274d0ac61B786c19E74f",
                W,
                a.getSigner()
              )
                .vote(e, t)
                .then(
                  c.Am.info("Please approve transaction via your wallet.", R)
                ));
          } catch (t) {
            let e = JSON.stringify(t);
            console.log(e),
              c.Am.error("Error Occured. See console for more details.", R);
          }
        },
        J = (e) => {
          let t = 0;
          return (
            e.forEach((e) => {
              let a = document.getElementById(e);
              0 > +a.value ? (t += -1 * +a.value) : (t += +a.value);
            }),
            t
          );
        },
        R = {
          position: "bottom-right",
          autoClose: 5e3,
          hideProgressBar: !0,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !1,
          progress: void 0,
        };
      var U = (e, t, a) => {
          let l = [],
            n = [];
          t.forEach((e) => {
            let t = (0, Y.E5)(e, a),
              r = t ? (null == t ? void 0 : t.contract) : "";
            "" === r &&
              c.Am.error("Unable to locate address of ".concat(e, "."), R);
            let i = document.getElementById(e),
              o = +i.value;
            l.push(r), n.push(H.O$.from((100 * o).toFixed(0)));
          }),
            100 !== J(t)
              ? c.Am.error(
                  "Sum of Jar Vote Values (".concat(J(t), ") Must Equal 100"),
                  R
                )
              : F(l, n, e);
        },
        z = a(30490),
        q = a(31429),
        Q = a(6607);
      let ee = (e) => ({
          value: e.details && e.details.apiKey ? e.details.apiKey : "",
          label: e.details
            ? "".concat(e.id, " (").concat(e.details.apiKey, ")")
            : e.id,
        }),
        et = (e, t) => {
          let a = t.find((t) => t.value === e),
            l = a ? a.label : "";
          return { value: e, label: l };
        },
        ea = {
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
            zIndex: 55,
            boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))",
          }),
          multiValue: (e) => ({
            ...e,
            color: "rgb(var(--color-foreground-alt-200))",
            backgroundColor: "rgb(var(--color-background))",
          }),
          multiValueLabel: (e) => ({
            ...e,
            fontWeight: 700,
            color: "rgb(var(--color-foreground-alt-200))",
          }),
          option: (e, t) => {
            let { data: a, isFocused: l } = t;
            return {
              ...e,
              backgroundColor: l
                ? "rgb(var(--color-background-lightest))"
                : void 0,
              borderRadius: 10,
              transition: "all 200ms ease-in-out",
            };
          },
        };
      var el = (e) => {
        let {
            core: t,
            mainnet: a,
            selectedJars: r,
            selectedJarStrats: i,
            setSelectedJars: o,
            setSelectedJarStrats: s,
          } = e,
          d = r ? (i ? r.concat(i) : r) : i || [],
          [c, u] = (0, n.useState)(
            a
              ? []
              : [
                  {
                    label: "Delegate to the Melon Team",
                    value: "strategy.delegate.team",
                  },
                  { label: "Vote By TVL", value: "strategy.tvl" },
                  { label: "Vote By Profit", value: "strategy.profit" },
                ]
          ),
          p = (e) => {
            o(e.map((e) => e.value));
          },
          m = (e) => {
            s && s(e.map((e) => e.value));
          },
          h = (e) => {
            let t = [
                "strategy.delegate.team",
                "strategy.tvl",
                "strategy.profit",
              ],
              a = e.filter((e) => t.includes(e.value)),
              l = e.filter((e) => !t.includes(e.value));
            p(l), m(a);
          };
        return (
          (0, n.useEffect)(() => {
            let e = async () => {
              let e = [...c];
              if (t) {
                var l;
                let n =
                  null == t
                    ? void 0
                    : null === (l = t.assets) || void 0 === l
                    ? void 0
                    : l.jars
                        .filter((e) =>
                          a
                            ? e.chain === q.ChainNetwork.Ethereum
                            : e.chain !== q.ChainNetwork.Ethereum
                        )
                        .filter((e) => void 0 !== e.farm)
                        .filter((e) => {
                          var t;
                          return (
                            (null === (t = e.farm) || void 0 === t
                              ? void 0
                              : t.farmAddress) !==
                            "0x0000000000000000000000000000000000000000"
                          );
                        })
                        .filter(
                          (e) =>
                            e.enablement !==
                            Q.AssetEnablement.PERMANENTLY_DISABLED
                        )
                        .filter((e) => {
                          var t;
                          return (
                            (null === (t = e.details) || void 0 === t
                              ? void 0
                              : t.apiKey) !== void 0
                          );
                        })
                        .map(ee);
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              }
              u(e);
            };
            e(), setInterval(e, 18e4);
          }, [t]),
          (0, l.tZ)(z.ZP, {
            placeholder: a
              ? "Select Mainnet Jars"
              : "Select Sidechain Strategy and/or Jars",
            value: d ? d.map((e) => et(e, c)) : [],
            styles: ea,
            isMulti: !0,
            isSearchable: !0,
            closeMenuOnSelect: !1,
            onChange: (e) => h(e),
            options: c,
          })
        );
      };
      let en = (e) => {
        let { children: t } = e;
        return (0, l.tZ)("th", {
          scope: "col",
          className:
            "px-4 py-1 h-8 text-xs font-bold text-foreground-alt-200 tracking-normal sm:px-6",
          children: t,
        });
      };
      var er = () => {
          let { t: e } = (0, r.$G)("common");
          return (0, l.tZ)("thead", {
            className: "bg-background uppercase",
            children: (0, l.BX)("tr", {
              children: [
                (0, l.tZ)(en, {
                  children: (0, l.tZ)("p", {
                    className: "text-left",
                    children: e("v2.dill.vote.rowAssetName"),
                  }),
                }),
                (0, l.tZ)(en, {
                  children: (0, l.tZ)("p", {
                    className: "text-center",
                    children: e("v2.dill.vote.apy"),
                  }),
                }),
                (0, l.tZ)(en, {
                  children: (0, l.tZ)("p", {
                    className: "text-center",
                    children: e("v2.dill.vote.pickleApy"),
                  }),
                }),
                (0, l.tZ)(en, {
                  children: (0, l.tZ)("p", {
                    className: "text-center",
                    children: e("v2.dill.vote.currentWeight"),
                  }),
                }),
                (0, l.tZ)(en, {
                  children: (0, l.tZ)("p", {
                    className: "text-center",
                    children: e("v2.dill.vote.yourVote"),
                  }),
                }),
                (0, l.tZ)(en, {
                  children: (0, l.tZ)("p", {
                    className: "text-center",
                    children: e("v2.dill.vote.newVote"),
                  }),
                }),
              ],
            }),
          });
        },
        ei = () =>
          (0, l.tZ)("tr", {
            children: (0, l.tZ)("td", {
              colSpan: 6,
              className: "bg-background p-1",
            }),
          });
      let eo = (e) => {
          let { children: t, className: a } = e;
          return (0, l.tZ)("td", {
            className: (0, b.AK)(
              "bg-background-light p-4 whitespace-nowrap text-sm text-foreground text-center sm:p-6 group-hover:bg-background-lightest",
              a
            ),
            children: t,
          });
        },
        es = (e) => {
          let { text: t, className: a } = e;
          return (0, l.tZ)("p", {
            className: (0, b.AK)(
              "font-title font-medium text-base leading-5",
              a
            ),
            children: t,
          });
        },
        ed = (e) => {
          let { jar: t, val: a, setChange: n } = e;
          return (0, l.BX)(l.HY, {
            children: [
              (0, l.tZ)("input", {
                className:
                  "bg-background border border-foreground-alt-400 rounded p-2 text-center text-foreground-alt-200 focus:outline-none",
                type: "number",
                min: "-100",
                max: "100",
                defaultValue: a.slice(0, a.length - 1),
                onInput: (e) => n(e),
                id: t,
              }),
              (0, l.tZ)("span", {
                className: "text-foreground-alt-200",
                children: " %",
              }),
            ],
          });
        },
        ec = (e) => {
          let t = e && e.aprStats ? e.aprStats.apy : 0,
            a = t.toFixed(3) + "%",
            l =
              e && e.farm && e.farm.details && e.farm.details.farmApyComponents
                ? e.farm.details.farmApyComponents.filter(
                    (e) => "pickle" === e.name
                  )[0]
                : null,
            n = l ? l.apr : 0,
            r = n ? n.toFixed(3) : null,
            i = l && l.maxApr ? l.maxApr : 0,
            o = i ? i.toFixed(3) : null,
            s =
              r && o
                ? r !== o
                  ? "".concat(r, "-").concat(o, "%")
                  : "".concat(r, "%")
                : r
                ? "".concat(r, "%")
                : "-";
          return { apyFormatted: a, pickleApyRange: s };
        },
        eu = (e, t, a) => {
          var l;
          let n =
              null == a
                ? void 0
                : null === (l = a.chains) || void 0 === l
                ? void 0
                : l.find((t) => t.chain === e),
            r =
              null == n
                ? void 0
                : n.jarVotes.find(
                    (e) => e.key.toLowerCase() === t.toLowerCase()
                  ),
            i = r ? r.jarVoteAsEmissionShare : 0;
          return (0, b.rl)(100 * i);
        },
        ep = (e, t, a) => {
          var l;
          let n =
              null == t
                ? void 0
                : t.votes.find(
                    (e) =>
                      e.wallet.toLowerCase() ===
                      (null == a ? void 0 : a.toLowerCase())
                  ),
            r =
              null == n
                ? void 0
                : null === (l = n.jarWeights) || void 0 === l
                ? void 0
                : l.find((t) => t.jarKey.toLowerCase() === e.toLowerCase());
          return r ? r.weight.toString() + "%" : "0%";
        },
        em = (e) => {
          var t, a;
          return (
            null == e
              ? void 0
              : null === (t = e.farm) || void 0 === t
              ? void 0
              : null === (a = t.details) || void 0 === a
              ? void 0
              : a.allocShare
          )
            ? (0, b.rl)(100 * e.farm.details.allocShare)
            : "0%";
        },
        eh = (e, t, a) => {
          let l = (0, Y.E5)(e, t),
            n = (null == l ? void 0 : l.contract) || "";
          if (a) {
            let e = H.O$.from("0");
            if (
              (a.votes.forEach((t) => (e = e.add(H.O$.from(t.weight)))), +e > 1)
            ) {
              let t = a.votes.find((e) => e.farmDepositToken === n),
                l = t ? H.O$.from(t.weight) : 0,
                r = l ? l.mul(1e4).div(e).toNumber() / 1e4 : 0,
                i = 0 !== r ? (0, b.rl)(100 * r) : "0%";
              return i;
            }
          }
          return "0%";
        };
      var ev = (e) => {
          let {
              jar: t,
              core: a,
              mainnet: n,
              offchainVoteData: r,
              wallet: i,
              setChange: o,
              user: s,
            } = e,
            d = a
              ? a.assets.jars.filter((e) => {
                  if (e && e.details && e.details.apiKey)
                    return e.details.apiKey === t;
                })[0]
              : {},
            { apyFormatted: c, pickleApyRange: u } = ec(d),
            p = d && d.chain ? d.chain : "strategy";
          return (0, l.BX)(l.HY, {
            children: [
              (0, l.BX)("tr", {
                className: "group",
                children: [
                  (0, l.tZ)(eo, {
                    className: "rounded-l-xl",
                    children: (0, l.tZ)(es, {
                      text: t,
                      className: "text-left",
                    }),
                  }),
                  (0, l.tZ)(eo, { children: (0, l.tZ)(es, { text: c }) }),
                  (0, l.tZ)(eo, { children: (0, l.tZ)(es, { text: u }) }),
                  (0, l.tZ)(eo, {
                    children: n
                      ? (0, l.tZ)(es, { text: em(d) })
                      : (0, l.tZ)(es, { text: eu(p, t, r) }),
                  }),
                  (0, l.tZ)(eo, {
                    children: n
                      ? (0, l.tZ)(es, { text: eh(t, a, s) })
                      : (0, l.tZ)(es, { text: ep(t, r, i) }),
                  }),
                  (0, l.tZ)(eo, {
                    className: "rounded-r-xl",
                    children: n
                      ? (0, l.tZ)(ed, {
                          jar: t,
                          val: eh(t, a, s),
                          setChange: o,
                        })
                      : (0, l.tZ)(ed, {
                          jar: t,
                          val: ep(t, r, i),
                          setChange: o,
                        }),
                  }),
                ],
              }),
              (0, l.tZ)(ei, {}),
            ],
          });
        },
        ef = (e) => {
          let {
            selectedJars: t,
            core: a,
            mainnet: n,
            setChange: r,
            offchainVoteData: i,
            wallet: o,
            user: s,
          } = e;
          return (0, l.tZ)("div", {
            className: "flex flex-col mt-10",
            children: (0, l.tZ)("div", {
              className: "-my-2 overflow-x-auto",
              children: (0, l.tZ)("div", {
                className: "py-2 align-middle inline-block min-w-full",
                children: (0, l.BX)("table", {
                  className: "min-w-full table-auto border-collapse",
                  children: [
                    (0, l.tZ)(er, {}),
                    (0, l.tZ)("tbody", {
                      children: (0, l.tZ)(l.HY, {
                        children: t.map((e) =>
                          (0, l.tZ)(
                            ev,
                            {
                              jar: e,
                              core: a,
                              mainnet: n,
                              setChange: r,
                              offchainVoteData: i,
                              wallet: o,
                              user: s,
                            },
                            e
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        eg = a(34211),
        ey = (e) => {
          let {
              vote: t,
              provider: a,
              selectedJars: n,
              core: i,
              enabled: o,
            } = e,
            { t: s } = (0, r.$G)("common");
          return (0, l.tZ)("div", {
            className: "grid grid-cols-1 place-items-end mt-5 pb-10",
            children: (0, l.tZ)(eg.Z, {
              state: o ? "enabled" : "disabled",
              size: "small",
              onClick: () => t(a, n, i),
              children: s("v2.dill.vote.castMainnetVote"),
            }),
          });
        };
      let eb = (e, t) => {
          let a = e ? e.votes.map((e) => e.farmDepositToken) : [],
            l = [];
          for (let e = 0; e < a.length; e++) {
            let n = a[e];
            for (let e = 0; e < t.assets.jars.length; e++) {
              let a = t.assets.jars[e],
                r = a.contract;
              (null == r ? void 0 : r.toLowerCase()) === n.toLowerCase() &&
                l.push(a.details.apiKey);
            }
          }
          return l;
        },
        eZ = (e) => {
          let t = 0;
          return (
            e.forEach((e) => {
              let a = document.getElementById(e);
              0 > +a.value ? (t += -1 * +a.value) : (t += +a.value);
            }),
            t
          );
        };
      var ex = (e) => {
          let { core: t, user: a } = e,
            { library: i } = (0, o.Ge)(),
            { t: s } = (0, r.$G)("common"),
            [d, c] = (0, n.useState)([]),
            [u, p] = (0, n.useState)(null),
            [m, h] = (0, n.useState)(!0);
          return (
            (0, n.useEffect)(() => {
              let e = eb(a, t);
              c(e);
            }, [a, t]),
            (0, n.useEffect)(() => {
              u && (100 !== eZ(d) ? h(!1) : h(!0));
            }, [u]),
            (0, l.BX)(l.HY, {
              children: [
                (0, l.tZ)("h1", {
                  className:
                    "font-title font-medium text-2xl sm:text-3xl pt-2 mb-5 mt-10",
                  children: s("v2.dill.vote.subtitleMainnet"),
                }),
                (0, l.tZ)("p", {
                  className:
                    "flex py-2 text-foreground-alt-200 justify-between mb-5",
                  children: (0, l.tZ)("span", {
                    className: "font-medium text-base indent-4",
                    children: s("v2.dill.vote.descriptionMainnet"),
                  }),
                }),
                (0, l.tZ)(el, {
                  core: t,
                  mainnet: !0,
                  selectedJars: d,
                  setSelectedJars: c,
                }),
                d.length > 0 &&
                  (0, l.tZ)(ef, {
                    selectedJars: d,
                    core: t,
                    mainnet: !0,
                    user: a,
                    setChange: p,
                  }),
                (0, l.tZ)(ey, {
                  vote: U,
                  provider: i,
                  selectedJars: d,
                  core: t,
                  enabled: m,
                }),
              ],
            })
          );
        },
        ew = a(50790),
        eN = a(20859),
        ek = a(66558);
      let eC = () => {
          let { library: e } = (0, o.Ge)(),
            t = (0, eN.m)(),
            a = (0, ew.CG)(i.VH.selectCore),
            c = (0, ew.CG)((e) => d.G0.selectData(e, t)),
            m = (0, ew.CG)(s.E6.selectVoteData),
            { t: h } = (0, r.$G)("common"),
            [v, f] = (0, n.useState)(!0);
          return (
            null == e ||
              e.getNetwork().then((e) => (1 === e.chainId ? f(!0) : f(!1))),
            (0, l.BX)(l.HY, {
              children: [
                v
                  ? a
                    ? c
                      ? m
                        ? (0, l.BX)(l.HY, {
                            children: [
                              (0, l.tZ)(P, { core: a, offchainVoteData: m }),
                              (0, l.tZ)(ex, { core: a, user: c }),
                              (0, l.tZ)("hr", {
                                className:
                                  "border-foreground-alt-500 mt-5 mb-5",
                              }),
                            ],
                          })
                        : (0, l.tZ)(p.Z, { waitForVoteData: !0 })
                      : (0, l.tZ)(p.Z, {
                          waitForUserModel: !0,
                          customText: "Loading Chart Data",
                        })
                    : (0, l.tZ)(p.Z, {
                        waitForCore: !0,
                        customText: "Loading Chart Data",
                      })
                  : (0, l.tZ)(eT, { t: h }),
                (0, l.tZ)(u, {}),
              ],
            })
          );
        },
        eT = (e) => {
          let { t } = e;
          return (0, l.tZ)("div", {
            className: "w-full grid place-items-center",
            children: (0, l.BX)("div", {
              className:
                "bg-background-light min-w-min grid place-items-center rounded-xl w-1/2",
              children: [
                (0, l.tZ)("p", {
                  className: "p-5",
                  children: t("v2.dill.vote.connectToMainnet"),
                }),
                (0, l.tZ)("div", {
                  className: "p-5",
                  children: (0, l.tZ)(ek.Z, {
                    network: {
                      name: "eth",
                      visibleName: "Ethereum",
                      chainId: 1,
                    },
                  }),
                }),
              ],
            }),
          });
        };
      eC.PageTitle = () => {
        let { t: e } = (0, r.$G)("common");
        return (0, l.BX)(l.HY, {
          children: [
            (0, l.tZ)("h1", {
              className:
                "font-title font-medium min-w-200 text-2xl sm:text-3xl pt-2",
              children: e("v2.dill.vote.title"),
            }),
            (0, l.tZ)("h2", {
              className:
                "font-body font-normal min-w-300 text-foreground-alt-200 text-sm sm:text-base leading-4 sm:leading-6 mt-1",
              children: e("v2.dill.vote.description"),
            }),
          ],
        });
      };
      var eM = !0,
        eE = eC;
    },
    69876: function (e, t, a) {
      "use strict";
      var l = a(35944),
        n = a(9473),
        r = a(75426),
        i = a(68856),
        o = a(24834),
        s = a(86688),
        d = a(7518),
        c = a(86281),
        u = a(93490),
        p = a(69742);
      let m = (e) => {
        let { isLoading: t } = e;
        return t
          ? (0, l.tZ)(d.Z, {})
          : (0, l.tZ)(r.Z, { className: "w-4 h-4 mr-1 text-primary-light" });
      };
      t.Z = (e) => {
        let {
            waitForCore: t,
            waitForDocs: a,
            waitForUserModel: r,
            waitForVoteData: d,
            customText: h,
            className: v,
          } = e,
          { t: f } = (0, i.$G)("common"),
          g = (0, n.v9)(o.VH.selectLoadingState),
          y = (0, n.v9)(s.G0.selectIsFetching),
          b = (0, n.v9)(c.Ad.selectDocs),
          Z = (0, n.v9)(p.E6.selectVoteData);
        return (0, l.BX)("div", {
          className: (0, u.AK)(
            "bg-background-light text-center text-sm text-foreground-alt-200 rounded-xl w-full",
            v
          ),
          children: [
            t &&
              (0, l.BX)("div", {
                className:
                  "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                children: [
                  (0, l.tZ)(m, { isLoading: "fulfilled" !== g }),
                  (0, l.tZ)("span", {
                    children: h || f("v2.farms.loadingCoreData"),
                  }),
                ],
              }),
            r &&
              (0, l.BX)("div", {
                className:
                  "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                children: [
                  (0, l.tZ)(m, { isLoading: y }),
                  (0, l.tZ)("span", {
                    children: h || f("v2.farms.loadingUserModel"),
                  }),
                ],
              }),
            a &&
              (0, l.BX)("div", {
                className:
                  "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                children: [
                  (0, l.tZ)(m, { isLoading: !b }),
                  (0, l.tZ)("span", {
                    children: h || f("v2.farms.loadingDocs"),
                  }),
                ],
              }),
            d &&
              (0, l.BX)("div", {
                className:
                  "flex items-center justify-center text-foreground-alt-300 text-sm mb-2",
                children: [
                  (0, l.tZ)(m, { isLoading: !Z }),
                  (0, l.tZ)("span", {
                    children: h || f("v2.farms.loadingVotes"),
                  }),
                ],
              }),
          ],
        });
      };
    },
    66558: function (e, t, a) {
      "use strict";
      var l = a(35944),
        n = a(25675),
        r = a.n(n),
        i = a(68856),
        o = a(77044),
        s = a(50790),
        d = a(34211),
        c = a(24834),
        u = a(85008),
        p = a(59908);
      t.Z = (e) => {
        let { size: t, type: a, network: n } = e,
          { t: m } = (0, i.$G)("common"),
          { library: h } = (0, o.Ge)(),
          v = (0, s.CG)(c.VH.selectCore);
        return n && v && h
          ? (0, l.BX)(d.Z, {
              size: t,
              type: a,
              onClick: () => (0, u.c)(h, n.chainId, v),
              children: [
                (0, l.tZ)("span", { children: m("connection.connectTo") }),
                (0, l.tZ)("div", {
                  className: "w-4 h-4 mr-1 ml-1",
                  children: (0, l.tZ)(r(), {
                    src: "/networks/".concat(n.name, ".png"),
                    width: 16,
                    height: 16,
                    layout: "intrinsic",
                    alt: n.name,
                    title: n.name,
                    className: "rounded-full",
                    priority: !0,
                  }),
                }),
                (0, l.tZ)("span", { children: n.visibleName }),
              ],
            })
          : (0, l.tZ)(p.Z, {});
      };
    },
  },
  function (e) {
    e.O(0, [490, 6955, 2182, 9253, 3604, 2132, 9774, 2888, 179], function () {
      return e((e.s = 90333));
    }),
      (_N_E = e.O());
  },
]);
