import { useState, useRef } from 'react';
import { ArrowUpRight, CalendarDays, MapPin, Copy, Check, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Spotlight hover hook/wrapper to calculate cursor position
export function SpotlightWrapper({ children, className = '' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card glass-card relative p-6 transition-all duration-300 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function DetailCard({ title, subtitle, meta, location, details = [] }) {
  return (
    <SpotlightWrapper>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold leading-tight text-gradient">{title}</h3>
          <p className="mt-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-tealAccent">{subtitle}</p>
        </div>
        {meta ? (
          <span className="inline-flex shrink-0 items-center gap-2 border border-line bg-charcoal/80 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
            <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
            {meta}
          </span>
        ) : null}
      </div>
      {location ? (
        <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ash">
          <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
          {location}
        </p>
      ) : null}
      {details.length ? (
        <ul className="mt-5 space-y-3.5 text-sm leading-7 text-ash">
          {details.map((detail) => (
            <li key={detail} className="flex gap-3 items-start">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </SpotlightWrapper>
  );
}

// Generate citation text
function getCitation(pub, format) {
  const isKmeans = pub.doi.includes('ATDE230109');
  
  if (format === 'apa') {
    if (isKmeans) {
      return `Talaat, A., Iijima, J., Gheith, M., & Eltawil, A. (2023). An Integrated k-Means Clustering and Bi-Objective Optimization Approach for External Trucks Scheduling in Container Terminals. ICIEA-PapersOnLine, 35(10), 805-814. https://doi.org/10.3233/ATDE230109`;
    } else {
      return `Talaat, A., Gheith, M., & Eltawil, A. (2023). A Multi-Stage Approach for External Trucks and Yard Cranes Scheduling with CO2 Emissions Considerations in Container Terminals. Logistics, 7(4), 87. https://doi.org/10.3390/logistics7040087`;
    }
  } else {
    // BibTeX
    if (isKmeans) {
      return `@article{talaat2023integrated,
  title={An Integrated k-Means Clustering and Bi-Objective Optimization Approach for External Trucks Scheduling in Container Terminals},
  author={Talaat, Ahmed and Iijima, Junichi and Gheith, Mohamed and Eltawil, Amr},
  journal={ICIEA-PapersOnLine},
  volume={35},
  number={10},
  pages={805--814},
  year={2023},
  publisher={IOS Press},
  doi={10.3233/ATDE230109}
}`;
    } else {
      return `@article{talaat2023multistage,
  title={A Multi-Stage Approach for External Trucks and Yard Cranes Scheduling with CO2 Emissions Considerations in Container Terminals},
  author={Talaat, Ahmed and Gheith, Mohamed and Eltawil, Amr},
  journal={Logistics},
  volume={7},
  number={4},
  pages={87},
  year={2023},
  publisher={MDPI},
  doi={10.3390/logistics7040087}
}`;
    }
  }
}

export function PublicationCard({ publication, index }) {
  const [showCitation, setShowCitation] = useState(false);
  const [citationFormat, setCitationFormat] = useState('apa'); // 'apa' or 'bibtex'
  const [copied, setCopied] = useState(false);

  const citationText = getCitation(publication, citationFormat);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <article className="group border border-line bg-panel/40 backdrop-blur-md rounded-none overflow-hidden transition-all duration-400 hover:border-accent/50 hover:bg-panel/60">
      <div className="grid gap-0 lg:grid-cols-[10rem_1fr]">
        {/* Left column info */}
        <div className="border-b border-line p-6 lg:border-b-0 lg:border-r bg-charcoal/30 flex flex-col justify-between">
          <div>
            <p className="font-serif text-5xl font-extrabold leading-none text-offwhite/15">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="mt-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent">
              Journal Article
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-wrap gap-2">
            <span className="border border-line bg-charcoal px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ash">
              2023
            </span>
            <span className="border border-line bg-charcoal px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-tealAccent">
              Peer-Reviewed
            </span>
          </div>
        </div>

        {/* Right column details */}
        <div className="p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-bold leading-snug text-offwhite sm:text-3xl group-hover:text-accent transition-colors duration-300">
            {publication.title}
          </h3>
          
          <dl className="mt-6 grid gap-4 border-y border-line/60 py-5 font-sans md:grid-cols-[0.2fr_0.8fr]">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ash font-bold">Authors</dt>
            <dd className="text-sm leading-6 text-neutral-300 font-medium">{publication.authors}</dd>
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ash font-bold">Venue</dt>
            <dd className="text-sm leading-6 text-neutral-300 font-medium italic">{publication.venue}</dd>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            {/* DOI Link */}
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-accent bg-accent/90 px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-offwhite transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-accent hover:shadow-accent-glow"
            >
              DOI: {publication.doi}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            {/* Citation accordion toggle */}
            <button
              onClick={() => setShowCitation(!showCitation)}
              className="inline-flex items-center gap-2 border border-line bg-charcoal/70 px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ash transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-offwhite"
            >
              <Quote className="h-3.5 w-3.5 text-tealAccent" />
              <span>Cite Paper</span>
              {showCitation ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* Citation Panel Accordion */}
          <AnimatePresence>
            {showCitation && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-5 border border-line/60 bg-charcoal/80 p-5 rounded-none">
                  <div className="flex items-center justify-between border-b border-line/50 pb-3 mb-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCitationFormat('apa')}
                        className={`font-mono text-[0.62rem] uppercase tracking-[0.16em] px-2.5 py-1 transition ${
                          citationFormat === 'apa' 
                            ? 'bg-accent/15 text-accent font-bold border border-accent/30' 
                            : 'text-ash hover:text-offwhite'
                        }`}
                      >
                        APA
                      </button>
                      <button
                        onClick={() => setCitationFormat('bibtex')}
                        className={`font-mono text-[0.62rem] uppercase tracking-[0.16em] px-2.5 py-1 transition ${
                          citationFormat === 'bibtex' 
                            ? 'bg-accent/15 text-accent font-bold border border-accent/30' 
                            : 'text-ash hover:text-offwhite'
                        }`}
                      >
                        BibTeX
                      </button>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ash hover:text-accent transition"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-tealAccent" />
                          <span className="text-tealAccent">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <pre className="font-mono text-[0.7rem] text-ash whitespace-pre-wrap break-all bg-charcoal/50 p-3 border border-line/30 rounded-sm leading-6 max-h-48 overflow-y-auto">
                    {citationText}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export function PillList({ items }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className="border border-line/80 bg-charcoal/40 px-3.5 py-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ash rounded-none transition duration-300 hover:border-accent hover:text-offwhite hover:shadow-accent-glow cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
