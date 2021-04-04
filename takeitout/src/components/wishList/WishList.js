import { useWish } from "../../context/WishContext";
import "./wishList.css";
import { useCart } from "../../context/CartContext";

function WishList() {
  const { itemsInWish } = useWish();
  const { setPage } = useCart();

  return (
    <div>
      <div className="gallery">
        {itemsInWish.length === 0 ? (
          <h2>Your WishList is empty</h2>
        ) : (
          itemsInWish.map((product, index) => (
            <div className="content" key={index}>
              <img src={product.image} />
              <button className="heart">
                <i className=" wishheart fa fa-heart" aria-hidden="true"></i>
              </button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h6> Rs.{product.price}</h6>
              <div>
                <button onClick={() => setPage("CheckOut")} className="btnn">
                  CheckOut
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WishList;
