const FeaturesSection = () => {
  const features = [
    {
      title: "Virtual Tours",
      description: "Experience art galleries and museums from the comfort of your home with our immersive virtual tours.",
      icon: "🎨"
    },
    {
      title: "Art Education",
      description: "Learn about different art movements, techniques, and artists through our comprehensive guides.",
      icon: "📚"
    },
    {
      title: "Interactive Learning",
      description: "Engage with art through interactive features, quizzes, and detailed analyses.",
      icon: "💡"
    },
    {
      title: "Community",
      description: "Join a community of art enthusiasts, share your thoughts, and discover new perspectives.",
      icon: "👥"
    }
  ];

  return (
    <div className="bg-art-offwhite py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-art-navy mb-4">
            Why Choose ArtSpark?
          </h2>
          <p className="text-lg text-art-charcoal max-w-2xl mx-auto">
            Discover a new way to experience and learn about art through our innovative platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-art-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-art-charcoal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 