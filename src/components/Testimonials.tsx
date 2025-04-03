
import { Separator } from "@/components/ui/separator";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ content, author, role }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">&ldquo;{content}&rdquo;</p>
      <Separator className="mb-4" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-fiona-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Ce que disent mes élèves</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez les témoignages de personnes qui ont suivi mes cours d'anglais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            content="Grâce aux cours de Fiona, j'ai pu améliorer considérablement mon niveau d'anglais en seulement quelques mois. Sa méthode est efficace et ses cours sont toujours dynamiques !"
            author="Sophie M."
            role="Étudiante en Master"
          />
          <TestimonialCard
            content="Fiona a su adapter son enseignement à mes besoins professionnels. Je me sens maintenant beaucoup plus à l'aise lors de mes réunions en anglais."
            author="Thomas L."
            role="Chef de projet"
          />
          <TestimonialCard
            content="Ambiance détendue, méthode efficace et professeure passionnée. Je recommande vivement les cours de Fiona à tous ceux qui souhaitent progresser en anglais !"
            author="Julie D."
            role="Développeuse web"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
