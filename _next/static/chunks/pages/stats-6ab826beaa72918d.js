(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3368],
  {
    33397: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stats",
        function () {
          return r(27217);
        },
      ]);
    },
    27217: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSG: function () {
            return en;
          },
          default: function () {
            return es;
          },
        });
      var a = r(35944),
        l = r(67294),
        o = r(68856),
        n = r(50790),
        s = r(24834),
        i = r(25675),
        c = r.n(i),
        d = r(30490),
        m = r(99006),
        u = r(69743),
        h = r(93490),
        g = r(9473),
        p = r(11163);
      let f = {
          clearIndicator: (t) => ({
            ...t,
            color: "rgb(var(--color-foreground-alt-300))",
            ":hover": { color: "rgb(var(--color-foreground-alt-200))" },
          }),
          control: (t) => ({
            ...t,
            backgroundColor: "rgb(var(--color-background-lightest))",
            border: 0,
            boxShadow: "none",
            padding: "8px 0",
          }),
          input: (t) => ({ ...t, color: "rgb(var(--color-primary))" }),
          menu: (t) => ({
            ...t,
            backgroundColor: "rgb(var(--color-background-light))",
            padding: 8,
            zIndex: 99,
            boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))",
          }),
          singleValue: (t) => ({
            ...t,
            color: "rgb(var(--color-foreground-alt-200))",
          }),
          option: (t, e) => {
            let { isFocused: r } = e;
            return {
              ...t,
              backgroundColor: r
                ? "rgb(var(--color-background-lightest))"
                : void 0,
              borderRadius: 10,
              transition: "all 200ms ease-in-out",
            };
          },
        },
        v = (t) => {
          let { children: e, ...r } = t;
          return (0, a.BX)(m.c.Control, {
            ...r,
            children: [
              (0, a.tZ)(u.Z, {
                className: "w-6 h-6 text-foreground-alt-200 ml-3 mr-1",
              }),
              e,
            ],
          });
        },
        b = (t) => {
          let { imageSrc: e, label: r } = t;
          return (0, a.tZ)("div", {
            className:
              "mr-3 w-8 h-8 rounded-full border-3 border-foreground-alt-400",
            children: (0, a.tZ)(c(), {
              src: e,
              className: "rounded-full",
              width: 32,
              height: 32,
              layout: "intrinsic",
              alt: r,
              title: r,
            }),
          });
        },
        x = (t) => {
          let { children: e, ...r } = t,
            { isFocused: l } = r;
          return (0, a.tZ)(m.c.Option, {
            ...r,
            className: "group",
            children: (0, a.BX)("div", {
              className: "flex items-center",
              children: [
                (0, a.tZ)(b, { ...r.data }),
                (0, a.tZ)("div", {
                  children: (0, a.tZ)("p", {
                    className: (0, h.AK)(
                      "text-foreground font-title text-base group-hover:text-primary-light transition duration-200 ease-in-out",
                      l && "text-primary-light"
                    ),
                    children: e,
                  }),
                }),
              ],
            }),
          });
        },
        Z = (t) => {
          let e = [];
          for (let r = 0; r < t.length; r++)
            e.push({
              imageSrc: "/networks/".concat(t[r].name.toLowerCase(), ".png"),
              value: t[r].name,
              label: t[r].visibleName,
            });
          return e;
        };
      var y = (t) => {
          let { chain: e, setChain: r, setJar: l, setPage: o } = t,
            n = (0, g.v9)(s.VH.selectNetworks),
            i = Z(n),
            c = (0, p.useRouter)(),
            m = Array.isArray(c.query.chain)
              ? c.query.chain[0]
              : c.query.chain || "";
          if (c.isReady && "" !== m && 0 === Object.keys(e).length)
            for (let t = 0; t < i.length; t++) i[t].value === m && r(i[t]);
          let u = (t) => {
            let e = t.value;
            c.push("/stats?chain=".concat(e)), r(t), o("chain");
          };
          return (0, a.tZ)(d.ZP, {
            className: "w-1/3 my-5 z-auto",
            placeholder: "Filter By Chain",
            styles: f,
            onChange: (t) => u(t),
            value: Object.keys(e).length > 0 ? e : "",
            options: i,
            components: { Control: v, Option: x },
          });
        },
        N = r(6607);
      let k = (t, e) => {
          let r =
              t && t.assets
                ? e
                  ? t.assets.jars.filter((t) => t.chain === e.value)
                  : t.assets.jars
                : [],
            a = r.filter(C),
            l = [];
          for (let t = 0; t < a.length; t++)
            l.push({
              value:
                a[t].details && a[t].details.apiKey ? a[t].details.apiKey : "",
              label: a[t].details
                ? "".concat(a[t].id, " (").concat(a[t].details.apiKey, ")")
                : a[t].id,
            });
          return l;
        },
        w = {
          clearIndicator: (t) => ({
            ...t,
            color: "rgb(var(--color-foreground-alt-300))",
            ":hover": { color: "rgb(var(--color-foreground-alt-200))" },
          }),
          control: (t) => ({
            ...t,
            backgroundColor: "rgb(var(--color-background-lightest))",
            border: 0,
            boxShadow: "none",
            padding: "8px 0",
          }),
          input: (t) => ({ ...t, color: "rgb(var(--color-primary))" }),
          menu: (t) => ({
            ...t,
            backgroundColor: "rgb(var(--color-background-light))",
            padding: 8,
            zIndex: 55,
            boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))",
          }),
          singleValue: (t) => ({
            ...t,
            color: "rgb(var(--color-foreground-alt-200))",
          }),
          option: (t, e) => {
            let { isFocused: r } = e;
            return {
              ...t,
              backgroundColor: r
                ? "rgb(var(--color-background-lightest))"
                : void 0,
              borderRadius: 10,
              transition: "all 200ms ease-in-out",
            };
          },
        },
        C = (t) => {
          var e;
          if (
            t.enablement !== N.AssetEnablement.PERMANENTLY_DISABLED &&
            t.enablement !== N.AssetEnablement.DISABLED &&
            (null === (e = t.details) || void 0 === e ? void 0 : e.apiKey) !==
              void 0
          )
            return t;
        };
      var B = (t) => {
          let {
              core: e,
              chain: r,
              jar: o,
              setJar: n,
              setChain: i,
              setPage: c,
            } = t,
            [m, u] = (0, l.useState)([]),
            h = (0, g.v9)(s.VH.selectNetworks),
            f = Z(h),
            v = (0, p.useRouter)(),
            b = Array.isArray(v.query.jar) ? v.query.jar[0] : v.query.jar || "";
          if (v.isReady && "" !== b && 0 === Object.keys(o).length) {
            let t =
              null == e
                ? void 0
                : e.assets.jars.find((t) => {
                    var e;
                    return (
                      (null === (e = t.details) || void 0 === e
                        ? void 0
                        : e.apiKey.toLowerCase()) === b.toLowerCase()
                    );
                  });
            for (let e = 0; e < f.length; e++)
              t && f[e].value === t.chain && i(f[e]);
            for (let e = 0; e < m.length; e++)
              t && m[e].value.toLowerCase() === b.toLowerCase() && n(m[e]);
          }
          let x = (t) => {
            let e = t.value;
            v.push("/stats?jar=".concat(e)), n(t);
          };
          return ((0, l.useEffect)(() => {
            let t = async () => {
              if (e) {
                let t = k(e, r);
                u(t);
              }
            };
            t(), setInterval(t, 18e4);
          }, [e, r]),
          Object.keys(r).length > 0)
            ? (0, a.tZ)(d.ZP, {
                className: "w-1/3 my-5",
                placeholder: "Filter By Jar",
                styles: w,
                isSearchable: !0,
                onChange: (t) => x(t),
                value: Object.keys(o).length > 0 ? o : "",
                options: m,
              })
            : null;
        },
        S = (t) => {
          let { chain: e, jar: r, setChain: l, setJar: n } = t,
            { t: s } = (0, o.$G)("common"),
            i = (0, p.useRouter)();
          return (0, a.BX)("div", {
            className: "flex",
            children: [
              (0, a.tZ)("h3", {
                className:
                  "lg:text-xl md:text-md sm:text-sm inline-block cursor-pointer" +
                  (Object.keys(e).length > 0
                    ? " text-accent hover:text-primary"
                    : " text-foreground-alt-100"),
                onClick: () => {
                  if (e && r) l({}), n(""), i.push("/stats");
                  else {
                    if (e === {}) return;
                    l({}), i.push("/stats");
                  }
                },
                children: s("v2.stats.platformStats"),
              }),
              e &&
                Object.keys(e).length > 0 &&
                (0, a.BX)(a.HY, {
                  children: [
                    (0, a.tZ)("p", {
                      className: "text-foreground-alt-100 px-2",
                      children: ">",
                    }),
                    (0, a.tZ)("h3", {
                      className:
                        "lg:text-xl md:text-md sm:text-sm inline-block cursor-pointer" +
                        (Object.keys(r).length > 0
                          ? " text-accent hover:text-primary"
                          : " text-foreground-alt-100"),
                      onClick: () => {
                        n(""), i.push("/stats?chain=".concat(e.value));
                      },
                      children: (0, h.LF)(e.label),
                    }),
                  ],
                }),
              Object.keys(r).length > 0 &&
                (0, a.BX)(a.HY, {
                  children: [
                    (0, a.tZ)("p", {
                      className: "text-foreground-alt-100 px-2",
                      children: ">",
                    }),
                    (0, a.tZ)("h3", {
                      className:
                        "text-foreground-alt-200 lg:text-xl md:text-md sm:text-sm",
                      children: r.value,
                    }),
                  ],
                }),
            ],
          });
        },
        A = r(9253),
        X = r(98687),
        j = r(14195),
        D = r(3023),
        T = r(75358),
        H = r(25048),
        L = r(14888),
        K = r(56880),
        F = r(94202);
      let E = (t) => {
          if (0 !== t.value) return t;
        },
        P = (t) => {
          let e = 0;
          for (let r = 0; r < t.length; r++) t[r].value > e && (e = t[r].value);
          return e;
        };
      var R = (t) => {
          let { data: e } = t,
            { t: r } = (0, o.$G)("common"),
            l = e
              ? e.filter(E).sort((t, e) => (t.timestamp > e.timestamp ? 1 : -1))
              : void 0,
            n = l ? P(l) : void 0;
          return l && n
            ? (0, a.tZ)(A.h, {
                children: (0, a.BX)(X.w, {
                  data: l,
                  children: [
                    (0, a.tZ)(j.q, {
                      strokeDasharray: "0",
                      stroke: "rgb(var(--color-foreground-alt-400))",
                    }),
                    (0, a.tZ)(D.K, {
                      dataKey: "timestamp",
                      tickFormatter: (t) => new Date(t).toLocaleDateString(),
                      height: 75,
                      angle: 300,
                      tickMargin: 25,
                      tick: {
                        fill: "rgb(var(--color-foreground-alt-300))",
                        dx: -18,
                        fontSize: 12,
                      },
                    }),
                    (0, a.tZ)(T.B, {
                      domain: [0, n],
                      tickFormatter: (t) =>
                        new Intl.NumberFormat("en", {
                          notation: "compact",
                          compactDisplay: "short",
                        }).format(t),
                      width: 100,
                      padding: { top: 25 },
                      tick: {
                        fill: "rgb(var(--color-foreground-alt-300))",
                        dx: -10,
                        fontSize: 12,
                      },
                      tickCount: 9,
                      children: (0, a.tZ)(H._, {
                        value: r("v2.dill.usdValue"),
                        position: "insideLeft",
                        angle: -90,
                        offset: 20,
                        fill: "rgb(var(--color-foreground-alt-100))",
                        style: { textAnchor: "middle", fontSize: 12 },
                      }),
                    }),
                    (0, a.tZ)(L.u, {
                      cursor: !1,
                      contentStyle: {
                        backgroundColor: "rgb(var(--color-foreground-alt-500))",
                        borderColor: "rgb(var(--color-foreground-alt-500))",
                        borderRadius: 10,
                      },
                      labelFormatter: (t) =>
                        new Date(t).toLocaleDateString() +
                        " " +
                        new Date(t).toLocaleTimeString(),
                      formatter: (t) => [
                        (0, F.qx)(t),
                        r("v2.stats.tooltips.value"),
                      ],
                    }),
                    (0, a.tZ)(K.x, {
                      type: "monotone",
                      dataKey: "value",
                      stroke: "rgb(var(--color-accent-light))",
                      dot: !1,
                      isAnimationActive: !1,
                    }),
                  ],
                }),
              })
            : (0, a.tZ)(a.HY, {});
        },
        I = r(90643),
        M = r(87226),
        q = r(33558);
      let O = (t, e) => {
          if (e > t.length) for (let e = 0; e < t.length; e++) t[e].ma = _(t);
          else
            for (let r = 10; r < t.length; r++) t[r].ma = _(t.slice(r - e, r));
          return t;
        },
        Y = (t) =>
          t ? t.sort((t, e) => (t.timestamp > e.timestamp ? 1 : -1)) : [],
        _ = (t) => t.reduce((t, e) => t + e.revsUsd, 0) / t.length,
        G = (t) => {
          let e = 0;
          for (let r = 0; r < t.length; r++) t[r].value > e && (e = t[r].value);
          return e;
        };
      var $ = (t) => {
          let { data: e } = t,
            { t: r } = (0, o.$G)("common"),
            [n, s] = (0, l.useState)([]),
            [i, c] = (0, l.useState)(0);
          return ((0, l.useEffect)(() => {
            if (e && e.length > 0) {
              let t = Y(e);
              s(O(t, 10));
            }
          }, [e]),
          (0, l.useEffect)(() => {
            n.length > 0 && c(G(n));
          }, [n]),
          n.length > 0)
            ? (0, a.tZ)(A.h, {
                children: (0, a.BX)(I.c, {
                  data: n,
                  children: [
                    (0, a.tZ)(j.q, {
                      strokeDasharray: "0",
                      stroke: "rgb(var(--color-foreground-alt-400))",
                    }),
                    (0, a.tZ)(D.K, {
                      dataKey: "timestamp",
                      tickFormatter: (t) =>
                        new Date(1e3 * t).toLocaleDateString(),
                      height: 75,
                      angle: 300,
                      tickMargin: 25,
                      tick: {
                        fill: "rgb(var(--color-foreground-alt-300))",
                        dx: -18,
                        fontSize: 12,
                      },
                    }),
                    (0, a.tZ)(T.B, {
                      tickFormatter: (t) =>
                        new Intl.NumberFormat("en", {
                          notation: "compact",
                          compactDisplay: "short",
                        }).format(t),
                      domain: i ? [0, i] : void 0,
                      width: 100,
                      tick: {
                        fill: "rgb(var(--color-foreground-alt-300))",
                        dx: -10,
                        fontSize: 12,
                      },
                      tickCount: 9,
                      children: (0, a.tZ)(H._, {
                        value: r("v2.dill.usdValue"),
                        position: "insideLeft",
                        angle: -90,
                        offset: 20,
                        fill: "rgb(var(--color-foreground-alt-100))",
                        style: { textAnchor: "middle", fontSize: 12 },
                      }),
                    }),
                    (0, a.tZ)(L.u, {
                      cursor: !1,
                      contentStyle: {
                        backgroundColor: "rgb(var(--color-foreground-alt-500))",
                        borderColor: "rgb(var(--color-foreground-alt-500))",
                        borderRadius: 10,
                      },
                      labelFormatter: (t) =>
                        new Date(1e3 * t).toLocaleDateString() +
                        " " +
                        new Date(1e3 * t).toLocaleTimeString(),
                      formatter: (t, e) => [
                        (0, h.qx)(t),
                        r("v2.stats.tooltips.".concat(e)),
                      ],
                    }),
                    (0, a.tZ)(M.$, {
                      dataKey: "revsUsd",
                      isAnimationActive: !1,
                      fill: "rgb(var(--color-primary-light))",
                    }),
                    (0, a.tZ)(K.x, {
                      dataKey: "ma",
                      dot: !1,
                      isAnimationActive: !1,
                      stroke: "rgb(var(--color-accent))",
                    }),
                    (0, a.tZ)(q.D, {
                      formatter: (t) =>
                        (0, a.tZ)("span", {
                          className: "text-foreground-alt-200 text-xs",
                          children: r("v2.stats.tooltips.".concat(t)),
                        }),
                      iconType: "wye",
                      wrapperStyle: { lineHeight: "25px" },
                    }),
                  ],
                }),
              })
            : (0, a.tZ)(a.HY, {});
        },
        V = r(73604),
        U = r(46208),
        z = r(43815),
        J = r(2763);
      let W = (t) => {
        let { label: e, value: r } = t;
        return (0, a.BX)("tr", {
          className: "grid grid-cols-2 gap-5",
          children: [
            (0, a.tZ)("td", {
              children: (0, a.tZ)("p", {
                className: "text-foreground-alt-200 col-span-1",
                children: e,
              }),
            }),
            (0, a.tZ)("td", {
              children: (0, a.tZ)("p", {
                className: "text-foreground-alt-200 col-span-2",
                children: r,
              }),
            }),
          ],
        });
      };
      var Q = (t) => {
        let { active: e, payload: r } = t,
          { t: l } = (0, o.$G)("common");
        if (e && r && r.length) {
          let t = r[0].payload.name || void 0,
            e = r[0].payload.tvl || void 0,
            o = r[0].payload.apr || void 0,
            n = r[0].payload.apy || void 0;
          return (0, a.tZ)("div", {
            className:
              "bg-background-light p-5 rounded border border-foreground-alt-300",
            children: (0, a.tZ)("table", {
              children: (0, a.BX)("tbody", {
                children: [
                  t &&
                    (0, a.tZ)(W, {
                      label: l("v2.stats.tooltips.name"),
                      value: t,
                    }),
                  e &&
                    (0, a.tZ)(W, {
                      label: l("v2.stats.tooltips.tvl"),
                      value: (0, h.qx)(e),
                    }),
                  o &&
                    (0, a.tZ)(W, {
                      label: l("v2.stats.tooltips.jarApr"),
                      value: (0, h.rl)(o),
                    }),
                  n &&
                    (0, a.tZ)(W, {
                      label: l("v2.stats.tooltips.farmApy"),
                      value: (0, h.rl)(n),
                    }),
                ],
              }),
            }),
          });
        }
        return null;
      };
      let tt = Math.PI / 180,
        te = (t) => {
          let { cx: e, cy: r, midAngle: l, outerRadius: o, tvl: n } = t,
            s = 1.1 * o,
            i = e + s * Math.cos(-l * tt);
          return (0, a.tZ)("text", {
            x: i,
            y: r + s * Math.sin(-l * tt),
            fill: "white",
            textAnchor: i > e ? "start" : "end",
            dominantBaseline: "bottom",
            children: (0, h.qx)(n),
          });
        },
        tr = (t, e, r) =>
          t.length % 2 == 0
            ? ["rgb(var(--color-primary-light))", "rgb(var(--color-primary))"][
                r % 2
              ]
            : t.indexOf(e) === t.length - 1 && r % 3 == 0
            ? "rgb(var(--color-primary))"
            : [
                "rgb(var(--color-primary-light))",
                "rgb(var(--color-primary))",
                "rgb(var(--color-primary-dark))",
              ][r % 3];
      var ta = (t) => {
          let { core: e, chain: r } = t,
            l = [];
          for (let t = 0; t < e.assets.jars.length; t++) {
            var o, n;
            let a = e.assets.jars[t];
            (!r || a.chain === r) &&
              a.details &&
              a.details.harvestStats &&
              a.details.harvestStats.balanceUSD &&
              l.push({
                name: (
                  null === (o = a.farm) || void 0 === o
                    ? void 0
                    : o.farmNickname
                )
                  ? null === (n = a.farm) || void 0 === n
                    ? void 0
                    : n.farmNickname
                  : void 0,
                apiKey: a.details.apiKey,
                id: a.id,
                tvl: a.details.harvestStats.balanceUSD,
                apr: a.aprStats ? a.aprStats.apr : void 0,
                apy: a.aprStats ? a.aprStats.apy : void 0,
              });
          }
          let s = l.sort((t, e) => (t.tvl > e.tvl ? -1 : 1)),
            i = s.slice(0, 5);
          return (0, a.tZ)(A.h, {
            children: (0, a.BX)(V.u, {
              children: [
                (0, a.BX)(U.b, {
                  data: i,
                  dataKey: "tvl",
                  nameKey: "id",
                  cx: "50%",
                  cy: "50%",
                  label: te,
                  labelLine: { stroke: "rgb(var(--color-background-light))" },
                  outerRadius: 150,
                  innerRadius: 100,
                  strokeWidth: i.length >= 1 ? 1 : 10,
                  stroke: "rgb(var(--color-foreground-alt-100))",
                  isAnimationActive: !1,
                  children: [
                    i.map((t, e) =>
                      (0, a.tZ)(z.b, { fill: tr(i, t, e) }, "cell-".concat(e))
                    ),
                    (0, a.tZ)(J.e, {
                      dataKey: "jar",
                      position: "outside",
                      offset: 20,
                    }),
                  ],
                }),
                (0, a.tZ)(L.u, {
                  content: (t) => {
                    let { active: e, payload: r } = t;
                    return (0, a.tZ)(Q, { active: e, payload: r });
                  },
                }),
              ],
            }),
          });
        },
        tl = (t) => {
          let { chart: e, dataSeries: r, core: l, chain: n, className: s } = t,
            { t: i } = (0, o.$G)("common"),
            c = {
              tvl: r ? (0, a.tZ)(R, { data: r.tvl }) : void 0,
              revs: r ? (0, a.tZ)($, { data: r.revenues }) : void 0,
              topJars: l ? (0, a.tZ)(ta, { core: l, chain: n }) : void 0,
            };
          return c[e]
            ? (0, a.BX)("div", {
                className: (0, h.AK)(
                  "bg-background-light rounded-xl min-w-[500px] border border-foreground-alt-500 mb-5",
                  s
                ),
                children: [
                  (0, a.tZ)("h2", {
                    className:
                      "font-body font-bold text-xl text-foreground-alt-200 p-4",
                    children: i("v2.stats.platform.".concat(e, "ChartTitle")),
                  }),
                  (0, a.tZ)("aside", {
                    className: "xl:h-[500px] sm:h-[400px] pr-4",
                    children: c[e],
                  }),
                ],
              })
            : null;
        },
        to = () => {
          let { t } = (0, o.$G)("common");
          return (0, a.tZ)("thead", {
            className: "rounded-t-md",
            children: (0, a.BX)("tr", {
              className:
                "w-full text-foreground-alt-200 border border-foreground-alt-400 bg-foreground-alt-400",
              children: [
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm lg:pl-8 sm:pl-4 py-2 pr-2",
                  children: t("v2.stats.chain.assetTableHeaders.asset"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t("v2.stats.chain.assetTableHeaders.tvl"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t("v2.stats.chain.assetTableHeaders.tvlChange"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t("v2.stats.chain.assetTableHeaders.apyRange"),
                }),
              ],
            }),
          });
        };
      let tn = (t) => {
        let { jarKey: e, setJar: r, chain: l, core: o } = t,
          n = k(o, l),
          s = n.find((t) => t.value === e);
        return s
          ? (0, a.tZ)("a", {
              className: "text-accent-light cursor-pointer hover:underline",
              onClick: () => r(s),
              children: s.label.toUpperCase(),
            })
          : (0, a.tZ)("a", {
              className: "text-accent-light cursor-pointer hover:underline",
              children: e.toUpperCase(),
            });
      };
      var ts = (t) => {
          let { assetKey: e, asset: r, setJar: l, core: o, chain: n } = t,
            s =
              r && r.now && r.now.jarApy && r.now.farmMinApy
                ? (r.now.jarApy + r.now.farmMinApy).toFixed(3)
                : void 0,
            i =
              r && r.now && r.now.jarApy && r.now.farmMaxApy
                ? (r.now.jarApy + r.now.farmMaxApy).toFixed(3)
                : void 0,
            c =
              s && i
                ? s !== i
                  ? "".concat(s, " - ").concat(i, "%")
                  : "".concat(i, "%")
                : r.now.jarApr
                ? "".concat(r.now.jarApr, "%")
                : "0%";
          return (0, a.BX)("tr", {
            className:
              "border border-foreground-alt-400 text-foreground-alt-100",
            children: [
              (0, a.tZ)("td", {
                className: "text-left text-sm lg:pl-8 sm:pl-4 py-2 pr-2",
                children: (0, a.tZ)(tn, {
                  jarKey: e,
                  setJar: l,
                  chain: n,
                  core: o,
                }),
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm p-2",
                children: r && r.now ? (0, h.qx)(r.now.value) : "-",
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm p-2",
                children:
                  r && r.now ? (0, h.qx)(r.now.value - r.previous.value) : "-",
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm py-2 pl-2 lg:pr-8 sm:pr-4",
                children: c,
              }),
            ],
          });
        },
        ti = (t) => {
          let { assets: e, setJar: r, chain: l, core: o } = t,
            n = e ? Object.keys(e) : [],
            s = n.filter((t) => {
              let e = o.assets.jars.find((e) => {
                var r;
                return (
                  (null === (r = e.details) || void 0 === r
                    ? void 0
                    : r.apiKey) === t
                );
              });
              if (
                (null == e ? void 0 : e.enablement) !==
                  N.AssetEnablement.PERMANENTLY_DISABLED &&
                "old" !== t.slice(-3).toLowerCase()
              )
                return t;
            });
          return (0, a.BX)("table", {
            className: "w-full",
            children: [
              (0, a.tZ)(to, {}),
              (0, a.tZ)("tbody", {
                className: "border border-foreground-alt-400",
                children: s.map((t) =>
                  (0, a.tZ)(
                    ts,
                    { assetKey: t, asset: e[t], setJar: r, core: o, chain: l },
                    t
                  )
                ),
              }),
            ],
          });
        },
        tc = (t) => {
          let { chainData: e, setJar: r, chain: l, core: n } = t,
            { t: s } = (0, o.$G)("common"),
            i = e.assets ? e.assets : void 0;
          return i && n
            ? (0, a.BX)("div", {
                className:
                  "bg-background-light w-full min-w-min rounded-xl border border-foreground-alt-500 shadow mb-5",
                children: [
                  (0, a.tZ)("h2", {
                    className:
                      "font-body font-bold text-xl text-foreground-alt-200 p-4",
                    children: s("v2.stats.chain.assetTableTitle"),
                  }),
                  (0, a.tZ)("div", {
                    className: "p-2 pb-4",
                    children: (0, a.tZ)("div", {
                      className: "max-h-[550px] overflow-y-auto p-2",
                      children: (0, a.tZ)(ti, {
                        assets: i,
                        setJar: r,
                        chain: l,
                        core: n,
                      }),
                    }),
                  }),
                ],
              })
            : null;
        },
        td = (t) => {
          let { colB: e } = t,
            { t: r } = (0, o.$G)("common");
          return (0, a.tZ)("thead", {
            className: "rounded-t-md min-w-min ",
            children: (0, a.BX)("tr", {
              className:
                "w-full min-w-min text-foreground-alt-200 border border-foreground-alt-400 bg-foreground-alt-400",
              children: [
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left min-w-min pl-20 pt-2 pb-2",
                  children: r("v2.stats.chain.bigMoversTableHeader.asset"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left min-w-min pl-20 pt-2 pb-2",
                  children: r(e),
                }),
              ],
            }),
          });
        };
      let tm = (t) => {
          let { data: e } = t;
          return (0, a.BX)("table", {
            className: "w-full",
            children: [
              (0, a.tZ)(td, {
                colB: "v2.stats.chain.bigMoversTableHeader.gain",
              }),
              (0, a.tZ)("tbody", {
                className: "border border-foreground-alt-400",
                children: e
                  .slice(-5)
                  .reverse()
                  .map((t) =>
                    (0, a.BX)(
                      "tr",
                      {
                        className: "text-foreground-alt-100",
                        children: [
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2",
                            children: t.apiKey,
                          }),
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2 pr-2",
                            children:
                              void 0 !== t.tvlChange
                                ? (0, h.qx)(t.tvlChange, 2)
                                : "error",
                          }),
                        ],
                      },
                      "apiKey"
                    )
                  ),
              }),
            ],
          });
        },
        tu = (t) => {
          let { data: e } = t;
          return (0, a.BX)("table", {
            className: "w-full sm:mt-5",
            children: [
              (0, a.tZ)(td, {
                colB: "v2.stats.chain.bigMoversTableHeader.loss",
              }),
              (0, a.tZ)("tbody", {
                className: "border border-foreground-alt-400 text-left",
                children: e
                  .slice(0, 5)
                  .map((t) =>
                    (0, a.BX)(
                      "tr",
                      {
                        className: "text-foreground-alt-100",
                        children: [
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2",
                            children: t.apiKey,
                          }),
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2 pr-2",
                            children:
                              void 0 !== t.tvlChange
                                ? (0, h.qx)(t.tvlChange, 2)
                                : "error",
                          }),
                        ],
                      },
                      "apiKey"
                    )
                  ),
              }),
            ],
          });
        },
        th = (t) => {
          let { data: e } = t;
          return (0, a.BX)("table", {
            className: "w-full",
            children: [
              (0, a.tZ)(td, {
                colB: "v2.stats.chain.bigMoversTableHeader.gain",
              }),
              (0, a.tZ)("tbody", {
                className: "border border-foreground-alt-400",
                children: e
                  .slice(-5)
                  .reverse()
                  .map((t) =>
                    (0, a.BX)(
                      "tr",
                      {
                        className: "text-foreground-alt-100",
                        children: [
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2",
                            children: t.apiKey,
                          }),
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2 pr-2",
                            children:
                              void 0 !== t.tokenPriceChange
                                ? (0, h.rl)(100 * t.tokenPriceChange, 3)
                                : "error",
                          }),
                        ],
                      },
                      "apiKey"
                    )
                  ),
              }),
            ],
          });
        },
        tg = (t) => {
          let { data: e } = t;
          return (0, a.BX)("table", {
            className: "w-full sm:mt-5",
            children: [
              (0, a.tZ)(td, {
                colB: "v2.stats.chain.bigMoversTableHeader.loss",
              }),
              (0, a.tZ)("tbody", {
                className: "border border-foreground-alt-400 text-left",
                children: e
                  .slice(0, 5)
                  .map((t) =>
                    (0, a.BX)(
                      "tr",
                      {
                        className: "text-foreground-alt-100",
                        children: [
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2",
                            children: t.apiKey,
                          }),
                          (0, a.tZ)("td", {
                            className:
                              "text-left xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 pt-2 pr-2",
                            children:
                              void 0 !== t.tokenPriceChange
                                ? (0, h.rl)(100 * t.tokenPriceChange, 3)
                                : "error",
                          }),
                        ],
                      },
                      "apiKey"
                    )
                  ),
              }),
            ],
          });
        };
      var tp = (t) => {
        let { type: e, tableData: r, className: l } = t,
          { t: n } = (0, o.$G)("common");
        return r.length > 0
          ? (0, a.BX)("div", {
              className: (0, h.AK)(
                "bg-background-light min-w-min rounded-xl border border-foreground-alt-500 shadow p-4 mb-5 sm:p-8",
                l
              ),
              children: [
                (0, a.tZ)("h2", {
                  className:
                    "text-foreground-alt-200 font-body font-bold text-xl mb-4",
                  children: n("v2.stats.chain.".concat(e, "Table")),
                }),
                "tvl" === e &&
                  (0, a.BX)("div", {
                    className:
                      "xl:columns-2 lg:columns-2 md:columns-1 sm:columns-1 gap-4",
                    children: [
                      (0, a.tZ)(tm, { data: r }),
                      (0, a.tZ)(tu, { data: r }),
                    ],
                  }),
                "tokenPct" === e &&
                  (0, a.BX)("div", {
                    className:
                      "xl:columns-2 lg:columns-2 md:columns-1 sm:columns-1 gap-4",
                    children: [
                      (0, a.tZ)(th, { data: r }),
                      (0, a.tZ)(tg, { data: r }),
                    ],
                  }),
              ],
            })
          : null;
      };
      let tf = (t) => {
          let e = t ? t.assets : {},
            r = Object.keys(e || {}),
            a = [];
          if (e)
            for (let t = 0; t < r.length; t++) {
              var l, o, n, s;
              let i =
                  e && (null === (l = e[r[t]]) || void 0 === l ? void 0 : l.now)
                    ? null === (o = e[r[t]]) || void 0 === o
                      ? void 0
                      : o.now.depositTokenPrice
                    : 0,
                c =
                  e &&
                  (null === (n = e[r[t]]) || void 0 === n ? void 0 : n.previous)
                    ? null === (s = e[r[t]]) || void 0 === s
                      ? void 0
                      : s.previous.depositTokenPrice
                    : 0,
                d = { apiKey: r[t], tokenPriceChange: c ? (i - c) / c : 0 };
              a.push(d);
            }
          return a;
        },
        tv = (t) => {
          let e = t ? t.assets : {},
            r = Object.keys(e || {}),
            a = [];
          if (e)
            for (let t = 0; t < r.length; t++) {
              var l, o, n, s;
              let i =
                  e && (null === (l = e[r[t]]) || void 0 === l ? void 0 : l.now)
                    ? null === (o = e[r[t]]) || void 0 === o
                      ? void 0
                      : o.now.value
                    : 0,
                c =
                  e &&
                  (null === (n = e[r[t]]) || void 0 === n ? void 0 : n.previous)
                    ? null === (s = e[r[t]]) || void 0 === s
                      ? void 0
                      : s.previous.value
                    : 0,
                d = { apiKey: r[t], tvlChange: i - c };
              a.push(d);
            }
          return a;
        },
        tb = async (t) => {
          let e = ""
            .concat(
              "https://f8wgg18t1h.execute-api.us-west-1.amazonaws.com/prod/protocol/analytics/chain",
              "/"
            )
            .concat(t, "/en");
          return await fetch(e)
            .then((t) => t.json())
            .catch((t) => console.log(t));
        };
      var tx = (t) => {
        let {
            core: e,
            chain: r,
            setJar: o,
            ready: n,
            setReady: s,
            page: i,
          } = t,
          [c, d] = (0, l.useState)({}),
          [m, u] = (0, l.useState)([]),
          [h, g] = (0, l.useState)([]);
        return ((0, l.useEffect)(() => {
          let t = async () => {
            Object.keys(r).length > 0 &&
              tb(r.value)
                .then((t) => d(t))
                .then(() => s((t) => ({ ...t, chain: !0 })));
          };
          t();
        }, [r]),
        (0, l.useEffect)(() => {
          let t = tf(c);
          u(t);
          let e = tv(c);
          g(e);
        }, [c]),
        (0, l.useEffect)(() => {
          m.length > 0 && h.length > 0 && s((t) => ({ ...t, chain: !0 }));
        }, [m, h]),
        m.sort((t, e) => (t.tokenPriceChange || 0) - (e.tokenPriceChange || 0)),
        h.sort((t, e) => (t.tvlChange || 0) - (e.tvlChange || 0)),
        "chain" === i && n[i])
          ? (0, a.BX)(a.HY, {
              children: [
                (0, a.tZ)(tp, { type: "tvl", tableData: h }),
                (0, a.tZ)(tp, { type: "tokenPct", tableData: m }),
                (0, a.BX)("div", {
                  className: "w-full lg:columns-2 md:columns-1 gap-5",
                  children: [
                    (0, a.tZ)(tl, { chart: "tvl", dataSeries: c }),
                    (0, a.tZ)(tl, { chart: "revs", dataSeries: c }),
                  ],
                }),
                (0, a.BX)("div", {
                  className:
                    "w-full min-w-min grid grid-cols-1 xl:grid-cols-2 gap-5",
                  children: [
                    (0, a.tZ)(tc, {
                      chainData: c,
                      core: e,
                      chain: r,
                      setJar: o,
                    }),
                    (0, a.tZ)(tl, {
                      chart: "topJars",
                      core: e,
                      chain: r.value,
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
      let tZ = [
        { value: "value", label: "TVL" },
        { value: "balance", label: "Balance" },
        { value: "depositTokenPrice", label: "Deposit Token Price" },
        { value: "farmAllocShare", label: "Farm Allocation Share" },
        { value: "harvestable", label: "Harvestable" },
        { value: "ptokensInFarm", label: "Percent of pTokens In Farm" },
        { value: "ratio", label: "Ratio" },
        { value: "yield", label: "APR and APY Yield" },
        { value: "tokenPriceVNum", label: "Token Price And Count" },
        { value: "revs", label: "Daily Revenue" },
      ];
      var ty = (t) => {
        let { chartChange: e } = t;
        return (0, a.tZ)(d.ZP, {
          styles: {
            input: (t) => ({
              ...t,
              color: "rgb(var(--color-foreground-alt-200))",
            }),
            control: (t) => ({
              ...t,
              maxWidth: 350,
              marginLeft: 25,
              backgroundColor: "rgb(var(--color-background))",
              borderWidth: "1px",
              borderColor: "rgb(var(--color-foreground-alt-400))",
              color: "rgb(var(--color-foreground-alt-200))",
            }),
            menu: (t) => ({
              ...t,
              top: 40,
              maxWidth: 400,
              marginLeft: 25,
              borderRadius: 5,
              borderWidth: "2px",
              borderColor: "rgb(var(--color-foreground-alt-400))",
              backgroundColor: "rgb(var(--color-background))",
              color: "rgb(var(--color-foreground-alt-200))",
            }),
          },
          theme: (t) => ({
            ...t,
            borderRadius: 5,
            colors: {
              ...t.colors,
              text: "rgb(var(--color-foreground-alt-200))",
              primary: "rgb(var(--color-foreground-alt-300))",
              primary25: "rgb(var(--color-foreground-alt-400))",
              primary50: "black",
              primary75: "black",
              neutral10: "black",
              neutral80: "rgb(var(--color-foreground-alt-200))",
            },
          }),
          defaultValue: { label: "TVL", value: "tvl" },
          onChange: (t) => e(t),
          options: tZ,
        });
      };
      let tN = (t) => ({
          timestamp: t.timestamp,
          ptokensInFarm: (t.ptokensInFarm / t.supply) * 100,
        }),
        tk = (t, e) => {
          let r = 0;
          for (let a = 0; a < t.length; a++) t[a][e] > r && (r = t[a][e]);
          return r;
        },
        tw = (t, e) => {
          let r = tk(t, e);
          for (let a = 0; a < t.length; a++) t[a][e] < r && (r = t[a][e]);
          return r;
        };
      var tC = (t) => {
        let { chartKey: e, data: r, timeUnit: l } = t,
          { t: n } = (0, o.$G)("common"),
          s = r && r.assetData ? r.assetData[l] : [],
          i = s ? s.sort((t, e) => (t.timestamp > e.timestamp ? 1 : -1)) : [];
        "ptokensInFarm" === e && (i = i.map(tN)),
          (i = i.filter((t) => 0 !== t[e]));
        let c = tk(i, e),
          d = tw(i, e);
        return i.length > 0
          ? (0, a.tZ)(A.h, {
              children: (0, a.BX)(X.w, {
                data: i,
                children: [
                  (0, a.tZ)(j.q, {
                    strokeDasharray: "0",
                    stroke: "rgb(var(--color-foreground-alt-400))",
                  }),
                  (0, a.tZ)(D.K, {
                    dataKey: "timestamp",
                    tickFormatter: (t) => new Date(t).toLocaleDateString(),
                    height: 75,
                    angle: 300,
                    tickMargin: 35,
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -20,
                    },
                  }),
                  (0, a.tZ)(T.B, {
                    tickFormatter: (t) =>
                      new Intl.NumberFormat("en", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(t),
                    domain: [d - 0.05 * d, c],
                    width: 100,
                    padding: { top: 50 },
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -10,
                    },
                    tickCount: 9,
                    children: (0, a.tZ)(H._, {
                      value: n("v2.stats.jar.".concat(e, "YLabel")),
                      position: "insideLeft",
                      angle: -90,
                      fill: "rgb(var(--color-foreground-alt-100))",
                      style: { textAnchor: "middle" },
                    }),
                  }),
                  (0, a.tZ)(L.u, {
                    cursor: !1,
                    contentStyle: {
                      backgroundColor: "rgb(var(--color-foreground-alt-500))",
                      borderColor: "rgb(var(--color-foreground-alt-500))",
                      borderRadius: 10,
                    },
                    labelFormatter: (t) =>
                      new Date(t).toLocaleDateString() +
                      " " +
                      new Date(t).toLocaleTimeString(),
                    formatter: (t, r) => [
                      new Intl.NumberFormat("en", {}).format(t) +
                        " " +
                        n("v2.stats.jar.".concat(e, "TooltipUnits")),
                      n("v2.stats.tooltips.".concat(r)),
                    ],
                  }),
                  (0, a.tZ)(K.x, {
                    type: "monotone",
                    dataKey: e,
                    stroke: "rgb(var(--color-accent-light))",
                    dot: !1,
                  }),
                ],
              }),
            })
          : (0, a.tZ)(a.HY, {});
      };
      let tB = (t, e) => {
          let r = t && t.assetData ? t.assetData[e] : [],
            a = r ? r.sort((t, e) => (t.timestamp > e.timestamp ? 1 : -1)) : [];
          return a;
        },
        tS = (t) => t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var tA = (t) => {
        let { data: e, timeUnit: r } = t,
          { t: l } = (0, o.$G)("common"),
          n = tB(e, r).filter(
            (t) => 0 !== t.supply && 0 !== t.depositTokenPrice
          ),
          s = n.map((t) => ({
            timestamp: t.timestamp,
            supply: t.supply,
            tokenPrice: t.depositTokenPrice,
          }));
        return s.length > 0
          ? (0, a.tZ)(A.h, {
              className: "w-full",
              children: (0, a.BX)(X.w, {
                data: s,
                children: [
                  (0, a.tZ)(j.q, {
                    strokeDasharray: "0",
                    stroke: "rgb(var(--color-foreground-alt-400))",
                  }),
                  (0, a.tZ)(D.K, {
                    dataKey: "timestamp",
                    tickFormatter: (t) => new Date(t).toLocaleDateString(),
                    height: 75,
                    angle: 300,
                    tickMargin: 35,
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -20,
                    },
                  }),
                  (0, a.tZ)(T.B, {
                    yAxisId: "left",
                    tickFormatter: (t) =>
                      new Intl.NumberFormat("en", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(t),
                    width: 100,
                    padding: { top: 50 },
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -20,
                    },
                    tickCount: 9,
                    children: (0, a.tZ)(H._, {
                      value: l("v2.stats.jar.tokenPriceVNumYLabelLeft"),
                      position: "insideLeft",
                      angle: -90,
                      fill: "rgb(var(--color-foreground-alt-100))",
                      style: { textAnchor: "middle" },
                    }),
                  }),
                  (0, a.tZ)(T.B, {
                    yAxisId: "right",
                    orientation: "right",
                    tickFormatter: (t) =>
                      new Intl.NumberFormat("en", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(t),
                    width: 100,
                    padding: { top: 50 },
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: 20,
                    },
                    tickCount: 9,
                    children: (0, a.tZ)(H._, {
                      value: l("v2.stats.jar.tokenPriceVNumYLabelRight"),
                      position: "insideRight",
                      angle: -90,
                      fill: "rgb(var(--color-foreground-alt-100))",
                      style: { textAnchor: "middle" },
                    }),
                  }),
                  (0, a.tZ)(L.u, {
                    cursor: !1,
                    contentStyle: {
                      backgroundColor: "rgb(var(--color-foreground-alt-500))",
                      borderColor: "rgb(var(--color-foreground-alt-500))",
                      borderRadius: 10,
                    },
                    labelFormatter: (t) =>
                      new Date(t).toLocaleDateString() +
                      " " +
                      new Date(t).toLocaleTimeString(),
                    formatter: (t, e) => [
                      tS(t),
                      l("v2.stats.tooltips.".concat(e)),
                    ],
                  }),
                  (0, a.tZ)(K.x, {
                    yAxisId: "left",
                    type: "monotone",
                    dataKey: "supply",
                    stroke: "rgb(var(--color-accent-light))",
                    dot: !1,
                  }),
                  (0, a.tZ)(K.x, {
                    yAxisId: "right",
                    type: "monotone",
                    dataKey: "tokenPrice",
                    stroke: "rgb(var(--color-accent))",
                    dot: !1,
                  }),
                  (0, a.tZ)(q.D, {
                    formatter: (t) =>
                      (0, a.tZ)("span", {
                        className: "text-foreground-alt-200",
                        children: l("v2.stats.tooltips.".concat(t)),
                      }),
                    iconType: "plainline",
                    wrapperStyle: { paddingTop: 25 },
                  }),
                ],
              }),
            })
          : (0, a.tZ)(a.HY, {});
      };
      let tX = (t) => ({
          timestamp: t.timestamp,
          jarApr: t.jarApr,
          minApy: t.jarApr + t.farmMinApy,
          maxApy: t.jarApr + t.farmMaxApy,
        }),
        tj = (t) => {
          let e = 0;
          for (let r = 0; r < t.length; r++)
            t[r].maxApy > e && (e = t[r].maxApy);
          return e;
        },
        tD = (t) => {
          let e = tj(t);
          for (let r = 0; r < t.length; r++)
            t[r].jarApr < e && (e = t[r].jarApr);
          return e;
        };
      var tT = (t) => {
        let { data: e, timeUnit: r } = t,
          { t: l } = (0, o.$G)("common"),
          n = e && e.assetData ? e.assetData[r] : [],
          s = n ? n.sort((t, e) => (t.timestamp > e.timestamp ? 1 : -1)) : [],
          i = s.map(tX).filter((t) => 0 !== t.jarApr),
          c = tj(i),
          d = tD(i);
        return i.length > 0
          ? (0, a.tZ)(A.h, {
              className: "w-full",
              children: (0, a.BX)(X.w, {
                data: i,
                children: [
                  (0, a.tZ)(j.q, {
                    strokeDasharray: "0",
                    stroke: "rgb(var(--color-foreground-alt-400))",
                  }),
                  (0, a.tZ)(D.K, {
                    dataKey: "timestamp",
                    tickFormatter: (t) => new Date(t).toLocaleDateString(),
                    height: 75,
                    angle: 300,
                    tickMargin: 35,
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -20,
                    },
                  }),
                  (0, a.tZ)(T.B, {
                    tickFormatter: (t) =>
                      new Intl.NumberFormat("en", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(t) + "%",
                    domain: [d - 0.1 * d, c],
                    width: 100,
                    padding: { top: 50 },
                    tick: { fill: "rgb(var(--color-foreground-alt-300))" },
                    tickCount: 9,
                    children: (0, a.tZ)(H._, {
                      value: l("v2.stats.jar.pctYield"),
                      position: "insideLeft",
                      angle: -90,
                      fill: "rgb(var(--color-foreground-alt-100))",
                      style: { textAnchor: "middle" },
                    }),
                  }),
                  (0, a.tZ)(q.D, {
                    formatter: (t) =>
                      (0, a.tZ)("span", {
                        className: "text-foreground-alt-200",
                        children: l("v2.stats.tooltips.".concat(t)),
                      }),
                    iconType: "plainline",
                    wrapperStyle: { paddingTop: 25 },
                  }),
                  (0, a.tZ)(L.u, {
                    cursor: !1,
                    contentStyle: {
                      backgroundColor: "rgb(var(--color-foreground-alt-500))",
                      borderColor: "rgb(var(--color-foreground-alt-500))",
                      borderRadius: 10,
                    },
                    labelFormatter: (t) =>
                      new Date(t).toLocaleDateString() +
                      " " +
                      new Date(t).toLocaleTimeString(),
                    formatter: (t, e) => [
                      t.toFixed(3) + "%",
                      l("v2.stats.tooltips.".concat(e)),
                    ],
                  }),
                  (0, a.tZ)(K.x, {
                    type: "monotone",
                    dataKey: "jarApr",
                    stroke: "rgb(var(--color-primary-dark))",
                    dot: !1,
                  }),
                  (0, a.tZ)(K.x, {
                    type: "monotone",
                    dataKey: "minApy",
                    stroke: "rgb(var(--color-primary))",
                    dot: !1,
                  }),
                  (0, a.tZ)(K.x, {
                    type: "monotone",
                    dataKey: "maxApy",
                    stroke: "rgb(var(--color-primary-light))",
                    dot: !1,
                  }),
                ],
              }),
            })
          : (0, a.tZ)(a.HY, {});
      };
      let tH = (t, e) => {
          if (e > t.length) for (let e = 0; e < t.length; e++) t[e].ma = tK(t);
          else
            for (let r = 10; r < t.length; r++) t[r].ma = tK(t.slice(r - e, r));
          return t;
        },
        tL = (t) =>
          t ? t.sort((t, e) => (t.timeStart > e.timeStart ? 1 : -1)) : [],
        tK = (t) => t.reduce((t, e) => t + e.revsUsd, 0) / t.length,
        tF = (t) => {
          let e = 0;
          for (let r = 0; r < t.length; r++) t[r].value > e && (e = t[r].value);
          return e;
        };
      var tE = (t) => {
        let { data: e } = t,
          { t: r } = (0, o.$G)("common"),
          l =
            e && e.revenueExpenses && e.revenueExpenses.daily
              ? e.revenueExpenses.daily
              : [],
          n = tL(l),
          s = tH(n, 10),
          i = tF(s);
        return s.length > 0
          ? (0, a.tZ)(A.h, {
              className: "w-full",
              children: (0, a.BX)(I.c, {
                data: s,
                children: [
                  (0, a.tZ)(j.q, {
                    strokeDasharray: "0",
                    stroke: "rgb(var(--color-foreground-alt-400))",
                  }),
                  (0, a.tZ)(D.K, {
                    dataKey: "timeStart",
                    tickFormatter: (t) =>
                      new Date(1e3 * t).toLocaleDateString(),
                    height: 75,
                    angle: 300,
                    tickMargin: 35,
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -20,
                    },
                  }),
                  (0, a.tZ)(T.B, {
                    tickFormatter: (t) =>
                      new Intl.NumberFormat("en", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(t),
                    domain: [0, i],
                    width: 100,
                    padding: { top: 50 },
                    tick: {
                      fill: "rgb(var(--color-foreground-alt-300))",
                      dx: -10,
                    },
                    tickCount: 9,
                    children: (0, a.tZ)(H._, {
                      value: r("v2.stats.jar.revenueYLabel"),
                      position: "insideLeft",
                      angle: -90,
                      fill: "rgb(var(--color-foreground-alt-100))",
                      style: { textAnchor: "middle" },
                    }),
                  }),
                  (0, a.tZ)(L.u, {
                    cursor: !1,
                    contentStyle: {
                      backgroundColor: "rgb(var(--color-foreground-alt-500))",
                      borderColor: "rgb(var(--color-foreground-alt-500))",
                      borderRadius: 10,
                    },
                    labelFormatter: (t) =>
                      new Date(1e3 * t).toLocaleDateString() +
                      " " +
                      new Date(1e3 * t).toLocaleTimeString(),
                    formatter: (t, e) => [
                      (0, F.qx)(t),
                      r("v2.stats.tooltips.".concat(e)),
                    ],
                  }),
                  (0, a.tZ)(M.$, {
                    dataKey: "revsUsd",
                    fill: "rgb(var(--color-primary-light))",
                  }),
                  (0, a.tZ)(K.x, {
                    dataKey: "ma",
                    dot: !1,
                    stroke: "rgb(var(--color-accent))",
                  }),
                  (0, a.tZ)(q.D, {
                    formatter: (t) =>
                      (0, a.tZ)("span", {
                        className: "text-foreground-200",
                        children: r("v2.stats.tooltips.".concat(t)),
                      }),
                    iconType: "wye",
                    wrapperStyle: { paddingTop: 25 },
                  }),
                ],
              }),
            })
          : (0, a.tZ)(a.HY, {});
      };
      let tP = (t) => {
        let { timeUnit: e, displaytext: r, timeChange: l } = t;
        return (0, a.tZ)("button", {
          onClick: () => l(e),
          className: "text-primary-light ml-5",
          children: r,
        });
      };
      var tR = (t) => {
          let { timeChange: e } = t;
          return (0, a.BX)("span", {
            style: { marginLeft: "80%" },
            children: [
              (0, a.tZ)(tP, {
                timeUnit: "hr",
                displaytext: "1h",
                timeChange: e,
              }),
              (0, a.tZ)(tP, {
                timeUnit: "hr6",
                displaytext: "6h",
                timeChange: e,
              }),
              (0, a.tZ)(tP, {
                timeUnit: "day",
                displaytext: "d",
                timeChange: e,
              }),
              (0, a.tZ)(tP, {
                timeUnit: "wk",
                displaytext: "w",
                timeChange: e,
              }),
            ],
          });
        },
        tI = (t) => {
          let { jarData: e } = t,
            [r, o] = (0, l.useState)("value"),
            [n, s] = (0, l.useState)("hr");
          return (0, a.BX)("div", {
            className:
              "bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8 mb-5",
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200",
                children: e && e.apiKey && e.apiKey.toUpperCase(),
              }),
              (0, a.BX)("span", {
                children: [
                  (0, a.tZ)(tR, {
                    timeChange: (t) => {
                      s(t);
                    },
                  }),
                  (0, a.tZ)(ty, { chartChange: (t) => o(t.value) }),
                ],
              }),
              (0, a.BX)("aside", {
                className: "h-[600px] px-3 py-10",
                children: [
                  [
                    "value",
                    "balance",
                    "depositTokenPrice",
                    "farmAllocShare",
                    "farmMelonPerDay",
                    "harvestable",
                    "ptokensInFarm",
                    "ratio",
                  ].includes(r) &&
                    (0, a.tZ)(tC, { chartKey: r, data: e, timeUnit: n }),
                  "tokenPriceVNum" === r &&
                    (0, a.tZ)(tA, { data: e, timeUnit: n }),
                  "yield" === r && (0, a.tZ)(tT, { data: e, timeUnit: n }),
                  "revs" === r && (0, a.tZ)(tE, { data: e }),
                ],
              }),
            ],
          });
        };
      let tM = (t) => {
          let { text: e } = t,
            [r, n] = (0, l.useState)(!1),
            { t: s } = (0, o.$G)("common");
          return e.length > 600
            ? (0, a.BX)(a.HY, {
                children: [
                  (0, a.tZ)("span", {
                    className: "text-sm text-foreground text-justify indent-4",
                    children: e.slice(0, 400).concat(r ? "" : "... "),
                  }),
                  r
                    ? (0, a.tZ)("span", {
                        className:
                          "text-sm text-foreground text-justify whitespace-pre-wrap",
                        children: e.slice(300),
                      })
                    : null,
                  (0, a.tZ)("div", {
                    className: "mt-4",
                    children: (0, a.tZ)("a", {
                      className: "text-sm text-accent cursor-pointer",
                      onClick: () => n(!r),
                      children: s(
                        r ? "v2.stats.jar.showLess" : "v2.stats.jar.showMore"
                      ),
                    }),
                  }),
                ],
              })
            : (0, a.tZ)("p", {
                className: "text-sm text-foreground text-justify indent-4",
                children: e,
              });
        },
        tq = (t) => {
          let { description: e, t: r } = t;
          return (0, a.BX)("div", {
            className:
              "w-full bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8 mb-5",
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200 mb-4",
                children: r("v2.farms.docs.description"),
              }),
              (0, a.tZ)("div", {
                className: "text-sm text-foreground",
                children: (0, h.m_)(e),
              }),
            ],
          });
        },
        tO = (t) => {
          let { obtain: e, t: r } = t;
          return (0, a.BX)("div", {
            className:
              "w-full bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8 mb-5",
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200 mb-4",
                children: r("v2.farms.docs.obtain"),
              }),
              (0, a.tZ)("ul", {
                className: "text-sm text-foreground",
                children: e.map((t, e) =>
                  (0, a.tZ)(
                    "li",
                    { children: (0, h.m_)(t) },
                    e.toLocaleString()
                  )
                ),
              }),
            ],
          });
        },
        tY = (t) => {
          let { social: e, t: r } = t;
          return e
            ? (0, a.BX)("div", {
                className:
                  "w-full bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8 mb-5",
                children: [
                  (0, a.tZ)("h2", {
                    className:
                      "font-body font-bold text-xl text-foreground-alt-200 mb-4",
                    children: r("v2.farms.docs.social"),
                  }),
                  (0, a.tZ)("ul", {
                    className: "text-sm text-foreground",
                    children: e.map((t, e) =>
                      (0, a.tZ)("li", { children: (0, h.m_)(t) }, e)
                    ),
                  }),
                ],
              })
            : null;
        },
        t_ = (t) => {
          let { risks: e, t: r } = t;
          return (0, a.BX)("div", {
            className:
              "w-full bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8 mb-5",
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200 mb-4",
                children: r("v2.farms.docs.risks"),
              }),
              (0, a.tZ)("ul", {
                className: "text-sm text-foreground",
                children: e.map((t, e) =>
                  (0, a.tZ)("li", { children: (0, h.m_)(t) }, e)
                ),
              }),
            ],
          });
        },
        tG = (t) => {
          let { componentTokens: e, t: r } = t,
            [o, n] = (0, l.useState)(
              Object.keys(e).length > 0 ? Object.keys(e)[0] : ""
            );
          return (0, a.BX)(a.HY, {
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200 mt-3 mb-5",
                children: r("v2.farms.docs.relatedTokens"),
              }),
              (0, a.tZ)("div", {
                className: "w-min bg-background-light mb-5 rounded-xl",
                children: (0, a.tZ)("table", {
                  className: "table-auto",
                  children: (0, a.tZ)("tbody", {
                    children: (0, a.tZ)("tr", {
                      children: Object.keys(e).map((t) =>
                        (0, a.tZ)(
                          "td",
                          {
                            className: "p-2 cursor-pointer",
                            onClick: () => n(t),
                            children: (0, a.BX)("div", {
                              className: (0, h.AK)(
                                "flex mx-auto rounded-xl py-2 px-4 hover:text-accent",
                                o === t ? "bg-foreground-alt-500" : void 0
                              ),
                              children: [
                                (0, a.tZ)("div", {
                                  className:
                                    "mr-3 w-12 h-12 rounded-full border-3 border-foreground-alt-400",
                                  children: (0, a.tZ)(c(), {
                                    src: "/tokens/".concat(t, ".png"),
                                    className: "rounded-full",
                                    width: 48,
                                    height: 48,
                                    layout: "intrinsic",
                                    alt: t,
                                    title: t,
                                  }),
                                }),
                                (0, a.tZ)("p", {
                                  className: (0, h.AK)(
                                    "text-xl text-foreground-alt-200 font-bold mt-3",
                                    o === t ? "text-accent" : void 0
                                  ),
                                  children: t.toUpperCase(),
                                }),
                              ],
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  }),
                }),
              }),
              e[o] &&
                (0, a.BX)("div", {
                  className:
                    "bg-background-light rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8 mb-5",
                  children: [
                    (0, a.tZ)("h2", {
                      className:
                        "font-body text-xl text-foreground-alt-200 mb-4",
                      children: o.toUpperCase(),
                    }),
                    (0, a.tZ)("div", {
                      className:
                        "text-sm text-foreground text-justify indent-4",
                      children: (0, a.tZ)(tM, { text: e[o].replace(":", "-") }),
                    }),
                  ],
                }),
            ],
          });
        };
      var t$ = (t) => {
          let { docs: e } = t,
            {
              description: r,
              obtain: l,
              social: n,
              risks: s,
              componentTokens: i,
            } = e,
            { t: c } = (0, o.$G)("common");
          return (0, a.BX)(a.HY, {
            children: [
              (0, a.tZ)(tq, { description: r, t: c }),
              (0, a.BX)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-5",
                children: [
                  (0, a.tZ)(tO, { obtain: l, t: c }),
                  (0, a.tZ)(tY, { social: n, t: c }),
                  (0, a.tZ)(t_, { risks: s, t: c }),
                ],
              }),
              (0, a.tZ)(tG, { componentTokens: i, t: c }),
            ],
          });
        },
        tV = () => {
          let { t } = (0, o.$G)("common");
          return (0, a.tZ)("thead", {
            className: "rounded-t-md",
            children: (0, a.BX)("tr", {
              className: "w-full border border-foreground-alt-400 bg-slate-600",
              children: [
                (0, a.tZ)("th", {
                  scope: "col",
                  className:
                    "text-left text-foreground-alt-200 xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 py-2 pr-2",
                  children: t("v2.stats.jar.revsTableHeaders.date"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-foreground-alt-200 p-2",
                  children: t("v2.stats.jar.revsTableHeaders.txLink"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-foreground-alt-200 p-2",
                  children: t("v2.stats.jar.revsTableHeaders.value"),
                }),
              ],
            }),
          });
        },
        tU = r(41664),
        tz = r.n(tU);
      let tJ = (t, e) =>
          (0, a.tZ)(tz(), {
            href: "".concat(t, "/tx/").concat(e),
            target: "_blank",
            rel: "noreferrer",
            className: "text-accent-light hover:underline",
            children: e.substring(0, 10) + "...",
          }),
        tW = (t, e) => {
          let r = 0;
          return t.forEach((t) => (r += t.usdval)), r / e;
        };
      var tQ = (t) => {
          let { recentHarvest: e, chainExplorer: r } = t;
          return (0, a.BX)("tr", {
            className: "border border-foreground-alt-400 py-2",
            children: [
              (0, a.tZ)("td", {
                className:
                  "text-left text-foreground-alt-200 xl:pl-20 lg:pl-20 md:pl-10 sm:pl-10 py-2 pr-2",
                children:
                  e.timestamp &&
                  (0, h.p6)(
                    new Date(
                      e.timestamp > 1e12 ? e.timestamp : 1e3 * e.timestamp
                    )
                  ),
              }),
              (0, a.tZ)("td", {
                className: "text-left p-2",
                children: e.transfers && tJ(r, e.txid),
              }),
              (0, a.tZ)("td", {
                className: "text-left text-foreground-alt-200 p-2",
                children: e.transfers && (0, h.qx)(tW(e.transfers, e.fee)),
              }),
            ],
          });
        },
        t0 = (t) => {
          let { revs: e, chainExplorer: r } = t;
          return (0, a.BX)("table", {
            className: "w-full",
            children: [
              (0, a.tZ)(tV, {}),
              (0, a.BX)("tbody", {
                className: "border border-foreground-alt-400",
                children: [
                  e.recentHarvests[0] &&
                    (0, a.tZ)(tQ, {
                      recentHarvest: e.recentHarvests[0],
                      chainExplorer: r,
                    }),
                  e.recentHarvests[1] &&
                    (0, a.tZ)(tQ, {
                      recentHarvest: e.recentHarvests[1],
                      chainExplorer: r,
                    }),
                  e.recentHarvests[2] &&
                    (0, a.tZ)(tQ, {
                      recentHarvest: e.recentHarvests[2],
                      chainExplorer: r,
                    }),
                  e.recentHarvests[3] &&
                    (0, a.tZ)(tQ, {
                      recentHarvest: e.recentHarvests[3],
                      chainExplorer: r,
                    }),
                  e.recentHarvests[4] &&
                    (0, a.tZ)(tQ, {
                      recentHarvest: e.recentHarvests[4],
                      chainExplorer: r,
                    }),
                ],
              }),
            ],
          });
        };
      let t2 = (t, e) => {
        if (t.recentHarvests.length > 0) {
          let r = t.recentHarvests[0].jarKey,
            a =
              e && e.assets && e.assets.jars
                ? e.assets.jars.filter(
                    (t) => t.details && t.details.apiKey === r
                  )[0].chain
                : "",
            l =
              e && e.chains
                ? e.chains.filter((t) => t.network === a)[0].explorer
                : "";
          return l;
        }
        return "";
      };
      var t1 = (t) => {
          let { revs: e, pfCore: r } = t,
            { t: l } = (0, o.$G)("common"),
            n = r ? t2(e, r) : "";
          return (0, a.BX)("div", {
            className:
              "bg-background-light min-w-min rounded-xl border border-foreground-alt-500 shadow p-4 sm:p-8",
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200",
                children: l("v2.stats.jar.revsTableTitle"),
              }),
              (0, a.tZ)("br", {}),
              (0, a.tZ)(t0, { revs: e, chainExplorer: n }),
            ],
          });
        },
        t5 = r(18205);
      let t4 = async (t) => {
        if ("" === t) return {};
        let e = ""
            .concat(
              "https://f8wgg18t1h.execute-api.us-west-1.amazonaws.com/prod/protocol/analytics/jar",
              "/"
            )
            .concat(t, "/en"),
          r = await fetch(e)
            .then((t) => t.json())
            .catch((t) => console.log(t));
        return r;
      };
      var t3 = (t) => {
          let { core: e, jar: r, ready: o, setReady: n, page: i } = t,
            c = (0, g.v9)(
              s.VH.makeAssetsSelector({ filtered: !1, paginated: !1 })
            ),
            [d, m] = (0, l.useState)({}),
            u = {};
          return (r &&
            r.value &&
            (u = c.find(
              (t) => t.details.apiKey.toLowerCase() === r.value.toLowerCase()
            )),
          (0, l.useEffect)(() => {
            let t = async () => {
              Object.keys(r).length > 0 &&
                t4(r.value)
                  .then((t) => m(t))
                  .then(() => n((t) => ({ ...t, jar: !0 })));
            };
            t();
          }, [r]),
          u && "jar" === i && o[i])
            ? (0, a.BX)(a.HY, {
                children: [
                  (0, a.tZ)("div", {
                    className: "mb-3",
                    children:
                      u &&
                      u.depositTokensInJar &&
                      (0, a.tZ)(t5.Z, { singleAsset: u, hideDescription: !0 }),
                  }),
                  (0, a.tZ)(tI, { jarData: d }),
                  d &&
                    d.documentation &&
                    (0, a.tZ)(t$, { docs: d.documentation }),
                  d &&
                    d.revenueExpenses &&
                    d.revenueExpenses.recentHarvests.length > 0 &&
                    (0, a.tZ)(t1, { revs: d.revenueExpenses, pfCore: e || {} }),
                ],
              })
            : null;
        },
        t9 = () => {
          let { t } = (0, o.$G)("common");
          return (0, a.tZ)("thead", {
            className: "rounded-t-md",
            children: (0, a.BX)("tr", {
              className:
                "w-full border border-foreground-alt-400 bg-foreground-alt-400 text-foreground-alt-200",
              children: [
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm lg:pl-8 sm:pl-4 py-2 pr-2",
                  children: t("v2.stats.platform.chainTableHeaders.chain"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t(
                    "v2.stats.platform.chainTableHeaders.currentRevs"
                  ),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t("v2.stats.platform.chainTableHeaders.revsChange"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t("v2.stats.platform.chainTableHeaders.tvl"),
                }),
                (0, a.tZ)("th", {
                  scope: "col",
                  className: "text-left text-sm p-2",
                  children: t("v2.stats.platform.chainTableHeaders.tvlChange"),
                }),
              ],
            }),
          });
        };
      let t8 = (t) => {
        let { chainId: e, setChain: r, networks: l } = t,
          o = Z(l),
          n = o.find((t) => t.value === e);
        return n
          ? (0, a.tZ)("a", {
              className: "text-accent-light cursor-pointer hover:underline",
              onClick: () => r(n),
              children: n.label.toUpperCase(),
            })
          : (0, a.tZ)("a", {
              className: "text-accent-light cursor-pointer hover:underline",
              children: e.toUpperCase(),
            });
      };
      var t6 = (t) => {
          let { chain: e, setChain: r, networks: l } = t;
          return (0, a.BX)("tr", {
            className:
              "border border-foreground-alt-400 text-foreground-alt-100",
            children: [
              (0, a.tZ)("td", {
                className: "text-left text-sm lg:pl-8 sm:pl-4 py-2 pr-2",
                children: (0, a.tZ)(t8, {
                  chainId: e.chainId,
                  setChain: r,
                  networks: l,
                }),
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm p-2",
                children: (0, h.qx)(e.periodRevenue),
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm p-2",
                children: (0, h.qx)(e.periodRevenue - e.previousPeriodRevenue),
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm p-2",
                children: (0, h.qx)(e.tvl),
              }),
              (0, a.tZ)("td", {
                className: "text-left text-sm py-2 pl-2 lg:pr-8 sm:pr-4",
                children: (0, h.qx)(e.tvl - e.previousTvl),
              }),
            ],
          });
        },
        t7 = (t) => {
          let { chains: e, setChain: r } = t,
            l = (0, g.v9)(s.VH.selectNetworks),
            o = e ? Object.keys(e) : [];
          return e
            ? (0, a.BX)("table", {
                className: "w-full",
                children: [
                  (0, a.tZ)(t9, {}),
                  (0, a.tZ)("tbody", {
                    className: "border border-foreground-alt-400",
                    children: o.map((t) =>
                      (0, a.tZ)(
                        t6,
                        { chain: e[t], setChain: r, networks: l },
                        t
                      )
                    ),
                  }),
                ],
              })
            : null;
        },
        et = (t) => {
          let { chains: e, className: r, setChain: l } = t,
            { t: n } = (0, o.$G)("common");
          return (0, a.BX)("div", {
            className: (0, h.AK)(
              "bg-background-light w-full min-w-min rounded-xl border border-foreground-alt-500 shadow",
              r
            ),
            children: [
              (0, a.tZ)("h2", {
                className:
                  "font-body font-bold text-xl text-foreground-alt-200 p-4",
                children: n("v2.stats.platform.chainTableTitle"),
              }),
              (0, a.tZ)("div", {
                className: "p-2 pb-4",
                children: (0, a.tZ)("div", {
                  className: "max-h-[550px] overflow-y-auto p-2",
                  children: (0, a.tZ)(t7, { chains: e, setChain: l }),
                }),
              }),
            ],
          });
        },
        ee = (t) => {
          let { core: e } = t,
            { t: r } = (0, o.$G)("common");
          return (0, a.tZ)(a.HY, {
            children:
              e &&
              (0, a.BX)("div", {
                className:
                  "bg-background-light rounded-xl border border-foreground-alt-500 shadow pt-2 pb-4 px-4 mb-5",
                children: [
                  (0, a.tZ)("h2", {
                    className:
                      "font-body font-bold text-xl text-foreground-alt-200 mb-4",
                    children: r("v2.stats.platform.pickle"),
                  }),
                  (0, a.BX)("div", {
                    className: "grid grid-cols-5 justify-items-center",
                    children: [
                      (0, a.BX)("div", {
                        children: [
                          (0, a.tZ)("h2", {
                            className:
                              "font-title font-medium text-foreground text-lg leading-5",
                            children: (0, h.uf)(e.platform.pickleTotalSupply),
                          }),
                          (0, a.tZ)("p", {
                            className:
                              "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                            children: r("v2.stats.platform.pickleSupply"),
                          }),
                        ],
                      }),
                      (0, a.BX)("div", {
                        children: [
                          (0, a.tZ)("h2", {
                            className:
                              "font-title font-medium text-foreground text-lg leading-5",
                            children: (0, h.qx)(e.platform.pickleMarketCap),
                          }),
                          (0, a.tZ)("p", {
                            className:
                              "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                            children: r("v2.stats.platform.marketCap"),
                          }),
                        ],
                      }),
                      (0, a.BX)("div", {
                        children: [
                          (0, a.tZ)("h2", {
                            className:
                              "font-title font-medium text-foreground text-lg leading-5",
                            children: (0, h.uf)(
                              e.platform.pickleTotalSupply -
                                e.platform.pickleCirculatingSupply
                            ),
                          }),
                          (0, a.tZ)("p", {
                            className:
                              "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                            children: r("v2.stats.platform.locked"),
                          }),
                        ],
                      }),
                      (0, a.BX)("div", {
                        children: [
                          (0, a.tZ)("h2", {
                            className:
                              "font-title font-medium text-foreground text-lg leading-5",
                            children: (0, h.uf)(
                              e.platform.pickleCirculatingSupply
                            ),
                          }),
                          (0, a.tZ)("p", {
                            className:
                              "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                            children: r("v2.stats.platform.circulatingSupply"),
                          }),
                        ],
                      }),
                      (0, a.BX)("div", {
                        children: [
                          (0, a.tZ)("h2", {
                            className:
                              "font-title font-medium text-foreground text-lg leading-5",
                            children: (0, h.qx)(e.platform.platformTVL),
                          }),
                          (0, a.tZ)("p", {
                            className:
                              "font-body text-foreground-alt-200 font-normal text-xs leading-4",
                            children: r("v2.stats.platform.platformTvl"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          });
        };
      let er = async () =>
        await fetch(
          "".concat(
            "https://f8wgg18t1h.execute-api.us-west-1.amazonaws.com/prod/protocol/analytics/platform/en"
          )
        )
          .then((t) => t.json())
          .catch((t) => console.log(t));
      var ea = (t) => {
        let { setChain: e, core: r, ready: o, setReady: n, page: s } = t,
          [i, c] = (0, l.useState)({});
        return ((0, l.useEffect)(() => {
          let t = async () => {
            er()
              .then((t) => c(t))
              .then(() => n((t) => ({ ...t, platform: !0 })));
          };
          t();
        }, []),
        "platform" === s && o[s])
          ? (0, a.BX)(a.HY, {
              children: [
                (0, a.tZ)(ee, { core: r }),
                (0, a.BX)("div", {
                  className: "w-full columns-1 lg:columns-2 gap-5",
                  children: [
                    (0, a.tZ)(tl, { chart: "tvl", dataSeries: i }),
                    (0, a.tZ)(tl, { chart: "revs", dataSeries: i }),
                  ],
                }),
                (0, a.BX)("div", {
                  className:
                    "w-full min-w-min grid grid-cols-1 xl:grid-cols-2 gap-5",
                  children: [
                    (0, a.tZ)(et, { chains: i.chains, setChain: e }),
                    (0, a.tZ)(tl, { chart: "topJars", core: r }),
                  ],
                }),
              ],
            })
          : null;
      };
      let el = () => {
          let t = (0, n.CG)(s.VH.selectCore),
            [e, r] = (0, l.useState)({}),
            [o, i] = (0, l.useState)({}),
            [c, d] = (0, l.useState)(),
            [m, u] = (0, l.useState)({ platform: !1, chain: !1, jar: !1 });
          (0, l.useEffect)(() => {
            0 === Object.keys(o).length
              ? 0 === Object.keys(e).length
                ? d("platform")
                : d("chain")
              : d("jar");
          }, [e, o]);
          let h = {
            core: t,
            chain: e,
            setChain: r,
            jar: o,
            setJar: i,
            ready: m,
            setReady: u,
            page: c,
            setPage: d,
          };
          return (0, a.tZ)("div", {
            className: "block lg:flex mb-8 sm:mb-10",
            children: (0, a.BX)("div", {
              className: "w-full mb-4",
              children: [
                (0, a.tZ)(S, { ...h }),
                (0, a.BX)("div", {
                  className: "flex gap-5",
                  children: [(0, a.tZ)(y, { ...h }), (0, a.tZ)(B, { ...h })],
                }),
                (0, a.tZ)(ea, { ...h }),
                (0, a.tZ)(tx, { ...h }),
                (0, a.tZ)(t3, { ...h }),
                (0, a.tZ)(eo, { ...h }),
              ],
            }),
          });
        },
        eo = (t) => {
          let { ready: e, page: r } = t;
          return r && !1 === e[r]
            ? (0, a.tZ)("div", {
                className: "flex justify-center items-center py-8 lg:py-32",
                children: (0, a.BX)("div", {
                  className:
                    "bg-background-light border border-foreground-alt-300 rounded-xl w-96 h-96",
                  children: [
                    (0, a.tZ)("div", {
                      className: "flex justify-center mt-5",
                      children: (0, a.tZ)(c(), {
                        loading: "eager",
                        src: "/animations/waiting.gif",
                        alt: "Loading...",
                        width: 0,
                        height: 0,
                        sizes: "100vw",
                        style: { width: "250px", height: "250px" },
                      }),
                    }),
                    (0, a.tZ)("p", {
                      className:
                        "text-xl text-center text-foreground-alt-200 mt-10",
                      children: "Loading Chart Data",
                    }),
                  ],
                }),
              })
            : null;
        };
      el.PageTitle = () => {
        let { t } = (0, o.$G)("common");
        return (0, a.BX)(a.HY, {
          children: [
            (0, a.tZ)("h1", {
              className: "font-title font-medium text-2xl sm:text-3xl pt-2",
              children: t("v2.nav.stats"),
            }),
            (0, a.tZ)("h2", {
              className:
                "font-body font-normal text-foreground-alt-200 text-sm sm:text-base leading-4 sm:leading-6 mt-1",
              children: t("v2.stats.subtitle"),
            }),
          ],
        });
      };
      var en = !0,
        es = el;
    },
    18205: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return R;
        },
      });
      var a,
        l,
        o = r(35944),
        n = r(68856),
        s = r(63698),
        i = r(25675),
        c = r.n(i),
        d = r(9473),
        m = r(52697),
        u = r(24834),
        h = r(50790),
        g = r(20440),
        p = r(93490),
        f = r(44349),
        v = () => {
          let t = (0, d.v9)(u.VH.selectNetworks),
            e = (0, d.v9)(u.VH.selectFilters),
            r = (0, d.v9)(g.Wd.selectFilters),
            a = (0, h.TL)(),
            l = (0, f.V)(r, g.vA.Network);
          return (0, o.tZ)("div", {
            className: "flex flex-wrap justify-end space-x-2",
            children:
              null == t
                ? void 0
                : t.map((t) => {
                    let n = e.find(
                        (e) => e.value === t.name && e.type === g.vA.Network
                      ),
                      s = (0, f.Y)(r, n);
                    return (0, o.tZ)(
                      m.ZP,
                      {
                        duration: 0,
                        content: (0, o.tZ)("div", {
                          className:
                            "rounded-lg shadow-lg border border-foreground-alt-500 overflow-hidden",
                          children: (0, o.tZ)("div", {
                            className: "bg-background-light px-3 py-2",
                            children: (0, o.tZ)("div", {
                              className:
                                "text-foreground-alt-200 text-sm font-bold",
                              children: t.visibleName,
                            }),
                          }),
                        }),
                        children: (0, o.tZ)("div", {
                          className: (0, p.AK)(
                            "group border border-transparent bg-background-light px-4 py-2 2xl:px-5 2xl:py-3 rounded-lg cursor-pointer hover:bg-background-lightest hover:border-primary-light hover:grayscale-0 transition duration-300 ease-in-out",
                            s && "bg-background-lightest border-primary-light",
                            !s && l && "grayscale"
                          ),
                          onClick: () => a((0, g.cT)(n)),
                          children: (0, o.tZ)("div", {
                            className:
                              "w-6 h-6 group-hover:scale-105 transition duration-300 ease-in-out",
                            children: (0, o.tZ)(c(), {
                              src: "/networks/".concat(t.name, ".png"),
                              width: 200,
                              height: 200,
                              layout: "responsive",
                              alt: t.name,
                              title: t.name,
                              className: "rounded-full",
                              priority: !0,
                            }),
                          }),
                        }),
                      },
                      t.name
                    );
                  }),
          });
        },
        b = r(67294),
        x = r(99006),
        Z = r(30490),
        y = r(28670),
        N = r.n(y),
        k = r(69743),
        w = r(7930);
      let C = (t) => {
          let { children: e, ...r } = t;
          return (0, o.BX)(x.c.Control, {
            ...r,
            children: [
              (0, o.tZ)(k.Z, {
                className: "w-6 h-6 text-foreground-alt-200 ml-3 mr-1",
              }),
              e,
            ],
          });
        },
        B = (t) => {
          let { color: e, imageSrc: r, label: a } = t,
            [l, n] = (0, b.useState)(!1);
          return (0, o.tZ)("div", {
            className:
              "mr-3 w-8 h-8 rounded-full border-3 border-foreground-alt-400",
            style: { background: l ? w.J : e },
            children: (0, o.tZ)(c(), {
              src: r,
              className: "rounded-full",
              width: 32,
              height: 32,
              layout: "intrinsic",
              alt: a,
              title: a,
              onLoadingComplete: () => n(!0),
            }),
          });
        },
        S = (t) => {
          let { children: e, ...r } = t,
            { t: a } = (0, n.$G)("common"),
            { isFocused: l } = r,
            { type: s } = r.data;
          return (0, o.tZ)(x.c.Option, {
            ...r,
            className: "group",
            children: (0, o.BX)("div", {
              className: "flex items-center",
              children: [
                (0, o.tZ)(B, { ...r.data }),
                (0, o.BX)("div", {
                  children: [
                    (0, o.tZ)("p", {
                      className: (0, p.AK)(
                        "text-foreground font-title text-base group-hover:text-primary-light transition duration-200 ease-in-out",
                        l && "text-primary-light"
                      ),
                      children: e,
                    }),
                    (0, o.tZ)("p", {
                      className:
                        "font-normal text-sm text-foreground-alt-200 italic",
                      children: a("v2.farms.".concat(s)),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        A = {
          clearIndicator: (t) => ({
            ...t,
            color: "rgb(var(--color-foreground-alt-300))",
            ":hover": { color: "rgb(var(--color-foreground-alt-200))" },
          }),
          control: (t) => ({
            ...t,
            backgroundColor: "rgb(var(--color-background-lightest))",
            border: 0,
            boxShadow: "none",
            padding: "8px 0",
          }),
          input: (t) => ({ ...t, color: "rgb(var(--color-primary))" }),
          menu: (t) => ({
            ...t,
            backgroundColor: "rgb(var(--color-background-light))",
            padding: 8,
            zIndex: 200,
            boxShadow: "0 0 0 1px rgb(var(--color-background-lightest))",
          }),
          multiValue: (t, e) => {
            let { data: r } = e;
            return { ...t, backgroundColor: N()(r.color).css() };
          },
          multiValueLabel: (t, e) => {
            let { data: r } = e,
              a = N()(r.color).darken(3);
            return {
              ...t,
              fontWeight: 700,
              color: N().contrast(a, "black") >= 3 ? a.css() : "white",
            };
          },
          multiValueRemove: (t, e) => {
            let { data: r } = e;
            return {
              ...t,
              color:
                N().contrast(r.color, "white") >= 7
                  ? "white"
                  : N()(r.color).darken(2.5).css(),
              ":hover": {
                color: "white",
                backgroundColor: "rgb(var(--color-accent))",
              },
            };
          },
          option: (t, e) => {
            let { data: r, isFocused: a } = e;
            return {
              ...t,
              backgroundColor: a
                ? "rgb(var(--color-background-lightest))"
                : void 0,
              borderRadius: 10,
              color: r.color,
              transition: "all 200ms ease-in-out",
            };
          },
        };
      var X = () => {
          let { t } = (0, n.$G)("common"),
            e = (0, d.v9)(u.VH.selectFilters),
            r = (0, d.v9)(g.Wd.selectFilters),
            a = (0, h.TL)();
          return (0, o.tZ)(Z.ZP, {
            autoFocus: !0,
            components: {
              Control: C,
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
              Option: S,
            },
            escapeClearsValue: !0,
            isClearable: !0,
            isMulti: !0,
            openMenuOnClick: !1,
            openMenuOnFocus: !1,
            placeholder: t("v2.farms.filter"),
            noOptionsMessage: () => t("v2.farms.noResults"),
            onChange: (t) => a((0, g.rr)(t)),
            options: e,
            styles: A,
            theme: (t) => ({
              ...t,
              borderRadius: 10,
              colors: { ...t.colors, primary: "black" },
            }),
            value: r,
          });
        },
        j = r(40653),
        D = r(52641),
        T = () => {
          let { t } = (0, n.$G)("common"),
            e = (0, h.TL)(),
            r = (0, d.v9)(g.Wd.selectMatchAllFilters);
          return (0, o.BX)(D.Z, {
            toggleOn: r,
            onChange: (t) => e((0, g.gA)(t)),
            children: [
              (0, o.tZ)("span", {
                className: "text-sm font-medium text-foreground-alt-200",
                children: t("v2.farms.matchAllFilters"),
              }),
              (0, o.tZ)(j.Z, {
                children: (0, o.tZ)("span", {
                  className: "text-foreground-alt-200 text-sm",
                  children: t(
                    r
                      ? "v2.farms.matchingAllFilters"
                      : "v2.farms.notMatchingAllFilters"
                  ),
                }),
              }),
            ],
          });
        },
        H = r(93973),
        L = r(63519);
      ((a = l || (l = {}))[(a.Forward = 1)] = "Forward"),
        (a[(a.Back = -1)] = "Back");
      let K = (t) => {
        let { currentPage: e, pageCount: r, onClick: a, type: l } = t,
          n = "left" === l ? H.Z : L.Z;
        return (0, o.tZ)(n, {
          className: (0, p.AK)(
            "left" === l &&
              0 === e &&
              "cursor-not-allowed text-foreground-alt-400",
            "left" === l &&
              0 !== e &&
              "cursor-pointer hover:text-accent transition duration-300 ease-in-out text-foreground-alt-200",
            "right" === l &&
              e + 1 === r &&
              "cursor-not-allowed text-foreground-alt-400",
            "right" === l &&
              e + 1 !== r &&
              "cursor-pointer hover:text-accent transition duration-300 ease-in-out text-foreground-alt-200",
            "w-5 h-5"
          ),
          onClick: a,
        });
      };
      var F = () => {
          let { t } = (0, n.$G)("common"),
            e = (0, h.TL)(),
            { currentPage: r, itemsPerPage: a } = (0, d.v9)(
              g.Wd.selectPaginateParams
            ),
            s = (0, d.v9)(u.VH.selectFilteredAssets),
            i = Math.ceil(s.length / a),
            c = (t) => {
              let a = r + t;
              a < 0 || a >= i || e((0, g.D4)(a));
            };
          return 0 === s.length
            ? (0, o.tZ)("span", {
                className: "text-foreground-alt-200",
                children: t("v2.farms.noResults"),
              })
            : (0, o.tZ)(o.HY, {
                children: (0, o.BX)("div", {
                  className: "flex items-center select-none",
                  children: [
                    (0, o.tZ)(K, {
                      type: "left",
                      currentPage: r,
                      pageCount: i,
                      onClick: () => c(l.Back),
                    }),
                    (0, o.tZ)("span", {
                      className: "px-3 text-foreground-alt-200",
                      children: t("v2.farms.pagination", {
                        current: r + 1,
                        total: i,
                      }),
                    }),
                    (0, o.tZ)(K, {
                      type: "right",
                      currentPage: r,
                      pageCount: i,
                      onClick: () => c(l.Forward),
                    }),
                  ],
                }),
              });
        },
        E = () =>
          (0, o.BX)(o.HY, {
            children: [
              (0, o.BX)("div", {
                className: "block xl:flex justify-between",
                children: [
                  (0, o.tZ)("div", {
                    className: "flex-1 mb-2 xl:mb-0 xl:mr-4",
                    children: (0, o.tZ)(X, {}),
                  }),
                  (0, o.tZ)("div", {
                    className: "flex items-end",
                    children: (0, o.tZ)(v, {}),
                  }),
                ],
              }),
              (0, o.BX)("div", {
                className: "flex grow justify-between my-4",
                children: [(0, o.tZ)(T, {}), (0, o.tZ)(F, {})],
              }),
            ],
          }),
        P = r(39562),
        R = (t) => {
          let {
              simple: e,
              dashboard: r,
              title: a,
              requiresUserModel: l,
              singleAsset: i,
              hideDescription: c,
            } = t,
            { t: d } = (0, n.$G)("common");
          return (0, o.BX)(o.HY, {
            children: [
              a &&
                (0, o.tZ)("h2", {
                  className: "font-body font-bold text-xl mb-6",
                  children: a,
                }),
              (0, o.tZ)("div", {
                className: "flex flex-col",
                children: (0, o.tZ)("div", {
                  className: "-my-2 overflow-x-auto",
                  children: (0, o.BX)("div", {
                    className: "py-2 align-middle inline-block min-w-full",
                    children: [
                      !e && !i && !r && (0, o.tZ)(E, {}),
                      (0, o.BX)("table", {
                        className: "min-w-full table-auto border-collapse",
                        children: [
                          (0, o.tZ)("thead", {
                            className: "bg-background uppercase",
                            children: (0, o.BX)("tr", {
                              children: [
                                (0, o.tZ)(P.Z, {
                                  sortType: g.ER.None,
                                  label: d("v2.farms.asset"),
                                }),
                                (0, o.tZ)(P.Z, {
                                  sortType: i ? g.ER.None : g.ER.Earned,
                                  label: d("v2.farms.earned"),
                                }),
                                (0, o.tZ)(P.Z, {
                                  sortType: i ? g.ER.None : g.ER.Deposited,
                                  label: d("v2.farms.deposited"),
                                }),
                                (0, o.tZ)(P.Z, {
                                  sortType: i ? g.ER.None : g.ER.Apy,
                                  label: d("v2.farms.apy"),
                                }),
                                (0, o.tZ)(P.Z, {
                                  sortType: i ? g.ER.None : g.ER.Liquidity,
                                  label: d("v2.farms.liquidity"),
                                }),
                              ],
                            }),
                          }),
                          (0, o.tZ)("tbody", {
                            className: "text-foreground",
                            children: (0, o.tZ)(s.Z, {
                              simple: e,
                              dashboard: r,
                              requiresUserModel: l,
                              singleAsset: i,
                              hideDescription: c,
                            }),
                          }),
                        ],
                      }),
                      !e &&
                        !i &&
                        !r &&
                        (0, o.tZ)("div", {
                          className: "flex justify-center mt-4",
                          children: (0, o.tZ)(F, {}),
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
  function (t) {
    t.O(
      0,
      [
        490, 6955, 2182, 4097, 212, 8324, 9253, 3604, 7398, 6880, 643, 712,
        2179, 9711, 8922, 466, 9774, 2888, 179,
      ],
      function () {
        return t((t.s = 33397));
      }
    ),
      (_N_E = t.O());
  },
]);
