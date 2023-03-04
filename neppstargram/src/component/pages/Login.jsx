import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../api/auth";
import { useInput } from "../../Hooks/useInput";
import Button from "../common/Button";
import Input from "../common/Input";

function Login() {
  const token = localStorage.getItem("token");
  const [inputs, handleInputs] = useInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await login(inputs);
    if (token) {
      alert("로그인에 성공했습니다.");
      navigate("/");
    }
  };

  // if (token) return <Navigate to="/" />;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이메일을 입력해 주세요."
            name="email"
            onChange={handleInputs}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            name="password"
            onChange={handleInputs}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button>log in</Button>
          <Button bgColor="#2c2929" onClick={() => navigate("/auth/signup")}>
            sign up
          </Button>
        </ButtonWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  text-align: center;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px 0;
  background-color: #fff;
`;
const InputWrapper = styled.div`
  margin: 20px 0 10px;

  input + input {
    margin-top: 4px;
  }
`;

const ButtonWrapper = styled.div`
  Button + Button {
    margin-top: 4px;
  }
`;

export default Login;
