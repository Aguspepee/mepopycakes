import React, { useState, useEffect, Highlight } from "react";
import Producto from './Producto/Producto';
import firebase from '../Config/firebase';
import { Container } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css"
import './Productos.css'


function Productos(props) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    const type = props.type

    //Obtener productos de Firebase
    async function request() {
        try {
            //Se setea el tipo de producto
            console.log("type", type)
            //Se consulta a la base de datos
            const querySnapshot = await firebase.db.collection("productos")
                .get()
            if (querySnapshot.docs) {
                setProductos(querySnapshot.docs)
                setLoading(false)
                setReload(false)
            }
        } catch (e) {

        }
    }

    //Fución borrar productos de Firebase
    const handleDelete = async (id) => {
        try {
            const document = await firebase.db.doc("productos/" + id).delete()
            console.log("Producto Borrado")
            setReload(true)
        } catch (e) {


        }
    }

    //Recargar componente
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    useEffect(
        () => {
            request()
        }, [reload]
    )

    return (
        <div className="productos" data-aos="fade-up">
            <h2 className="nombregrupo">{type.toUpperCase()}</h2>
                <Row xs={1} sm={2} md={2} lg={4} xl={4} >
                    {productos.filter(productosFiltrados => productosFiltrados.data().type === type).map(productosFiltrados => (
                        <Col >
                            <Producto datos={{ ...productosFiltrados.data(), id: productosFiltrados.id }} handleDelete={handleDelete} />
                        </Col>
                    )
                    )}
                </Row>
        </div>
    );
}

export default Productos