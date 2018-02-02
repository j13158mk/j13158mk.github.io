
    ! function (e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var r = n[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }
  var n = {};
  return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(1),
    i = o(r),
    a = n(6),
    s = o(a),
    l = n(7),
    c = o(l);
  ! function () {
    (0, i.default)(), (0, s.default)(), (0, c.default)()
  }()
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function () {
    function e(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return function (n) {
        if (0 == t.length) {
          var o = r.selectionStart;
          r.setSelectionRange(o, o)
        }
        var i = r.value.substring(r.selectionStart, r.selectionEnd),
          a = e + i + t;
        if (r.focus(), document.execCommand("insertText", !1, a), 0 == i.length) {
          var s = r.selectionStart - t.length;
          r.setSelectionRange(s, s)
        }
      }
    }
    var t = this,
      n = [{
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="info：選択したメッセージをinfoタグで囲みます"><span class="icon tag">info</span></li>' : '<li role="button" class="_showDescription extended" aria-label="info: Surround selection with [info] tag"><span class="icon tag">info</span></li>',
        tag: ["[info]", "[/info]"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="title：選択したメッセージをtitleタグで囲みます"><span class="icon tag">title</span></li>' : '<li role="button" class="_showDescription extended" aria-label="title: Surround selection with [title] tag"><span class="icon tag">title</span></li>',
        tag: ["[title]", "[/title]"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="code：選択したメッセージをcodeタグで囲みます"><span class="icon tag">code</span></li>' : '<li role="button" class="_showDescription extended" aria-label="code: Surround selection with [code] tag"><span class="icon tag">code</span></li>',
        tag: ["[code]", "[/code]"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="hr：メッセージにhrタグを挿入します"><span class="icon tag">hr</span></li>' : '<li role="button" class="_showDescription extended" aria-label="hr: Insert [hr] tag"><span class="icon tag">hr</span></li>',
        tag: ["[hr]"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="bow：メッセージにおじぎエモーティコンを挿入します"><span class="icon emo">おじぎ</span></li>' : '<li role="button" class="_showDescription extended" aria-label="bow: Insert (bow) emo"><span class="icon emo">bow</span></li>',
        tag: ["(bow)"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="roger：メッセージに了解！エモーティコンを挿入します"><span class="icon emo">了解</span></li>' : '<li role="button" class="_showDescription extended" aria-label="roger: Insert (roger) emo"><span class="icon emo">roger</span></li>',
        tag: ["(roger)"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="cracker：メッセージにクラッカーエモーティコンを挿入します"><span class="icon emo">クラッカー</span></li>' : '<li role="button" class="_showDescription extended" aria-label="cracker: Insert (cracker) emo"><span class="icon emo">cracker</span></li>',
        tag: ["(cracker)"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="定形1：メッセージに問い合わせ回答チェック依頼を挿入します"><span class="icon emo2">回答チェック</span></li>' : '<li role="button" class="_showDescription extended" aria-label="temp1: Insert (temp1) emo"><span class="icon emo">temp1</span></li>',
        tag: ["【回答チェック依頼】\nお疲れ様です、小久保です。\n下記お問合わせの回答を作成しましたのでご確認をお願いします。\n回答納期が 00:00 までなので、 00:00 までにご確認頂けますでしょうか。\n\nhttps://motex-itsystem-1990.rickcloud.jp/jira/browse/CONTACT-XXXX\n「ここにタイトル」\n\nファイルは以下に配置させて頂きました\nファイルパス\n┗ファイル名\n\nご確認のほどよろしくお願いします。" ]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="定形2：メッセージにJIRAチェック依頼を挿入します"><span class="icon emo2">JIRAチェック</span></li>' : '<li role="button" class="_showDescription extended" aria-label="temp2: Insert (temp2) emo"><span class="icon emo">temp2</span></li>',
        tag: ["【障害報告書確認依頼】\nお疲れ様です、小久保です。下記障害報告書を作成いたしましたので\nご確認とご署名をお願い致します。\n\n■既存起票\n「BUGのタイトル」\nhttps://motex-itsystem-1990.rickcloud.jp/jira/browse/BUG-XXXX\n\n■CAT課題\n「CAT課題のタイトル」\nhttps://motex-itsystem-1990.rickcloud.jp/jira/browse/CAT-XXXX"]
      }, {
        html: "ja" == window.LANGUAGE ? '<li role="button" class="_showDescription extended" aria-label="2課メンバー：メッセージにアイコンだけ追加します"><span class="icon emo3">2課メンバー</span></li>' : '<li role="button" class="_showDescription extended" aria-label="temp3: Insert (temp3) emo"><span class="icon emo">temp3</span></li>',
        tag: ["[To:571158][To:583609][To:560942][To:587244]\n[To:601481][To:1320045][To:1806956][To:1806959]"]
      }],
      o = document.getElementById("_chatSendTool"),
      r = document.getElementById("_chatText"),
      i = document.createDocumentFragment();
    n.forEach(function (n) {
      var o = $(n.html)[0];
      o.addEventListener("click", e.apply(t, n.tag)), i.appendChild(o)
    }), o.appendChild(i)
  }, n(2)
}, function (e, t, n) {
  var o = n(3);
  "string" == typeof o && (o = [
    [e.id, o, ""]
  ]);
  n(5)(o, {});
  o.locals && (e.exports = o.locals)
}, function (e, t, n) {
  t = e.exports = n(4)(), t.push([e.id, '#_chatSendTool .extended{opacity:.8;display:inline-block;padding:0 5px;cursor:pointer}#_chatSendTool .extended:hover{opacity:1}#_chatSendTool .extended .icon{-webkit-user-select:none;border-radius:2px;color:#FFF;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,\\.SFNSDisplay-Regular,Helvetica Neue,Hiragino Sans,\\\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4\\30B7\\30C3\\30AF,Hiragino Kaku Gothic ProN,\\\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4 ProN W3,Meiryo,\\\\30E1\\30A4\\30EA\\30AA,MS PGothic,"\\FF2D\\FF33   \\FF30\\30B4\\30B7\\30C3\\30AF",sans-serif;font-size:12px;line-height:16px;padding:0 4px;position:relative;text-align:center;top:1px}#_chatSendTool .extended .tag{background-color:#444}#_chatSendTool .extended .emo{background-color:#F67F87} .emo2{background-color:#339966} .emo3{background-color:#4169E1}', ""])
}, function (e, t) {
  e.exports = function () {
    var e = [];
    return e.toString = function () {
      for (var e = [], t = 0; t < this.length; t++) {
        var n = this[t];
        n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
      }
      return e.join("")
    }, e.i = function (t, n) {
      "string" == typeof t && (t = [
        [null, t, ""]
      ]);
      for (var o = {}, r = 0; r < this.length; r++) {
        var i = this[r][0];
        "number" == typeof i && (o[i] = !0)
      }
      for (r = 0; r < t.length; r++) {
        var a = t[r];
        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
      }
    }, e
  }
}, function (e, t, n) {
  function o(e, t) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n],
        r = p[o.id];
      if (r) {
        r.refs++;
        for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
        for (; i < o.parts.length; i++) r.parts.push(c(o.parts[i], t))
      } else {
        for (var a = [], i = 0; i < o.parts.length; i++) a.push(c(o.parts[i], t));
        p[o.id] = {
          id: o.id,
          refs: 1,
          parts: a
        }
      }
    }
  }

  function r(e) {
    for (var t = [], n = {}, o = 0; o < e.length; o++) {
      var r = e[o],
        i = r[0],
        a = r[1],
        s = r[2],
        l = r[3],
        c = {
          css: a,
          media: s,
          sourceMap: l
        };
      n[i] ? n[i].parts.push(c) : t.push(n[i] = {
        id: i,
        parts: [c]
      })
    }
    return t
  }

  function i(e, t) {
    var n = m(),
      o = x[x.length - 1];
    if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), x.push(t);
    else {
      if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
      n.appendChild(t)
    }
  }

  function a(e) {
    e.parentNode.removeChild(e);
    var t = x.indexOf(e);
    t >= 0 && x.splice(t, 1)
  }

  function s(e) {
    var t = document.createElement("style");
    return t.type = "text/css", i(e, t), t
  }

  function l(e) {
    var t = document.createElement("link");
    return t.rel = "stylesheet", i(e, t), t
  }

  function c(e, t) {
    var n, o, r;
    if (t.singleton) {
      var i = b++;
      n = v || (v = s(t)), o = u.bind(null, n, i, !1), r = u.bind(null, n, i, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), o = f.bind(null, n), r = function () {
      a(n), n.href && URL.revokeObjectURL(n.href)
    }) : (n = s(t), o = d.bind(null, n), r = function () {
      a(n)
    });
    return o(e),
      function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          o(e = t)
        } else r()
      }
  }

  function u(e, t, n, o) {
    var r = n ? "" : o.css;
    if (e.styleSheet) e.styleSheet.cssText = y(t, r);
    else {
      var i = document.createTextNode(r),
        a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
    }
  }

  function d(e, t) {
    var n = t.css,
      o = t.media;
    if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(n))
    }
  }

  function f(e, t) {
    var n = t.css,
      o = t.sourceMap;
    o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
    var r = new Blob([n], {
        type: "text/css"
      }),
      i = e.href;
    e.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i)
  }
  var p = {},
    h = function (e) {
      var t;
      return function () {
        return "undefined" == typeof t && (t = e.apply(this, arguments)), t
      }
    },
    g = h(function () {
      return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    }),
    m = h(function () {
      return document.head || document.getElementsByTagName("head")[0]
    }),
    v = null,
    b = 0,
    x = [];
  e.exports = function (e, t) {
    t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
    var n = r(e);
    return o(n, t),
      function (e) {
        for (var i = [], a = 0; a < n.length; a++) {
          var s = n[a],
            l = p[s.id];
          l.refs--, i.push(l)
        }
        if (e) {
          var c = r(e);
          o(c, t)
        }
        for (var a = 0; a < i.length; a++) {
          var l = i[a];
          if (0 === l.refs) {
            for (var u = 0; u < l.parts.length; u++) l.parts[u]();
            delete p[l.id]
          }
        }
      }
  };
  var y = function () {
    var e = [];
    return function (t, n) {
      return e[t] = n, e.filter(Boolean).join("\n")
    }
  }()
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = function () {
    function e(e, t) {
      var n = [],
        o = !0,
        r = !1,
        i = void 0;
      try {
        for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
      } catch (e) {
        r = !0, i = e
      } finally {
        try {
          !o && s.return && s.return()
        } finally {
          if (r) throw i
        }
      }
      return n
    }
    return function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }();
  t.default = function () {
    function e(e) {
      if (!(13 != e.keyCode || e.altKey || e.ctrlkey || e.metaKey || e.shiftKey)) {
        var t = e.target,
          o = t.value,
          r = t.selectionStart,
          i = o.lastIndexOf("\n", r - 1) + 1,
          a = o.indexOf("\n", r);
        if (a = a == -1 ? o.length : a, r != i) {
          var s = o.substring(i, a),
            l = s.match(/^([\x20\t]*)([*+-]|\d+\.)(\x20)[\x20\t]*(\S?)/);
          if (null == l && (l = s.match(/^([\x20\t\u3000]*)([\u30fb\u2460-\u2473\u3251-\u325f\u32b1-\u32bf])()[\x20\t\u3000]*(\S?)/)), null != l) {
            var c = l,
              u = n(c, 5),
              d = u[1],
              f = u[2],
              p = u[3],
              h = u[4];
            if (e.preventDefault(), !h) return t.setSelectionRange(i, a), void document.execCommand("insertText", !1, "\n");
            switch (!0) {
            case /\d+\./.test(f):
              f = (parseInt(f) + 1).toString(10) + ".";
              break;
            case /[\u2460-\u2473\u3251-\u325f\u32b1-\u32bf]/.test(f):
              var g = f.charCodeAt(0);
              g = 9331 == g ? 12881 : 12895 == g ? 12977 : 12991 == g ? 12991 : g += 1, f = String.fromCharCode(g)
            }
            var m = d + f + p;
            document.execCommand("insertText", !1, "\n" + m)
          }
        }
      }
    }
    document.getElementById("_chatText").addEventListener("keydown", function (t) {
      switch (t.keyCode) {
      case 13:
        e(t)
      }
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function () {
    var e = document.getElementById("_toList"),
      t = e.getElementsByClassName("_cwLTList")[0],
      n = e.getElementsByClassName("toSelectorTooltip__checkHandleContainer")[0],
      o = parseInt(t.style.getPropertyValue("height")),
      r = document.getElementById("_chatText"),
      i = "ja" == window.LANGUAGE ? $('<span class="linkStatus extended">すべて選択 (アイコンのみ)</span>')[0] : $('<span class="linkStatus extended">Select All (Icons)</span>')[0];
    t.style.setProperty("min-height", o + "px"), t.style.setProperty("max-height", 2 * o + "px"), t.style.setProperty("height", ""), i.addEventListener("click", function (t) {
      var n = RM.getSortedMemberList().filter(function (e) {
        return e != AC.myid
      }).map(function (e) {
        return "[To:" + e + "]"
      }).join("");
      n += n.length > 0 ? "\n" : "", r.setSelectionRange(r.selectionStart, r.selectionStart), r.focus(), document.execCommand("insertText", !1, n), $(e).fadeOut("fast")
    }), n.appendChild(i)
  }, n(8)
}, function (e, t, n) {
  var o = n(9);
  "string" == typeof o && (o = [
    [e.id, o, ""]
  ]);
  n(5)(o, {});
  o.locals && (e.exports = o.locals)
}, function (e, t, n) {
  t = e.exports = n(4)(), t.push([e.id, "._cwLTSelectOptionArea .extended{float:right}", ""])
}]
);
  window.onload = onLoad;

    function onLoad() {

		var result = document.getElementById("_sendButton");
		console.log(result.innerText);
		result.innerText = "送信";
		
		var add = document.getElementById("_subRoomTaskAddArea");
		//add.innerHTML += "<div id=\"_chatFilterList\" class=\"roomFilterListTooltip tooltip tooltip--white\" role=\"tooltip\" style=\"display: block; opacity: 1; z-index: 1001; top: 78px; left: 7px;\"> <div class=\"roomFilterListTooltip__listContainer\"> <ul id=\"_chatStatusTypeList\" class=\"roomFilterListTooltip__roomStatusTypeList\"> <li id=\"_chatStatusAll\" class=\"_chatStatusTypeListItem roomFilterListTooltip__listRoomItem roomFilterListTooltip__listRoomItem--selected\"> <span class=\"_chatStatusTypeListItemName roomFilterListTooltip__listRoomItemName\">すべてのチャット</span> </li> <li id=\"_chatStatusTypeUnread\" class=\"_chatStatusTypeListItem roomFilterListTooltip__listRoomItem\"> <span class=\"_chatStatusTypeListItemName roomFilterListTooltip__listRoomItemName\">未読があるチャット</span> <span id=\"_chatUnreadStatus\" class=\"roomFilterListTooltip__badge\" style=\"display: none;\"> <span id=\"_chatUnreadStatusText\" class=\"roomFilterListTooltip__badgeText\"></span> </span> </li> <li id=\"_chatStatusTypeTo\" class=\"_chatStatusTypeListItem roomFilterListTooltip__listRoomItem\"> <span class=\"_chatStatusTypeListItemName roomFilterListTooltip__listRoomItemName\">Toがあるチャット</span> <span id=\"_chatToStatus\" class=\"roomFilterListTooltip__badge\" style=\"display: none;\"> <span id=\"_chatToStatusText\" class=\"roomFilterListTooltip__badgeText\"></span> </span> </li> <li id=\"_chatStatusTypeTask\" class=\"_chatStatusTypeListItem roomFilterListTooltip__listRoomItem\"> <span class=\"_chatStatusTypeListItemName roomFilterListTooltip__listRoomItemName\">タスクがあるチャット</span> <span id=\"_chatTaskStatus\" class=\"roomFilterListTooltip__badge\"> <span id=\"_chatTaskStatusText\" class=\"roomFilterListTooltip__badgeText\">(1)</span> </span> </li> </ul> <div class=\"roomFilterListTooltip__categoryHeader\"> <p class=\"roomFilterListTooltip__categoryHeaderTitle\">カテゴリー</p> <span id=\"_chatCategoryAdd\" class=\"roomFilterListTooltip__categoryAddIconContainer\"> <svg viewBox=\"0 0 10 10\" class=\"roomFilterListTooltip__categoryAddIcon\" height=\"16\" width=\"16\"> <use fill-rule=\"evenodd\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon_plus\"></use> </svg> </span> </div> <p class=\"roomFilterListTooltip__category\"></p> <ul id=\"_chatCategorySystemList\" class=\"roomFilterListTooltip__chatCategoryList\"> <li class=\"_chatCategoryItem roomFilterListTooltip__listItem\" data-cat-id=\"contact\"> <span class=\"_categoryName\">ダイレクトチャット</span> </li> <li class=\"_chatCategoryItem roomFilterListTooltip__listItem\" data-cat-id=\"group\"> <span class=\"_categoryName\">グループチャット</span> </li> <li class=\"_chatCategoryItem roomFilterListTooltip__listItem\" data-cat-id=\"mute\"> <span class=\"_categoryName\">ミュート中のチャット</span> </li> </ul> <ul id=\"_chatCategoryUserList\" class=\"roomFilterListTooltip__list\"></ul> </div> </div>";
    }
