const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

    //cor do preenchimento
pincel.fillStyle = "Lightgrey";
pincel.fillRect(0, 0, 600, 400);
    //preencher com retangulo: eixo x, eixo y, largura e tamanho

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);

pincel.fillStyle = "white";
pincel.beginPath(); // começar um novo desenho
pincel.moveTo(300, 200); //move o objeto para um determinado local: eixo x e eixo y
pincel.lineTo(200, 400);// coloca uma linha: eixo x, eixo y
pincel.lineTo(400, 400);
pincel.fill(); //preenchimento

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill()
