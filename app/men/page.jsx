
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
    <main className="flex   justify-start md:px-24 md:gap-[100px] py-10">
      <section className="menu bg-base-200 w-[295px] rounded-box ">
        <h4 className="font-bold text-xl p-5">Filter</h4>
        <div >
          <div className="collapse collapse-arrow bg-base-200 ">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title font-medium">
              Tops
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Printed T-shirts
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Plain T-shirts
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Kurti
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Boxers
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Full sleeve T-shirts
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Joggers
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Payjamas
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title  font-medium">
              Jeans
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <input type="range" min={0} max="100" value="25" className="range" step="25" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </section>
      <section className='flex flex-col space-y-12 md:gap-[50px]'>
				<h1 className='text-3xl font-bold '>
					Mens Clothing
				</h1>
				<div className='grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
					{products.slice(0, 12).map(product => (
						<NewProduct key={product.id} product={product} />
					))}
				</div>
			</section>
      
    </main>
  );
}
