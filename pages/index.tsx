import Head from "next/head";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
          corporis obcaecati voluptates esse in earum neque vel repudiandae
          similique repellendus, cupiditate hic rem unde minima a, commodi dolor
          laudantium.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sint
          placeat omnis voluptate odit. Dolores vel nesciunt tempore beatae nam
          blanditiis suscipit possimus repudiandae provident vero. Numquam
          placeat autem eligendi.
        </p>
        <Link href="/ninjas">
          <p className={styles.btn}>See Ninja Listing</p>
        </Link>
      </div>
    </>
  );
}
