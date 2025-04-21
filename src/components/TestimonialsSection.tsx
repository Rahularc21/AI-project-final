const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ArtSpark has completely transformed how I experience art. The virtual tours are incredibly immersive!",
      author: "Sarah Johnson",
      role: "Art Enthusiast"
    },
    {
      quote: "As an art teacher, I find the educational resources invaluable for my students. Highly recommended!",
      author: "Michael Chen",
      role: "Art Teacher"
    },
    {
      quote: "The interactive features make learning about art history engaging and fun. A must-visit for art lovers!",
      author: "Emily Rodriguez",
      role: "Museum Curator"
    }
  ];

  return (
    <div className="bg-art-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of art enthusiasts who have transformed their art experience with ArtSpark.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-white/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 