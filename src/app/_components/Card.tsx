import React from "react";

interface Product {
  imageAlt: string;
  imageSrc: string;
  href: string;
  name: string;
  color?: string; // Make color optional
  price: string;
}

interface ItemCardsProps {
  product: Product;
}

const ItemCards: React.FC<ItemCardsProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {product.color || "No color specified"}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default ItemCards;

// import React from "react";

// const NamesList = () => {
//   const namesArray = [
//     { name: "Alice" },
//     { name: "Bob" },
//     { name: "Charlie" },
//     { name: "Catherine" },
//     { name: "David" },
//     { name: "Carl" },
//   ];
//   const filteredAndSortedNames = namesArray
//     .filter((item) => item.name.startsWith("C"))
//     .map((item) => item.name);

//   return (
//     <div>
//       <h2>Names starting with 'C'</h2>
//       <ul>
//         {filteredAndSortedNames.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NamesList;

// Write a react component that is given a number prop and displays whether that number is a prime number or not.
// In React write a component that displays a button and two values. The first value is a simple counter.
// The second value is the product of that counter and 3 (that is counter * 3).
// When the button is pressed the counter is incremented by one and the second value is updated accordingly (
// that is if the counter is 3 the second value should be 9). The simple counter should start at 0.
