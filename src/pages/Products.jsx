import React, { useEffect, useState } from "react";
import { fetchProductById, fetchProducts } from "../services/products.service";
import "./products.css";

function Products() {
  const [identifiant, setIdentifiant] = useState("");
  const [quantite, setQauntite] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [disabledTaches,SetdisabledTaches] =useState(false)
  const [incremente, setIncremente] = useState(quantite);
  const [total, setTotal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProducts(identifiant);
        console.log(result);
      } catch (e) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  const handleValider = () => {
    setDisabled(true);
    setQauntite(1);
  };

  const handletache = () => {
    SetdisabledTaches(true);
 
  };

  const Incremente=() =>{
    setIncremente(quantite+1)
  }

  const dincremente=() =>{
    setIncremente(quantite-1)
  }

  const finTache=() =>{
     setTotal (quantite*4)
  }
  return (
    <div>
        <div>
      <div className="products">
        Saisir l'identifiant du produit
        <input
          type="identifiant"
          name="identifiant"
          value={identifiant}
          onChange={(e) => setIdentifiant(e.target.value)}
        />
        <button className="button" onClick={handleValider}>
          Valider
        </button>
        <input
          type="quantite"
          value={quantite}
          name="quantite"
          disabled={!disabled ? true : false}
          onChange={(e) => setQauntite(e.target.value)}
        />
        <button className="buttonfin" onClick={handletache}>Ajouter panier</button>
       </div>
      {!disabledTaches ? (
        <div>...</div>
      ) :(
      <div className="taches" disabled>
      <label >Libéllé:{identifiant}</label>
      <label >Quantité:{incremente}</label>
      <label >Price:{2}</label>
      <label >PrixTotal:{total}</label>
      <button className="button" onClick={Incremente}>Incrementer quantite</button>
      <button className="button" onClick={dincremente}>Décrementer quantite</button>
      <button className="buttonfin" onClick={finTache}>Fin des achats</button>
      <label >PrixTotal:{total}</label>
    </div>
    )
    }
        
      </div>

     
    </div>
  );
}
export default Products;
