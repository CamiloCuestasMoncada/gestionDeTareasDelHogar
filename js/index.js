


const creaCamposNombresTareas = numTareas =>{

    
    
    for(let i = 0; i < numTareas; i++){
    
        const $divCampoTareas = document.createElement("div");
        const $labelCampoTareas = document.createElement("label");
        const $inputCampoTareas = document.createElement("input");
        document.querySelector("#camposTareas").appendChild($divCampoTareas);
        $divCampoTareas.appendChild($labelCampoTareas);
        $divCampoTareas.appendChild($inputCampoTareas);
        $labelCampoTareas.textContent=`Ingrese el nombre de la tarea ${i+1}:`; 
        $inputCampoTareas.name=`input${i}`;
        $inputCampoTareas.type="text";
        $inputCampoTareas.id=`inputId${i}`;
        $divCampoTareas.id=`filaInput${i}`;

    }
    /*gsap.to('#filaInput0',{
        duration:4,
        y:7,
        ease: 'elastic',
        
        
    });
    
    gsap.to('#filaInput1',{
        duration:6,
        y:7,
        ease: 'elastic',
        
        
    });
    
    gsap.to('#filaInput2',{
        duration:8,
        y:7,
        ease: 'elastic',
        
        
    });*/

}

const creaCamposNombresIntegrantes = numIntegrantes =>{

    
    
    for(let i = 0; i < numIntegrantes; i++){
    
        const $divCampoIntegrantes = document.createElement("div");
        const $labelCampoIntegrantes = document.createElement("label");
        const $inputCampoIntegrantes = document.createElement("input");
        document.querySelector("#camposIntegrantes").appendChild($divCampoIntegrantes);
        $divCampoIntegrantes.appendChild($labelCampoIntegrantes);
        $divCampoIntegrantes.appendChild($inputCampoIntegrantes);
        $labelCampoIntegrantes.textContent=`Ingrese el nombre del integrante:  ${i+1}:`; 
        $inputCampoIntegrantes.name=`inputIntegrante${i}`;
        $inputCampoIntegrantes.type="text";
        $inputCampoIntegrantes.id=`inputIntegrante${i}`;

    }

}





class Inspectores{
    
    constructor(nombre,tareas){
        this.nombre = nombre;
        this.tareas = tareas;

    }
    

}

class Integrantes extends Inspectores{
    constructor(nombre,tareas){
    super(nombre,tareas)

    }
}



const $botonGenerarCantidadTareas = document.querySelector('#botonEnviarTareas');
$botonGenerarCantidadTareas.onclick = ()=>{
    const $numeroDeTareas = document.querySelector('[name=numTareas]').value;
    creaCamposNombresTareas($numeroDeTareas);
    document.querySelector('#confirmaTareas').style.display="block";
}


const $botonGenerarCantidadIntegrantes = document.querySelector('#enviarIntegrantes');     
$botonGenerarCantidadIntegrantes.onclick = ()=>{
    const $numeroIntegrantes = document.querySelector('[name=numIntegrantes]').value;
    creaCamposNombresIntegrantes($numeroIntegrantes);
    document.querySelector('#confirmaIntegrantes').style.display="block";
}


let listaTareas = [];
let listaIntegrantes = [];

let = clickEnBotonConfirmaTareas = false;
const $botonConfirmaTareas = document.querySelector('#confirmaTareas');
$botonConfirmaTareas.onclick = ()=>{
    const $numeroIntegrantes = document.querySelector('[name=numIntegrantes]').value;
    clickEnBotonConfirmaTareas = true;
    listaIntegrantes = integrantes($numeroIntegrantes);
    const $numeroDeTareas = document.querySelector('[name=numTareas]').value;
    listaTareas = tareas($numeroDeTareas);
}





let = clickEnBotonConfirmaIntegrantes = false;
const $botonConfirmaIntegrantes = document.querySelector('#confirmaIntegrantes');
$botonConfirmaIntegrantes.onclick = ()=>{
    const $numeroDeTareas = document.querySelector('[name=numTareas]').value;
    const $numeroIntegrantes = document.querySelector('[name=numIntegrantes]').value;
    clickEnBotonConfirmaIntegrantes = true;
    if(clickEnBotonConfirmaTareas && clickEnBotonConfirmaIntegrantes){
        dibujaTareasEintegrantes($numeroDeTareas,$numeroIntegrantes);
    }
}




function tareas(numeroDeTareas){

    let listaTareas = [];
    for(let i = 0; i<numeroDeTareas; i++){
        listaTareas[i]=document.querySelector(`#inputId${i}`).value;
    }
    return listaTareas;


}



function integrantes(numeroDeIntegrantes){

    let listaIntegrantes = [];
    for(let i = 0; i<numeroDeIntegrantes; i++){
        listaIntegrantes[i]=document.querySelector(`#inputIntegrante${i}`).value;
    }
    return listaIntegrantes;


}

 

function dibujaTareasEintegrantes(cantTareas,cantIntegrantes){
    
    const $sectionMuestraInfo = document.querySelector('#infoIngresada');
    const $contenedorTareas = document.createElement('div');
    const $contenedorIntegrantes = document.createElement('div');
    $contenedorTareas.id='contenedorTareas';
    $contenedorTareas.className='col-4';
    $contenedorIntegrantes.id='contenedorIntegrantes';
    $contenedorIntegrantes.className='col-4';
    
    $sectionMuestraInfo.appendChild($contenedorTareas);
    $sectionMuestraInfo.appendChild($contenedorIntegrantes);
    const $contenedorListaTareas = document.createElement('ol');
    const $contenedorListaIntegrantes = document.createElement('ol');
    
    
    $contenedorTareas.appendChild($contenedorListaTareas);
    $contenedorIntegrantes.appendChild($contenedorListaIntegrantes);
    for(let i = 0; i<cantTareas; i++){
        const $elementosDeListaTareas = document.createElement('li');
        $contenedorListaTareas.appendChild($elementosDeListaTareas);
        
        $elementosDeListaTareas.id=`liTarea-${i}`;

        $elementosDeListaTareas.textContent=`${listaTareas[i]}`;
    }

    for(let i = 0; i<cantIntegrantes; i++){

        const $elementosDeListaIntegrantes = document.createElement('li');
        $contenedorListaIntegrantes.appendChild($elementosDeListaIntegrantes);
        
        $elementosDeListaIntegrantes.id=`liTarea-${i}`;

        $elementosDeListaIntegrantes.textContent=`${listaIntegrantes[i]}`;
    }

}



