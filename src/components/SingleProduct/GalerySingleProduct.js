import React from "react";
import "./singleProduct.css";

const GalerySingleProduct = () => {
  return (
    <div className="galeryContainer">
      <div className="center">
          <input type="radio" name="active" id="tab-1" />
          <input type="radio" name="active" id="tab-2" />
          <input type="radio" name="active" id="tab-3" />
          <input type="radio" name="active" id="tab-4" />
          <div className="slider-galery">
              <label htmlFor="tab-1"><img src="https://ferreira.vteximg.com.br/arquivos/ids/199840-588-588/ad_c77124.jpg?v=636597779437030000" alt=""/></label>
              <label htmlFor="tab-2"><img src="https://statics.glamit.com.ar/media/catalog/product/d/e/deporfan_11s75662_u_1.jpg" alt=""/></label>
              <label htmlFor="tab-3"><img src="https://datalatienda.com/1682-large_default/zapatilla-superstar.jpg" alt=""/></label>
              <label htmlFor="tab-4"><img src="https://essential.vteximg.com.br/arquivos/ids/315180-1000-1000/265-0009_1.jpg?v=637171318008470000" alt=""/></label>
          </div>
        <div className="img-card">
          <img
            src="https://ferreira.vteximg.com.br/arquivos/ids/199840-588-588/ad_c77124.jpg?v=636597779437030000"
            alt=""
          />
          <img
            src="https://statics.glamit.com.ar/media/catalog/product/d/e/deporfan_11s75662_u_1.jpg"
            alt=""
          />
          <img
            src="https://datalatienda.com/1682-large_default/zapatilla-superstar.jpg"
            alt=""
          />
          <img
            src="https://essential.vteximg.com.br/arquivos/ids/315180-1000-1000/265-0009_1.jpg?v=637171318008470000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GalerySingleProduct;
