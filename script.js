document.getElementById("diceForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener el nombre del usuario
    const userName = document.getElementById("userName").value;

    // Generar saludo
    const greeting = userName ? `¡Bienvenido, ${userName}!` : "¡Bienvenido!";
    document.getElementById("greeting").textContent = greeting;

    // Generar dos números aleatorios entre 1 y 6
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const suma = dice1 + dice2;

    // Mostrar los resultados de los dados y la suma
    document.getElementById("diceResult").textContent = `Dado 1: ${dice1}, Dado 2: ${dice2}`;
    document.getElementById("sumResult").textContent = `Suma: ${suma}`;

    // Determinar el resultado del lanzamiento
    let resultado;
    if (suma === 2) {
        resultado = "¡Doble uno! Mala suerte.";
    } else if (suma === 7 || suma === 11) {
        resultado = "¡Suerte! Has ganado esta ronda.";
    } else if (dice1 === dice2) {
        resultado = `¡Doble ${dice1}! Tienes un turno extra.`;
    } else {
        resultado = "Nada especial, ¡intenta de nuevo!";
    }

    // Mostrar el resultado final
    document.getElementById("finalResult").textContent = resultado;

    // Mostrar el área de resultados
    document.getElementById("result").classList.remove("hidden");
});