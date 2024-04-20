import NewProduct from "@/components/newproduct";
import { Sidebar } from "@/components/Sidebar";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products = await getData();
  return (
    <main className="grid grid-col-3 md:px-24">
      <section className="sidebar">

      </section>
      <section className='flex flex-col space-y-12 md:py-24 '>
				<h1 className='text-3xl font-bold '>
					Mens Clothing
				</h1>
				<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
					{products.slice(0, 12).map(product => (
						<NewProduct key={product.id} product={product} />
					))}
				</div>
			</section>
    </main>
  );
}
