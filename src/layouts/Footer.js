import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="lg:px-44 bg-slate-100 h-fit pb-8 pt-24 flex">
      <div className="w-1/2">
        <div className="flex items-center pb-5">
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
          <p className="py-1 text-gray-500">Desa Simpur</p>
          <p className="py-1 text-gray-500">Kecamatan Belik</p>
          <p className="py-1 text-gray-500">Kabupaten Pemalang</p>
          <p className="py-1 text-gray-500">Provinsi Jawa Tengah</p>
          <p className="py-1 text-gray-500">52356</p>
        </div>
      </div>
      <div className="w-1/2 flex">
        <ul>
          <li className="pb-3">
            <h2 className="text-xl font-bold">Menu</h2>
            <span className="w-10 h-1 inline-block bg-blue-700" />
          </li>
          <li className="py-1">
            <Link
              href="/sejarah"
              className="text-gray-500 hover:text-blue-700 transition-colors delay-50"
            >
              Sejarah
            </Link>
          </li>
          <li className="py-1">
            <Link
              href="/visi-misi"
              className="text-gray-500 hover:text-blue-700 transition-colors delay-50"
            >
              Visi dan Misi
            </Link>
          </li>
          <li className="py-1">
            <Link
              href="/demografi"
              className="text-gray-500 hover:text-blue-700 transition-colors delay-50"
            >
              Demografi
            </Link>
          </li>
          <li className="py-1">
            <Link
              href="/struktur-organisasi"
              className="text-gray-500 hover:text-blue-700 transition-colors delay-50"
            >
              Struktur Organisasi
            </Link>
          </li>
          <li className="py-1">
            <Link
              href="/masalah-potensi"
              className="text-gray-500 hover:text-blue-700 transition-colors delay-50"
            >
              Masalah dan Potensi
            </Link>
          </li>
        </ul>

        <ul className="pl-14">
          <li className="pb-3">
            <h2 className="text-xl font-bold">Kontak</h2>
            <span className="w-10 h-1 inline-block bg-blue-700" />
          </li>
          <li className="py-1">
            <Link
              href="mailto:ricoreynaldo@gmail.com"
              className="text-gray-500 hover:text-blue-700 transition-colors delay-50"
            >
              ricoreynaldo@gmail.com
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
