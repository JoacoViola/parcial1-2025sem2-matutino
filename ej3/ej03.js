/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  const digit = Math.floor(Math.random() * 10);

  const segmentMap = {
    0: ["seg-a", "seg-b", "seg-c", "seg-d", "seg-e", "seg-f"],
    1: ["seg-b", "seg-c"],
    2: ["seg-a", "seg-b", "seg-g", "seg-e", "seg-d"],
    3: ["seg-a", "seg-b", "seg-c", "seg-d", "seg-g"],
    4: ["seg-f", "seg-g", "seg-b", "seg-c"],
    5: ["seg-a", "seg-f", "seg-g", "seg-c", "seg-d"],
    6: ["seg-a", "seg-f", "seg-e", "seg-d", "seg-c", "seg-g"],
    7: ["seg-a", "seg-b", "seg-c"],
    8: ["seg-a", "seg-b", "seg-c", "seg-d", "seg-e", "seg-f", "seg-g"],
    9: ["seg-a", "seg-b", "seg-c", "seg-d", "seg-f", "seg-g"]
  };


  const segments = document.querySelectorAll(".segment");
  segments.forEach(seg => seg.style.background = "black");

  const onSegments = segmentMap[digit];
  onSegments.forEach(id => {
    document.getElementById(id).style.background = "yellow";
  });

  console.log("Mostrando dígito:", digit);
}
