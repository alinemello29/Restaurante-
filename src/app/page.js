"use client";
import Head from "next/head";
import styles from "@/app/page.module.css";
import { useState } from "react";
import {filterProducts , searchProducts} from "@/service";
import Categories from "@/components/Categories";
import SearchBox from "@/components/SearchBox";
import Card from "@/components/Card";

export default function Home() {

  const [list, setList] = useState(filterProducts('Entradas'));
  const [srchdTxt, setSrcdTxt] = useState('');
  const [btnClicked, setBtnClicked] = useState('Entradas');

  const handleFilter = (category) => {
    setList(filterProducts(category));
    setBtnClicked(category);
    setSrcdTxt('');
  } 

  const handleSearch = (typedText) => {
    setSrcdTxt(typedText);
    if(typedText.length > 2){
      setList(searchProducts(typedText))
    }
  }

  return (
    <>
      <Head>
        <title>Cardápio dgital</title>
        <meta name="description" content="Cardapio dgital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className='container-1024'>

        <section className={styles.banner}>
          <h1 className="font-effect-fire">Restaurant</h1>
          <p>De pratos clássicos a criações surpreendentes,<br/>
          nosso cardápio é um requinte de sabores<br/>refinados.</p>
        </section>

        <main className={styles.mainCont}>
          <Categories
          onClickEntradas={()=> handleFilter('Entradas')}
          onClickMassas={()=> handleFilter('Massas')}
          onClickCarnes={()=> handleFilter('Carnes')}
          onClickBebidas={()=> handleFilter('Bebidas')}
          onClickSaladas={()=> handleFilter('Saladas')}
          onClickSobremesas={()=> handleFilter('Sobremesas')} 
          selectedBtn={btnClicked} />

          <SearchBox
          onChange={(event)=> handleSearch(event.target.value)}
          value={srchdTxt} />

          <section className={styles.foodMenu}>
            <h2>Cardápio</h2>
            <div className={styles.cards}>           
              {list.map((product) =>
                <Card
                key={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                description={product.description}
                price={product.price}
                length={list.length} />
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
