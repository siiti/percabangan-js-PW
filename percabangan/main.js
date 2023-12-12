let belanja = parselnt(prompt("Masukan Nilai: "));
if(belanja > 0 && belanja < 99999) {
  document.writeln(`Masukan Belanja= ${belanja}`)
  document.writeln(`Anda tidak dapat Diskon`)
}
else if(belanja > 100000 && belanja < 200001) {
  document.writeln(`Anda Belanja = ${belanja}`)
  document.writeln(`Diskon 10% `)
  let diskon = belanja * 10/100;
  document.writeln(`Total Bayar = ${belanja - diskon}`)
}
else if(belanja >= 200001 && belanja < 300001) {
  document.writeln(`Anda Belanja = ${belanja}`)
  document.writeln(`Diskon 25%`)
  let diskon = belanja * 25/100;
  document.writeln(`Total Bayar = ${belanja - diskon}`)
}