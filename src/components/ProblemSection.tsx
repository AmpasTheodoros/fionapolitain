const ProblemSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Les défis de l'apprentissage de l'anglais
            </h2>
            <p className="text-gray-600">
              Pourquoi tant de personnes peinent à maîtriser la langue anglaise malgré des années d'études ?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Manque de confiance</h3>
              <p className="text-gray-600">
                La peur de faire des erreurs et la timidité empêchent souvent de pratiquer et de progresser en conversation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Méthodes inadaptées</h3>
              <p className="text-gray-600">
                Des cours traditionnels trop théoriques et peu engageants qui ne préparent pas aux situations réelles.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Manque de pratique</h3>
              <p className="text-gray-600">
                L'absence d'environnement anglophone et d'opportunités régulières pour pratiquer freinent considérablement les progrès.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProblemSection;