//menu de opciones con prompt
let option = prompt('hola mi amor, por favor ingresa una de las opciones para continuar con la operacion 💑:\n\n'+
'a) En que casa Estoy y que paso..?\n'+
'b) Quieres saber cuando me empesaste a gustar??\n'+
'c) Otro...\n'+
'x) salir' );
//Empezamos la logica de nuestro menu de opciones
if (option === ('a')){
    let h1 = document.createElement('h1');
    let h1text= document.createTextNode('Hola corazon bienvenida a la opcion A')
   let p = document.createElement('p');
   let ptext= document.createTextNode('Hola mi amor ahora si, resulta que el dia de ayer y antier que no te pude responder a tiempo era por que nos estabamos cambiando de casa, recuerdas que te dije que le estaba ayudando a papa con algo, eso era el algo, simplemente no te queria decir lo que pasaba por que la intencion mia era sorprenderte cuando vinieras pero me salio mal. tal vez debi decirte lo que pasaba, pero mi intencion nunca fue  mala.');
   h1.appendChild(h1text);
   document.body.appendChild(h1)
   p.appendChild(ptext);
   document.body.appendChild(p);

} else if (option === ('b')){
    let h1 = document.createElement('h1');
    let h1Texto = document.createTextNode('Mi amor bienvenida a la opcion B...')
    let p=document.createElement('p');
    let ptexto= document.createTextNode('Hola mi cielo la historia va asi: Cuando empezamos aestudiar juntos yo estaba como tu sin otras intenciones, si me parecias super bonita y todo pero no te veia con otros ojos, eso fue hasta que te conoci y vi todo el potencial que tenias como mujer, la verdad era que en ese momento cuadno vi tu resposabilidad, la fuerza que tienes de salir adelante y los animos con los que me ayudabas me hicieron pernsar en ti de otra manera y miraba hacia atras y me decia. Ella es completamente distinta a lo que estaba buscando en una relacion, pero con ella enserio que valdria la pena, con el tiempo mis setimientos hacia ti fueron cambiando, tanto que hasta el negro de mi trabajo, no se si lo recuerdas me decia (que se me veia la cara de bobo cuando pensaba en ti y que los dias miercoles y jueves me veia mas feliz) ese dia yo le dije parce, creo que me enamore de ella!!! el se rio y me dijo que no tenia nada de malo que eras muy bonita y que era obvio que pasaria y en este momento no soy capaz de imaginarte si no estas conmigo... mirando en restrospectiva me doy de lo mucho y de los lejos que he llegado co tu apoyo, tu ayuda y por eso te amo, tu eres una mujer diferente, fuerte, tierna, con un temperamento fuerte, no te conozco enojada peros debes de ser mera fiera... bueno el caso es que lo que me enamoro fue la forma en la que ayudas a los demas, las ganas de salir adelate por tu propia cuenta y el esfuerzo en todo lo que haces. me gustaria decirte mas pero arruinaria el otro tramo de la historia que sera cuando te vea.. Mi amor no me cansare de decirte que te amo, lo importante que eres para mi y que estare simpre para ti con mucho amor para mi Mona Hermosa....💋😘')
    h1.appendChild(h1Texto);
    document.body.appendChild(h1);
    p.appendChild(ptexto);
    document.body.appendChild(p);
} else if (option === ('c')){
    let h1= document.createElement('h1');
    let p = document.createElement('p');
    let h1Texto=document.createTextNode('Mi amor Bienvenida a la opcion C');

    let ptexto = document.createTextNode('Mi amor para mi estos 11 meses casi, han sido de los mas bonitos de mi vida y no me arrepiento de cada experincia que e vivido contigo, todo a sido genial a mi parecer y me encantaria que siguera asi, me encanta esta relacion que tenemos, estoy super orgulloso de los que hemos hecho como pareja, la confianza que tenemos en el uno del otro y todo lo que esto a construido. me encanta los sueños que tenemos y los que compartimos, eres un niña maravillosa y llegaras super lejos y estoy convencido que seras la mejor ingeniera aeroEspacial del mundo y como tu super novio dejame decirte que me encanta ser parte de este crecimiento que estas teniendo. con mucho amor Tu novio y compañero de vida Mateo Velez Toro')
    h1.appendChild(h1Texto);
    document.body.appendChild(h1);
    p.appendChild(ptexto);
    document.body.appendChild(p);
} else if (option === ('x')){
    let h1= document.createElement('h1');
    let h1text= document.createTextNode('Eso es todo corazon, cerraste el menu');
    h1.appendChild(h1text);
    document.body.appendChild(h1);
} else {
    alert('Ingresa una opcion valida, solo (a,b,c,x) en minusculas, hacer el tolower case se me olvido jejeje😅')
}

 

