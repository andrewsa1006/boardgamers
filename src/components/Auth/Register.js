import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { toggleType } from "../../store/reducers/AuthTypeReducer";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  return (
    <div>
      <Card bg="dark" text="light" style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDisplayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" placeholder="Display Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to Boardgamers Privacy Policy" />
            </Form.Group>
          </Form>
          <Button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Register
          </Button>
          <br />
          <br />
          <Card.Text>
            Already have an account?{" "}
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleType());
              }}
            >
              {" "}
              Login instead.
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
