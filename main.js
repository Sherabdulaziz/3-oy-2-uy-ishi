alert("salom hammaga kompaniyamizga xush kelibsiz");
confirm(" sayohatga otlanyapsizmi");
prompt(" boradigan manzilingizni kiriting");
let pul = +prompt("mablag'izni kiriting (so'mda)");
// ticket =>350$;
// living=>680$;
// tour=> 230(yevro);
// 1dollar=11,250so'm
// 1yevro=12,860som
xarajat = 350 * 11.25 + 680 * 11.25 + 12.86 * 230;
if (pul > xarajat) {
  alert("oq yo'l sizni pulingiz sayohatga bemalol yetadi");
} else if (pul === xarajat) {
  alert("qoyil sizga  kamida shuncha pul bilan sayohatga chiqishingiz mumkin");
} else if (pul < xarajat) {
  alert(
    Math.floor(Math.random() * 30 - 3 + 1) + 3 + "  kunda qayta xabar oling "
  );
} else "404 ERROR not page";
