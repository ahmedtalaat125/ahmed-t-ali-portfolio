import { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Presentation,
  Wrench,
  Send,
  Check,
  ChevronRight,
  Filter,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Section from './components/Section';
import { DetailCard, PillList, PublicationCard, SpotlightWrapper } from './components/Cards';
import {
  activities,
  awards,
  certifications,
  education,
  experience,
  internships,
  profile,
  publications,
  skills,
  taughtCourses,
} from './data/profile';

function Hero() {
  const heroMetrics = [
    ['2', 'Journal Articles'],
    ['EEP', 'Energy Practitioner'],
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-charcoal min-h-[calc(100vh-73px)] flex items-center">
      {/* Background radial glow blurs */}
      <div className="glow-blob -top-20 -left-20 bg-accent/10" />
      <div className="glow-blob bottom-10 right-0 bg-tealAccent/10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 surface-line opacity-[0.35]" aria-hidden="true" />
      <div className="absolute left-0 top-0 hidden h-full w-px bg-line/60 lg:left-[8vw] lg:block" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 relative z-10 w-full">
        {/* Intro details */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8 inline-flex items-center gap-2 border border-line bg-graphite/40 backdrop-blur-md px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-tealAccent sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-tealAccent animate-pulse" />
            <span>Industrial & Systems Engineering</span>
          </div>
          
          <h1 className="max-w-4xl font-serif text-6.5xl font-extrabold leading-[0.92] tracking-tight text-offwhite sm:text-7.5xl md:text-[5rem] lg:text-[5.5rem] text-gradient">
            {profile.name}
          </h1>
          
          <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-neutral-200 sm:text-2.5xl font-sans">
            {profile.title} <span className="text-accent">@</span> {profile.affiliation}
          </p>
          
          <p className="mt-6 max-w-2xl text-base leading-8 text-ash font-medium">{profile.summary}</p>
          
          {/* Key Metrics block */}
          <div className="mt-9 grid max-w-2xl grid-cols-2 border border-line/60 bg-panel/30 backdrop-blur-md divide-x divide-line/60">
            {heroMetrics.map(([value, label]) => (
              <div key={label} className="p-4 text-center sm:text-left sm:p-5">
                <p className="font-serif text-3.5xl font-extrabold leading-none text-gradient-accent sm:text-4xl">{value}</p>
                <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ash font-bold">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-line bg-graphite/40 backdrop-blur-sm px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-line bg-graphite/40 backdrop-blur-sm px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <GraduationCap className="h-4.5 w-4.5" aria-hidden="true" />
              Scholar
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-ash">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            <span>Research, teaching, and applied analytics</span>
          </div>
        </motion.div>

        {/* Professional headshot */}
        <motion.div
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="absolute -left-6 -top-6 h-20 w-20 border-l border-t border-accent/60" aria-hidden="true" />
          <div className="absolute -bottom-6 -right-6 h-20 w-20 border-b border-r border-tealAccent/60" aria-hidden="true" />
          <div className="edge-sheen border border-line/60 bg-panel/30 p-3 backdrop-blur-md">
            <img
              src={profile.headshotPath}
              alt={`${profile.name} professional headshot`}
              className="relative z-10 aspect-[4/5] w-full border border-line/60 object-cover object-top grayscale-[8%] contrast-[1.04]"
            />
          </div>
          <p className="mt-4 border border-line/60 bg-graphite/60 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ash">
            Ph.D. researcher / Teaching assistant / Applied optimization
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  const credibilityItems = [
    ['01', 'Affiliation', profile.affiliation],
    ['02', 'Program', 'Ph.D. Industrial & Systems Engineering'],
    ['03', 'Core methods', 'Optimization / OR / Applied ML'],
    ['04', 'Applications', 'Energy Systems / Logistics / Terminal Scheduling'],
  ];

  return (
    <section className="border-y border-line bg-panel/40 backdrop-blur-md relative z-10">
      <div className="mx-auto grid max-w-6xl divide-y divide-line/60 px-5 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {credibilityItems.map(([number, label, value]) => (
          <div key={label} className="py-6 md:py-8 md:px-6 group">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent font-bold group-hover:text-tealAccent transition-colors duration-300">{label}</p>
              <p className="font-serif text-3.5xl font-extrabold leading-none text-offwhite/10 group-hover:text-accent/15 transition-colors duration-300">{number}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-200 font-medium">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  const researchLenses = [
    ['01', 'Energy Behavior', 'Consumer attitude modeling for load shifting and demand-side management.'],
    ['02', 'Optimization', 'Mathematical programming, heuristics, and multi-stage decision frameworks.'],
    ['03', 'Applied Analytics', 'Combining machine learning algorithms with systems simulation modeling.'],
  ];

  return (
    <Section id="research" eyebrow="Research Profile" title="Current Focus and Research Interests">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SpotlightWrapper>
          <div className="mb-6 flex h-12 w-12 items-center justify-center border border-line bg-charcoal text-accent">
            <Microscope className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-offwhite text-gradient">Current Research</h3>
          <p className="mt-5 leading-8 text-ash text-sm md:text-base font-medium">{profile.currentFocus}</p>
          <p className="mt-4 leading-8 text-ash text-sm md:text-base font-medium">
            The broader research direction emphasizes rigorous modeling, defensible analytics, and optimization frameworks for decision-making in industrial and infrastructure systems.
          </p>
        </SpotlightWrapper>
        
        <div className="border border-line/60 bg-charcoal p-7 lg:translate-y-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Layers className="h-5 w-5 text-tealAccent" />
              <h3 className="font-serif text-2.5xl font-bold text-offwhite">Research Interests</h3>
            </div>
            <PillList items={profile.interests} />
          </div>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ash/80 border-t border-line/60 pt-4">
            Cross-disciplinary systems modeling &bull; UMiami ISE
          </p>
        </div>
      </div>
      
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {researchLenses.map(([number, title, text]) => (
          <SpotlightWrapper key={title}>
            <p className="font-serif text-4xl font-extrabold leading-none text-offwhite/15">{number}</p>
            <h3 className="mt-5 font-serif text-2xl font-bold text-offwhite group-hover:text-accent transition-colors duration-300">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-ash font-medium">{text}</p>
          </SpotlightWrapper>
        ))}
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education" eyebrow="Academic Training" title="Education">
      {/* Timeline container */}
      <div className="relative border-l-2 border-line/60 pl-6 sm:pl-8 ml-3 py-2">
        {/* Animated timeline gradient highlight */}
        <div className="absolute top-0 bottom-0 left-[-2px] w-0.5 bg-gradient-to-b from-accent via-tealAccent to-violetAccent opacity-60" />

        {education.map((item, index) => (
          <article key={`${item.degree}-${item.institution}`} className="relative pb-12 last:pb-2">
            {/* Timeline bullet nodes */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 border-2 border-accent bg-charcoal rounded-full flex items-center justify-center" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
            </span>

            <div className="grid gap-5 lg:grid-cols-[0.25fr_0.75fr]">
              <div>
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">
                  {String(index + 1).padStart(2, '0')} / {item.date}
                </p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ash font-semibold">{item.location}</p>
              </div>
              <DetailCard
                title={item.degree}
                subtitle={item.institution}
                details={item.details}
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Research & Teaching" title="Experience">
      <div className="grid gap-6">
        {experience.map((item) => (
          <DetailCard
            key={`${item.role}-${item.organization}`}
            title={item.role}
            subtitle={item.organization}
            meta={item.date}
            location={item.location}
            details={item.details}
          />
        ))}
      </div>
      
      <div className="mt-10 border border-line bg-panel/30 backdrop-blur-md p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="h-5.5 w-5.5 text-accent" aria-hidden="true" />
          <h3 className="font-serif text-2.5xl font-bold text-offwhite">Taught Courses</h3>
        </div>
        <PillList items={taughtCourses} />
      </div>
    </Section>
  );
}

function PublicationsSection() {
  return (
    <Section id="publications" eyebrow="Scholarly Work" title="Publications">
      <div className="mb-8 border border-line/60 bg-charcoal/80 p-6 backdrop-blur-md">
        <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <p className="font-serif text-6xl font-extrabold leading-none text-gradient-accent">2</p>
          <div>
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">Peer-Reviewed Publications</p>
            <p className="mt-2 text-sm leading-6 text-ash font-medium max-w-2xl">
              Published research at the intersection of container terminal optimization, clustering algorithms, and carbon-emissions-aware maritime logistics.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        {publications.map((publication, index) => (
          <PublicationCard key={publication.doi} publication={publication} index={index} />
        ))}
      </div>
    </Section>
  );
}

function SkillsSection() {
  const [selectedGroup, setSelectedGroup] = useState('All');

  const categories = ['All', ...skills.map(s => s.group)];

  const filteredSkills = selectedGroup === 'All' 
    ? skills 
    : skills.filter(s => s.group === selectedGroup);

  return (
    <Section id="skills" eyebrow="Technical Foundation" title="Skills and Tools">
      {/* Category selector filter */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-line/40 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedGroup(cat)}
            className={`font-mono text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.12em] px-3.5 py-2 border transition duration-300 ${
              selectedGroup === cat 
                ? 'bg-accent/15 text-accent border-accent/40 font-extrabold' 
                : 'border-line/60 text-ash hover:border-accent hover:text-offwhite'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skillGroup, index) => (
            <motion.article 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={skillGroup.group} 
              className="border border-line/60 bg-panel/35 backdrop-blur-md p-6 group hover:border-accent/40 transition duration-300"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-line bg-charcoal text-accent group-hover:text-tealAccent transition-colors duration-300">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-serif text-4xl font-extrabold leading-none text-offwhite/10 group-hover:text-accent/15 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-offwhite group-hover:text-accent transition-colors duration-300">{skillGroup.group}</h3>
              <div className="mt-5">
                <PillList items={skillGroup.items} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function RecognitionSection() {
  return (
    <Section id="recognition" eyebrow="Additional Credentials" title="Certifications, Awards, & Activities">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SpotlightWrapper>
          <div className="mb-4 flex items-center gap-3">
            <Award className="h-5 w-5 text-accent" aria-hidden="true" />
            <h3 className="font-serif text-2.5xl font-bold text-offwhite text-gradient font-serif">Certification</h3>
          </div>
          {certifications.map((certification) => (
            <div key={certification.name} className="text-sm leading-7 text-ash font-medium">
              <p className="font-bold text-offwhite text-base">{certification.name}</p>
              <p className="mt-1 text-tealAccent font-semibold">{certification.issuer}</p>
              <p className="font-mono text-xs uppercase tracking-[0.08em] mt-1">{certification.date}</p>
              <p className="font-mono text-xs text-neutral-400 mt-0.5">{certification.detail}</p>
            </div>
          ))}
        </SpotlightWrapper>
        
        <div className="grid gap-6">
          <SpotlightWrapper>
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="h-5.5 w-5.5 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-2.5xl font-bold text-offwhite">Awards & Honors</h3>
            </div>
            <ul className="space-y-4 text-sm leading-6 text-ash font-medium">
              {awards.map((award) => (
                <li key={award} className="border-t border-line/50 pt-3.5 first:border-t-0 first:pt-0 flex gap-2">
                  <span className="text-accent font-bold shrink-0">&raquo;</span>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </SpotlightWrapper>
          
          <SpotlightWrapper>
            <div className="mb-4 flex items-center gap-3">
              <Presentation className="h-5.5 w-5.5 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-2.5xl font-bold text-offwhite">Selected Activities</h3>
            </div>
            <ul className="space-y-4 text-sm leading-6 text-ash font-medium">
              {activities.map((activity) => (
                <li key={activity} className="border-t border-line/50 pt-3.5 first:border-t-0 first:pt-0 flex gap-2">
                  <span className="text-tealAccent font-bold shrink-0">&bull;</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </SpotlightWrapper>
        </div>
      </div>
    </Section>
  );
}

function InternshipSection() {
  return (
    <Section id="projects" eyebrow="Applied Engineering" title="Internship Experience">
      <div className="grid gap-6 lg:grid-cols-2">
        {internships.map((item) => (
          <DetailCard
            key={`${item.role}-${item.organization}`}
            title={item.role}
            subtitle={item.organization}
            meta={item.date}
            location={item.location}
            details={item.details}
          />
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSending(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Connect">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Contact Form */}
        <div className="border border-line/60 bg-panel/30 backdrop-blur-md p-6 sm:p-8">
          <h3 className="font-serif text-2.5xl font-bold text-offwhite mb-2">Send a Message</h3>
          <p className="text-sm text-ash mb-6 font-medium">Have a research proposal, course question, or optimization challenge? Get in touch.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ash font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-charcoal border ${
                  errors.name ? 'border-red-500' : 'border-line/80 focus:border-accent'
                } px-4 py-3 text-sm text-offwhite focus:outline-none transition duration-300 font-sans`}
                placeholder="Dr. Jane Doe"
              />
              {errors.name && <p className="mt-1 font-mono text-[0.62rem] text-red-400 uppercase tracking-wider">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ash font-bold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-charcoal border ${
                  errors.email ? 'border-red-500' : 'border-line/80 focus:border-accent'
                } px-4 py-3 text-sm text-offwhite focus:outline-none transition duration-300 font-sans`}
                placeholder="jane.doe@example.edu"
              />
              {errors.email && <p className="mt-1 font-mono text-[0.62rem] text-red-400 uppercase tracking-wider">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ash font-bold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-charcoal border ${
                  errors.message ? 'border-red-500' : 'border-line/80 focus:border-accent'
                } px-4 py-3 text-sm text-offwhite focus:outline-none transition duration-300 font-sans`}
                placeholder="Hi Ahmed, I read your publication on truck scheduling..."
              />
              {errors.message && <p className="mt-1 font-mono text-[0.62rem] text-red-400 uppercase tracking-wider">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending || isSent}
              className="w-full flex items-center justify-center gap-2 border border-accent bg-accent/90 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-offwhite transition duration-300 hover:bg-transparent hover:text-accent hover:shadow-accent-glow disabled:opacity-50"
            >
              {isSending ? (
                <>
                  <div className="h-4 w-4 animate-spin border-2 border-offwhite border-t-transparent rounded-full" />
                  <span>Sending Message...</span>
                </>
              ) : isSent ? (
                <>
                  <Check className="h-4 w-4 text-tealAccent" />
                  <span className="text-tealAccent">Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact info details */}
        <div className="flex flex-col justify-between border border-line/60 bg-charcoal p-6 sm:p-8">
          <div>
            <h3 className="font-serif text-3.5xl font-extrabold text-offwhite text-gradient">{profile.name}</h3>
            <p className="mt-4 leading-7 text-ash text-sm md:text-base font-medium max-w-md">
              Available for academic collaborations, research discussions, industry scheduling problems, and consultations in operations research and decision science.
            </p>
            
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4.5 group py-2 border-b border-line/40 hover:border-accent/40 transition"
              >
                <div className="h-10 w-10 shrink-0 border border-line bg-panel flex items-center justify-center text-accent group-hover:bg-accent/15 transition-all">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ash font-bold">Email Address</p>
                  <p className="text-sm font-semibold text-offwhite group-hover:text-accent transition mt-0.5">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center gap-4.5 group py-2 border-b border-line/40 hover:border-accent/40 transition"
              >
                <div className="h-10 w-10 shrink-0 border border-line bg-panel flex items-center justify-center text-accent group-hover:bg-accent/15 transition-all">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ash font-bold">Phone Number</p>
                  <p className="text-sm font-semibold text-offwhite group-hover:text-accent transition mt-0.5">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4.5 py-2 border-b border-line/40">
                <div className="h-10 w-10 shrink-0 border border-line bg-panel flex items-center justify-center text-tealAccent">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ash font-bold">Office Location</p>
                  <p className="text-sm font-semibold text-offwhite mt-0.5">{profile.location} &bull; UMiami</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-line/60 flex flex-wrap gap-2.5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line bg-panel px-4 py-2.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-offwhite transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line bg-panel px-4 py-2.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-offwhite transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Scholar</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal relative z-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 font-mono text-xs uppercase tracking-[0.12em] text-ash sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>{profile.affiliation}</span>
          <span className="text-accent">&bull;</span>
          <span>Industrial & Systems Engineering</span>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-offwhite relative font-sans selection:bg-accent/30 selection:text-offwhite">
      {/* Background ambient flows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="glow-blob top-[20vh] left-[-10vw] bg-accent/5" />
        <div className="glow-blob top-[60vh] right-[-10vw] bg-tealAccent/5" />
        <div className="glow-blob top-[100vh] left-[20vw] bg-violetAccent/5" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <CredibilityStrip />
          <ResearchSection />
          <EducationSection />
          <ExperienceSection />
          <PublicationsSection />
          <SkillsSection />
          <RecognitionSection />
          <InternshipSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
