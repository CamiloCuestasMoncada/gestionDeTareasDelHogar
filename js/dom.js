
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

    }

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


