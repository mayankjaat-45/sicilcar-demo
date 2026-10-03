const stats = [
  {
    value: "1986",
    label: "Da oltre 40 anni a Messina",
  },
  {
    value: "01",
    label: "Assistenza diretta e locale",
  },
  {
    value: "24/7",
    label: "Supporto durante il viaggio",
  },
  {
    value: "100%",
    label: "Soluzioni flessibili",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#f5f7f9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#005baa]">
            Perché SicilCar
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Esperienza locale.
            <br />
            Un modo più semplice di viaggiare.
          </h2>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[30px] border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-8 lg:p-10 ${
                index !== stats.length - 1
                  ? "border-b border-slate-200 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <p className="text-4xl font-semibold tracking-tight text-[#005baa]">
                {stat.value}
              </p>

              <p className="mt-4 max-w-[180px] text-sm leading-6 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
