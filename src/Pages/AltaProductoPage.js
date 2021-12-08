import { Form, Button, Container, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import firebase from '../Config/firebase';
import {useNavigate} from 'react-router-dom';



function AltaProductoPage() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            //Carga los datos en el Storage de Firebase
            const archivo = data.file[0];
            const storageRef = firebase.storage().ref();
            const archivoPath = storageRef.child(archivo.name);
            await archivoPath.put(archivo);
            console.log("archivo cargado", archivo.name);
            const enlaceUrl = await archivoPath.getDownloadURL();

            //Carga los datos a la base de datos de Firebase
            const document = await firebase.db.collection("productos")
                .add({ name: data.name, price: data.price, detail: data.detail, type: data.type, url: enlaceUrl })
            console.log("Se cargó exitosamente:", data)
            console.log(document)
            navigate("/")
        } catch (e) {
            console.log("error", e.code)
            
        }
    }

    return (
        <Card>
            <Container fluid className="my-auto">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Nombre" {...register("name")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="price" placeholder="Precio" {...register("price")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="detail" placeholder="Detalle" {...register("detail")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select aria-label="Default select example" type="type" {...register("type")}>
                    <option >Tipo de Producto</option>
                    <option value="Tortas">Tortas</option>
                    <option value="Tartas">Tartas</option>
                    <option value="Tarteletas">Tarteletas</option>
                    <option value="Minitortas">Minitortas</option>
                    <option value="Varios">Varios</option>
                    </Form.Select >
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="file" placeholder="Detalle" {...register("file")} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cargar Producto
                    </Button>
                </Form>
            </Container>
        </Card>
    );
}
export default AltaProductoPage