import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const DaNavbar = () => {
    return (
        <div className="bg-lime-300 rounded drop-shadow-md">
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                <p className="font-bold text-inherit">bitHeart</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link color="foreground" href="/#card-1">
                    Features
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    Dashboard
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="/#Working">
                    Working
                </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>    
                    <Button as={Link} color="primary" href="/#foota" variant="flat">
                        Contact Us
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
        </div>
    )
}

export default DaNavbar;