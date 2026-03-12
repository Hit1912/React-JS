export default function Product() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f1ea]">
      <div className="absolute right-[15%] top-[20%] h-50 w-50 rounded-full bg-yellow-200/40 blur-xl"></div>
      <div className="absolute left-[15%] top-[30%] h-30 w-30 rounded-full bg-yellow-200/40 blur-xl"></div>
      <div className="absolute bottom-[15%] right-[10%] h-37.5 w-37.5 rounded-full bg-yellow-200/40 blur-xl"></div>

      <div className="w-85 overflow-hidden rounded-[28px] bg-[#f6f1e8] shadow-xl">

        <div className="flex justify-center bg-linear-to-br from-yellow-300 to-orange-300 p-6">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"
            alt="Ice Cream"
            className="w-42.5"
          />
        </div>

        <div className="p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Vanilla ice cream
          </h2>

          <div className="mb-3 flex gap-3 text-sm text-gray-500">
            <span>Vegan</span>
            <span>Gluten free</span>
            <span>Organic</span>
          </div>

          <p className="mb-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="mb-5 flex gap-2">
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
              Choco chips
            </span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
              Nuts
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-orange-500">$10.00</h3>
              <p className="text-xs text-gray-400">+ $2 delivery</p>
            </div>

            <button className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600">
              Add to cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}