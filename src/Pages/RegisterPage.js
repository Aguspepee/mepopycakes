import { Form, Button, Container, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import firebase from '../Config/firebase';

function RegisterPage() {

    const { register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        console.log("data", data)
        try {
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            console.log("user",responseUser.uid)
            if(responseUser.user.uid){
                const document = await firebase.db.collection("usuarios")
                .add({
                    name:data.name,
                    surname:data.surname,
                    userId:responseUser.user.uid
                })
                console.log(document)
            }
        } catch (e) {
            console.log("error",e.code)
        }
    }


    return (
        <Card>
            <Container fluid className="my-auto">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" {...register("name")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="surname" placeholder="Enter Surname" {...register("surname")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrarme
                    </Button>
                </Form>
            </Container>
        </Card>
    );
}
export default RegisterPage