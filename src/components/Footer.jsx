const footerLinks = {
  'Quick Links': ['Home', 'About', 'Garage', 'Performance', 'Contact'],
  'Services': ['Car Website Design', 'Brand Identity', 'Photography', 'Animation'],
};

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-yellow-400 text-2xl font-black tracking-widest uppercase">
                APEX<span className="text-white">MOTO</span>
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Crafting premium digital experiences for automotive brands that demand excellence.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-white/30 hover:text-yellow-400 text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                      className="text-white/30 hover:text-yellow-400 text-sm transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <div className="flex flex-wrap gap-6 text-white/20 text-xs">
            <span>hello@apexmoto.com</span>
            <span>+1 (800) APEX-MOTO</span>
          </div>
          <p className="text-white/15 text-xs">
            © {new Date().getFullYear()} ApexMoto. All rights reserved. Built with obsession.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
