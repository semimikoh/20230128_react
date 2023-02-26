import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../api/auth";
import { useInput } from "../../Hooks/useInput";
import Button from "../common/Button";
import Input from "../common/Input";

function SignUp() {
  const [inputs, handleInputs] = useInput({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await signUp(inputs);
    if (success) {
      alert("회원가입에 성공했습니다.");

      navigate("/auth/login");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이름을 입력해 주세요."
            name="name"
            onChange={handleInputs}
          />
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
          <Button>sign up</Button>
          <Button
            bgColor="#e74958"
            // type="button"
            onClick={() => navigate("/auth/login")}
          >
            cancle
          </Button>
          {/* form태그 안에 있으면 버튼은 서브밋이 되기 때문에 타입을 버튼으로 바꿔줘야 한다. 아니면 오류 메세지 */}
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

export default SignUp;
