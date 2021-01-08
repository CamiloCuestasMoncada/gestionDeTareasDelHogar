
let resultadoNumTareas = [];

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
let $cantidadTareas;
let confirmaQueIngresaronTareas;
let $botonCantTareas = document.querySelector("#botonEnviarTareas");
$botonCantTareas.onclick = function(){
    $cantidadTareas=document.querySelector('[name=numTareas]').value;
   
    if($cantidadTareas===""){
        confirmaQueIngresaronTareas=false;
    }else{
        confirmaQueIngresaronTareas=true;
        creaCamposNombresTareas($cantidadTareas);
        //mostrarFormIntegrantes();
        
    }

    
}

let $botonNumIntegrantes = document.querySelector('#enviarIntegrantes');
let numIntegrantes;
let confirmaIngresoDeIntegrantes;
$botonNumIntegrantes.onclick = function(){
    numIntegrantes = document.querySelector('[name=numIntegrantes]').value;
    if(numIntegrantes===""){
        confirmaIngresoDeIntegrantes=false;
    }else{
        confirmaIngresoDeIntegrantes=true;
        creaCamposNombresIntegrantes(numIntegrantes);
        mostrarFormIntegranteyTareaEspecifica();
        //ocultaEtiqueta('#botonEnviarTareas','ocultaBtnEnviarTareas');
    }

}

let confirmaIngresoTarea;
let tareaEspecifica;
const $botonTareaEspecifica = document.querySelector('#enviaTarea');
$botonTareaEspecifica.onclick = function(){
    tareaEspecifica = document.querySelector('[name=infoTareaEspecifica]').value;
    if(tareaEspecifica===""){
        confirmaIngresoTarea=false;
    }else{
        confirmaIngresoTarea=true;

    }
}

let confirmaIntegranteEspecifico;
let nombreIntegrante;
const $botonIntegranteEspecifico = document.querySelector('#enviaInfoIntegrante');
$botonIntegranteEspecifico.onclick = function(){
    nombreIntegrante = document.querySelector('[name = infoIntegranteEspecifico]').value;
    if(nombreIntegrante===""){
        confirmaIntegranteEspecifico=false;
    }else{
        confirmaIntegranteEspecifico=true;

    }
}

function muestraEtiquetaOculta(identificadorActual,identificadorNuevo){
    document.querySelector(identificadorActual).id=identificadorNuevo;
}

function ocultaEtiqueta(identificadorActual,identificadorNuevo){
    document.querySelector(identificadorActual).id=identificadorNuevo;
}

function mostrarFormIntegrantes(){
    document.querySelector('#ocultaIntegrantes').id="muestraIntegrantes";
}

function ocultarFormIntegrantes(){
    document.querySelector("#muestraIntegrantes").id="ocultaIntegrantes";
}

function mostrarFormIntegranteyTareaEspecifica(){
    document.querySelector('#ocultaInfoTarea').id="muestraInfoTarea";
}

function ocultarFormIntegranteyTareaEspecifica(){
    document.querySelector('#muestraInfoTarea').id="ocultaInfoTarea";
}

function muestraResultadoInfo(){
    document.querySelector('#ocultaResultadoInfo').id="muestraResultadoInfo";
}

function ocultaResultadoInfo(){
    document.querySelector('#muestraResultadoInfo').id="ocultaResultadoInfo";
}

function numTareas(cantidadTareas){
    let tareasCreadas = [];
 
    
        for(let i = 0; i < cantidadTareas; i++){
            
            let valorInput=document.querySelector(`#inputId${i}`).value;
            tareasCreadas[i] = valorInput;
        }
    
    if(tareasCreadas.length>0){
        return tareasCreadas;
    }else{
        return false;
    }
    



    
}

let generaCantTareasPorIntegrante = () =>{
    
    let tareasPorIntegrante = [];
    let randomTareas = resultadoNumTareas.length;
    let numAleatorio = Math.round(Math.random()*(randomTareas -1));
    let tareaAzar;
    if(numAleatorio===0){
        let parrafoInfoExtra = document.createElement('p');
        let divExtra = document.createElement("div");
        divExtra.className="infoExtra";
        document.querySelector("#mostrarInfo1").appendChild(divExtra);
        divExtra.appendChild(parrafoInfoExtra);
        parrafoInfoExtra.textContent = `El integrante estuvo de suerte y no debe hacer ninguna tarea esta semana`;
    }
    for(let i = 0; i<numAleatorio; i++){
        tareaAzar = resultadoNumTareas[Math.round(Math.random()*(randomTareas-1))];
        if(tareasPorIntegrante.includes(tareaAzar)){
            i--;
        
        } else{
            
            tareasPorIntegrante.push(tareaAzar);
            
        }
    }
    return tareasPorIntegrante;
}


const crearIntegrantes = (cantidad)=>{
    
    let todosLosIntegrantes = [];
    let miembroFamilia;
    for(let i=0; i<cantidad; i++){
        miembroFamilia = document.querySelector(`#inputIntegrante${i}`).value;
        
        let integrante = new Integrantes(miembroFamilia,generaCantTareasPorIntegrante());
        todosLosIntegrantes.push(integrante);
        console.log(integrante);
        
    }
    
    return todosLosIntegrantes;


}

function creaInspectores(){
    
        
        resultadoNumTareas=numTareas($cantidadTareas);
        if(resultadoNumTareas!=false&&resultadoNumTareas!=undefined){
        let todosLosInspectores = [];
        let nombres = ["Pedro","Camilo","Sara","Ambar","Neithan","Ruby","Jose","Juan"];
        
        let eleccionInspector;
        
        let eleccionTarea;
        let referenciaResultadoNumTareas = Array.from(resultadoNumTareas);
        
    
        for(let i=0; i<resultadoNumTareas.length; i++){
        
            eleccionInspector = nombres[Math.round(Math.random()*(nombres.length - 1)) ]; 
            eleccionTarea =  referenciaResultadoNumTareas[Math.round(Math.random()*(referenciaResultadoNumTareas.length-1))];
            let inspector = new Inspectores(eleccionInspector,eleccionTarea);
            for(let i=0; i< referenciaResultadoNumTareas.length;i++){
                if(eleccionTarea === referenciaResultadoNumTareas[i]){
                    referenciaResultadoNumTareas.splice(i,1)
                }
            }
            todosLosInspectores.push(inspector);

        
            
    
        
        }
    return todosLosInspectores;
    }
    return false;
    
}




    
function infoTareaEspecifica(tarea, ArrayTodosLosIntegrantes, ArrayTodosLosInspectores){
    
    const integrantesAsignados = [];
    
    let cantIntegrantes = 0;
    let infoOk;
    let infoOk2 = ` <br> Integrantes acargo de la tarea: `;
    let infoOk3 = "";
    
    for(let i=0; i<ArrayTodosLosInspectores.length;i++){
        if(ArrayTodosLosInspectores[i].tareas===tarea){
            infoOk = `El inspector de la tarea ${tarea} es ${ArrayTodosLosInspectores[i].nombre}`
        }
        

    }
    
    for(let i=0; i<ArrayTodosLosIntegrantes.length;i++){
       if(ArrayTodosLosIntegrantes[i].tareas.includes(tarea)){
        integrantesAsignados[cantIntegrantes] = ArrayTodosLosIntegrantes[i].nombre;
        infoOk3+=`<br>${integrantesAsignados[cantIntegrantes]}`;
        cantIntegrantes++;
       };
        
        

    }
    
   



    return infoOk+infoOk2+infoOk3;

}

const infoDeIntegranteEspecifico = (integrante,ArrayTodosLosIntegrantes,ArrayTodosLosInspectores)=>{
    let tareasDelIntegrante = []; 
    let cantTareasIntegrante = 0; 
    let integranteCapturado; 
    let referenciaTareasDelIntegrante=[]; 
    let textoInfo="";
    let textoInfo2="";
    
    
    for(let i=0; i<ArrayTodosLosIntegrantes.length;i++){
        if(ArrayTodosLosIntegrantes[i].nombre===integrante){
            integranteCapturado = ArrayTodosLosIntegrantes[i];
            
            for(let i = 0; i<integranteCapturado.tareas.length;i++){

                cantTareasIntegrante++;
                tareasDelIntegrante[i]=integranteCapturado.tareas[i];
                
                referenciaTareasDelIntegrante.push(tareasDelIntegrante[i]);
                textoInfo2+=`Tarea: ${tareasDelIntegrante[i]} <br>`;
                for(let i=0; i<ArrayTodosLosInspectores.length;i++){
                    if (referenciaTareasDelIntegrante.includes(ArrayTodosLosInspectores[i].tareas) ){
                        textoInfo2+=`Inspector: ${ArrayTodosLosInspectores[i].nombre}<br>`;
                        
                        referenciaTareasDelIntegrante.pop();
                    }
                }
                    
                

            }
        }
    }
   
    textoInfo= `<br>El integrante ${integrante} esta anotado en: ${cantTareasIntegrante} Tareas. <br> las cuales son:<br>` ;
    return `${textoInfo} ${textoInfo2}`;
}

let getTodosLosInspectores; 
let getTodosLosIntegrantes; 

const botonEnviaTareas = document.querySelector("#ejecutarFunciones");

    botonEnviaTareas.onclick=function(){
        
        
        
        if(confirmaQueIngresaronTareas===true && confirmaIngresoDeIntegrantes===true){
            
            getTodosLosInspectores = creaInspectores();
            getTodosLosIntegrantes = crearIntegrantes(numIntegrantes);
    
            if(getTodosLosInspectores!=false && getTodosLosIntegrantes!=false&&confirmaIngresoTarea===true&&confirmaIntegranteEspecifico===true){
                
                
                
                let resultadoInfoTareaEspecifica = infoTareaEspecifica(tareaEspecifica,getTodosLosIntegrantes,getTodosLosInspectores);
                let resultadoInfoIntegranteEspecific = infoDeIntegranteEspecifico(nombreIntegrante,getTodosLosIntegrantes,getTodosLosInspectores);
                const infoTotal = `${resultadoInfoTareaEspecifica} ${resultadoInfoIntegranteEspecific}`;
            
            
            
                const $textoInfoTarea = document.createElement("p");
                const $camposTareas = document.querySelector("#mostrarInfo1");
                $camposTareas.appendChild($textoInfoTarea);
                $textoInfoTarea.className='parrafo';
                document.querySelector('.parrafo').textContent= infoTotal;
                
                /*if(document.querySelector('#muestraIntegrantes')){
                    //ocultarFormIntegrantes();
                    
                    
                    ocultaEtiqueta('#muestraIntegrantes',"ocultaIntegrantes");
                    
                }*/

                if(document.querySelector('#ocultaResultadoInfo')){
                    muestraResultadoInfo();
                }

                const $botonResultados = document.querySelector("#ejecutarFunciones");
                $botonResultados.style.display='none';
                

                
    
            }
        }else{
            alert("Primero debes agregar las tareas.")
        }
       
    }




