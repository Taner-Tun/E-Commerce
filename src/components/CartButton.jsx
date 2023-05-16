import "../scss/main.scss"

const CartButton = (props) => {
  return (
    <button className="header-button">
      <div className="ui-svg">
        <svg className="icon-cart"></svg>
      </div>
      <span>Your Cart</span>
    </button>
  )
}

export default CartButton
