import { Quote } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Karen is a fantastic tutor, she always explains everything so well. She is also personable and very encouraging.",
      author: "Lauren",
      context: "GCSE Student 2015"
    },
    {
      quote: "Passed first time in my resit, Karen was really patient and encouraging! Couldn't ask for a better result or teacher.",
      author: "Emma",
      context: "Resit Student GCSE Nov 2015"
    },
    {
      quote: "Karen helped my son to gain confidence with his Maths and quickly built a positive rapport with him, to the extent that Maths lessons became something he quite enjoyed instead of avoiding. Karen has the skill to demystify Maths and this makes Maths less of a chore for those who arrive on her doorstep feeling they just can't understand Maths, that it's boring and something to dread. Within one term my son passed his GCSE re take. Without Karen's help I know my son would not have achieved such a good result. I would highly recommend Karen as a Maths tutor to anyone who asked me",
      author: "Victoria",
      context: "Parent 2020"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12 md:py-24">
      <div className="mb-16 text-center md:text-left">
        <span className="font-label text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Success Stories</span>
        <h1 className="text-5xl md:text-7xl text-primary font-headline leading-tight tracking-tighter mb-6">
          Testimonials.
        </h1>
        <p className="text-xl text-secondary leading-relaxed font-body max-w-2xl">
          Hear from students and parents about their experiences and achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-outline-variant/20 relative ${index === 2 ? 'md:col-span-2' : ''}`}
          >
            <Quote className="w-12 h-12 text-primary-fixed-dim opacity-50 mb-6" />
            <p className="text-xl md:text-2xl text-primary font-headline leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-primary">{testimonial.author}</p>
                <p className="text-sm text-secondary">{testimonial.context}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
