import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { saveShippingAdress } from '../slices/cartSlice'; 
import CheckOutSteps from '../components/CheckOutSteps';

const ShippingScreen = () => {

     const cart = useSelector((state) => state.cart);
    const {shippingAdress} = cart;



    const [adress, setAdress] = useState(shippingAdress?.adress || '');
    const [city, setCity] = useState(shippingAdress?.country || '');
    const [postalCode, setPostalCode] = useState(shippingAdress?.postalCode || '')
    const [country, setCountry] = useState(shippingAdress?.country || '')

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAdress({adress, city, postalCode, country}));

    navigate('/payment');
    };




  return (
    <FormContainer>
        <CheckOutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
             <Form.Group controlId = 'adress' className="my-2">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                    type='adress'
                    placeholder='Enter adress'
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}>
                </Form.Control>
            </Form.Group>

             <Form.Group controlId = 'city' className="my-2">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type='city'
                    placeholder='Enter city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}>
                </Form.Control>
            </Form.Group>


             <Form.Group controlId = 'postalCode' className="my-2">
                <Form.Label>PostalCode</Form.Label>
                <Form.Control
                    type='postalCode'
                    placeholder='Enter postalCode'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}>
                </Form.Control>
            </Form.Group>

             <Form.Group controlId = 'country' className="my-2">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type='country'
                    placeholder='Enter country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='my-2'>
                Continue
            </Button>
        </Form>

    </FormContainer>
  );
};



export default ShippingScreen;