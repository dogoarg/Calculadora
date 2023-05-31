import '../Hoja-de-estilos/Boton.css'




const Boton= (props)=>{

    const esOperador = (valor) =>{
        return (
            isNaN(valor ) && (valor !=='.') && (valor !== '=') 
            )
    }

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}
         onClick={()=>props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}


// function Boton(props){
//     <div>
//         {props.children}
//     </div>
// }

export default Boton