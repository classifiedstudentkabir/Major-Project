import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ServiceCard 
        icon="fa-hammer"
        title="MS Fabrication"
        description="Professional metal fabrication services for structural steel, railings, and custom metalwork with precision welding."
      />
    </div>
  );
}
