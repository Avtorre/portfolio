import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"

const CustomNavbar = () => {
  return (
    <Navbar className="text-white text-xl h-14" bg="dark" data-bs-theme="dark" style={{ scrollbarGutter: "stable" }}>
        <Container className="m-auto">
          <Nav className="m-auto gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default CustomNavbar
