import { Phone, Mail, GraduationCap, Search, Calculator, Video, BookOpen, Home, ShieldCheck } from 'lucide-react';

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden pt-12">
        <div className="absolute inset-0 hero-pattern opacity-40"></div>
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label text-sm font-semibold tracking-wide">
              <GraduationCap className="w-4 h-4" />
              KEY STAGE 3 • GCSE • A LEVEL
            </div>
            <h1 className="font-headline text-6xl md:text-8xl text-primary leading-[1.05] tracking-tight">
              Build up your <span className="italic font-light">confidence</span> and achieve your target in exams.
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-xl leading-relaxed">
              Online or face to face lessons tailored to your pace, provided by a qualified teacher with two decades of experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:01904607192" className="bg-tertiary text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:-translate-y-1 transition-all">
                <Phone className="w-5 h-5" />
                <span className="font-bold">01904 607192</span>
              </a>
              <a href="#services" className="px-8 py-4 text-primary font-bold border-b-2 border-primary-container/20 hover:border-primary transition-all">
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 bg-surface-container-highest">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkVJkP8f94GHNesVzOcKeDuyO_Bogwa0jp_ecayB9p8cM---AG_GPWU8ecH39iTJImckZ4QsaDfpqBzyN5AEs2EcQ3jw4B27LJzo26fiTHogFjzimLaFwz1xZNLbAwydDI-_QbVGZhDS4eWOwghLouGU64DpKJWbKzhOCUrNsoQvUT2qlvzqltMrqjWmb5jqZox260v1gIGZnFQYgt48j3Utyi82jAzF61__MDXfop75XYeRJHsQ2BVfmWKcwmQNIcZ-NYIVUaS_k" 
                alt="Advanced Mathematics" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-white shadow-xl rounded-2xl max-w-[240px] -rotate-3 hover:rotate-0 transition-transform">
              <p className="font-headline italic text-xl text-primary mb-2">"20 years of expertise in every session."</p>
              <div className="h-1 w-12 bg-tertiary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-headline text-5xl text-primary mb-4">Core Services</h2>
            <p className="text-secondary font-label uppercase tracking-widest text-sm">Focused Academic Support</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="md:col-span-2 lg:col-span-2 bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-6 text-primary group-hover:math-accent group-hover:text-white transition-all">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-3xl mb-4">Private one-to-one tuition</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Personalized attention tailored strictly to the student's learning style and current challenges.</p>
              <div className="flex items-center gap-4 text-sm font-semibold text-primary">
                <span className="px-3 py-1 bg-surface-container-low rounded">Daytime</span>
                <span className="px-3 py-1 bg-surface-container-low rounded">Evening</span>
                <span className="px-3 py-1 bg-surface-container-low rounded">After School</span>
              </div>
            </div>

            <div className="bg-primary-container text-on-primary-container p-10 rounded-2xl flex flex-col justify-between group">
              <Calculator className="w-10 h-10 mb-8 opacity-50" />
              <div>
                <h3 className="font-headline text-3xl mb-4 text-white">All secondary school levels</h3>
                <p className="text-on-primary-container/80">From basic concepts to complex calculus across all major exam boards.</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border-l-4 border-tertiary">
              <Video className="w-8 h-8 text-tertiary mb-6" />
              <h3 className="font-headline text-2xl mb-4">Flexible Delivery</h3>
              <p className="text-on-surface-variant">Individual online video or face to face lessons to suit your schedule.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <BookOpen className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-headline text-2xl mb-4">GCSE & A-Level</h3>
              <p className="text-on-surface-variant">Specialized preparation for terminal exams across all UK boards.</p>
            </div>

            <div className="md:col-span-2 lg:col-span-2 bg-secondary-container p-10 rounded-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-headline text-3xl mb-4 text-on-secondary-container">Home-schooled Support</h3>
                <p className="text-on-secondary-container/80 max-w-md">Dedicated tuition schedules for students following home-schooling pathways, ensuring curriculum coverage.</p>
              </div>
              <Home className="absolute -right-8 -bottom-8 w-48 h-48 opacity-5 text-primary rotate-12" />
            </div>

            <div className="lg:col-span-1 bg-white p-10 rounded-2xl shadow-sm">
              <ShieldCheck className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-headline text-2xl mb-4">Expert Supplement</h3>
              <p className="text-on-surface-variant">Support and supplement school teaching to bridge gaps in knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="math-accent rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
            <div className="max-w-xl">
              <h2 className="font-headline text-5xl mb-6 leading-tight">Get in touch today to start your journey.</h2>
              <p className="text-blue-200 opacity-90 text-lg mb-8">Ready to book your first session or have questions about the curriculum? Reach out via phone or email.</p>
              <div className="space-y-6">
                <a href="tel:01904607192" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight">01904 607192</span>
                </a>
                <a href="mailto:karen@broster.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight">karen@broster.co.uk</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 text-center bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <div className="w-48 bg-white rounded-xl flex items-center justify-center p-4">
                <img 
                  src="/tta.png" 
                  alt="Tutors Association Member" 
                  className="w-full h-auto object-contain" 
                />
              </div>
              <div>
                <p className="font-label text-sm uppercase tracking-widest text-blue-200 mb-2">Certified Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
