import "../App.css";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <>
      <div className="flexDetail">
        <div>
          <h5 className="titulosDetail">{item.name}</h5>

          <img className="portadaDetail" src={item.imagen} alt="ERROR" />
        </div>
        <div>
          <p className="itemDetail">$ {item.precio}</p>
          <p className="itemDetail">{item.descripcion}</p>
          <ItemCount stock={item.stock} initial={0} />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
