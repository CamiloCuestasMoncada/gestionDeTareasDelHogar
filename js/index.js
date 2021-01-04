
let resultadoNumTareas = [];

const $formularioInicio = document.querySelector("#formularioInicio");
    
for(let i = 0; i < 8; i++){
    
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

    

}


class Inspectores{
    
    constructor(nombre,tareas){
        this.nombre = nombre;
        this.tareas = tareas;

    }
    saluda(){
        document.write(`Hola soy ${this.nombre} el encargado de supevisar: ${this.tareas}`)
    }

}

class Integrantes extends Inspectores{
    constructor(nombre,tareas){
    super(nombre,tareas)

    }
}

let generaCantTareasPorIntegrante = () =>{
    
    let tareasPorIntegrante = [];
    let randomTareas = resultadoNumTareas.length;
    let numAleatorio = Math.round(Math.random()*(randomTareas -1));
    let tareaAzar;
    if(numAleatorio===0){
        document.write(`<p> El integrante tuvo suerte y no debe hacer ninguna tarea. </p>`)
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
        
        miembroFamilia = prompt("Ingrese nombre del miembro de la familia");
        let integrante = new Integrantes(miembroFamilia,generaCantTareasPorIntegrante());
        todosLosIntegrantes.push(integrante);
        console.log(integrante);
        
    }
    
    return todosLosIntegrantes;


}

function creaInspectores(){
    
        
        resultadoNumTareas=numTareas();
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


function numTareas(cantidadTareas = 8){
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

const botonEnviaTareas = document.querySelector("#enviarTareas");

botonEnviaTareas.onclick=function(){
    getTodosLosInspectores = creaInspectores();
    getTodosLosIntegrantes = crearIntegrantes(7);

    if(getTodosLosInspectores!=false && getTodosLosIntegrantes!=false){
        let resultadoInfoTareaEspecifica = infoTareaEspecifica(prompt("Ingrese la tarea de la cual desea obtener info"),getTodosLosIntegrantes,getTodosLosInspectores);
        let resultadoInfoIntegranteEspecific = infoDeIntegranteEspecifico(prompt("Ingrese el nombre del integrante del cual desea saber sus tareas"),getTodosLosIntegrantes,getTodosLosInspectores);
        const infoTotal = `${resultadoInfoTareaEspecifica} ${resultadoInfoIntegranteEspecific}`;
        
        
        
        const $textoInfoTarea = document.createElement("p");
        document.querySelector("#camposTareas").appendChild($textoInfoTarea);
        $textoInfoTarea.className='parrafo';
        document.querySelector('.parrafo').textContent= infoTotal;

    }
   
}
