import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Product {
  image: string;
  category: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<Product> = ({ image, category, rating, price }) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 tetx-[20px] text-orange-300">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 tetx-[20px] text-orange-300">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 3:
        return (
          <div className="flex gap-1 tetx-[20px] text-orange-300">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />

            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 4:
        return (
          <div className="flex gap-1 tetx-[20px] text-orange-300">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />

            <AiOutlineStar />
          </div>
        );

      case 5:
        return (
          <div className="flex gap-1 tetx-[20px] text-orange-300">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="container group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={image}
          width={200}
          height={300}
          alt={category}
          className="h-full w-full object-cover object-fill lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0" />
              {category}
            </a>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">
            {name || "No color specified"}
          </p> */}
          <div>{generateRating(rating)}</div>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${price}
          <del className="text-gray-500 font-normal ml-1">{price + 50}.00</del>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
