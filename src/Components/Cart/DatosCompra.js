import React, { useContext } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import firebase from '../Config/firebase';
//import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function DatosCompra() {

    const { register, handleSubmit } = useForm();
/*     const navigate = useNavigate();
    const context = useContext(AuthContext) */

/*     const onSubmit = async (data) => {
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            if (responseUser.user.uid) {
                const userInfo = await firebase.db.collection("usuarios")
                    .where("userId", "==", responseUser.user.uid)
                    .get()
                console.log("userInfo", userInfo.docs[0]?.data())
                context.loginUser()
                navigate("/")
            }
        } catch (e) {
            console.log("error", e)
        }
    }
 */
    const onSubmit = ()=>{


    }

    return (
        <>
            <Container fluid className="my-auto">
                <Form onSubmit={handleSubmit(onSubmit)}>
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

                </Form>
            </Container>
        </>
    );
}
export default DatosCompra