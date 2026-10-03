import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section className="bg-[#071b2b] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#61b8ff]">
              Esperienza cliente
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Un servizio pensato per rendere tutto più semplice.
            </h2>
          </div>

          <div className="text-left lg:text-right">
            <div className="text-xl tracking-[0.15em] text-white">★★★★★</div>
            <p className="mt-2 text-xs text-white/50">
              Area dimostrativa recensioni
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-white/10 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex min-h-[300px] flex-col justify-between bg-[#0b2234] p-8 lg:p-10"
            >
              <span className="text-5xl font-serif text-[#61b8ff]">“</span>

              <p className="mt-6 text-lg leading-8 text-white/90">
                {review.quote}
              </p>

              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  {review.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
