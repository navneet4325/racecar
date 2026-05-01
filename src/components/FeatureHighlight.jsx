import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import card1 from '../assets/garage_card_1.png';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: 'Carbon Fiber Body', desc: 'Every panel is forged from aerospace-grade carbon fiber, shaving kilograms without sacrificing structural integrity.' },
  { title: 'Aerodynamic Mastery', desc: 'Active rear wing, underbody diffuser, and precision-tuned front splitter generate 800kg of downforce at top speed.' },
  { title: 'Engine Precision', desc: 'Hand-assembled by engineers who sign their work. Every tolerance measured to a thousandth of a millimeter.' },
];

const FeatureHighlight = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      );
      gsap.fromTo(textRef.current.querySelectorAll('.feature-item'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-950 py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div ref={imgRef} className="relative rounded-2xl overflow-hidden group">
          <img src={card1} alt="Feature car" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          {/* Yellow corner accent */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-400" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-400" />
        </div>

        {/* Right: Features */}
        <div ref={textRef} className="space-y-10">
          <div className="feature-item">
            <p className="text-yellow-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">Engineering Excellence</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Makes<br />It <span className="text-yellow-400">Different.</span>
            </h2>
          </div>
          {features.map((f, i) => (
            <div key={i} className="feature-item flex gap-5 group">
              <div className="shrink-0 w-px h-full bg-yellow-400/30 group-hover:bg-yellow-400 transition-colors duration-300 self-stretch mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
