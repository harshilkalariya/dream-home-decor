import { createFileRoute } from "@tanstack/react-router";
import heroShowroom from "../assets/hero-showroom.jpg";
import catSofa from "../assets/cat-sofa.jpg";
import catCurtains from "../assets/cat-curtains.jpg";
import catLaminates from "../assets/cat-laminates.jpg";
import catWallpaper from "../assets/cat-wallpaper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nish Decor | Best Interior Decor & Furniture Store in Ahmedabad",
      },
      {
        name: "description",
        content:
          "Nish Decor is Ahmedabad's premier interior decor showroom — designer sofas, premium laminates, curtains, roller blinds, wall panels & wallpaper. Visit our Fortune Plaza showroom, New India Colony.",
      },
      {
        property: "og:title",
        content: "Nish Decor | Best Interior Decor & Furniture Store in Ahmedabad",
      },
      {
        property: "og:description",
        content:
          "Designer sofas, premium laminates, curtains, roller blinds, wall panels & wallpaper at Ahmedabad's premier decor showroom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  {
    title: "Designer Sofas",
    img: catSofa,
    desc: "Handcrafted sofa sets in velvet, leather & premium fabric — built for comfort and presence.",
  },
  {
    title: "Curtains & Drapery",
    img: catCurtains,
    desc: "Tailored drapes, sheer layers and blackout curtains in a curated palette of fabrics.",
  },
  {
    title: "Decorative Laminates",
    img: catLaminates,
    desc: "Textured laminate and wall cladding panels that add depth, grain and character.",
  },
  {
    title: "Luxury Wallpaper",
    img: catWallpaper,
    desc: "Damask, botanical and metallic wallcoverings for a refined statement wall.",
  },
];

const services = [
  {
    title: "Interior Consultation",
    desc: "On-site visits and design guidance to align every finish with your space and budget.",
  },
  {
    title: "Custom Furnishing",
    desc: "Bespoke sofas, curtains and blinds made to your exact dimensions, fabric and finish.",
  },
  {
    title: "Turnkey Installation",
    desc: "End-to-end fitting of laminates, wall panels and wallpaper with a clean, on-time finish.",
  },
  {
    title: "Premium Materials",
    desc: "Sourced fabrics, laminates and hardware chosen for durability and lasting finish.",
  },
];

const reviews = [
  {
    name: "Priya Shah",
    text: "Beautiful sofa set and the curtains match perfectly. The team understood exactly the warm look we wanted for our living room.",
    role: "Bodakdev, Ahmedabad",
  },
  {
    name: "Rohit Mehta",
    text: "Got our entire office laminate and wall panelling done here. Neat finishing, delivered on time, and the gold accents look stunning.",
    role: "Satellite, Ahmedabad",
  },
  {
    name: "Anjali Desai",
    text: "Best decor shop in Ahmedabad for curtains and roller blinds. Huge fabric range and honest pricing. Highly recommend Nish Decor.",
    role: "Vastrapur, Ahmedabad",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-wide text-gold">
              NISH
            </span>
            <span className="font-display text-2xl font-light tracking-[0.3em] text-foreground">
              DECOR
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#collections" className="transition-colors hover:text-gold">Collections</a>
            <a href="#about" className="transition-colors hover:text-gold">About</a>
            <a href="#services" className="transition-colors hover:text-gold">Services</a>
            <a href="#reviews" className="transition-colors hover:text-gold">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-gold">Contact</a>
          </nav>
          <a
            href="tel:+917859990555"
            className="rounded-full border border-gold/50 px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-background"
          >
            078599 95055
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroShowroom}
          alt="Nish Decor luxury interior showroom with sofas, curtains and wall panels"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Ahmedabad · Est. Decor & Furnishing
              </span>
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Where Every Room
              <br />
              Becomes a <span className="italic text-gold">Statement</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Designer sofas, premium laminates, curtains, roller blinds and wall
              panels — handpicked and custom-fitted for homes and offices across
              Ahmedabad.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                Explore Collections
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gold/40 px-8 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Visit Showroom
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-gold">4.9</span>
                <span>★ Google Rating</span>
              </span>
              <span className="h-8 w-px bg-border" />
              <span>68+ Verified Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 lg:grid-cols-4">
          {[
            ["500+", "Homes & Offices Styled"],
            ["15+", "Years of Craft"],
            ["1000+", "Custom Curtains Delivered"],
            ["4.9★", "Rated by 68+ Customers"],
          ].map(([num, label]) => (
            <div key={label} className="px-6 py-8 text-center">
              <div className="font-display text-4xl font-semibold text-gold">{num}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections — card grid */}
      <section id="collections" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Our Collections
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Curated for Every Surface
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From the sofa you sink into to the wall that greets your guests — every
            piece is selected, tailored and finished to elevate your space.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground opacity-90">
                  {c.desc}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                  Enquire →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About Nish Decor
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
              A Showroom Built on Craft & Trust
            </h2>
            <div className="mt-6 h-px w-24 bg-gold/60" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Nish Decor is one of Ahmedabad's most loved interior decor and
              furnishing stores, located at Fortune Plaza, New India Colony. For over
              a decade we've helped families and businesses turn empty rooms into
              warm, finished spaces — combining premium materials with honest
              pricing and on-time delivery.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Walk in for sofas, curtains, roller blinds, laminates, decorative wall
              panels and wallpaper — and leave with a plan tailored to your home.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "On-site measurement & consultation",
                "Custom fabrication to your spec",
                "Genuine, branded materials only",
                "Free design guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border/50">
              <img
                src={heroShowroom}
                alt="Inside the Nish Decor showroom"
                loading="lazy"
                width={1920}
                height={1088}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-gold/30 bg-background/90 p-6 backdrop-blur-md sm:block">
              <div className="font-display text-3xl font-semibold text-gold">15+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years of Decor Craft
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            What We Offer
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            From First Visit to Final Finish
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-border/50 bg-card/40 p-7 transition-colors hover:border-gold/50"
            >
              <div className="font-display text-3xl font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Loved by Customers
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
              4.9 ★ from 68+ Reviews
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-xl border border-border/50 bg-background/60 p-7"
              >
                <div className="mb-4 text-gold">★★★★★</div>
                <blockquote className="text-sm leading-relaxed text-foreground/90">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border/50 pt-4">
                  <div className="font-display text-lg font-semibold text-foreground">
                    {r.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {r.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-gold/30 bg-card/40">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Visit Our Showroom
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
                Let's Decorate Your Space
              </h2>
              <div className="mt-6 h-px w-24 bg-gold/60" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Drop by our Fortune Plaza showroom or call us — we'll walk you
                through fabrics, finishes and a plan that fits your budget.
              </p>

              <dl className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <span className="mt-1 text-gold">◆</span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Address
                    </dt>
                    <dd className="mt-1 text-foreground">
                      Fortune Plaza, 101, near Fortune Circle, New India Colony,
                      Ahmedabad, Gujarat 382330
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-gold">◆</span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Phone
                    </dt>
                    <dd className="mt-1 text-foreground">
                      <a href="tel:+917859990555" className="hover:text-gold">
                        078599 95055
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-gold">◆</span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Hours
                    </dt>
                    <dd className="mt-1 text-foreground">
                      Open daily · Closes 9:00 PM
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href="tel:+917859990555"
                className="mt-10 inline-flex rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                Call Now to Book a Visit
              </a>
            </div>
            <div className="relative min-h-[360px]">
              <iframe
                title="Nish Decor location map"
                src="https://www.google.com/maps?q=Fortune+Plaza+New+India+Colony+Ahmedabad+382330&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold tracking-wide text-gold">
                NISH
              </span>
              <span className="font-display text-xl font-light tracking-[0.3em] text-foreground">
                DECOR
              </span>
            </a>
            <p className="text-center text-xs text-muted-foreground">
              Best Interior Decor Shop in Ahmedabad · Furniture · Laminates ·
              Curtains · Blinds · Wallpaper
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nish Decor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
