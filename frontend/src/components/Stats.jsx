function Stats() {
  return (
    <section className="px-10 md:px-20 py-20">

      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-[#111827] p-8 rounded-3xl text-center border border-gray-800 hover:border-purple-500 transition">
          <h1 className="text-5xl font-bold text-purple-500">50+</h1>
          <p className="text-gray-400 mt-3">AI Celebrity Teachers</p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl text-center border border-gray-800 hover:border-purple-500 transition">
          <h1 className="text-5xl font-bold text-purple-500">100+</h1>
          <p className="text-gray-400 mt-3">Courses Available</p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl text-center border border-gray-800 hover:border-purple-500 transition">
          <h1 className="text-5xl font-bold text-purple-500">1M+</h1>
          <p className="text-gray-400 mt-3">Students Learning</p>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl text-center border border-gray-800 hover:border-purple-500 transition">
          <h1 className="text-5xl font-bold text-purple-500">24/7</h1>
          <p className="text-gray-400 mt-3">AI Support</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;