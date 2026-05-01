import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current.querySelectorAll('.cta-animate'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
    }, sectionRef);

    // Button pulse
    gsap.to(btnRef.current, {
      scale: 1.04,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden py-32 px-6 bg-yellow-400">
      {/* Subtle moving radial */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="cta-animate text-black/50 text-xs font-bold tracking-[0.4em] uppercase mb-5">
          Ready to Start?
        </p>
        <h2 className="cta-animate text-5xl md:text-7xl font-black text-black tracking-tighter leading-none mb-6">
          Build Your Dream<br />Car Website.
        </h2>
        <p className="cta-animate text-black/60 text-lg font-light max-w-lg mx-auto mb-10">
          We craft premium digital experiences for automotive brands, car builders, and speed enthusiasts.
        </p>
        <div className="cta-animate">
          <a
            ref={btnRef}
            href="mailto:hello@apexmoto.com"
            className="inline-block px-12 py-5 bg-black text-yellow-400 text-sm font-black tracking-widest uppercase rounded-full hover:bg-zinc-900 transition-colors duration-300 shadow-2xl"
          >
            Start Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
