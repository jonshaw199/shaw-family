import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import RbNavbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "@/app/Logo";
import Image from "next/image";
import { useSectionContext } from "./contexts/SectionContext";
import { Sections } from "@/app/common";

type NavItem = {
  id: string;
  name: string;
};

const navItems: NavItem[] = [
  {
    id: Sections.HOME,
    name: "Home",
  },
  {
    id: Sections.EVENTS,
    name: "Events",
  },
  {
    id: Sections.MEDIA,
    name: "Media",
  },
];

type NavbarProps = {
  darkMode?: boolean;
};

export default function Navbar({ darkMode }: NavbarProps) {
  const { width } = useWindowDimensions();
  const { sectionId, setSectionId } = useSectionContext();

  const expand = useMemo(() => width > 1000, [width]);

  return width ? (
    <RbNavbar
      expand={expand}
      data-bs-theme={darkMode ? "dark" : "light"}
      className={darkMode ? "bg-black" : "bg-white"}
      fixed="top"
    >
      <Container>
        <RbNavbar.Brand
          onClick={() => setSectionId(Sections.HOME)}
          className="d-flex align-items-center gap-3"
        >
          <Image
            src="/icon.png"
            width="38"
            height="38"
            style={{
              filter: darkMode ? "invert(1)" : undefined,
            }}
            alt="Shaw Family Icon"
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
              <Image
                src="/icon.png"
                height="40"
                width="40"
                alt="Shaw Family Icon"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              {navItems.map(({ id, name }) => (
                <Nav.Link
                  key={`nav_link_${id}`}
                  onClick={() => setSectionId(id)}
                  active={sectionId == id}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </RbNavbar.Offcanvas>
      </Container>
    </RbNavbar>
  ) : null;
}
