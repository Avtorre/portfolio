'use client'

import { usePathname } from "next/navigation"
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"

const CustomNavbar = () => {
  return (
    <Navbar className="text-white text-xl h-14" bg="dark" data-bs-theme="dark">
        <Container className="m-auto">
          <Nav className="m-auto gap-4 ">
            <NavLink active={usePathname() === '/'} href="/" className="">Home</NavLink>
            <NavLink active={usePathname() === '/about'} href="/about">About</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default CustomNavbar
