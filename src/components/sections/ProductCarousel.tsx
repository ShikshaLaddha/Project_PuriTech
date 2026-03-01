import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import productFront from "@/assets/product-front.jpg";
import productSide from "@/assets/product-side.jpg";
import productDetail from "@/assets/product-detail.jpg";
import productAction from "@/assets/product-action.jpg";

const productImages = [
  {
    src: productFront,
    alt: "PuriTech Pani-Puri Vending Machine - Front View",
    caption: "Front View - 6-Flavour Dispensing System",
  },
  {
    src: productSide,
    alt: "PuriTech Pani-Puri Vending Machine - Side View",
    caption: "Side View - Mobile Cart Design",
  },
  {
    src: productDetail,
    alt: "PuriTech Sensor-Based Dispensing Nozzles - Detail",
    caption: "Detail - Sensor-Based Dispensing Nozzles",
  },
  {
    src: productAction,
    alt: "PuriTech Vending Machine in Action - Street Setup",
    caption: "In Action - Street Food Vending",
  },
];

const ProductCarousel = () => {
  return (
    <div className="mx-auto max-w-3xl px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {productImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg">
                <AspectRatio ratio={1}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
                <div className="bg-secondary/50 p-4 text-center">
                  <p className="font-medium text-foreground">{image.caption}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-primary/30 bg-background hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="border-primary/30 bg-background hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {productImages.map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-primary/30"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
