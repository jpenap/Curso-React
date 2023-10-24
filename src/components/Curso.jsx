function Curso(props){ //props
    return(
      <div>
        <h2>{props.nombre}</h2>
        <div><span>Profesor:</span><span>{props.profesor}</span></div>
        <div><span>Duración:</span><span>{props.duracion} semanas</span></div>
      </div>
    )
}

export default Curso;