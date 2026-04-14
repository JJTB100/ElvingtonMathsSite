import { CheckCircle2, Users, Clock, BookOpen } from 'lucide-react';

export function PricesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12 md:py-24">
      <div className="mb-16 text-center md:text-left">
        <span className="font-label text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Investment</span>
        <h1 className="text-5xl md:text-7xl text-primary font-headline leading-tight tracking-tighter mb-6">
          Prices.
        </h1>
        <p className="text-xl text-secondary leading-relaxed font-body max-w-2xl">
          Transparent pricing for personalized mathematical tuition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* KS3 & KS4 */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col">
          <div className="mb-6">
            <BookOpen className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">KS3 & KS4 (GCSE)</h3>
            <p className="text-on-surface-variant">Standard one-hour session</p>
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-headline text-primary">£32</span>
              <span className="text-secondary font-medium">/ hour</span>
            </div>
          </div>
        </div>

        {/* KS5 */}
        <div className="bg-primary text-white p-10 rounded-2xl shadow-lg flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-tertiary text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
            Advanced
          </div>
          <div className="mb-6 relative z-10">
            <BookOpen className="w-10 h-10 text-white/80 mb-4" />
            <h3 className="text-2xl font-headline mb-2">KS5 (A-Level)</h3>
            <p className="text-white/80">Advanced one-hour session</p>
          </div>
          <div className="mt-auto relative z-10">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-headline">£37</span>
              <span className="text-white/80 font-medium">/ hour</span>
            </div>
          </div>
        </div>

        {/* KS3 Half Hour */}
        <div className="bg-surface-container-low p-10 rounded-2xl flex flex-col">
          <div className="mb-6">
            <Clock className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">KS3 Half-Session</h3>
            <p className="text-on-surface-variant">Focused 30-minute session</p>
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-headline text-primary">£22</span>
              <span className="text-secondary font-medium">/ 30 mins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Discounts Section */}
      <div className="bg-secondary-container rounded-3xl p-10 md:p-16">
        <h2 className="text-3xl font-headline text-primary mb-8">Available Discounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Users className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="text-xl font-headline text-primary mb-2">Paired Tuition</h4>
              <p className="text-on-secondary-container leading-relaxed">
                I can offer discounts for tuition of pairs of students, if they work well together and are of similar abilities, this will depend on availability.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="text-xl font-headline text-primary mb-2">Siblings & Multiple Sessions</h4>
              <p className="text-on-secondary-container leading-relaxed">
                I can also offer discounts for siblings or if you book more than one hourly session a week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
