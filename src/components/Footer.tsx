import {
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Motions', href: '#motions' },
  { name: 'Rule Book', href: '#rulebook' },
  { name: 'Contact', href: '#contact' },
];

const socialIcons = [
  { Icon: Instagram, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Mail, href: 'mailto:debating@dtu.ac.in' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(
      href.replace('#', '')
    );

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#062743] to-[#021421] border-t border-[#F5C542]/20 text-white">

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold">
              Cognitive Minds
            </h2>

            <p className="mt-2 text-xs tracking-[4px] uppercase text-[#F5C542]">
              Debating Society
            </p>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-xs">
              Fostering intellectual growth, leadership and
              meaningful discourse through debate and dialogue.
            </p>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">
              Quick Access
            </h4>

            <div className="grid grid-cols-2 gap-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-slate-300 hover:text-[#F5C542] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="
                    w-11 h-11
                    rounded-full
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-slate-300
                    transition-all
                    hover:bg-[#F5C542]
                    hover:text-[#031B2F]
                    hover:border-[#F5C542]
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-2 text-slate-300">
              <p>debating@dtu.ac.in</p>
              <p>Delhi Technological University</p>
              <p>Shahbad Daulatpur</p>
              <p>Delhi - 110042</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-[#F5C542]/15" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Cognitive Minds Debating Society.
          </p>

          <p className="text-slate-500 text-sm">
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}