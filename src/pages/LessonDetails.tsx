import { BarChart3, Laptop, Users, CheckCircle2, MessageSquare, Dumbbell, Edit3, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LessonDetailsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12 md:py-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="lg:col-span-7">
          <span className="font-label text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Academic Excellence</span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary font-headline leading-tight tracking-tighter mb-8">
            Lesson Details.
          </h1>
          <p className="text-2xl text-secondary leading-relaxed font-body max-w-2xl">
            What to Expect. Personalized mathematical journeys designed for clarity, confidence, and rigorous achievement.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="./student.JPG" 
              alt="Focused student" 
              className="w-full h-[600px] object-cover" 
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-tertiary text-white p-8 rounded-xl shadow-xl max-w-xs">
            <p className="font-headline italic text-xl">"Focus is the foundation of mathematical discovery."</p>
          </div>
        </div>
      </div>

      {/* Bento Grid: The Lesson Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="md:col-span-2 bg-surface-container-low p-12 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-headline text-primary mb-6">Instructional Structure</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our standard sessions are meticulously timed to maximize cognitive retention and practical application.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-l-4 border-secondary pl-6">
              <span className="text-3xl font-headline text-primary">50 Mins</span>
              <p className="text-on-surface-variant font-body">Direct instruction and guided practice.</p>
            </div>
            <div className="border-l-4 border-outline-variant pl-6">
              <span className="text-3xl font-headline text-primary">10 Mins</span>
              <p className="text-on-surface-variant font-body">Settling, homework review, and recap.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white p-12 rounded-2xl flex flex-col justify-center bg-gradient-to-br from-primary to-primary-container">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1"/><path d="M16 9.05v-.1"/><path d="M16 14c-.5 1.5-1.79 3-4 3s-3.5-1.5-4-3"/></svg>
          </div>
          <h3 className="text-3xl font-headline mb-4">Younger Students</h3>
          <p className="opacity-80 leading-relaxed">
            30-minute high-impact sessions are available for younger learners to maintain focus and engagement.
          </p>
        </div>

        <div className="bg-secondary-container p-12 rounded-2xl md:col-span-1">
          <BarChart3 className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-3xl font-headline text-primary mb-4">Initial Assessment</h3>
          <p className="text-on-secondary-container leading-relaxed">
            Every journey begins with a comprehensive individual assessment to pinpoint strengths and bridge existing gaps.
          </p>
        </div>

        <div className="bg-surface-container-highest p-12 rounded-2xl md:col-span-2 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-headline text-primary mb-4">Hybrid Learning</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Flexible delivery modes to suit your lifestyle. Choose between focused online sessions or traditional face-to-face tuition.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Laptop className="w-6 h-6 text-primary" />
            </div>
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Responsibilities & Homework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        <section className="bg-surface p-12 rounded-2xl border-l-8 border-tertiary shadow-sm">
          <h2 className="text-4xl font-headline text-primary mb-8">Students' Responsibilities</h2>
          <p className="text-on-surface-variant mb-8 text-lg">Mathematics is a participatory discipline. To ensure success, students are expected to lead their learning process.</p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-tertiary mt-1 shrink-0" />
              <span className="text-on-surface font-medium">Take full ownership of your academic progress.</span>
            </li>
            <li className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-tertiary mt-1 shrink-0" />
              <span className="text-on-surface font-medium">Bring prepared questions and specific areas of difficulty.</span>
            </li>
            <li className="flex items-start gap-4">
              <Dumbbell className="w-6 h-6 text-tertiary mt-1 shrink-0" />
              <span className="text-on-surface font-medium">Commit to hard work and consistent mental effort.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-12 rounded-2xl shadow-sm border border-outline-variant/20">
          <h2 className="text-4xl font-headline text-primary mb-8">Homework & Consolidation</h2>
          <div className="bg-surface-container-low p-6 rounded-xl mb-8 flex items-center gap-4">
            <Edit3 className="w-8 h-8 text-secondary" />
            <p className="text-secondary font-medium">Consolidation is key to mastery.</p>
          </div>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Tasks are assigned after each lesson to solidify the day's concepts. Homework is mandatory and must be completed prior to the next session for marking and feedback, ensuring no concept is left misunderstood.
          </p>
          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
            <span className="font-label text-sm text-outline-variant uppercase tracking-widest text-slate-500">Progress Ledger</span>
            <span className="text-primary font-semibold">100% Completion Goal</span>
          </div>
        </section>
      </div>

      {/* Experience Callout */}
      <div className="bg-surface-container-highest rounded-3xl p-12 md:p-20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">Expertise You Can Trust.</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
            With years of specialized focus in Elvington and Sutton, I combine deep pedagogical knowledge with a modern, results-oriented approach. Every lesson plan is bespoke, designed to cover gaps and stretch capabilities.
          </p>
          <Link to="/about" className="inline-block bg-tertiary text-white px-10 py-4 rounded-xl font-semibold hover:bg-black transition-colors shadow-xl">
            View My Qualifications
          </Link>
        </div>
        <div className="absolute -right-20 -bottom-20 opacity-10">
          <GraduationCap className="w-[300px] h-[300px]" />
        </div>
      </div>
    </div>
  );
}
