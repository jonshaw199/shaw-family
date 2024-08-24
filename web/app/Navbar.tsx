import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import RbNavbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Section, sections } from "./common";
import Logo from "@/app/Logo";

type NavbarProps = {
  darkMode?: boolean;
};

export default function Navbar({ darkMode }: NavbarProps) {
  const { width } = useWindowDimensions();

  const expand = useMemo(() => width > 1000, [width]);

  return (
    <RbNavbar
      expand={expand}
      data-bs-theme={darkMode ? "dark" : "light"}
      className={darkMode ? "bg-black" : "bg-white"}
      fixed="top"
    >
      <Container>
        <RbNavbar.Brand
          href="#home"
          className="d-flex align-items-center gap-3"
        >
          <img
            src="/icon.png"
            width="38"
            style={{
              filter: darkMode ? "invert(1)" : undefined,
            }}
          />
          <Logo darkMode={darkMode} />
        </RbNavbar.Brand>
        <RbNavbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <RbNavbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src="/icon.png" width="40" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              {Object.keys(sections).map((s) => (
                <Nav.Link
                  key={`nav_link_${s}`}
                  href={`#${s}`}
                  active={window.location.hash == `#${s}`}
                >
                  {sections[s as Section].displayName}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </RbNavbar.Offcanvas>
      </Container>
    </RbNavbar>
  );
}
