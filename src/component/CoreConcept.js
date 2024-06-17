// function CoreConcept(props){
//   return(
//     <li>
//       <img src={props.img} alt='Something'/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function CoreConcept({image, title, description}){
  return(
    <li>
      <img src={image} alt='Something'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept;