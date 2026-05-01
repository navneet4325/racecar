import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const linesRef = useRef([]);

  const lines = [
    'Every curve has a purpose.',
    'Every gram is justified.',
    'Performance is not a feature—',
    'it is the entire point.',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(headingRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      // Line-by-line text reveal
      linesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: i * 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(234,179,8,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left: Heading */}
        <div ref={headingRef}>
          <div className="flex items-start gap-5">
            <div className="w-1 h-32 bg-yellow-400 rounded-full mt-2 shrink-0" />
            <div>
              <p className="text-yellow-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">About the Machine</p>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                Built<br />
                <span className="text-yellow-400">Beyond</span><br />
                Limits.
              </h2>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="space-y-6">
          {lines.map((line, i) => (
            <p
              key={i}
              ref={el => linesRef.current[i] = el}
              className="text-white/60 text-xl md:text-2xl font-light leading-snug"
            >
              {line}
            </p>
          ))}
          <div ref={el => linesRef.current[lines.length] = el} className="pt-4">
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-md">
              Our machines are conceived in obsession and delivered in precision. Carbon-fiber composites,
              aerodynamic engineering, and race-derived powertrain technology converge into a single,
              undeniable force.
            </p>
          </div>
          <div ref={el => linesRef.current[lines.length + 1] = el}>
            <a href="#performance" className="inline-flex items-center gap-3 text-yellow-400 text-sm font-bold tracking-widest uppercase group mt-4">
              <span>Discover Performance</span>
              <span className="w-8 h-px bg-yellow-400 transition-all duration-300 group-hover:w-16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
