import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import card1 from '../assets/garage_card_1.png';
import card2 from '../assets/garage_card_2.png';
import card3 from '../assets/garage_card_3.png';

gsap.registerPlugin(ScrollTrigger);

const cars = [
  {
    img: card1,
    title: 'Apex Predator GT',
    tag: 'Track Build',
    desc: 'Twin-turbo V8. 780 BHP. Aerodynamic package tuned in the wind tunnel for zero lift at 300 km/h.',
  },
  {
    img: card2,
    title: 'Storm Series RS',
    tag: 'Street Legal',
    desc: 'Carbon monocoque chassis, active suspension, and a naturally aspirated flat-six that screams to 9,200 RPM.',
  },
  {
    img: card3,
    title: 'Obsidian Hyper X',
    tag: 'Concept Build',
    desc: 'Full carbon exterior, hybrid powertrain delivering 1,100 BHP combined. A car that rewrites the rulebook.',
  },
];

const Garage = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: i * 0.15,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="garage" ref={sectionRef} className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-yellow-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Garage</p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              The <span className="text-yellow-400">Builds.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Each build is a statement. An obsession turned into metal, carbon, and speed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Yellow glow overlay on hover */}
                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold tracking-widest uppercase rounded-full">
                  {car.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold tracking-tight mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {car.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{car.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-yellow-400 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Build</span>
                  <span>→</span>
                </div>
              </div>

              {/* Bottom yellow line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Garage;
