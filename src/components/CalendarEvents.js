const eventos = [
  {
    "fecha": "2024-01-10",
    "mes": "Enero",
    "color": "green",
    "titulo": "Día de las Mujeres Migrantes",
    "descripcion": "Conmemoración del asesinato de Marcelina Meneses y su hijo, migrantes de Bolivia."
  },
  {
    "fecha": "2024-02-01",
    "mes": "Febrero",
    "color": "blue",
    "titulo": "Anata (aymara) / Pukllay (Quechua)",
    "descripcion": "Carnaval andino. Tiempo de renovación ritual entre los humanos y la naturaleza."
  },
  {
    "fecha": "2024-02-07",
    "mes": "Febrero",
    "color": "blue",
    "titulo": "Declaración del Estado Plurinacional de Bolivia",
    "descripcion": "En el año 2009, se promulga la Nueva Constitución Política de Bolivia, refundando al país como un Estado Plurinacional."
  },
  {
    "fecha": "2024-03-20",
    "mes": "Marzo",
    "color": "purple",
    "titulo": "Equinoccio de Otoño",
    "descripcion": "Festejo andino del comienzo de un nuevo ciclo y cambio de estación (Pacha Pokqoy, Pawkar Raymi, Hallu Willka Chika)."
  },
  {
    "fecha": "2024-04-19",
    "mes": "Abril",
    "color": "red",
    "titulo": "Día del Indígena Americano",
    "descripcion": "Conmemoración del primer Congreso Indigenista Interamericano celebrado en la ciudad de Pátzcuaro (México) en 1940."
  },
  {
    "fecha": "2024-05-03",
    "mes": "Mayo",
    "color": "orange",
    "titulo": "Día de la Chakana",
    "descripcion": "Celebración de la Chakana Cruz, símbolo que representa la constelación de la Cruz del Sur y significa el renacer en el calendario andino y el inicio de un nuevo ciclo vital."
  },
  {
    "fecha": "2024-05-18",
    "mes": "Mayo",
    "color": "orange",
    "titulo": "Muerte de Tupac Amaru II y Micaela Bastidas Puyucahua",
    "descripcion": "En 1781, ambos líderes revolucionarios indígenas fueron asesinados en manos de fuerzas españolas."
  },
  {
    "fecha": "2024-05-19",
    "mes": "Mayo",
    "color": "orange",
    "titulo": "Sentencia Histórica sobre la Masacre de Napalpí",
    "descripcion": "En 2022 culminó el juicio por la verdad que dictaminó la responsabilidad del Estado nacional Argentino por este crimen de lesa humanidad."
  },
  {
    "fecha": "2024-06-21",
    "mes": "Junio",
    "color": "green",
    "titulo": "Solsticio de Invierno",
    "descripcion": "Año Nuevo de los Pueblos Originarios (Decreto 672/2019). Inti Raymi (festividad andina) y Wiñoy Tripantu, We Tripantu o Wiñoy Tripantu (Festividad Mapuche)."
  },
  {
    "fecha": "2024-07-03",
    "mes": "Julio",
    "color": "blue",
    "titulo": "Entrada en vigencia en la Argentina del Convenio 169 de la OIT",
    "descripcion": "Ratificación del Estado Argentino de la herramienta jurídica más importante para la defensa de los Derechos Indígenas. Ley N° 24.071 de 1992."
  },
  {
    "fecha": "2024-07-12",
    "mes": "Julio",
    "color": "blue",
    "titulo": "Día de la Confraternidad Argentino-Boliviana / Nacimiento de Juana Azurduy",
    "descripcion": "Instaurado en 2010, en conmemoración del nacimiento de la líder indígena 'Flor del Alto Perú' en 1780, Chuquisaca, actual Bolivia."
  },
  {
    "fecha": "2024-07-19",
    "mes": "Julio",
    "color": "blue",
    "titulo": "Masacre de Napalpí",
    "descripcion": "En 1924, más de 200 indígenas Qom y Mocoví de la Colonia Aborigen Chaco, fueron masacrados en manos de fuerzas del Estado Argentino."
  },
  {
    "fecha": "2024-07-24",
    "mes": "Julio",
    "color": "blue",
    "titulo": "Día de la Integración de América Latina",
    "descripcion": "Declarado por la Asociación Latinoamericana de Integración (ALADI) en homenaje al nacimiento del libertador Simón Bolívar, 1783."
  },
  {
    "fecha": "2024-08-01",
    "mes": "Agosto",
    "color": "purple",
    "titulo": "Celebración de la Pachamama",
    "descripcion": "El mundo andino celebra a la Madre Tierra. Se le agradece por lo dado y por lo que dará en el nuevo ciclo."
  },
  {
    "fecha": "2024-08-09",
    "mes": "Agosto",
    "color": "purple",
    "titulo": "Día Internacional de los Pueblos Indígenas",
    "descripcion": "Instaurado por la Asamblea General de Naciones Unidas. Resolución A/RES/49/214."
  },
  {
    "fecha": "2024-08-11",
    "mes": "Agosto",
    "color": "purple",
    "titulo": "Día Incorporación de los Derechos Indígenas en la Constitución Nacional",
    "descripcion": "Aprobación del Artículo 75 inc. 17 en la Constitución Nacional de 1994."
  },
  {
    "fecha": "2024-08-23",
    "mes": "Agosto",
    "color": "purple",
    "titulo": "Nacimiento de Aimé Painé",
    "descripcion": "En 1943, en Ing. Huergo, Río Negro, nace la artista defensora de la cultura mapuche y de su lengua, el mapudungún."
  },
  {
    "fecha": "2024-09-22",
    "mes": "Septiembre",
    "color": "orange",
    "titulo": "Equinoccio de Primavera",
    "descripcion": "Celebración del Pewv Xipantu (Pueblo Mapuche), Auti Willka Chika (Pueblos Andinos) y el Ara Pyau (Pueblo Guaraní). Inicio de un tiempo nuevo, el del florecer."
  },
  {
    "fecha": "2024-09-05",
    "mes": "Septiembre",
    "color": "orange",
    "titulo": "Día Internacional de la Mujer Indígena",
    "descripcion": "En conmemoración de la muerte de Bartolina Sisa, lideresa anticolonialista Quechua-Aymara, asesinada en 1782 en La Paz (Actual Bolivia)."
  },
  {
    "fecha": "2024-09-09",
    "mes": "Septiembre",
    "color": "orange",
    "titulo": "Declaración de la ciudad de Quilmes como Plurinacional e Intercultural",
    "descripcion": "Promulgación de la Ordenanza Municipal 12.496/2015."
  },
  {
    "fecha": "2024-10-11",
    "mes": "Octubre",
    "color": "red",
    "titulo": "Último Día de la Libertad de los Pueblos Originarios",
    "descripcion": "Anticipa el comienzo del largo proceso de colonización, saqueo y genocidio sufrido por los pueblos americanos, perpetrado por potencias europeas imperialistas."
  },
  {
    "fecha": "2024-10-12",
    "mes": "Octubre",
    "color": "red",
    "titulo": "Día del Respeto a la Diversidad Cultural",
    "descripcion": "Se estableció en Argentina en el año 2010, resignificando el 'Día de la Raza' (Decreto 1584/10)."
  },
  {
    "fecha": "2024-10-14",
    "mes": "Octubre",
    "color": "red",
    "titulo": "Declaración del Municipio de Marcos Paz como Plurinacional e Intercultural",
    "descripcion": "Promulgación de la Ordenanza Municipal N° 063/2021."
  },
  {
    "fecha": "2024-10-14",
    "mes": "Octubre",
    "color": "red",
    "titulo": "Encuentro Plurinacional de Mujeres y Diversidades",
    "descripcion": "En el año 2019, en La Plata, el histórico encuentro reconoció la participación de indígenas, migrantes y diversidades sexuales."
  },
  {
    "fecha": "2024-11-15",
    "mes": "Noviembre",
    "color": "orange",
    "titulo": "Muerte de Tupac Katari",
    "descripcion": "Líder del levantamiento indígena durante 1781 contra el Imperio Español en el Alto Perú. Antes de ser ejecutado por las tropas colonizadoras dijo: 'Volveré y seré millones'."
  },
  {
    "fecha": "2024-12-21",
    "mes": "Diciembre",
    "color": "green",
    "titulo": "Solsticio de Verano",
    "descripcion": "Celebración del Kapak Raymi, gran Fiesta de la Nueva Vida de regiones andinas en honor al sol."
  },
  {
    "fecha": "2024-12-22",
    "mes": "Diciembre",
    "color": "green",
    "titulo": "Warachikuy",
    "descripcion": "Carrera ancestral ceremonial de iniciación masculina en la cultura andina."
  }
];

export default eventos;