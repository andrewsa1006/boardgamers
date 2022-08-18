import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toggleType } from "../../store/reducers/AuthTypeReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div>
      <Card bg="dark" text="light" style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
          <Button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Login
          </Button>
          <br />
          <br />
          <Card.Text>
            Not registered?{" "}
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleType());
              }}
            >
              Click here!
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
