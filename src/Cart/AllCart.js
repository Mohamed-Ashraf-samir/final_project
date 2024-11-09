import React from 'react'
import Navhome from '../Navhome'
import { CartProvider, useCart } from 'react-use-cart'
import AllFooter from "../Home/AllFooter"

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();


    if (isEmpty) return <p className="text-center">Your cart is empty</p>;
    return (

        <section className="h-100 gradient-custom Final">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Cart - ({totalUniqueItems})</h5>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    {items.map((elements) => (
                                        <>
                                            {/* <!-- Single item --> */}
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src={elements.coverImage} className="w-100" />
                                                    <a href="#!">
                                                        <div className="mask edition-v1"></div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                {/* <!-- Data --> */}
                                                <p><strong>{elements.title}</strong></p>
                                                <p>{elements.description}</p>
                                                <button onClick={() => removeItem(elements.id)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                                                    title="Remove item">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2 mx-1" data-mdb-tooltip-init
                                                    title="Move to the wish list">
                                                    <i className="fas fa-heart"></i>
                                                </button>
                                                {/* <!-- Data --> */}
                                            </div>

                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                {/* <!-- Quantity --> */}
                                                <div className="d-flex mb-4 .edition-v2">
                                                    <button onClick={() => updateItemQuantity(elements.id, (elements.quantity ?? 0) - 1)} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2"
                                                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                        <i className="fas fa-minus"></i>
                                                    </button>

                                                    <div data-mdb-input-init className="form-outline">
                                                        <p id="form1" className='text-center'>{elements.quantity}</p>

                                                        <label className="form-label mx-2" for="form1">Quantity </label>
                                                    </div>

                                                    <button onClick={() => updateItemQuantity(elements.id, (elements.quantity ?? 0) + 1)} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2"
                                                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                                {/* <!-- Quantity --> */}

                                                {/* <!-- Price --> */}
                                                <p className="text-start text-md-center">
                                                    <strong>{elements.price}$</strong>
                                                </p>
                                                {/* <!-- Price --> */}
                                            </div>

                                            <hr className="my-4" />
                                        </>))}
                                    {/* <!-- Single item --> */}
                                </div>
                            </div>

                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <p><strong>Expected shipping delivery</strong></p>
                                <p className="mb-0">12.10.2020 - 14.10.2020</p>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body">
                                <p><strong>We accept</strong></p>
                                <img className="me-2 edition-v3 mx-2"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" />
                                <img className="me-2 edition-v3 mx-2"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                    alt="American Express" />
                                <img className="me-2 edition-v3 mx-2"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>{totalItems}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        SubTotal
                                        <span>${Math.round(cartTotal)}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>$5</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>${Math.round(cartTotal + 5)}</strong></span>
                                    </li>
                                </ul>

                               <a href='/'><button type="button" className="btn btn-primary btn-lg btn-block">Go To Check</button></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

function AllCart() {
    return (
        <CartProvider>
            <Navhome />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Cart />
            <AllFooter/>
        </CartProvider>
    )
}

export default AllCart