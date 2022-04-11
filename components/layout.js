import NavBar from "./navbar";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
}
