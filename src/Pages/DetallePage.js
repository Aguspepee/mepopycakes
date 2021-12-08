import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import Button from '@mui/material/Button';
import firebase from '../Config/firebase';

function DetallePage() {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  console.log("Este es el ID: " + id)

  //Consulta a Firbase
  useEffect(
    () => {
      async function request() {
        try {
          const response = await firebase.db.doc("productos/"+id)
          .get()
          if(response){
            setProducto(response)
            setLoading(false)

          }


        } catch (e) {


        }
      }
      request()
    }, [id]
  )

  if (loading) {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <>
        <h1>{producto.data().name}</h1>
        <p>$ {producto.data().price}</p>
        <img src={producto.data().url} alt=""/>

        <Button variant="contained">Comprar</Button>
      </>
    )
  }
}
export default DetallePage;