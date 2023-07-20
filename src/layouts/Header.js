"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownSection,
  Button,
  DropdownMenu,
} from "@nextui-org/react";
import { BsChevronDown } from "react-icons/bs";

function Header() {
  return (
    <header>
      <div className="bg-blue-950 w-full h-fit text-center">
        <p className="text-xs antialiased font-bold text-white py-2">
          DESA SIMPUR - BELIK
        </p>
      </div>
      <nav className="flex items-center justify-between lg:px-44 py-6">
        <div className="flex items-center">
          <Image
            src="/pemalang.svg"
            alt="Pemalang Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
          />
          <h1 className="pl-2 font-semibold text-2xl">Simpur</h1>
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link href="/">
                <Button variant="light" disableRipple>
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Dropdown
                showArrow
                radius="sm"
                classNames={{
                  base: "p-0 border-small border-divider bg-background",
                  arrow: "bg-default-200",
                }}
              >
                <DropdownTrigger>
                  <Button variant="light" disableRipple>
                    Profil
                    <BsChevronDown className="text-black" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Profile"
                  disabledKeys={["profile"]}
                  className="p-3"
                  itemClasses={{
                    base: [
                      "rounded-md",
                      "text-default-500",
                      "transition-opacity",
                      "data-[hover=true]:text-foreground",
                      "data-[hover=true]:bg-default-100",
                      "dark:data-[hover=true]:bg-default-50",
                      "data-[pressed=true]:opacity-70",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  }}
                >
                  <DropdownSection aria-label="Sejarah dan Visi Misi">
                    <DropdownItem key="sejarah-desa">
                      <Link href="/sejarah-desa">Sejarah Desa</Link>
                    </DropdownItem>
                    <DropdownItem key="visi-misi">
                      <Link href="/visi-misi">Visi Misi</Link>
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                showArrow
                radius="sm"
                classNames={{
                  base: "p-0 border-small border-divider bg-background",
                  arrow: "bg-default-200",
                }}
              >
                <DropdownTrigger>
                  <Button variant="light" disableRipple>
                    Kondisi Desa <BsChevronDown className="text-black" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Custom item styles"
                  disabledKeys={["profile"]}
                  className="p-3"
                  itemClasses={{
                    base: [
                      "rounded-md",
                      "text-default-500",
                      "transition-opacity",
                      "data-[hover=true]:text-foreground",
                      "data-[hover=true]:bg-default-100",
                      "dark:data-[hover=true]:bg-default-50",
                      "data-[pressed=true]:opacity-70",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  }}
                >
                  <DropdownSection aria-label="Kondisi Desa">
                    <DropdownItem key="demografi">
                      <Link href="/demografi">Demografi</Link>
                    </DropdownItem>
                    <DropdownItem key="keadaan-sosial">
                      <Link href="/keadaan-sosial">Keadaan Sosial</Link>
                    </DropdownItem>
                    <DropdownItem key="keadaan-ekonomi">
                      <Link href="/keadaan-ekonomi">Keadaan Ekonomi</Link>
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                showArrow
                radius="sm"
                classNames={{
                  base: "p-0 border-small border-divider bg-background",
                  arrow: "bg-default-200",
                }}
              >
                <DropdownTrigger>
                  <Button variant="light" disableRipple>
                    Kondisi Pemerintahan{" "}
                    <BsChevronDown className="text-black" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Kondisi Pemerintahan"
                  disabledKeys={["kondisi-pemerintahan"]}
                  className="p-3"
                  itemClasses={{
                    base: [
                      "rounded-md",
                      "text-default-500",
                      "transition-opacity",
                      "data-[hover=true]:text-foreground",
                      "data-[hover=true]:bg-default-100",
                      "dark:data-[hover=true]:bg-default-50",
                      "data-[pressed=true]:opacity-70",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  }}
                >
                  <DropdownSection aria-label="Kondisi Pemerintahan">
                    <DropdownItem key="lembaga-pemerintahan">
                      <Link href="/lembaga-pemerintahan">
                        Lembaga Pemerintahan
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="lembaga-kemasyarakatan">
                      <Link href="/lembaga-kemasyarakatan">
                        Lembaga Kemasyarakatan
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="pembagian-wilayah">
                      <Link href="/pembagian-wilayah">Pembagian Wilayah</Link>
                    </DropdownItem>
                    <DropdownItem key="struktur-organisasi">
                      <Link href="/struktur-organisasi">
                        Struktur Organisasi
                      </Link>
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Link href="/masalah-potensi">
                <Button variant="light" disableRipple>
                  Masalah dan Potensi
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
