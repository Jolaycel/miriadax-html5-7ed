/** 
 * ######################
 * # CALCULADORA JQUERY #
 * ######################
 * @author Marco Antonio Gonzalez
 * @date 26/02/2017
 * @url http://magonzalez.neocities.org/
 */
var num, acc = 0, op = "";
// Inicializacion de eventos sobre los botones y operaciones asociadas a cada evento
$(function() {
    num = $("#num");
    // Operaciones binarias (dos operandos)
    $(".visor").on("click", function() {
        $("#num").html("");
    });
    $("#mas").on("click", function() {
        op = "+";
        acc = +num.html(); 
    });
    $("#menos").on("click", function() {
        op = "-";
        acc = +num.html();
    });
    $("#multiplica").on("click", function() {
        op = "*";
        acc = +num.html();
    });
    $("#divide").on("click", function() {
        op = "/";
        acc = +num.html();
    });
    $("#potN").on("click", function() {
        op = "pN";
        acc = +num.html();
    });
    // Operaciones unitarias (un operando)
    $("#pot").on("click", function() {
    	num.html(+num.html() * +num.html());
    });
    $("#pot2").on("click", function() {
    	num.html(Math.pow(2, +num.html()));
    });
    $("#factorial").on("click", function() {
        var calculo = 1;
        // 5 * 4 * 3 * 2 * 1 es igual que 1 * 2 * 3 * 4 * 5
        for (var i = 1; i <= +num.html(); i++) {
            calculo = (calculo * i);
        }
        // El factorial de 0 es igual a 1 (0! = 1)
        if (calculo == 0) {
            calculo = 1;
        }
        num.html(calculo);
    });
    $("#raiz").on("click", function() {
        num.html(Math.sqrt(+num.html()));
    });
    $("#inverso").on("click", function() {
        num.html(1 / +num.html());
    });
    $("#parte_entera").on("click", function() {
        num.html((+num.html() < 0) ? Math.ceil(+num.html()) : Math.floor(+num.html()));
    });
    $("#sumatorio_x").on("click", function () {
        var calculo = 0;
        var arrayOperandos = num.html().split(",");
        // Itera por cada operando
        arrayOperandos.forEach(function(operando) {
            calculo = calculo + +operando;
        });
        num.html(calculo);
    });
    $("#producto_x").on("click", function () {
        var calculo = 1;
        var arrayOperandos = num.html().split(",");
        // Itera por cada operando
        arrayOperandos.forEach(function(operando) {
            calculo = +calculo * +operando;
        });
        num.html(calculo);
    });
    $("#a_mem").on("click", function () {
        $("#mem").html($("#num").html());
    });
    $("#de_mem").on("click", function () {
        $("#num").html($("#mem").html());
    });
    $("#vaciar_mem").on("click", function () {
        $("#mem").html("");
    });
    // Calculadora
    $("#calcular").on("click", function() {
        var calculo = 0;
        if (op === "+") {
            calculo = +acc + +num.html();
        }
        if (op === "-") {
            calculo = +acc - +num.html();
        }
        if (op === "*") {
            calculo = +acc * +num.html();
        }
        if (op === "/") {
            calculo = +acc / +num.html();
        }
        if (op === "pN") {
            calculo = Math.pow(+acc, +num.html());
        }
        // Actualiza el resultado del calculo
        num.html(calculo);
    });
});