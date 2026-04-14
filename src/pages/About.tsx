import { GraduationCap, Award, ShieldCheck, MapPin, Laptop, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Image & Qualifications */}
        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] relative">
            <img 
              src="/me-photo.jpg"
              alt="Karen Broster" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-headline mb-1">Karen Broster</h2>
              <p className="font-label text-sm uppercase tracking-widest opacity-90">Maths Tutor</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="text-2xl font-headline text-primary mb-6">Qualifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                <span className="text-on-surface-variant text-sm">Qualified maths teacher PGCE Maths (York) 1998</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                <span className="text-on-surface-variant text-sm">BSc Mathematics with Education (York) 1997</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                <span className="text-on-surface-variant text-sm">DBS checked (updated yearly)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                <span className="text-on-surface-variant text-sm">Member of The Tutors' Association</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Experience */}
        <div className="lg:col-span-8">
          <span className="font-label text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Meet Your Tutor</span>
          <h1 className="text-5xl md:text-7xl text-primary font-headline leading-tight tracking-tighter mb-12">
            About Me.
          </h1>

          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-headline text-primary mb-6">Experience</h2>
            
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                I am a qualified and experienced maths teacher and tutor, passionate about maths and helping people reach their potential. I have 20 years of secondary classroom experience in schools in and around York and have taught ages from 11 to 18 years, and all abilities.
              </p>
              
              <p>
                Having taught KS3, GCSE and A-Level students, I am experienced with modern exam syllabuses and schemes of work.
              </p>
              
              <p>
                I have also experience in teaching home schooled students and those wishing to resit their exams.
              </p>
              
              <p>
                Based near York, I have successfully tutored students privately since 2012, taking a number of students through their exams.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/20">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-headline text-primary mb-3">In-Person Tuition</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  For non online tutoring, I tutor from my home in Sutton on Derwent. I am able to take students from any area of York, including Elvington, Sutton upon Derwent, Wheldrake, Dunnington, supporting students from any school including Fulford School, York Archbishop Holgates, Pocklington, Woldgate etc.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/20">
                <Laptop className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-headline text-primary mb-3">Online Tuition</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  I have also taught a number of students online, using Google Meet and it has been very successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
