import { Button, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded className="mb-10">
      <div className="flex md:order-2 ">
        <Navbar.Toggle />
        <Button onClick={() => navigate("singin")}>Вхід</Button>
      </div>
      <Navbar.Collapse>
        <Link to="/">Проєкти</Link>
        <Link to="/create">Створити проєкт</Link>
        <Link to="/about">Про мене</Link>
        <Link to="/contact">Контакти</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
