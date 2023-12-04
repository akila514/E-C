"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

interface AdminCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const AdminCard = ({ title, description, image, link }: AdminCardProps) => {
  return (
    <Link href={link} className="rounded-md w-[600px] shadow-sm">
      <div className="w-full flex flex-row">
        <div>
          <Image
            src={image}
            alt="adminOptionImage"
            width={200}
            height={100}
            className="object-contain rounded-l-md"
          />
        </div>
        <div className="flex flex-col p-5 bg-gray-100 rounded-r-md w-full">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-sm text-gray-500 leading-8">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default AdminCard;
