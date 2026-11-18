// Логотип ЧОЙЗ: «ЧОИЗ» + оранжевая галочка вместо кратки над «И» (Й = выбор ✓)
window.choizLogo = function (opts) {
  const o = Object.assign({ ink: 'currentColor', sig: 'var(--sig,#FF4A1C)', size: 28 }, opts || {});
  return `<span class="choiz-logo" role="img" aria-label="ЧОЙЗ" style="--lg:${o.size}px;color:${o.ink}">ЧО<span class="lg-i">И<svg viewBox="0 0 24 14" aria-hidden="true"><path d="M3 6 l5 5 l13 -9" fill="none" stroke="${o.sig}" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="miter"/></svg></span>З</span>`;
};
(function () {
  if (document.getElementById('choiz-logo-css')) return;
  const s = document.createElement('style'); s.id = 'choiz-logo-css';
  s.textContent = `.choiz-logo{font-family:Unbounded,'Arial Black',sans-serif;font-weight:900;font-size:var(--lg);line-height:1;letter-spacing:-.02em;display:inline-flex;align-items:flex-end;white-space:nowrap;padding-top:calc(var(--lg)*.32)}
.choiz-logo .lg-i{position:relative;display:inline-block}
.choiz-logo .lg-i svg{position:absolute;left:50%;top:calc(var(--lg)*-.36);width:calc(var(--lg)*.62);transform:translateX(-46%);overflow:visible}`;
  document.head.appendChild(s);
})();
