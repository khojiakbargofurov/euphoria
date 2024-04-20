
import NewProduct from "@/components/newproduct";
import { Sidebar } from "@/components/Sidebar";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products = await getData();
  return (
    <main className="flex   justify-start md:px-24 gap-6">
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
      <section className='flex flex-col space-y-12  '>
				<h1 className='text-3xl font-bold '>
					Womens Clothing
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
