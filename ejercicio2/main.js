console.log('Ejemplo desde archivo')


// console.log( 'Imprimiendo el DOM', document)
// console.log('Imprimiendo el boton', document.getElementById('btnHello'));
// console.log('Imprimiendo el nombre', document.getElementById('txtName'));
// console.log('Imprimiendo el valor de nombew', document.getElementById('txtName').value);


// Funcion de js
function getName() {
    // let name = document.getElementById('txtName').value
    // if (name != '') {
    //     alert('Usted ingreso el nombre de: ' + name)
    // } else {
    //     alert('Debe de ingresar un nombre')
    // }

    console.log("Esto es 1 caso (Compara valor y tipo) :", 1=== 1 ? 'Verdadero': 'Falso');
    console.log("Esto es 2 caso (Compara valor y tipo):", '1'=== 1 ? 'Verdadero': 'Falso');
    console.log("Esto es 3 caso (Compara valor ):", '1'== 1 ? 'Verdadero': 'Falso');

    

}


function getParr() {
    let parrs = document.getElementsByClassName('parr')
    console.log(parrs);

    let parrsTag = document.getElementsByTagName('p')
    console.log(parrsTag);

    let form = document.getElementsByName('form')
    console.log(form);

}

