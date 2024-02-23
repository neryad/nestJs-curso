export const name = 'Fernando';
export const age:number = 23;
export const isValid:boolean = true;


export const templateString = ` esto es es un string multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${ 1 + 1}
nuemros: ${age}
booleanos: ${isValid}
`;

console.log(templateString);

