import ProductCard from "./components/ProductCard";
import { products } from "@/lib/product";

export default function Home() {
  return (
    <>
      <main className="py-[48px] px-[20px] sm:px-[40px]">
        <p>
          Найдено товаров: <span className="ml-2">34</span>
        </p>
        <section className="mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[80px]">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              description={product.description}
              discount_price={product.discount_price}
              img={product.img}
              tag_price={product.tag_price}
              title={product.title}
              use={product.use}
              weight={product.weight}
            />
          ))}
        </section>
        <section className="my-12 w-full flex flex-col sm:flex-row sm:justify-between gap-4 text-[#29474C]">
          <button className="bg-[#F3F4F6] rounded-2xl px-5 py-3 text-lg font-medium">
            {" "}
            Загрузить больше
          </button>

          <div className="text-center items-center flex gap-2 ">
            <div className="flex justify-center items-center text-white  font-medium rounded-full w-[40px] h-[40px] bg-[#29474C]">
              1
            </div>
            <div className="flex justify-center items-center font-medium rounded-full w-[40px] h-[40px] bg-[#F3F4F6]">
              2
            </div>
            <div className="flex justify-center items-center font-medium rounded-full w-[40px] h-[40px] bg-[#F3F4F6]">
              3
            </div>
            <div className="flex justify-center items-center font-medium rounded-full w-[40px] h-[40px] bg-[#F3F4F6]">
              4
            </div>
            <div className="flex justify-center items-center font-medium rounded-full w-[40px] h-[40px] bg-[#F3F4F6]">
              ...
            </div>
            <div className="flex justify-center items-center font-medium rounded-full w-[40px] h-[40px] bg-[#F3F4F6]">
              8
            </div>
            <div className="flex justify-center items-center font-medium rounded-full w-[40px] h-[40px] bg-[#F3F4F6]">
              9
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
