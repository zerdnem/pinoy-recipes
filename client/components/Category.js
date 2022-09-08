import Image from "next/image";

export default function Category({ category }) {
  return (
    <span className="inline-block relative">
      <img
        className="h-16 w-16 rounded-full p-1"
        src={category.image}
        alt={category.name}
        //width={266}
        //height={160}
      />
      <span className="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white bg-green-400"></span>
    </span>
  );
}
