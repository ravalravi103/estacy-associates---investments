import { motion } from 'motion/react';
import {
  Calculator,
  Files,
  HandCoins,
  Building2,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  FileText,
  BadgeCheck,
  SearchCheck,
  Building
} from 'lucide-react';

const services = [
  {
    title: 'All Industries Accounting',
    description: 'Expert bookkeeping and financial accounting services tailored for businesses across all industry sectors.',
    icon: Calculator,
  },
  {
    title: 'Company & Partnership Registration',
    description: 'Seamless registration services for settting up Companies, Partnerships, and other business entities.',
    icon: Building,
  },
  {
    title: 'Tax Filings & Returns',
    description: 'Precision-led filing and return management for GST, TDS, and Income Tax to ensure 100% compliance.',
    icon: Files,
  },
  {
    title: 'Certification Services',
    description: 'Assistance with UDIN, CA Certificates, Udyam, PAN cards, and Income certificates.',
    icon: BadgeCheck,
  },
  {
    title: 'Loan Consultancy',
    description: 'Specialized assistance in securing Business and Personal loans with optimized financial documentation.',
    icon: HandCoins,
  },
  {
    title: 'Assessment & Audit',
    description: 'Professional management of tax assessments, scrutinies, and statutory compliance audits.',
    icon: SearchCheck,
  },
  {
    title: 'Legal Drafting',
    description: 'Expert drafting for Lease & Licenses, Rent agreements, and Sales agreements.',
    icon: FileText,
  },
];

const stats = [
  { label: 'Combined Experience', value: '15+ Years' },
  { label: 'Active Clients', value: '150+' },
  { label: 'Returns Filed', value: '2500+' },
  { label: 'Compliance Index', value: '100%' },
];

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight uppercase">
                Estacy Associates <span className="text-primary-700">& Investments</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors">Contact</a>
              <button
                onClick={scrollToContact}
                className="cta-button bg-primary-800 text-white hover:bg-primary-900 shadow-md"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                Your Trusted Compliance Partner
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Strategic <span className="text-primary-700 underline decoration-primary-200 underline-offset-8">Financial</span> Excellence.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Expert accounting, taxation, and investment solutions tailored for modern businesses. We simplify your compliances while you focus on growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="cta-button bg-primary-800 text-white flex items-center gap-2 hover:bg-primary-900 shadow-lg shadow-primary-900/20"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#services"
                  className="cta-button border border-slate-300 text-slate-700 hover:bg-white hover:border-primary-700 transition-all"
                >
                  Our Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Office"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">99.9%</div>
                    <div className="text-xs text-slate-500 font-medium uppercase italic">Accuracy Rate</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Committed to delivering error-free financial reporting and seamless filings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-display font-bold text-primary-800">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6 uppercase">Specialized Solutions</h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto mb-8" />
            <p className="text-lg text-slate-600 italic">
              Empowering businesses through precision-led accounting and compliance services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="service-card group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-800 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Leadership Section */}
      <section className="py-32 bg-primary-900 text-white overflow-hidden relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-200 text-xs font-bold uppercase tracking-widest mb-6">
                Established Foundations
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8 italic leading-tight">
                15 Years of <span className="text-primary-200">Trust</span> & Professional <span className="text-primary-100">Integrity.</span>
              </h2>
              <p className="text-xl text-primary-100/80 leading-relaxed mb-8 italic">
                Founded on the principles of accuracy and client-first consultancy, Estacy Associates has been a cornerstone of financial compliance for over a decade and a half.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary-200" />
                  </div>
                  <h4 className="font-bold uppercase tracking-wide">Secure Handling</h4>
                  <p className="text-sm text-primary-500/80">Data integrity and confidentiality are at the heart of our operations.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-200" />
                  </div>
                  <h4 className="font-bold uppercase tracking-wide">Punctual Filings</h4>
                  <p className="text-sm text-primary-500/80">Never miss a deadline with our automated tracking and proactive reminders.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-primary-700/20 blur-3xl rounded-full" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                    alt="Mayur Bhanushali (B.COM, LLB)"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="font-bold text-lg">Mayur Bhanushali (B.COM, LLB)</div>
                    <div className="text-xs text-primary-200 uppercase tracking-widest font-medium">Founder & Partner</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/10 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                    alt="Lata Mayur Bhanushali (B.COM, U.S. Accounting Certified)"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="font-bold text-lg">Lata Mayur Bhanushali (B.COM, U.S. Accounting Certified)</div>
                    <div className="text-xs text-primary-200 uppercase tracking-widest font-medium">Co-Founder & Partner</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Testimonial/Quote Area */}
          <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[40px] border border-white/10 text-center max-w-4xl mx-auto">
            <Calculator className="w-12 h-12 text-primary-300 mx-auto mb-8 opacity-50" />
            <blockquote className="text-3xl font-display italic mb-8 leading-tight">
              "We believe that financial compliance is not just about numbers; it's about building the legacy of your business. Our 15 years of experience is dedicated to your growth."
            </blockquote>
            <div className="w-16 h-1 bg-primary-400 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[40px] overflow-hidden shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-white">
                <h2 className="font-display text-4xl font-bold text-slate-900 mb-8 italic uppercase tracking-tight">Get in Touch</h2>
                <p className="text-slate-600 mb-12">
                  Ready to optimize your financial operations? Contact our experts for a complimentary consultation.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5 text-primary-700 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Call Us</div>
                      <a href="tel:9930674636" className="text-xl font-display font-medium text-slate-900 hover:text-primary-700 transition-colors">
                        +91 99306 74636
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-primary-700 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Email Us</div>
                      <a href="mailto:estacyinvestment2017@gmail.com" className="text-xl font-display font-medium text-slate-900 hover:text-primary-700 transition-colors">
                        estacyinvestment2017@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5 text-primary-700 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Our Office</div>
                      <address className="text-xl font-display font-medium text-slate-900 not-italic leading-relaxed">
                        08, Vraj Manek,<br />
                        Near Rajesh Hotel Gali,<br />
                        Station Road, Bhayandar West,<br />
                        Thane - 401101
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 lg:p-20 bg-slate-900 text-white flex flex-col justify-center">
                <div className="relative mb-12">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800/20 blur-3xl" />
                  <h3 className="font-display text-3xl font-bold mb-6 italic">Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Monday - Saturday</span>
                      <span className="font-medium text-primary-200">10:00 AM - 07:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Sunday</span>
                      <span className="font-medium text-slate-400">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Building2 className="w-24 h-24" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 italic">Reach Out Directly</h4>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Based in the heart of Bhayandar West, we are easily accessible for in-person consultations. Visit us to discuss your investment and compliance needs.
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-primary-200 transition-colors uppercase tracking-widest text-sm"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-800 rounded flex items-center justify-center">
                  <Briefcase className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-extrabold text-lg tracking-tight uppercase">
                  Estacy Associates <span className="text-primary-700">& Investments</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                Your premier destination for integrated financial services, tax planning, and corporate compliance in Maharashtra.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Quick Links</h5>
              <ul className="space-y-4">
                <li><a href="#services" className="text-slate-500 hover:text-primary-700 text-sm transition-colors uppercase tracking-widest">Services</a></li>
                <li><a href="#about" className="text-slate-500 hover:text-primary-700 text-sm transition-colors uppercase tracking-widest">About Us</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-primary-700 text-sm transition-colors uppercase tracking-widest">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Support</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-slate-500 text-sm italic">
                  <Mail className="w-4 h-4" /> estacyinvestment2017@gmail.com
                </li>
                <li className="flex items-center gap-2 text-slate-500 text-sm italic tracking-widest">
                  <Phone className="w-4 h-4" /> +91 9930674636
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs italic">
              © {new Date().getFullYear()} Estacy Associates & Investments. All rights reserved.
            </p>
            <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">
              Designed for Excellence
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
