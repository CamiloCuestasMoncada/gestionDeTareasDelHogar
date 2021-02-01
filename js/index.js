
class Inspectores {

    constructor(nombre, tareas) {
        this.nombre = nombre;
        this.tareas = tareas;

    }


}

class Integrantes extends Inspectores {
    constructor(nombre, tareas) {
        super(nombre, tareas)

    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=number]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});



const $botonMostrarInfo = document.querySelector('#buttonTutorial');
const $botonOcultarInfo = document.querySelector('.close');
$botonMostrarInfo.onclick = function () {
    apareceInfo();
}

$botonOcultarInfo.onclick = function () {
    ocultaInfo();
}

function apareceInfo() {
    document.querySelector('#infoTutorial').style.transform = 'translate(0%)';
}

function ocultaInfo() {
    document.querySelector('#infoTutorial').style.transform = 'translate(100%)';
}







const $botonGenerarCantidadTareas = document.querySelector('#botonEnviarTareas');
$botonGenerarCantidadTareas.onclick = () => {
    const $numeroDeTareas = document.querySelector('[name=numTareas]').value;
    resetearCampos('#avisoCampoVacio');
    if ($numeroDeTareas > 0 && $numeroDeTareas <= 150) {
        resetearCampos('.filaInputTareas');
        creaCamposNombresTareas($numeroDeTareas);
        document.querySelector('#confirmaTareas').style.display = "block";
    } else {


        if ($numeroDeTareas > 150) {
            document.querySelector('#confirmaTareas').style.display = "none";
            resetearCampos('.filaInputTareas');
            const $avisoCampoVacio = document.createElement('span');
            $avisoCampoVacio.textContent = 'El máximo de tareas permitidas es 150.';
            $avisoCampoVacio.id = 'avisoCampoVacio';
            document.querySelector('#formularioTareas').appendChild($avisoCampoVacio);
        } else {
            document.querySelector('#confirmaTareas').style.display = "none";
            resetearCampos('.filaInputTareas');
            const $avisoCampoVacio = document.createElement('span');
            $avisoCampoVacio.textContent = 'Debes ingresar algún número.';
            $avisoCampoVacio.id = 'avisoCampoVacio';
            document.querySelector('#formularioTareas').appendChild($avisoCampoVacio);
        }

    }

}

function resetearCampos(idElemntoAeliminar) {
    const numIndices = document.querySelectorAll(idElemntoAeliminar);
    if (numIndices.length > 0) {

        for (let i = 0; i < numIndices.length; i++) {
            numIndices[i].remove();
        }


    }



}


const creaCamposNombresTareas = numTareas => {



    for (let i = 0; i < numTareas; i++) {

        const $divCampoTareas = document.createElement("div");
        const $labelCampoTareas = document.createElement("label");
        const $inputCampoTareas = document.createElement("input");
        document.querySelector("#camposTareas").appendChild($divCampoTareas);
        $divCampoTareas.appendChild($labelCampoTareas);
        $divCampoTareas.appendChild($inputCampoTareas);
        $labelCampoTareas.textContent = `Ingrese el nombre de la tarea ${i + 1}:`;
        $inputCampoTareas.name = `input${i}`;
        $inputCampoTareas.type = "text";
        $inputCampoTareas.id = `inputId${i}`;
        $inputCampoTareas.maxLength = "25";
        $divCampoTareas.className = `filaInputTareas`;

    }


}



let listaTareas = [];
let listaIntegrantes = [];
let arrayIntegranteYtarea = [];
let arrayIntegranteYtareaParaInspector = [];
let listaDeIntegrantesFinalizada = [];
let listaInspectoresFinalizada = [];

let = clickEnBotonConfirmaTareas = false;
const $botonConfirmaTareas = document.querySelector('#confirmaTareas');
$botonConfirmaTareas.onclick = () => {
    let completadoCorrectamente = verificaQueNoHayaCamposVacios();

    if (completadoCorrectamente) {

        setBgColorInputs();

        clickEnBotonConfirmaTareas = true;

        const $numeroDeTareas = document.querySelector('[name=numTareas]').value;

        listaTareas = tareas($numeroDeTareas);
        document.querySelector('#botonEnviarTareas').style.display = 'none';

        document.querySelector('#check_icon').style.display = 'block';
        $botonConfirmaTareas.style.display = 'none';
        $botonGenerarCantidadIntegrantes.style.display = 'initial';
    }
}

function setBgColorInputs() {
    document.querySelectorAll('input').forEach(el => el.style.backgroundColor = '#ffffff');
}

let verificaQueNoHayaCamposVacios = () => {
    const $numeroDeTareas = document.querySelector('[name=numTareas]').value;
    listaTareas = tareas($numeroDeTareas);
    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i] === "") {
            document.querySelector(`#inputId${i}`).style.backgroundColor = "#ff9191";
            document.querySelector(`#inputId${i}`).placeholder = "No puede estar vacio";


            return false;
        }


    }
    return true;
}






function tareas(numeroDeTareas) {

    let listaTareas = [];
    for (let i = 0; i < numeroDeTareas; i++) {
        listaTareas[i] = document.querySelector(`#inputId${i}`).value;
    }
    return listaTareas;


}



const $botonGenerarCantidadIntegrantes = document.querySelector('#enviarIntegrantes');
$botonGenerarCantidadIntegrantes.onclick = () => {



    resetearCampos('#avisoCampoVacio');
    const $numeroIntegrantes = document.querySelector('[name=numIntegrantes]').value;
    if ($numeroIntegrantes > 0 && $numeroIntegrantes <= 200) {
        resetearCampos('.filaInputIntegrantes');
        creaCamposNombresIntegrantes($numeroIntegrantes);
        document.querySelector('#confirmaIntegrantes').style.display = "block";
    } else {
        if ($numeroIntegrantes < 200) {
            document.querySelector('#confirmaIntegrantes').style.display = "none";
            resetearCampos('.filaInputIntegrantes');
            const $avisoCampoVacio = document.createElement('span');
            $avisoCampoVacio.textContent = 'Debes ingresar algún número.';
            $avisoCampoVacio.id = 'avisoCampoVacio';
            document.querySelector('#formularioIntegrantes').appendChild($avisoCampoVacio);
        } else {
            document.querySelector('#confirmaIntegrantes').style.display = "none";
            resetearCampos('.filaInputIntegrantes');
            const $avisoCampoVacio = document.createElement('span');
            $avisoCampoVacio.textContent = 'El máximo de integrantes es de 200';
            $avisoCampoVacio.id = 'avisoCampoVacio';
            document.querySelector('#formularioIntegrantes').appendChild($avisoCampoVacio);
        }

    }

}


const creaCamposNombresIntegrantes = numIntegrantes => {



    for (let i = 0; i < numIntegrantes; i++) {

        const $divCampoIntegrantes = document.createElement("div");
        const $labelCampoIntegrantes = document.createElement("label");
        const $inputCampoIntegrantes = document.createElement("input");
        document.querySelector("#camposIntegrantes").appendChild($divCampoIntegrantes);
        $divCampoIntegrantes.appendChild($labelCampoIntegrantes);
        $divCampoIntegrantes.appendChild($inputCampoIntegrantes);
        $labelCampoIntegrantes.textContent = `Ingrese el nombre del integrante:  ${i + 1}:`;
        $inputCampoIntegrantes.name = `inputIntegrante${i}`;
        $inputCampoIntegrantes.type = "text";
        $inputCampoIntegrantes.id = `inputIntegrante${i}`;
        $divCampoIntegrantes.className = 'filaInputIntegrantes';
        $inputCampoIntegrantes.maxLength = "25";

    }

}





let = clickEnBotonConfirmaIntegrantes = false;
const $botonConfirmaIntegrantes = document.querySelector('#confirmaIntegrantes');
$botonConfirmaIntegrantes.onclick = () => {
    const $numeroIntegrantes = document.querySelector('[name=numIntegrantes]').value;
    listaIntegrantes = integrantes($numeroIntegrantes);
    let completadoCorrectamente = verificaQueNoHayaCamposVaciosIntegrantes();
    if (completadoCorrectamente) {

        const $numeroDeTareas = document.querySelector('[name=numTareas]').value;

        clickEnBotonConfirmaIntegrantes = true;
        document.querySelector('#enviarIntegrantes').style.display = 'none';
        if (clickEnBotonConfirmaTareas && clickEnBotonConfirmaIntegrantes) {
            dibujaTareasEintegrantes($numeroDeTareas, $numeroIntegrantes);
            document.querySelector('#botonContinuar').style.display = 'block';
            $botonConfirmaIntegrantes.style.display = 'none';
            ocultaCampos();
            apareceInfoIngresada();

        }

    }

}

function integrantes(numeroDeIntegrantes) {

    let listaIntegrantes = [];
    for (let i = 0; i < numeroDeIntegrantes; i++) {
        listaIntegrantes[i] = document.querySelector(`#inputIntegrante${i}`).value;
    }
    return listaIntegrantes;


}

let verificaQueNoHayaCamposVaciosIntegrantes = () => {

    for (let i = 0; i < listaIntegrantes.length; i++) {
        if (listaIntegrantes[i] === "") {
            document.querySelector(`#inputIntegrante${i}`).style.backgroundColor = "#ff9191";
            document.querySelector(`#inputIntegrante${i}`).placeholder = "No puede estar vacio";


            return false;
        }


    }
    return true;
}

function dibujaTareasEintegrantes(cantTareas, cantIntegrantes) {

    const $sectionMuestraInfo = document.querySelector('#infoIngresada');
    const $contenedorTareas = document.createElement('div');
    const $contenedorIntegrantes = document.createElement('div');
    $contenedorTareas.id = 'contenedorTareas';
    $contenedorTareas.className = 'col-md-5 col-sm-10 col-10';
    $contenedorIntegrantes.id = 'contenedorIntegrantes';
    $contenedorIntegrantes.className = 'col-md-5 col-sm-10 col-10';

    $sectionMuestraInfo.appendChild($contenedorTareas);
    $sectionMuestraInfo.appendChild($contenedorIntegrantes);
    const $contenedorListaTareas = document.createElement('ol');
    const $contenedorListaIntegrantes = document.createElement('ol');
    const $tituloTareas = document.createElement('h2');
    const $tituloIntegrantes = document.createElement('h2');
    $tituloTareas.textContent = 'Tareas:';
    $tituloTareas.id = 'tituloListaTareas';
    $tituloIntegrantes.textContent = 'Integrantes:';
    $tituloIntegrantes.id = 'tituloListaIntegrantes';

    $contenedorTareas.appendChild($tituloTareas);
    $contenedorTareas.appendChild($contenedorListaTareas);
    $contenedorIntegrantes.appendChild($tituloIntegrantes);
    $contenedorIntegrantes.appendChild($contenedorListaIntegrantes);
    for (let i = 0; i < cantTareas; i++) {
        const $elementosDeListaTareas = document.createElement('li');
        $contenedorListaTareas.appendChild($elementosDeListaTareas);

        $elementosDeListaTareas.id = `liTarea-${i}`;

        $elementosDeListaTareas.textContent = `${listaTareas[i]}`;
    }

    for (let i = 0; i < cantIntegrantes; i++) {

        const $elementosDeListaIntegrantes = document.createElement('li');
        $contenedorListaIntegrantes.appendChild($elementosDeListaIntegrantes);

        $elementosDeListaIntegrantes.id = `liTarea-${i}`;

        $elementosDeListaIntegrantes.textContent = `${listaIntegrantes[i]}`;
    }

}



function ocultaCampos() {
    gsap.fromTo("#ingresoDeDatos", { scale: 1 }, { duration: 0.5, scale: 0 });

    setTimeout(function () { document.querySelector('#ingresoDeDatos').style.display = 'none' }, 1000);


}

function apareceInfoIngresada() {
    gsap.from("#infoIngresada", { delay: 1.5, duration: 1, opacity: 0, scale: 0.5, ease: "back" });
}







const $botonContinuar = document.querySelector('#botonContinuar');
$botonContinuar.onclick = () => {
    $botonContinuar.style.display = 'none';
    document.querySelector('#tablaResultados').style.display = 'block';
    arrayIntegranteYtarea = asignaUnIntegranteAcadaTarea(listaTareas, listaIntegrantes);
    listaDeIntegrantesFinalizada = crearIntegrante(arrayIntegranteYtarea, listaIntegrantes);
    arrayIntegranteYtareaParaInspector = asignaUnInspectorAcadaTarea(listaTareas, listaIntegrantes, listaDeIntegrantesFinalizada);
    listaInspectoresFinalizada = creaInspectores(arrayIntegranteYtareaParaInspector);
    console.log(listaDeIntegrantesFinalizada)
    console.log(listaInspectoresFinalizada);
    ruletaSuspenso();
    dibujaResultados(listaDeIntegrantesFinalizada, listaInspectoresFinalizada);
    creaListaResultadoNombres(listaIntegrantes);



}




function ruletaSuspenso() {
    document.querySelector('#ruleta2').style.display = 'block';
    TweenLite.to('#ruleta2', 3, { rotation: 720 }).repeat(-1);
    gsap.fromTo("#ruleta2", { scale: 1 }, { delay: 1, duration: 0.5, scale: 0 });
    setTimeout(function () { document.querySelector('#ruleta2').style.display = 'none' }, 3000);
    gsap.from("#resultadosGenerales", { delay: 3, duration: 1, opacity: 0, scale: 0.5, ease: "elastic" });
    setTimeout(function () { $botondescargar.style.display = 'block' }, 4000);
    setTimeout(function () { document.querySelector('#consultas').style.display = 'block' }, 4000);
}

function asignaUnIntegranteAcadaTarea(listaTareas, listaIntegrantes) {
    let arrayTareaEintegrante = [];
    for (let i = 0; i < listaTareas.length; i++) {
        let integranteAleatorio = Math.floor(Math.random() * (listaIntegrantes.length));
        arrayTareaEintegrante[i] = [listaTareas[i], listaIntegrantes[integranteAleatorio]];
    }
    return arrayTareaEintegrante;

}

function asignaUnInspectorAcadaTarea(listaTareas, listaIntegrantes, listaDeIntegrantesFinalizada) {
    let arrayTareaEintegrante = [];
    for (let i = 0; i < listaTareas.length; i++) {


        for (const indice in listaDeIntegrantesFinalizada) {

            if (listaDeIntegrantesFinalizada[indice].tareas.includes(listaTareas[i])) {
                let indexIntegranteAleatorio = Math.floor(Math.random() * (listaIntegrantes.length));
                let integranteAleatorio = listaIntegrantes[indexIntegranteAleatorio];


                if (listaDeIntegrantesFinalizada[indice].nombre != integranteAleatorio) {
                    arrayTareaEintegrante[i] = [listaTareas[i], integranteAleatorio];
                    break;
                } else {
                    i--;
                }


            }

        }





    }
    return arrayTareaEintegrante;

}






function crearIntegrante(arrayIntegranteYtarea, todosLosIntegrantes) {
    let listaObjetoIntegrantes = [];
    let listaIntegrantes = [];
    for (let indice in arrayIntegranteYtarea) {
        if (listaIntegrantes.includes(arrayIntegranteYtarea[indice][1])) {


            listaObjetoIntegrantes.forEach(
                element => {
                    if (element.nombre === arrayIntegranteYtarea[indice][1]) {
                        element.tareas[element.tareas.length] = arrayIntegranteYtarea[indice][0];
                    }
                }
            );
        } else {

            let integrante = new Integrantes(arrayIntegranteYtarea[indice][1], [arrayIntegranteYtarea[indice][0]]);
            listaObjetoIntegrantes.push(integrante);
            listaIntegrantes.push(integrante.nombre);

        }






    }


    for (const persona of todosLosIntegrantes) {
        let contador = 0;
        listaObjetoIntegrantes.forEach(objetoIntegrante => {
            if (objetoIntegrante.nombre != persona) {
                contador++;
                if (contador === listaObjetoIntegrantes.length) {
                    let integrante = new Integrantes(persona, []);
                    listaObjetoIntegrantes.push(integrante);
                }
            }
        })
    }

    return listaObjetoIntegrantes;



}

function creaInspectores(arrayIntegranteYtareaParaInspector) {
    listaObjetoInspectores = [];
    let listaInspectores = [];
    for (const indice in arrayIntegranteYtareaParaInspector) {

        if (listaInspectores.includes(arrayIntegranteYtareaParaInspector[indice][1])) {

            listaObjetoInspectores.forEach(
                element => {
                    if (element.nombre === arrayIntegranteYtareaParaInspector[indice][1]) {
                        element.tareas[element.tareas.length] = arrayIntegranteYtareaParaInspector[indice][0];
                    }
                }
            );

        } else {
            let inspector = new Inspectores(arrayIntegranteYtareaParaInspector[indice][1], [arrayIntegranteYtareaParaInspector[indice][0]]);
            listaObjetoInspectores.push(inspector);
            listaInspectores.push(inspector.nombre);
        }


    }

    return listaObjetoInspectores;

}

function dibujaResultados(listaDeIntegrantesFinalizada, listaInspectoresFinalizada) {
    creaTablaResultadoGeneral(listaDeIntegrantesFinalizada, listaTareas);
    creaTablaResultadoInspectores(listaInspectoresFinalizada, listaTareas);


}


function creaTablaResultadoGeneral(listaIntegrantesFinalizada, listaTareas) {
    const $sectionMuestraInfo = document.querySelector('#resultadosGenerales');
    const $contenedorIntegrantesFinalizados = document.querySelector('#info1');
    $sectionMuestraInfo.appendChild($contenedorIntegrantesFinalizados);
    //crea head de la tabla
    const $contenedorCabecera = document.createElement('tr');
    document.querySelector('#encabezadoTablaResultados').appendChild($contenedorCabecera);
    const $tituloColumna1 = document.createElement('th');
    const $tituloColumna2 = document.createElement('th');
    const $tituloColumna3 = document.createElement('th');
    $contenedorCabecera.appendChild($tituloColumna1);
    $contenedorCabecera.appendChild($tituloColumna2);
    $contenedorCabecera.appendChild($tituloColumna3);
    $tituloColumna1.scope = 'col';
    $tituloColumna2.scope = 'col';
    $tituloColumna3.scope = 'col';
    $tituloColumna3.id = "tituloColumnaIntegrante";
    $tituloColumna1.textContent = `#`;
    $tituloColumna2.textContent = "Tarea:";
    $tituloColumna3.textContent = "Responsable:";


    for (let i = 0; i < listaTareas.length; i++) {


        //crea cuerpo de la tabla
        const $contenedorResultado = document.createElement('tr');
        document.querySelector('#cuerpoTablaResultados').appendChild($contenedorResultado);



        const $numeracionTabla = document.createElement('th');
        $contenedorResultado.appendChild($numeracionTabla);

        const $resultadoNombreIntegrante = document.createElement('td');
        const $resultadoTareaIntegrante = document.createElement('td');

        $contenedorResultado.appendChild($resultadoNombreIntegrante);
        $contenedorResultado.appendChild($resultadoTareaIntegrante);

        $numeracionTabla.textContent = i + 1;
        $numeracionTabla.scope = 'row';


        $resultadoNombreIntegrante.id = `liIntegrante-${i}`;
        $resultadoTareaIntegrante.id = `liIntegrante-${i}`;


        $resultadoNombreIntegrante.textContent = `${listaTareas[i]}`;
        for (const indice in listaIntegrantesFinalizada) {
            let listaTareasDeCadaIntegrante = listaIntegrantesFinalizada[indice].tareas;

            if (listaTareasDeCadaIntegrante.includes(listaTareas[i])) {
                $resultadoTareaIntegrante.textContent = `${listaIntegrantesFinalizada[indice].nombre}`;

            }
        }

    }
}



function creaTablaResultadoInspectores(listaInspectoresFinalizada, listaTareas) {
    const $sectionMuestraInfo2 = document.querySelector('#resultadosGenerales');
    const $contenedorInspectores = document.querySelector('#info2');
    $sectionMuestraInfo2.appendChild($contenedorInspectores);
    //crea head de la tabla
    const $contenedorCabecera2 = document.createElement('tr');
    document.querySelector('#encabezadoTablaInspectores').appendChild($contenedorCabecera2);
    const $tituloColumna1 = document.createElement('th');
    const $tituloColumna2 = document.createElement('th');
    const $tituloColumna3 = document.createElement('th');
    $contenedorCabecera2.appendChild($tituloColumna1);
    $contenedorCabecera2.appendChild($tituloColumna2);
    $contenedorCabecera2.appendChild($tituloColumna3);
    $tituloColumna1.scope = 'col';
    $tituloColumna2.scope = 'col';
    $tituloColumna3.scope = 'col';
    $tituloColumna3.id = 'tituloColumnaInspector';
    $tituloColumna1.textContent = `#`;
    $tituloColumna2.textContent = "Tarea:";
    $tituloColumna3.textContent = "Inspectores:";


    for (let i = 0; i < listaTareas.length; i++) {


        //crea cuerpo de la tabla
        const $contenedorResultado2 = document.createElement('tr');
        document.querySelector('#cuerpoTablaInspectores').appendChild($contenedorResultado2);



        const $numeracionTabla2 = document.createElement('th');
        $contenedorResultado2.appendChild($numeracionTabla2);

        const $resultadoNombreInspector = document.createElement('td');
        const $resultadoTareaInspector = document.createElement('td');

        $contenedorResultado2.appendChild($resultadoNombreInspector);
        $contenedorResultado2.appendChild($resultadoTareaInspector);

        $numeracionTabla2.textContent = i + 1;
        $numeracionTabla2.scope = 'row';


        $resultadoNombreInspector.id = `liIntegrante-${i}`;
        $resultadoTareaInspector.id = `liIntegrante-${i}`;


        $resultadoNombreInspector.textContent = `${listaTareas[i]}`;
        for (const indice in listaInspectoresFinalizada) {
            let listaTareasDeCadaInspector = listaInspectoresFinalizada[indice].tareas;
            if (listaTareasDeCadaInspector.includes(listaTareas[i]))
                $resultadoTareaInspector.textContent = `${listaInspectoresFinalizada[indice].nombre}`;
        }

    }


}


function creaListaResultadoNombres(listaIntegrantes) {


    let contador = 0;

    listaIntegrantes.forEach(element => {
        contador += 1;
        const $optionIntegrantes = document.createElement('option');
        $optionIntegrantes.value = `${element}`;
        $optionIntegrantes.textContent = `${element}`;
        document.querySelector('#listaOpcionesIntegrantes').appendChild($optionIntegrantes);

    });

}



function infoIntegranteEspecifico(listaIntegrantes, listaIntegrantesFinalizada) {
    const listaTareasPorIntegrante = [];
    for (const indice in listaIntegrantesFinalizada) {


        if (listaIntegrantes[indice] === listaDeIntegrantesFinalizada.forEach(element => { element[1][indice] })) {

            listaTareasPorIntegrante.push(listaIntegrantes[indice]);

        }

    }
}

const $botonBuscarPorNombre = document.querySelector('#filtraPorNombre');
$botonBuscarPorNombre.style.marginTop = '17px';
$botonBuscarPorNombre.style.marginBottom = '17px';
$botonBuscarPorNombre.onclick = function () {
    document.querySelector('#mensajeSinTareasAinspeccionar').style.display = 'block';
    document.querySelector('#visualizaInfoConsultas').style.display = 'block';
    resetearCampos('.filtroLiTarea');

    document.querySelector('#resultadoSinTareas').style.display = 'none';

    resultadoBusquedaFiltro();
}


function resultadoBusquedaFiltro() {
    const $tagSelectIntegrantes = document.querySelector('#listaOpcionesIntegrantes').value;
    resultadoTareasArealizar($tagSelectIntegrantes, listaDeIntegrantesFinalizada);
    resultadoTareasAinspeccionar($tagSelectIntegrantes, listaInspectoresFinalizada);


}

function resultadoTareasArealizar(idSelect, listaDeIntegrantesFinalizada) {
    for (const indice of listaDeIntegrantesFinalizada) {


        if (idSelect === indice.nombre) {

            const $nombre = document.querySelector('#tituloNombre');
            $nombre.textContent = idSelect;

            if (indice.tareas.length === 0) {
                document.querySelector('#resultadoSinTareas').style.display = 'block';
                animacionHamaca(2);




            } else {




                for (const element of indice.tareas) {

                    const $listaTarea = document.createElement('li');
                    $listaTarea.textContent = element;
                    $listaTarea.className = 'filtroLiTarea';
                    document.querySelector('#muestraTareasFiltroIntegrante').appendChild($listaTarea);


                }
            }
        }
    }
}

function animacionHamaca(tiempo) {

    TweenLite.set("#stick-rest", { transformOrigin: "center top" });
    let contador = 0;
    let angulo = 50;
    for (let i = 0; i < 5; i++) {

        if (i === 0) {
            gsap.fromTo("#stick-rest", { rotation: 50 }, { duration: tiempo, rotation: -50 });
            gsap.fromTo("#stick-rest", { rotation: -50 }, { delay: contador += tiempo, duration: tiempo, rotation: 50 });
        }

        angulo -= 10;
        gsap.fromTo("#stick-rest", { rotation: angulo }, { delay: contador += tiempo, duration: tiempo, rotation: -angulo });

        gsap.fromTo("#stick-rest", { rotation: -angulo }, { delay: contador += tiempo, duration: tiempo, rotation: angulo });

    }

}


function resultadoTareasAinspeccionar(idSelect, listaInspectoresFinalizada) {
    for (const indice of listaInspectoresFinalizada) {
        if (idSelect === indice.nombre) {
            document.querySelector('#mensajeSinTareasAinspeccionar').style.display = 'none';

            for (const element of indice.tareas) {

                const $listaTarea = document.createElement('li');
                $listaTarea.textContent = element;
                $listaTarea.className = 'filtroLiTarea';
                document.querySelector('#muestraTareasFiltroInspector').appendChild($listaTarea);

            }




        }
    }
}







const $botondescargar = document.querySelector('#descargarPdf');
$botondescargar.onclick = () => {
    document.querySelector('#info1').style.width = "100%";
    document.querySelector('#info2').style.width = "100%";

    document.querySelector('#info1').style.height = "540px";
    document.querySelector('#info2').style.height = "540px";

    let element = document.querySelector('#resultadosGenerales');

    html2pdf()
        .from(element)
        .save();
    setTimeout(function () { document.querySelector('#info1').style.width = "" }, 0001);
    setTimeout(function () { document.querySelector('#info2').style.width = "" }, 0001);
    setTimeout(function () { document.querySelector('#info1').style.height = "" }, 0001);
    setTimeout(function () { document.querySelector('#info2').style.height = "" }, 0001);

}



