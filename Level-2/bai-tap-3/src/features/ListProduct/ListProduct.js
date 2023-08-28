import React from 'react';
import * as product from "./Item/CardProduct.js";
import "bootstrap/dist/css/bootstrap.min.css";

const ListProduct = () => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <product.CardProduct />
                    <product.CardProduct/>
                    <product.CardProduct/>
                    <product.CardProduct/>
                    <product.CardProduct/>
                    <product.CardProduct/>
                    <product.CardProduct/>
                    <product.CardProduct/>
                </div>
            </div>
        </section>

    );
}

export default ListProduct;
