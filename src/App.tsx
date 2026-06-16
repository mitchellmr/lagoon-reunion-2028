import './App.css'

/** Wikimedia Commons — hotlinked per each file’s license; see footer for attribution. */
const IMG = {
  lagoon:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lagoon_park_utah_turn_of_the_century.jpg/1600px-Lagoon_park_utah_turn_of_the_century.jpg',
  antelope:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Antelope_Island.jpg/1600px-Antelope_Island.jpg',
  weber:
    'https://upload.wikimedia.org/wikipedia/commons/6/68/Fishing_on_Weber_River_%2841212343841%29.jpg',
  laytonTemple:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/LaytonUtahTemple.jpg/1600px-LaytonUtahTemple.jpg',
} as const

export default function App() {
  return (
    <div className="page">
      <div className="page__glow" aria-hidden />
      <div className="page__noise" aria-hidden />
      <div className="page__inner">
        <header className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">Save the date</p>
            <h1 className="hero__title">
              Five days in Farmington — <em>together.</em>
            </h1>
            <p className="hero__subtitle">
              We are honored to host the extended family for the 2028 reunion: summer
              nights, laughter, roots and river water, and room to catch up for real.
            </p>
            <p className="hero__hosts">Hosted with love · July 4–8, 2028</p>
          </div>
        </header>

        <section className="highlights" aria-label="Key details">
          <div className="highlight">
            <p className="highlight__label">When</p>
            <p className="highlight__value">July 4 – 8, 2028</p>
          </div>
          <div className="highlight">
            <p className="highlight__label">Where</p>
            <p className="highlight__value">Farmington, Utah</p>
          </div>
          <div className="highlight">
            <p className="highlight__label">Vibe</p>
            <p className="highlight__value">Celebrate &amp; reconnect</p>
          </div>
        </section>

        <div className="lede-wrap">
          <p className="lede">
            Below is the working itinerary—enough structure to make planning easy,
            enough flexibility for naps, side trips, and long conversations on the
            porch. <strong>Details and lodging will follow</strong>; for now, mark
            your calendars and start the group chat.
          </p>
        </div>

        <div className="nav-wrap">
          <nav className="toc" aria-label="Itinerary">
            <h2>Your week at a glance</h2>
            <ul>
              <li>
                <a href="#day-1">Day 1 — Welcome &amp; fireworks</a>
              </li>
              <li>
                <a href="#day-2">Day 2 — Lagoon</a>
              </li>
              <li>
                <a href="#day-3">Day 3 — Antelope Island &amp; Weber River</a>
              </li>
              <li>
                <a href="#day-4">Day 4 — Temple, farewell &amp; optional stay</a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="days">
          <article className="day-card" id="day-1">
            <div className="day-card__shine" aria-hidden />
            <div className="day-card__inner">
              <p className="day-card__label">Day 1 · Thursday, July 4</p>
              <h2>Welcome gathering &amp; fireworks</h2>
              <p>
                Arrive when you can—we will have food, name tags for the cousins you
                only see in photos, and space to settle in. After dinner, step outside
                for one of summer’s best gifts: a sky full of color, kids on blankets,
                and the easy joy of being in the same place at the same time.
              </p>
              <ul>
                <li>
                  <strong>Casual dress:</strong> red, white, blue, or whatever makes
                  you feel festive.
                </li>
                <li>
                  <strong>Kid-friendly:</strong> lawn games, sparklers where allowed,
                  and patience for little bedtimes.
                </li>
                <li>
                  <strong>Evening highlight:</strong> community fireworks and
                  togetherness under open sky.
                </li>
              </ul>
            </div>
          </article>

          <article className="day-card" id="day-2">
            <div className="day-card__shine" aria-hidden />
            <div className="day-card__inner">
              <p className="day-card__label">Day 2 · Friday, July 5</p>
              <h2>Lagoon — rides, water, and a classic Utah summer day</h2>
              <p>
                <a
                  href="https://www.lagoonpark.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lagoon
                </a>{' '}
                is a generational tradition for a reason: roller coasters and classics
                for the brave, gentle rides for little ones, Lagoon A Beach when the
                afternoon heats up, and live entertainment as the sun goes down—all in
                Farmington, minutes from our base camp. We will coordinate tickets and
                meet-up spots so no one wastes a minute of fun figuring out logistics.
              </p>

              <figure className="spotlight">
                <div className="spotlight__frame">
                  <img
                    className="spotlight__img"
                    src={IMG.lagoon}
                    width={1600}
                    height={1200}
                    alt="Turn of the Century swing ride at Lagoon amusement park in Farmington, Utah."
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="spotlight__caption">
                  The Turn of the Century ride at Lagoon—classic summer energy in
                  Farmington. Photo: Ricardo630 (
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Lagoon_park_utah_turn_of_the_century.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikimedia Commons
                  </a>
                  ,{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CC&nbsp;BY‑SA&nbsp;4.0
                  </a>
                  ).
                </figcaption>
              </figure>

              <ul>
                <li>
                  <strong>Something for everyone:</strong> from kiddie rides to
                  adrenaline—pick your own adventure.
                </li>
                <li>
                  <strong>Stay cool:</strong> water features, shade breaks, and
                  hydration built into the plan.
                </li>
                <li>
                  <strong>Eat well:</strong> park treats or picnic—your call; we will
                  share the best spots to regroup.
                </li>
                <li>
                  <strong>Memories:</strong> photos, matching shirts optional, matching
                  screams on the Cannibal entirely encouraged.
                </li>
              </ul>
              <p className="pullquote">
                A full day of yes—then home to air conditioning and retelling every
                story twice.
              </p>
            </div>
          </article>

          <article className="day-card" id="day-3">
            <div className="day-card__shine" aria-hidden />
            <div className="day-card__inner">
              <p className="day-card__label">Day 3 · Saturday, July 6</p>
              <h2>Antelope Island &amp; float the Weber River</h2>
              <p>
                Morning on Antelope Island: wide skies, the Great Salt Lake shimmering
                in the distance, and a visit to the Fielding Garr Ranch—where our
                family’s story touches the land. Walk the historic homestead, take in
                the views, and let the kids see bison at a respectful distance.
              </p>

              <figure className="spotlight">
                <div className="spotlight__frame">
                  <img
                    className="spotlight__img"
                    src={IMG.antelope}
                    width={1600}
                    height={1200}
                    alt="Antelope Island rising above the Great Salt Lake, seen from the causeway."
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="spotlight__caption">
                  Antelope Island and the Great Salt Lake—big sky country for our Fielding
                  Garr morning. Photo: Tom53 (
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Antelope_Island.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikimedia Commons
                  </a>
                  , public domain).
                </figcaption>
              </figure>

              <ul>
                <li>
                  <strong>Heritage:</strong> meaningful time at a place tied to our
                  ancestors—bring questions for the family historians.
                </li>
                <li>
                  <strong>Nature:</strong> wildlife, trails, and photo ops you will
                  actually want in the album.
                </li>
                <li>
                  <strong>Comfort:</strong> sunscreen, hats, water bottles, and bug
                  repellent so nothing distracts from the scenery.
                </li>
              </ul>
              <p>
                Afternoon: a relaxed float down the Weber River—tubes, gentle current,
                and conversation drifting along with you. It is the perfect counterpoint
                to yesterday’s thrills: cool water, green banks, and room to breathe.
              </p>

              <figure className="spotlight spotlight--portrait">
                <div className="spotlight__frame spotlight__frame--portrait">
                  <img
                    className="spotlight__img"
                    src={IMG.weber}
                    width={768}
                    height={1024}
                    alt="Angler fishing on the Weber River with trees along the bank."
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="spotlight__caption">
                  The Weber River—green banks and calm stretches perfect for a mellow
                  afternoon float. Photo: Bureau of Land Management Utah (
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Fishing_on_Weber_River_(41212343841).jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikimedia Commons
                  </a>
                  , public domain U.S. federal work).
                </figcaption>
              </figure>

              <ul>
                <li>
                  <strong>All skill levels:</strong> mellow water suitable for
                  families; we will share outfitter or shuttle notes when finalized.
                </li>
                <li>
                  <strong>What to bring:</strong> quick-dry clothes, river shoes, and
                  a waterproof pouch for your phone if you are brave.
                </li>
              </ul>
            </div>
          </article>

          <article className="day-card" id="day-4">
            <div className="day-card__shine" aria-hidden />
            <div className="day-card__inner">
              <p className="day-card__label">Days 4–5 · July 7–8</p>
              <h2>Gratitude, temple, and travels home</h2>
              <p>
                Sunday we reset the house together—many hands make light work, and it
                is a sweet way to say thank you before goodbyes. For those who would
                like to attend the temple, we plan to gather at the{' '}
                <strong>Layton Utah Temple</strong> (a short drive from Farmington); we
                will arrange a calm, coordinated visit so everyone feels welcome and
                prepared.
              </p>

              <figure className="spotlight">
                <div className="spotlight__frame">
                  <img
                    className="spotlight__img"
                    src={IMG.laytonTemple}
                    width={1600}
                    height={900}
                    alt="Exterior of the Layton Utah Temple at dusk with landscaped grounds."
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="spotlight__caption">
                  Layton Utah Temple—peaceful grounds for reflection before travels home.
                  Photo: Whatsupchadjames (
                  <a
                    href="https://commons.wikimedia.org/wiki/File:LaytonUtahTemple.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikimedia Commons
                  </a>
                  ,{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CC&nbsp;BY‑SA&nbsp;4.0
                  </a>
                  ).
                </figcaption>
              </figure>

              <ul>
                <li>
                  <strong>Clean-up:</strong> simple tasks, clear instructions, coffee
                  for the early crew.
                </li>
                <li>
                  <strong>Temple:</strong> optional; we will share times and
                  expectations for anyone joining.
                </li>
                <li>
                  <strong>Monday:</strong> head home rested—or stay a little longer for
                  independent exploring, cousin breakfasts, or one last hike.
                </li>
              </ul>
              <p className="pullquote">
                The best souvenir is the group text that keeps buzzing long after the
                cars pull away.
              </p>
            </div>
          </article>
        </main>

        <footer className="footer">
          <p>
            <strong>Questions?</strong> Reach out as plans firm up—we are grateful you
            are considering the trip, and we cannot wait to hug you in Farmington.
          </p>
          <p className="footer__note">
            Park hours, tickets, and amenities for Lagoon are published on{' '}
            <a
              href="https://www.lagoonpark.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              lagoonpark.com
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
