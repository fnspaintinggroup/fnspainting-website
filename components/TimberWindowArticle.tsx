import Image from "next/image";
import Link from "next/link";

// Approved 20 September 2026 publication copy; preserve the editorial order.
export function TimberWindowArticle() {
  return (
    <div className="text-base leading-8 text-ink/75">
      <figure className="my-8">
        <Image
          src="/images/projects/mona-vale-heritage-gallery-07.png"
          alt="Painted interior timber sash windows in a Mona Vale home"
          width={1448}
          height={1086}
          priority
          sizes="(min-width: 1024px) 768px, 100vw"
          className="h-auto w-full rounded-md"
        />
        <figcaption className="mt-3 text-sm leading-6 text-ink/60">
          Completed interior sash window painting in{" "}
          <Link
            className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
            href="/painting-gallery/mona-vale-heritage-interior-painting#sash-window-painting"
          >
            Mona Vale
          </Link>
          .
        </figcaption>
      </figure>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        The short answer
      </h2>
      <p className="mb-5">
        Spring is when many people find out which windows still work. A window
        that will not budge, or that shows flaking paint and grey bare timber
        along the bottom rail, does not automatically need replacing. If the
        timber underneath is sound, suitable preparation and repainting can
        protect it and improve its appearance. Paint cannot fix timber that has
        rotted through, a frame that has moved or a broken sash mechanism. If
        better insulation or noise reduction is the aim, a glazing upgrade may
        be worth exploring too. Work out which problem you are looking at first,
        because the answer changes the work and the budget.
      </p>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        Why timber windows stick
      </h2>
      <p className="mb-5">
        Paint build-up is one reason timber windows become difficult to open.
        Moisture movement, worn hardware, broken sash cords and frame damage can
        also be involved.
      </p>
      <p className="mb-5">
        Every repaint adds a film of paint. When previous coats went on with the
        window closed, or too thickly into the rebate where sash meets frame,
        those surfaces can bond as the paint cures. Add a humid Sydney summer,
        timber that swells with moisture, and eight or nine accumulated layers,
        and the window can stop moving.
      </p>
      <p className="mb-5">
        Forcing it can break glass or damage sash joints. Have the condition of
        the window assessed before attempting to release it. Where paint
        build-up is the cause, suitable preparation may help restore movement,
        subject to the condition of the window.
      </p>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        What a repaint costs, and what it protects
      </h2>
      <p className="mb-5">
        This is where the decision usually gets made. Based on the published
        guidance we reviewed, replacing timber windows can involve a substantial
        investment. For context,{" "}
        <Link
          className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
          href="https://windowsrepublic.com.au/blog/double-glazed-sash-windows-cost/"
        >
          Windows Republic&apos;s 2026 Melbourne guide
        </Link>{" "}
        lists the following reference ranges:
      </p>
      <div className="my-6 max-w-full overflow-x-auto rounded-md border border-ink/10">
        <table className="w-full border-collapse bg-white text-left text-sm">
          <thead className="bg-gumleaf text-ink">
            <tr>
              <th
                scope="col"
                className="border-b border-ink/10 px-4 py-3 font-semibold"
              >
                Option
              </th>
              <th
                scope="col"
                className="border-b border-ink/10 px-4 py-3 font-semibold"
              >
                Published guide range, per window (AUD)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                Timber double-glazed sash replacement
              </td>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                $2,800–$5,800
              </td>
            </tr>
            <tr>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                Heritage timber replication
              </td>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                $4,500–$7,500+
              </td>
            </tr>
            <tr>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                uPVC vertical sliding sash
              </td>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                $1,900–$3,600
              </td>
            </tr>
            <tr>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                Retrofit double glazing into existing frames
              </td>
              <td className="border-b border-ink/10 px-4 py-3 align-top">
                $1,200–$2,800
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-5 text-sm leading-7 text-ink/65">
        These are third-party reference figures for Melbourne, not Sydney
        quotations or F&amp;S Painting prices. Confirm GST, installation and any
        additional work with the supplier. The options involve different work
        and specifications, so they are not a like-for-like comparison with
        repainting.
      </p>
      <p className="mb-5">
        Where the timber is sound and the main issue is its coating, repainting
        may be the more economical option. The cost depends on the number and
        size of windows, the surfaces included, preparation, repairs and access.
        Upper-floor windows may need additional access equipment; detailed
        glazing bars take more time than a plain frame. A site-based quote is
        the most useful way to compare the options for your home.
      </p>
      <p className="mb-5">
        The initial cost is only half the argument. Exterior timber needs a
        sound coating to help protect it from weather. Bare timber can grey,
        take up moisture, split and eventually decay. Repainting is maintenance
        on an existing asset, as well as an improvement to its appearance.
      </p>
      <p className="mb-5">
        There is no single repainting interval for every window. Exposure,
        coating choice, previous preparation and condition all matter. Inspect
        the finish regularly and plan maintenance before widespread coating
        failure leaves timber exposed.
      </p>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        When repainting is not the right answer
      </h2>
      <p className="mb-5">
        Paint protects sound timber. It does not rebuild timber that has gone.
      </p>
      <p className="mb-5">
        Look for visible deterioration around the bottom rail and lower corners,
        where water can collect: open joints, missing putty, damaged timber or a
        sash sitting out of square. Avoid probing old painted surfaces yourself.
        A suitable tradesperson can assess whether repairs are practical before
        repainting is planned.
      </p>
      <p className="mb-5">
        Small repairs and more substantial timber, glazing or mechanism work are
        different jobs. Confirm what is included in the quote rather than
        assuming all repairs come with the paint job.
      </p>
      <p className="mb-5">
        If the goal is thermal or acoustic performance, paint alone will not
        solve it. Replacement or a glazing upgrade may be the better investment.
        Some sound existing frames can accept retrofit glazing, but suitability
        needs assessment. The useful question is not simply whether a window
        looks tired, but what you need it to do.
      </p>
      <figure className="my-8">
        <Image
          loading="lazy"
          src="/images/projects/north-willoughby-exterior-house-repaint-front-window-finish.jpg"
          alt="Painted exterior timber sash window in North Willoughby"
          width={2400}
          height={1800}
          sizes="(min-width: 1024px) 768px, 100vw"
          className="h-auto w-full rounded-md"
        />
        <figcaption className="mt-3 text-sm leading-6 text-ink/60">
          Completed exterior sash window painting in{" "}
          <Link
            className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
            href="/painting-gallery/north-willoughby-exterior-house-repaint-gallery#sash-window-painting"
          >
            North Willoughby
          </Link>
          .
        </figcaption>
      </figure>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        Heritage areas can affect the decision
      </h2>
      <p className="mb-5">
        Many North Shore and inner Sydney homes sit inside heritage conservation
        areas. If your home is one of them, the choice may already be narrowed
        for you.
      </p>
      <p className="mb-5">
        Some maintenance or like-for-like repairs may be exempt from development
        consent, but the rules and process depend on the property and council.
        Original colours do not automatically mean approval is unnecessary. For
        example, the City of Sydney&apos;s heritage exemption process can
        require written confirmation before work starts.
      </p>
      <p className="mb-5">
        Replacing original timber with a different material or changing the
        appearance may need consent. Check your council&apos;s controls before
        committing to painting, repairs or replacement.
      </p>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        Why window painting is skilled work
      </h2>
      <p className="mb-5">
        Windows involve a lot of detail in a small area. Five things make a
        difference.
      </p>
      <p className="mb-5">
        <strong>Glass is unforgiving.</strong> A clean line where paint meets
        glass is a visible test of a painter. On traditional putty-glazed
        windows, the coating detail at the glass edge matters; other glazing
        systems need their own treatment.
      </p>
      <p className="mb-5">
        <strong>Old frames are delicate.</strong> Putty hardens and cracks,
        beads split and thin old glass can be damaged. Aggressive preparation
        around a pane can turn a small job into a glazier&apos;s callout.
      </p>
      <p className="mb-5">
        <strong>Repairs need a clear scope.</strong> Missing putty, timber
        deterioration and open joints should be identified before coating. Agree
        which repairs are included and which need another trade.
      </p>
      <p className="mb-5">
        <strong>Detail work is the difference.</strong> Multi-pane sashes,
        glazing bars, decorative beads and shaped heads take longer than a plain
        frame, and they are where a rushed job shows.
      </p>
      <p className="mb-5">
        <strong>The moving parts need care.</strong> Sashes, stops, beads and
        rebates each need appropriate treatment. Paint should not bridge moving
        joints or obstruct hardware.
      </p>
      <p className="mb-5">
        Interior and exterior faces need suitable coating specifications too.
        Bare or repaired timber needs preparation and priming matched to the
        surface and paint system. Exterior coatings must suit weather exposure;
        interior work also needs attention to ventilation, drying and the finish
        around the glass.
      </p>
      <figure className="my-8">
        <Image
          loading="lazy"
          src="/images/projects/chatswood-exterior-upper-roofline-detail.jpg"
          alt="Painted upper-storey sash windows at a Chatswood home"
          width={2400}
          height={1800}
          sizes="(min-width: 1024px) 768px, 100vw"
          className="h-auto w-full rounded-md"
        />
        <figcaption className="mt-3 text-sm leading-6 text-ink/60">
          Completed exterior sash window painting in{" "}
          <Link
            className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
            href="/painting-gallery/chatswood-exterior-house-painting#sash-window-painting"
          >
            Chatswood
          </Link>
          .
        </figcaption>
      </figure>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        Frequently asked questions about timber window painting
      </h2>
      <h3 className="mb-2 mt-7 text-xl font-semibold leading-snug text-ink">
        Can a window that has been painted shut be freed?
      </h3>
      <p className="mb-5">
        Often, where paint build-up is the cause. A broken sash cord, distorted
        frame or decayed timber needs a different solution. The cause should be
        assessed first, and any release or repair work separately identified in
        the quote.
      </p>
      <h3 className="mb-2 mt-7 text-xl font-semibold leading-snug text-ink">
        How often should timber windows be repainted?
      </h3>
      <p className="mb-5">
        It depends on exposure, the coating system and its condition. Sunny or
        weather-exposed elevations may need attention sooner. Inspect for
        cracking, peeling and exposed timber rather than relying on a fixed
        number of years.
      </p>
      <h3 className="mb-2 mt-7 text-xl font-semibold leading-snug text-ink">
        What does it cost to paint windows in Sydney?
      </h3>
      <p className="mb-5">
        It depends on how many windows there are, their size and detail, which
        faces are included, preparation and access. Compare quotes for the same
        scope, including repairs, access equipment and GST. A site assessment is
        the most useful way to establish a realistic total.
      </p>
      <h3 className="mb-2 mt-7 text-xl font-semibold leading-snug text-ink">
        Can you just paint over peeling window paint?
      </h3>
      <p className="mb-5">
        No. Flaking coating has already lost adhesion, and a new coat can lift
        with it. Failed coatings need suitable preparation, with old paint
        assessed before disturbance. Bare or repaired timber needs the
        appropriate primer before finish coats.
      </p>
      <h3 className="mb-2 mt-7 text-xl font-semibold leading-snug text-ink">
        Is repainting worthwhile if the windows may be replaced in a few years?
      </h3>
      <p className="mb-5">
        It can be, if maintenance will protect sound timber while you plan the
        next step. Balance the condition of the windows, the proposed
        replacement date and the amount of preparation needed. If a glazing
        upgrade is the aim, ask whether the existing frames are suitable before
        deciding.
      </p>
      <h3 className="mb-2 mt-7 text-xl font-semibold leading-snug text-ink">
        What about steel-framed windows?
      </h3>
      <p className="mb-5">
        Steel frames need a different assessment, including corrosion and
        suitable metal primers. Advice about timber preparation should not be
        applied directly to steel. Identify the frame material when seeking a
        quote.
      </p>
      <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
        Before you decide
      </h2>
      <p className="mb-5">
        A tired finish and a failed window are not the same thing. Start with
        the timber&apos;s condition, the way the window operates and what you
        want to improve. Then compare the preparation, repairs or upgrades
        needed to reach that result. Sound timber is worth looking after; a
        coating should not be asked to solve a structural or glazing problem.
      </p>
      <section className="text-sm leading-7">
        <h2 className="mb-4 mt-12 text-2xl font-semibold leading-tight text-ink">
          Sources and further reading
        </h2>
        <ul className="mb-5 list-disc space-y-2 pl-5">
          <li>
            <Link
              className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
              href="https://windowsrepublic.com.au/blog/double-glazed-sash-windows-cost/"
            >
              Windows Republic — 2026 Melbourne sash-window cost guide
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
              href="https://www.cityofsydney.nsw.gov.au/development-applications/gain-exemption-development-consent-heritage-works"
            >
              City of Sydney — Heritage works exemptions
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
              href="https://www.woodsolutions.com.au/sites/default/files/2025-10/WS%20TDG%2010%20-%20Timber%20Windows%20and%20Doors.pdf"
            >
              WoodSolutions — Timber Windows and Doors
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
              href="https://www.yourhome.gov.au/passive-design/glazing"
            >
              Your Home — Glazing
            </Link>
          </li>
        </ul>
        <p className="mb-5 text-sm leading-7 text-ink/65">
          Sources reviewed 19 September 2026. Conditions and requirements vary
          by property; check the scope of work with the relevant tradesperson
          and council.
        </p>
      </section>
      <div className="mt-10 border-t border-ink/15 pt-7">
        <p className="mb-5">
          F&amp;S Painting provides interior and exterior timber window
          repainting across Sydney. Window and frame replacement and glazing
          upgrades are outside our scope.{" "}
          <Link
            className="font-medium text-eucalyptus underline underline-offset-4 hover:text-clay"
            href="/services/timber-window-painting"
          >
            Explore our timber window painting service
          </Link>
          .
        </p>
        <p className="mb-5 text-sm leading-7 text-ink/65">
          For a quote, a few photos, the number of windows and whether you need
          interior or exterior painting are a helpful starting point.
        </p>
        <Link
          className="inline-flex rounded-md bg-clay px-5 py-3 font-semibold text-white no-underline hover:bg-clay/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-eucalyptus"
          href="/contact#quote-name"
        >
          Request a Free Window Painting Quote &#8594;
        </Link>
      </div>
    </div>
  );
}
