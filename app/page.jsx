import { Cards } from "@/components/Card";
import { Carousel } from "@/components/Carousel";
import { Navbar } from "@/components/Navbar";
import NewProduct from "@/components/newproduct";
import Product from "@/components/product";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products = await getData();
  const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 8);
  return (
    <main className="">
      <Carousel/>
      <section className='flex flex-col space-y-12 md:px-24 md:py-24'>
				<h1 className='text-3xl font-bold '>
					New Arrival
				</h1>
				<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.slice(0, 4).map(product => (
						<NewProduct key={product.id} product={product} />
					))}
				</div>
			</section>
      <section className='flex flex-col space-y-12 md:px-24 md:py-24'>
        <h1 className='text-3xl font-bold'>
          Categories For Men
        </h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {randomProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      <div className=" section pt-[70px] pb-[136px] flex justify-between  ">
        <div className="w-[376px] h-[292px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <img src="./Stars.png" alt="" />
            </div>
            <h1 className="text-[#3C4242] text-[22px] font-normal">Floyd Miles</h1>
            <p className="text-[#807D7E] text-[14px] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div className="w-[376px] h-[292px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <img src="./Stars (1).png" alt="" />
            </div>
          <h1 className="text-[#3C4242] text-[22px] font-normal">Ronald Richards</h1>
          <p className="text-[#807D7E] text-[14px] font-normal">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div className="w-[376px] h-[292px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <img src="./Stars (2).png" alt="" />
            </div>
            <h1 className="text-[#3C4242] text-[22px] font-normal">Savannah Nguyen</h1>
            <p className="text-[#807D7E] text-[14px] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
