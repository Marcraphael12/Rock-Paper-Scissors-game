import styled from "styled-components";

const Footer = () => {
 const Button = styled.button `
  padding: 10px 20px;
  border: solid 2px hsl(217, 16%, 45%);
  color: #fff;
  background: hsl(214, 47%, 23%);
 `;
  return (
    <footer>
      <Button>
        Rules
      </Button>
    </footer>
  );
}
 
export default Footer;