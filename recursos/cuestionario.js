const habitos = [
  {
    titulo: 'Lugar de estudio',
    tarjeta: 6,
    motivo: 'Si tienes que buscar materiales o atender interrupciones, cuesta mantener el hilo de lo que estás haciendo.',
    preguntas: [
      ['Antes de estudiar, preparo en la mesa lo que voy a usar.', 'Prepara la mesa con lo imprescindible para la primera tarea.', 19],
      ['Cuando estudio, aparto lo que me distrae, como el móvil o las notificaciones.', 'Activa «No molestar» y deja el móvil en otro lugar durante un bloque.', 19],
      ['Tengo los apuntes y los archivos ordenados para encontrarlos cuando los necesito.', 'Deja preparados los apuntes y guarda los archivos de la materia en una carpeta fácil de encontrar.', 19],
      ['Si me interrumpen o hay ruido, busco un lugar o un momento más tranquilo.', 'Identifica un lugar alternativo o acuerda un rato sin interrupciones.', 6],
      ['Dejo espacio en la mesa para escribir y consultar los apuntes a la vez.', 'Deja libre un espacio para el cuaderno y coloca al lado el material de consulta.', 6]
    ]
  },
  {
    titulo: 'Plan de trabajo',
    tarjeta: 5,
    motivo: 'Cuando una tarea es demasiado grande o no tiene un momento reservado, es más fácil aplazarla o acumularla con otras.',
    preguntas: [
      ['Antes de empezar, decido qué tarea concreta haré en ese rato.', 'Cambia «estudiar mates» por «resolver y corregir tres ecuaciones».', 18],
      ['Si tengo un trabajo largo, lo divido en pasos y decido cuándo haré cada uno.', 'Apunta por separado cuándo buscarás información, harás el borrador y lo revisarás.', 20],
      ['Si tengo una prueba, reparto el repaso en varios días.', 'Reserva dos ratos cortos en días distintos para practicar el mismo tema.', 29],
      ['Si veo que no me da tiempo a todo, decido qué haré primero y cuándo seguiré con lo demás.', 'Elige una prioridad y anota cuándo retomarás lo que quede pendiente.', 20],
      ['Antes de hacer un plan, miro cuánto tiempo me queda después de mis otras actividades.', 'Resta las actividades que ya tienes y planifica solo con el tiempo disponible.', 20]
    ]
  },
  {
    titulo: 'Actitud ante el estudio',
    tarjeta: 4,
    motivo: 'Probar un primer paso y pedir ayuda sobre una duda concreta te permite avanzar y aprovechar mejor las correcciones.',
    preguntas: [
      ['Si un ejercicio me cuesta, intento hacer la parte que sí entiendo antes de pedir ayuda.', 'Escribe qué sabes del problema y prueba un paso pequeño.', 4],
      ['Cuando no entiendo algo, anoto qué parte me cuesta para poder preguntar.', 'Formula una pregunta específica y llévala a clase o a una tutoría.', 35],
      ['Después de recibir una corrección, elijo algo que puedo cambiar en la próxima tarea.', 'Convierte un comentario del profesorado en un cambio para la siguiente tarea.', 36],
      ['Me fijo en qué cosas sé hacer ahora que antes me costaban.', 'Compara dos ejercicios tuyos y apunta un progreso concreto.', 38],
      ['Si mi manera de estudiar no me ayuda, pruebo otra y compruebo si entiendo o recuerdo más.', 'Cambia una sola cosa, como recordar sin apuntes, y compara qué eres capaz de explicar.', 9]
    ]
  },
  {
    titulo: 'Estado físico',
    tarjeta: 7,
    motivo: 'El cansancio y la incomodidad dificultan mantener la atención. Ajustar el momento y hacer pausas ayuda a sostener el esfuerzo.',
    preguntas: [
      ['Cuando puedo elegir la hora, dejo la tarea más difícil para el rato en que tengo más energía.', 'Fíjate en qué rato te concentras mejor y resérvalo para una tarea exigente.', 20],
      ['Cuando llevo mucho rato estudiando, hago una pausa corta para moverme o descansar la vista.', 'Entre dos bloques, levántate y mira un punto alejado de la pantalla.', 18],
      ['Si estoy demasiado cansado para concentrarme, decido cuándo retomaré la tarea.', 'Deja preparada la siguiente tarea y fija cuándo la retomarás.', 19],
      ['Antes de estudiar, ajusto la luz o la posición de la pantalla para estar cómodo.', 'Ajusta la luz, la distancia a la pantalla y la posición de la silla.', 19],
      ['Procuro terminar de estudiar con tiempo para dormir, aunque tenga una entrega o una prueba cerca.', 'Fija una hora de cierre y adelanta el repaso a otro día si ves que no cabe.', 19]
    ]
  },
  {
    titulo: 'Técnicas de estudio',
    tarjeta: 9,
    motivo: 'Algo puede sonarte al releerlo y aun así costarte explicarlo. Recordar sin mirar te muestra qué necesitas volver a practicar.',
    preguntas: [
      ['Después de estudiar, cierro los apuntes e intento recordar las ideas principales.', 'Cierra los apuntes, escribe tres ideas y comprueba cuáles olvidaste.', 9],
      ['Explico con mis palabras lo que he aprendido y pienso en un ejemplo.', 'Prueba a explicar una idea en voz alta como si se la contaras a un compañero.', 37],
      ['Unos días después, vuelvo a practicar algo que me costó.', 'Apunta una pregunta difícil y vuelve a resolverla dos días después.', 26],
      ['Después de ver la solución de un ejercicio, intento resolverlo otra vez sin mirar.', 'Tapa la solución, repite el ejercicio y compara los pasos al final.', 36],
      ['Si confundo dos conceptos, los comparo y busco una diferencia entre ellos.', 'Haz una tabla sencilla y escribe una diferencia y un ejemplo para cada concepto.', 28]
    ]
  },
  {
    titulo: 'Trabajos',
    tarjeta: 11,
    motivo: 'Si empiezas con una pregunta clara y contrastas lo que encuentras, puedes elegir información útil, explicarla y mostrar de dónde sale.',
    preguntas: [
      ['Antes de buscar información, escribo qué quiero averiguar.', 'Escribe una pregunta concreta y úsala para elegir tus palabras de búsqueda.', 11],
      ['Si encuentro un dato importante en internet, compruebo quién lo publica y si coincide con otra fuente fiable.', 'Busca la fuente original y contrasta el dato antes de incluirlo.', 11],
      ['Cuando uso una fuente, explico la información con mis palabras y digo de dónde la he sacado.', 'Escribe la idea con tus palabras y guarda el enlace o los datos del libro para citarlo.', 11],
      ['Antes de entregar un trabajo, compruebo que he hecho lo que pedían las instrucciones.', 'Relee las instrucciones y revisa si falta algún apartado o ejemplo.', 11],
      ['Antes de escribir un trabajo, hago una lista breve de las ideas y decido en qué orden van.', 'Escribe el orden de los apartados y una frase sobre lo que incluirás en cada uno.', 30]
    ]
  },
  {
    titulo: 'Exámenes y ejercicios',
    tarjeta: 10,
    motivo: 'Practicar sin apuntes y revisar el motivo de cada error te ayuda a detectar a tiempo qué necesitas reforzar.',
    preguntas: [
      ['Antes de una prueba, hago algún ejercicio sin apuntes para ver qué recuerdo.', 'Haz un ejercicio sin ayuda y úsalo para decidir qué repasar.', 34],
      ['Antes de contestar, me fijo en si la pregunta pide explicar, comparar, calcular o hacer otra cosa.', 'Localiza el verbo de la consigna: explicar, comparar, calcular o justificar.', 10],
      ['Si me atasco en una pregunta de un examen, sigo con otra y vuelvo a la primera después.', 'Marca la pregunta, avanza y reserva unos minutos al final para volver.', 10],
      ['Cuando corrijo un ejercicio, busco qué hice mal y lo vuelvo a intentar.', 'Anota si falló la lectura, el cálculo o la explicación y prueba un ejercicio parecido.', 36],
      ['Si me sobra tiempo en un examen, reviso si he contestado a todos los apartados.', 'Reserva los últimos minutos para revisar preguntas sin contestar y comprobar unidades o signos.', 34]
    ]
  }
];
