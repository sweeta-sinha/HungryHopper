import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/redux-store/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems?.length !== 0 && (
          <button
            onClick={handleClearCart}
            className="p-2 m-2 bg-black text-white rounded-lg"
          >
            Clear Cart
          </button>
        )}
        {cartItems?.length === 0 && <h1>No items in Cart!</h1> }
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
