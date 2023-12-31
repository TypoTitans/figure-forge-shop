'use client';
import React, { useContext, useEffect, useState } from 'react';
import Rating from '@/app/components/public/Rating';
import { FiguresContext } from '@/app/contexts/figures.context';
import { Toy } from '@/app/types/types';
import CarouselDetail from '@/app/components/public/CarouselDetail';
import { useShoppingCart } from '@/app/contexts/cartContext';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  params: { id: string };
};

const DetailPage = ({ params }: Props) => {
  const [data, setData] = useState<Toy | undefined>(undefined);
  const { toys } = useContext(FiguresContext);

  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();

  let quantity = getItemQuantity(params.id);

  useEffect(() => {
    const fetchBackend = async () => {
      const toy = toys.find((toy) => toy.id === params.id);
      if (toy) {
        setData(toy);
      }
    };

    fetchBackend();
  }, [params.id, toys]);
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });

  if (data) {
    return (
      <>
        <CarouselDetail pictures={data.pictures} />
        <div className="w-full h-20 bg-background text-text text-4xl flex justify-center items-center">
          {data.name}
        </div>

        <div className="flex justify-center my-5">
          {quantity === 0 ? (
            <button
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-text bg-primary font-medium flex flex-row justify-center transition ease-in-out delay-350 hover:bg-secondary hover:transition-all"
              onClick={() => increaseCartQuantity(params.id)}
            >
              <ShoppingCartIcon className="h-6 text-text" />
              &nbsp;Add to cart
            </button>
          ) : (
            <button
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-text bg-red-600 font-medium text-center items-center justify-center transition ease-in-out delay-350 hover:bg-red-800 hover:transition-all"
              onClick={() => removeFromCart(params.id)}
            >
              <XMarkIcon className="h-6 text-text" />
              &nbsp;Remove from cart
            </button>
          )}
        </div>
        <div className="md:px-40 flex flex-col items-start sm:flex-row h-max mb-4 py-10">
          <div className="flex flex-col mx-auto items-start md:items-center sm:justify-center py-4 gap-10 ">
            <legend className="text-2xl text-text font-semibold text-center w-full">
            Details
            </legend>
            <div className="w-screen max-w-sm">
              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">
                  <label
                    className="block text-text font-bold mb-1 pr-4"
                    htmlFor="inline-origin"
                  >
                    Origin
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-origin"
                    type="text"
                    value={data.origin}
                    readOnly
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">
                  <label
                    className="block text-text font-bold mb-1 pr-4"
                    htmlFor="inline-origin"
                  >
                    Brand
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-brand"
                    type="text"
                    value={data.brand}
                    readOnly
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">
                  <label
                    className="block text-text font-bold mb-1 pr-4"
                    htmlFor="inline-origin"
                  >
                    Price
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-price"
                    type="text"
                    value={formatter.format(data.price)}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto items-start md:items-center sm:justify-center py-4 gap-10 ">
            <legend className="text-2xl text-text font-semibold text-center w-full">
              Dimension
            </legend>
            <div className="w-full max-w-sm">

              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">

                  <label
                    className="block  text-text font-bold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-width"
                  >
                    Width
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-width"
                    type="text"
                    value={data.width + ' cm'}
                    readOnly
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">
                  <label
                    className="block  text-text font-bold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-height"
                  >
                    Height
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-height"
                    type="text"
                    value={data.height + ' cm'}
                    readOnly
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">
                  <label
                    className="block  text-text font-bold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-height"
                  >
                    Length
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-height"
                    type="text"
                    value={data.length + ' cm'}
                    readOnly
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-col items-center">
                <div className="md:w-2/3">
                  <label
                    className="block  text-text font-bold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-height"
                  >
                    Weight
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-screen sm:w-full py-2 px-4 text-background leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-diameter"
                    type="text"
                    readOnly
                    value={data.weight + ' g'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center md:items-center h-max mb-4 mx-auto">
          <legend className="text-lg text-text font-semibold mb-4">
            Description
          </legend>
          <div className="appearance-none block w-screen sm:w-4/5 bg-gray-200 text-background border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            {data.description}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center md:items-center h-max mb-4 mx-auto">
          <legend className="text-lg text-text font-semibold mb-4">
            Conditions
          </legend>
          <div className="appearance-none block w-screen sm:w-4/5 bg-gray-200 text-background border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            {data.condition}
          </div>
        </div>

        <Rating star={data.rating} />
      </>
    );
  }
};

export default DetailPage;
