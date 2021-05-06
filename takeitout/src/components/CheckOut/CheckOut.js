import React from 'react'
import {useCart} from "../../context/CartContext"
import {useWish} from "../../context/WishContext"
import "./CheckOut.css"
function CheckOut() {
 const {itemsInCart, setItemsInCart}= useCart();
 const{itemsInWish,setItemsInWish} = useWish();
    return (
        <div>
        <h1>Yay! We hope you shopped<i class="fa fa-smile-o" aria-hidden="true"></i></h1>
        <div className="container">
       
        `   <h1>Shipping Boat</h1>
            <p>Please enter your shipping details.</p>
            <hr />
        <div className="form">
          <div className="fields fields--2">
             <label className="field">
               <span className="field__label" for="firstname">First name</span>
               <input className="field__input" type="text" id="firstname"  />
             </label>
             <label className="field">
                 <span className="field__label" for="lastname">Last name</span>
                 <input className="field__input" type="text" id="lastname"  />
             </label>
         </div>
             <label className="field">
                 <span className="field__label" for="address">Address</span>
                 <input className="field__input" type="text" id="address" />
             </label>
             <label className="field">
                 <span className="field__label" for="country">Country</span>
                  <select className="field__input" id="country">
                  <option value=""></option>
                  <option value="unitedstates">United States</option>
                  </select>
             </label>
          <div className="fields fields--3">
              <label className="field">
               <span className="field__label" for="zipcode">Zip code</span>
               <input className="field__input" type="text" id="zipcode" />
             </label>
             <label className="field">
               <span className="field__label" for="city">City</span>
               <input className="field__input" type="text" id="city" />
             </label>
              <label className="field">
                 <span className="field__label" for="state">State</span>
                <select className="field__input" id="state">
                <option value=""></option>
              </select>
             </label>
        </div>
        </div>
        <hr/>
        <button className="button">Continue</button>
        </div>
        </div>
     
        
    )
}

export default CheckOut
