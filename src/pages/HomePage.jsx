import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-6">Discover amazing things with us!</p>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
};

export default HomePage;