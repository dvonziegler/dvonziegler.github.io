

/*Al iniciar la pagina se ocultan las fila 2, 3 y 4 hasta que el usuario elija un idioma
*/
const collection = document.getElementsByClassName("OcultarAlInicio");
for(let i = 0; i < collection.length; i++) {
    collection[i].style.display = 'none'
}

/*Al presionar el boton de algun idioma se muesta la informacion de las filas 2, 3 y 4
 e inmediatamente se oculta la informacion del idioma que no ha sido seleccionado
*/
document.getElementById("BotonEspañol").addEventListener('click', function() {
    const collection = document.getElementsByClassName("OcultarAlInicio");
    for(let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block'
    }   
})

document.getElementById("BotonEnglish").addEventListener('click', function() {
    const collection = document.getElementsByClassName("OcultarAlInicio");
    for(let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block'
    }   
})


document.getElementById("BotonEspañol").addEventListener('click', function () {
    document.getElementById("ParrafoProfesion").innerHTML ="Ingeniero",
    document.getElementById("SeccionL2I").style.display = 'none',
    document.getElementById("SeccionR2I").style.display = 'none',
    document.getElementById("SeccionL3I").style.display = 'none',
    document.getElementById("SeccionR3I").style.display = 'none',
    document.getElementById("SeccionL4I").style.display = 'none',
    document.getElementById("SeccionR4I").style.display = 'none',
    document.getElementById("SeccionL2E").style.display = 'block',
    document.getElementById("SeccionR2E").style.display = 'block',
    document.getElementById("SeccionL3E").style.display = 'block',
    document.getElementById("SeccionR3E").style.display = 'block',
    document.getElementById("SeccionL4E").style.display = 'block',
    document.getElementById("SeccionR4E").style.display = 'block',
    document.getElementById("ListaDesordenadaLargaIP").style.display = 'none',
    document.getElementById("ListaDesordenadaLargaExperiencias").style.display = 'none',
    document.getElementById("ListaDesordenadaLargaHabilidades").style.display = 'none'
}
   )

document.getElementById("BotonEnglish").addEventListener('click', function () {
    document.getElementById("ParrafoProfesion").innerHTML ="Engineer",
    document.getElementById("SeccionL2E").style.display = 'none',
    document.getElementById("SeccionR2E").style.display = 'none',
    document.getElementById("SeccionL3E").style.display = 'none',
    document.getElementById("SeccionR3E").style.display = 'none',
    document.getElementById("SeccionL4E").style.display = 'none',
    document.getElementById("SeccionR4E").style.display = 'none',
    document.getElementById("SeccionL2I").style.display = 'block',
    document.getElementById("SeccionR2I").style.display = 'block',
    document.getElementById("SeccionL3I").style.display = 'block',
    document.getElementById("SeccionR3I").style.display = 'block',
    document.getElementById("SeccionL4I").style.display = 'block',
    document.getElementById("SeccionR4I").style.display = 'block',
    document.getElementById("ListaDesordenadaLargaPI").style.display = 'none',
    document.getElementById("ListaDesordenadaLargaExperiences").style.display = 'none',
    document.getElementById("ListaDesordenadaLargaSkills").style.display = 'none'
}
   )

/*Al presionar el boton ver mas/see more agrega 3 items de informacion adicional.
Al presionar el boton ver menos/see less oculta los 3 items de informacion adicional agregados
anteriormente
*/
document.getElementById("BotonVerMasInformacionPersonal").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaIP").style.display = 'block'
}
    )
document.getElementById("BotonVerMenosInformacionPersonal").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaIP").style.display = 'none'  
}
    )
document.getElementById("BotonSeeMorePersonalInformation").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaPI").style.display = 'block'   
}
    ) 
document.getElementById("BotonSeeLessPersonalInformation").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaPI").style.display = 'none'      
}
    )


document.getElementById("BotonVerMasExperiencias").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaExperiencias").style.display = 'block'
}
    )
document.getElementById("BotonVerMenosExperiencias").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaExperiencias").style.display = 'none'  
}
    )
 document.getElementById("BotonSeeMoreExperiences").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaExperiences").style.display = 'block'   
}
    ) 
document.getElementById("BotonSeeLessExperiences").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaExperiences").style.display = 'none'      
}
    )


document.getElementById("BotonVerMasHabilidades").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaHabilidades").style.display = 'block'
}
    )
document.getElementById("BotonVerMenosHabilidades").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaHabilidades").style.display = 'none'  
}
    )
document.getElementById("BotonSeeMoreSkills").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaSkills").style.display = 'block'   
}
    ) 
document.getElementById("BotonSeeLessSkills").addEventListener('click', function () {
    document.getElementById("ListaDesordenadaLargaSkills").style.display = 'none'      
}
    )
