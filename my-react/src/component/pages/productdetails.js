import { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

export const Productdetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data);
        console.log(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <section>
      <div class="container">
        <div class="product-template page-content">
          <h2>Product Details</h2>
          <div class="product-details row">
            <div class="product-wrap">
              <div class="product-single">
                <div class="product-media">
                  <a href="#">
                    <img class="pic" src={product.images} alt={product.name} />
                  </a>
                </div>
                <div class="product-info">
                  <div class="right-side">
                    <span class="product-sku">SKU:{product.sku}</span>
                    <h3 class="product-title main-title">{product.name}</h3>
                    <div class="price">
                      <div class="regular-price">
                        <span>
                          <span class="money" data-currency-usd="$200.00">
                            {product.price}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="line-item-quantity">
                      <span class="line-item__quantity-text">Quantity : </span>
                      <Remove onClick={() => handleQuantity("dec")} />
                      <input
                        type="text"
                        name=""
                        size="3"
                        id=""
                        value={quantity}
                      />
                      <Add onClick={() => handleQuantity("inc")} />
                    </div>
                    <div class="product-add">
                      <button
                        class="button button--alt"
                        name="add"
                        id="add"
                        type="submit"
                        onClick={handleClick}
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="desc-wrap">
                <h4>Description</h4>
                <div class="detail-desc">
                  <p>
                    Nice and simple T-shirt made of stretchy cotton quality. The
                    t-shirt has short sleeves, a round neck and a super
                    comfortable fit.
                  </p>
                  <p>
                    <strong>Composition & Washing</strong>
                  </p>
                  <p>
                    Jersey fabric: 100% cotton; woven fabric: 100% polyester,
                    exclusive of embroideries. Wash by hand in water. Do not
                    bleach. Iron at max. 110 °C using a damp cloth between the
                    iron and the fabric. Do not dry clean. Do not tumble dry.
                    Flat drying in the shade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
