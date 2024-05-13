"use strict";
const _0x2d6f45 = _0x4b78;
(function (_0x4ecd9c, _0x565d42) {
  const _0x3c5dd8 = _0x4b78,
    _0x1f054d = _0x4ecd9c();
  while (!![]) {
    try {
      const _0x2d6185 =
        parseInt(_0x3c5dd8(0x192)) / 0x1 +
        -parseInt(_0x3c5dd8(0x19b)) / 0x2 +
        parseInt(_0x3c5dd8(0x19f)) / 0x3 +
        (parseInt(_0x3c5dd8(0x19d)) / 0x4) *
          (-parseInt(_0x3c5dd8(0x1b3)) / 0x5) +
        (-parseInt(_0x3c5dd8(0x19c)) / 0x6) *
          (parseInt(_0x3c5dd8(0x1ac)) / 0x7) +
        -parseInt(_0x3c5dd8(0x191)) / 0x8 +
        (parseInt(_0x3c5dd8(0x1a7)) / 0x9) * (parseInt(_0x3c5dd8(0x1ad)) / 0xa);
      if (_0x2d6185 === _0x565d42) break;
      else _0x1f054d["push"](_0x1f054d["shift"]());
    } catch (_0x5f1223) {
      _0x1f054d["push"](_0x1f054d["shift"]());
    }
  }
})(_0x2443, 0x9307a);
let toggleBtn = document[_0x2d6f45(0x195)](_0x2d6f45(0x1af)),
  navbar = document["querySelector"](_0x2d6f45(0x196));
toggleBtn["addEventListener"](_0x2d6f45(0x1b0), () => {
  const _0x17c198 = _0x2d6f45;
  navbar[_0x17c198(0x190)]["toggle"]("active");
});
function _0x2443() {
  const _0x5c6925 = [
    "1533sIIYlQ",
    "20xNjxQi",
    "clientY",
    ".nav-open-btn",
    "click",
    "innerHeight",
    "clientX",
    "3499415RjAUDy",
    "remove",
    "mousemove",
    "classList",
    "4097608CRWaNT",
    "458466QZxKjG",
    "[data-parallax]",
    ".process-hidden",
    "querySelector",
    ".navbar",
    "observe",
    "process-show",
    "parallaxSpeed",
    ".hidden",
    "2378940WiUvBy",
    "12912cqxcaX",
    "4iRzqth",
    "addEventListener",
    "1515900SzLwaU",
    "target",
    "innerWidth",
    "px)",
    ".img-hidden",
    "animate",
    "img-show",
    "show",
    "11300895lOMRod",
    "dataset",
    "forEach",
    "add",
    "querySelectorAll",
  ];
  _0x2443 = function () {
    return _0x5c6925;
  };
  return _0x2443();
}
const parallaxElements = document[_0x2d6f45(0x1ab)](_0x2d6f45(0x193));
window[_0x2d6f45(0x19e)](_0x2d6f45(0x1b5), (_0x1b0d81) => {
  const _0x560b7b = _0x2d6f45;
  for (
    let _0x41a2f7 = 0x0, _0x2eaaaa = parallaxElements["length"];
    _0x41a2f7 < _0x2eaaaa;
    _0x41a2f7++
  ) {
    const _0x401fb4 =
        (_0x1b0d81[_0x560b7b(0x1b2)] / window[_0x560b7b(0x1a1)]) *
        Number(parallaxElements[_0x41a2f7][_0x560b7b(0x1a8)]["parallaxSpeed"]),
      _0x1129bf =
        (_0x1b0d81[_0x560b7b(0x1ae)] / window[_0x560b7b(0x1b1)]) *
        Number(parallaxElements[_0x41a2f7][_0x560b7b(0x1a8)][_0x560b7b(0x199)]);
    parallaxElements[_0x41a2f7][_0x560b7b(0x1a4)](
      {
        transform:
          "translate(" + _0x401fb4 + "px,\x20" + _0x1129bf + _0x560b7b(0x1a2),
      },
      { duration: 0x1f4, fill: "forwards" }
    );
  }
});
const observer = new IntersectionObserver((_0x496bc9) => {
    _0x496bc9["forEach"]((_0x1621db) => {
      const _0x126a0f = _0x4b78;
      _0x1621db["isIntersecting"]
        ? _0x1621db[_0x126a0f(0x1a0)][_0x126a0f(0x190)][_0x126a0f(0x1aa)](
            "show"
          )
        : _0x1621db[_0x126a0f(0x1a0)][_0x126a0f(0x190)][_0x126a0f(0x1b4)](
            _0x126a0f(0x1a6)
          );
    });
  }),
  hiddenElements = document[_0x2d6f45(0x1ab)](_0x2d6f45(0x19a));
function _0x4b78(_0x3a2438, _0x132354) {
  const _0x24431d = _0x2443();
  return (
    (_0x4b78 = function (_0x4b78da, _0x35a55b) {
      _0x4b78da = _0x4b78da - 0x190;
      let _0x5eb9f7 = _0x24431d[_0x4b78da];
      return _0x5eb9f7;
    }),
    _0x4b78(_0x3a2438, _0x132354)
  );
}
hiddenElements[_0x2d6f45(0x1a9)]((_0x12c409) =>
  observer[_0x2d6f45(0x197)](_0x12c409)
);
const imgObserver = new IntersectionObserver((_0x28dc88) => {
    const _0x111801 = _0x2d6f45;
    _0x28dc88[_0x111801(0x1a9)]((_0x1687c7) => {
      const _0x39c5a0 = _0x111801;
      _0x1687c7["isIntersecting"]
        ? _0x1687c7[_0x39c5a0(0x1a0)][_0x39c5a0(0x190)][_0x39c5a0(0x1aa)](
            _0x39c5a0(0x1a5)
          )
        : _0x1687c7[_0x39c5a0(0x1a0)][_0x39c5a0(0x190)][_0x39c5a0(0x1b4)](
            _0x39c5a0(0x1a5)
          );
    });
  }),
  ImghiddenElements = document[_0x2d6f45(0x1ab)](_0x2d6f45(0x1a3));
ImghiddenElements[_0x2d6f45(0x1a9)]((_0x5b5c64) =>
  imgObserver["observe"](_0x5b5c64)
);
const processObserver = new IntersectionObserver((_0xe6f9cb) => {
    const _0x4f89a2 = _0x2d6f45;
    _0xe6f9cb[_0x4f89a2(0x1a9)]((_0x4bb434) => {
      const _0x38ca67 = _0x4f89a2;
      _0x4bb434["isIntersecting"]
        ? _0x4bb434["target"][_0x38ca67(0x190)][_0x38ca67(0x1aa)](
            "process-show"
          )
        : _0x4bb434["target"][_0x38ca67(0x190)][_0x38ca67(0x1b4)](
            _0x38ca67(0x198)
          );
    });
  }),
  proccesshiddenElements = document[_0x2d6f45(0x1ab)](_0x2d6f45(0x194));
proccesshiddenElements[_0x2d6f45(0x1a9)]((_0x396465) =>
  processObserver["observe"](_0x396465)
);
