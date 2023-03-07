import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Modal from "@/components/UI/Modal";
import Card from "@/components/UI/Card";
import ProductCard from "@/components/UI/ProductCard";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <Fragment>
      <div className={styles.home}>
        <h1 className={styles.heading}>
          Welcome to Plantify! <br /> Shop your favourite greens here!
        </h1>
      </div>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://nature-mentor.com/wp-content/uploads/2020/02/Plant-collage.jpg"
        />
        <div>
          <h1>We have wide selection of plants for you!</h1>
          <p>
            Sed molestie laoreet magna, eu efficitur leo lobortis ac. Sed
            finibus laoreet tincidunt. Nam orci quam, feugiat sit amet sodales
            vel, pharetra in sem. In placerat elit venenatis ex ultrices
            molestie. In a ullamcorper lacus. Praesent nec feugiat turpis. Donec
            non nisl sed augue ullamcorper ullamcorper eget vel magna. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h1>Free farming kit with our plants!</h1> <br />
          <p>
            Sed molestie laoreet magna, eu efficitur leo lobortis ac. Sed
            finibus laoreet tincidunt. Nam orci quam, feugiat sit amet sodales
            vel, pharetra in sem. In placerat elit venenatis ex ultrices
            molestie. In a ullamcorper lacus. Praesent nec feugiat turpis. Donec
            non nisl sed augue ullamcorper ullamcorper eget vel magna. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
        <img
          className={styles.image}
          src="https://cdn.shopify.com/s/files/1/1317/1487/products/super-farmers-western-microgreens-watering_f58f3896-d2e7-4f81-a9aa-a701914e2a1f_1024x1024@2x.png?v=1664259504"
        />
      </div>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://media.istockphoto.com/id/1375716890/vector/same-day-delivery-icon-vector-for-graphic-design-logo-website-social-media-mobile-app-ui.jpg?s=612x612&w=0&k=20&c=f0tCmdUgj9Fq0pC1Ni9V6v6Jp0LV0UdrKXSUOUd-0gs="
        />
        <div>
          <h1>Same Day delivery to your doorstep!</h1>
          <p>
            Sed molestie laoreet magna, eu efficitur leo lobortis ac. Sed
            finibus laoreet tincidunt. Nam orci quam, feugiat sit amet sodales
            vel, pharetra in sem. In placerat elit venenatis ex ultrices
            molestie. In a ullamcorper lacus. Praesent nec feugiat turpis. Donec
            non nisl sed augue ullamcorper ullamcorper eget vel magna. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
      <Contact />
    </Fragment>
  );
}
