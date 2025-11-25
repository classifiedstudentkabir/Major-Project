import FeaturedProject from '../FeaturedProject';
import doorImage from '@assets/generated_images/security_door_product.png';

export default function FeaturedProjectExample() {
  return (
    <div className="p-8 bg-background">
      <FeaturedProject 
        image={doorImage}
        title="Stainless Steel Security Door"
        description="High-quality security door installation for residential complex with modern design and enhanced safety features."
        category="Residential"
      />
    </div>
  );
}
