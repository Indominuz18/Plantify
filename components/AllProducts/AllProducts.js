import React from "react";
import classes from "./AllProducts.module.css";
import ProductCard from "../UI/ProductCard";
import CartIcon from "../UI/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { uiActions } from "@/store/ui-slice";

const products = [];

export default function AllProducts(props) {
  const showCart = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  function handleModal() {
    dispatch(uiActions.toogleCart());
  }

  return (
    <div className={classes.allproducts}>
      <div className={classes.cart}>
        <CartIcon className={classes.cart_icon} />
      </div>

      {showCart && <Modal onClick={handleModal} />}
      <h1 className={classes.heading}>Explore!</h1>
      <p>
        Etiam rhoncus risus ac lectus consequat, vitae eleifend risus pretium.
        Ut aliquet nisi id orci euismod, a mattis nisi faucibus. Cras in
        tincidunt quam. Praesent eget dignissim velit, nec sollicitudin justo.
        Pellentesque in dolor fringilla nulla porta pretium eget et eros. Proin
        a suscipit nisi, at pulvinar dui. Fusce aliquam diam id tempus auctor.
        Morbi at feugiat augue. Pellentesque elementum justo in velit maximus,
        at vulputate turpis ultricies. In hendrerit, dui quis tincidunt tempor,
        nulla libero tempus lectus, eget vestibulum erat ligula ac nibh. Aliquam
        placerat volutpat neque, eu lobortis quam vehicula non. Duis id
        hendrerit tellus. Sed et commodo tellus, vel tincidunt risus. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquam
        euismod condimentum. Morbi elit nibh, fermentum a cursus vitae,
        dignissim id ex. Etiam pharetra tortor sed augue egestas lobortis.
        Nullam arcu lacus, blandit eget convallis eu, mattis sed nisi. Sed vitae
        aliquam massa. Morbi at neque malesuada, condimentum neque id, aliquet
        metus. Duis quis risus quis turpis malesuada sodales. Duis fermentum ac
        nibh ac condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed ultrices efficitur lacinia. Maecenas laoreet tristique
        efficitur. Sed facilisis, ex et tincidunt tempor, tortor massa efficitur
        purus, et efficitur augue nunc non dui. Vestibulum in odio id augue
        efficitur pulvinar maximus sit amet libero. Fusce egestas tortor nec
        nibh tincidunt fermentum. Aliquam volutpat bibendum enim a scelerisque.
        Aenean suscipit volutpat nisi vitae consectetur. Mauris augue erat,
        ullamcorper id consectetur ullamcorper, venenatis ut dolor. Nullam
        dapibus, lorem sed ultricies vehicula, sapien arcu finibus dolor, a
        pretium erat quam sed lectus. Pellentesque interdum fermentum lobortis.
        Suspendisse suscipit ac augue et lobortis. Donec nec lectus non dui
        convallis mattis id ut justo. Duis interdum ullamcorper sapien eget
        posuere. Phasellus a mauris at libero ultricies elementum id et mi.
        Quisque dictum erat nec nisl scelerisque luctus. Morbi viverra metus sit
        amet risus gravida, eu facilisis enim lacinia. Aliquam lacus diam,
        convallis id risus eget, pellentesque vehicula magna. Nulla varius
        consectetur convallis. Nam volutpat risus vel elit semper fringilla.
        Donec ultrices ac mauris at elementum. Duis aliquam enim eget arcu
        molestie varius. Generated 5 paragraphs, 367 words, 2504 bytes of Lorem
        Ipsum help@lipsum.com Privacy Policy
      </p>
      <p>
        Etiam rhoncus risus ac lectus consequat, vitae eleifend risus pretium.
        Ut aliquet nisi id orci euismod, a mattis nisi faucibus. Cras in
        tincidunt quam. Praesent eget dignissim velit, nec sollicitudin justo.
        Pellentesque in dolor fringilla nulla porta pretium eget et eros. Proin
        a suscipit nisi, at pulvinar dui. Fusce aliquam diam id tempus auctor.
        Morbi at feugiat augue. Pellentesque elementum justo in velit maximus,
        at vulputate turpis ultricies. In hendrerit, dui quis tincidunt tempor,
        nulla libero tempus lectus, eget vestibulum erat ligula ac nibh. Aliquam
        placerat volutpat neque, eu lobortis quam vehicula non. Duis id
        hendrerit tellus. Sed et commodo tellus, vel tincidunt risus. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquam
        euismod condimentum. Morbi elit nibh, fermentum a cursus vitae,
        dignissim id ex. Etiam pharetra tortor sed augue egestas lobortis.
        Nullam arcu lacus, blandit eget convallis eu, mattis sed nisi. Sed vitae
        aliquam massa. Morbi at neque malesuada, condimentum neque id, aliquet
        metus. Duis quis risus quis turpis malesuada sodales. Duis fermentum ac
        nibh ac condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed ultrices efficitur lacinia. Maecenas laoreet tristique
        efficitur. Sed facilisis, ex et tincidunt tempor, tortor massa efficitur
        purus, et efficitur augue nunc non dui. Vestibulum in odio id augue
        efficitur pulvinar maximus sit amet libero. Fusce egestas tortor nec
        nibh tincidunt fermentum. Aliquam volutpat bibendum enim a scelerisque.
        Aenean suscipit volutpat nisi vitae consectetur. Mauris augue erat,
        ullamcorper id consectetur ullamcorper, venenatis ut dolor. Nullam
        dapibus, lorem sed ultricies vehicula, sapien arcu finibus dolor, a
        pretium erat quam sed lectus. Pellentesque interdum fermentum lobortis.
        Suspendisse suscipit ac augue et lobortis. Donec nec lectus non dui
        convallis mattis id ut justo. Duis interdum ullamcorper sapien eget
        posuere. Phasellus a mauris at libero ultricies elementum id et mi.
        Quisque dictum erat nec nisl scelerisque luctus. Morbi viverra metus sit
        amet risus gravida, eu facilisis enim lacinia. Aliquam lacus diam,
        convallis id risus eget, pellentesque vehicula magna. Nulla varius
        consectetur convallis. Nam volutpat risus vel elit semper fringilla.
        Donec ultrices ac mauris at elementum. Duis aliquam enim eget arcu
        molestie varius. Generated 5 paragraphs, 367 words, 2504 bytes of Lorem
        Ipsum help@lipsum.com Privacy Policy
      </p>
      <div className={classes.products}>
        {products ? (
          <h2>No Product Found</h2>
        ) : (
          props.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                img={product.img}
                description={product.description}
                title={product.title}
                price={product.price}
                className={classes.item}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
