import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => {
    return store.cart;
  });
  if (amount < 1) {
    return (
      <section className='cart'>
        <h2>your bag</h2>
        <h4 className='empty-cart'>is empty</h4>
      </section>
    );
  }
  return (
    <section className='cart'>
      <h2>your bag</h2>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$ {total.toFixed(2)}</span>
          </h4>
        </div>

        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;