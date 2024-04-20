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
    </main>
  );
}
