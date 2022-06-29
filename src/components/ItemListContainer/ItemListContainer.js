
import ItemCount from "../ItemCount/ItemCount";
import "./itemListContainer.css";

const Cards = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]

const ItemListContainer = ({greetings}) => {
  return (
    
    <div className="row padreCards">    
      {Cards.map((card, index) => {
        return(
          <div className="card text-white bg-info mb-3 tamanhoCards text-center" key={card.id}>
            <div className="card-header">{greetings} {index+1}</div>
            <ItemCount stock={10} initial={1}/>
          </div>)
        })  
      }
    </div>
  )
}

export default ItemListContainer