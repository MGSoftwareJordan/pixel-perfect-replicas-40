import React, { useState } from 'react';
import SizeSelector from './SizeSelector';
import ExpandableSection from './ExpandableSection';

const ProductInfo: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Jordan XXXIII University Red',
        text: 'Check out this awesome product!',
        url: window.location.href,
      });
    } else {
      alert('Web Share API not supported in your browser');
    }
  };

  return (
    <div className="min-h-[1183px] w-full max-md:max-w-full max-md:mt-10">
      <div className="flex w-full max-w-[490px] gap-[16px_114px] text-[#00262F] flex-wrap max-md:max-w-full">
        <div className="min-w-60 grow shrink w-[434px] max-md:max-w-full">
          <div className="text-[#00262F] text-2xl font-normal leading-none">
            Air Jordan
          </div>
          <div className="text-[#00262F] text-[32px] font-bold leading-none max-md:max-w-full">
            Jordan XXXIII University Red
          </div>
        </div>
        <div className="flex min-w-60 gap-[40px_114px] text-base font-normal whitespace-nowrap grow shrink w-[226px]">
          <div className="flex min-h-8 items-center gap-2 px-1 rounded-md">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3020173c4c28f6df714116ceade60d759b5f183?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Price icon"
            />
            <div className="text-[#00262F] self-stretch my-auto">
              €178
            </div>
          </div>
          <button 
            className="flex min-h-8 items-center gap-2 px-1 rounded-md"
            onClick={toggleFavorite}
            aria-pressed={isFavorite}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58aafc6ac13b8fd71e1e9ba192ab78bc4fcdf1fa?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Favorite icon"
            />
            <div className="text-[#00262F] self-stretch my-auto">
              Favoriet
            </div>
          </button>
          <button 
            className="flex min-h-8 items-center gap-2 px-1 rounded-md"
            onClick={handleShare}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/189d7bc87fa27ed053af30b6064ccfa8d7137900?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Share icon"
            />
            <div className="text-[#00262F] self-stretch my-auto">
              Delen
            </div>
          </button>
        </div>
      </div>
      <div className="text-xl text-[#00262F] font-bold whitespace-nowrap text-center leading-[1.2] mt-8 max-md:max-w-full">
        <div className="flex items-center gap-1 flex-wrap max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/478bc0398700d77556d57437a15fa378fc43d838?placeholderIfAbsent=true"
            className="aspect-[1.04] object-contain w-[78px] self-stretch shrink-0 my-auto"
            alt="Model thumbnail 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef61aa1780cbf7c1996fd43b23a51284b2603945?placeholderIfAbsent=true"
            className="aspect-[1.04] object-contain w-[78px] self-stretch shrink-0 my-auto"
            alt="Model thumbnail 2"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81da93ff12d5208ef959a4f82a8cf15021032e44?placeholderIfAbsent=true"
            className="aspect-[1.04] object-contain w-[78px] self-stretch shrink-0 my-auto"
            alt="Model thumbnail 3"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ac83ea04bc480ea93ab3dbfd95bab4b25dffd9f?placeholderIfAbsent=true"
            className="aspect-[1.04] object-contain w-[78px] self-stretch shrink-0 my-auto"
            alt="Model thumbnail 4"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e2cd5b627b684b31c3e1e2283a0cb037010780?placeholderIfAbsent=true"
            className="aspect-[1.04] object-contain w-[78px] self-stretch shrink-0 my-auto"
            alt="Model thumbnail 5"
          />
          <div className="text-[#00262F] bg-white border self-stretch w-[78px] h-[77px] my-auto px-6 border-[rgba(204,204,204,1)] border-solid max-md:px-5">
            +12
          </div>
        </div>
      </div>
      <div className="w-full max-w-[490px] mt-8 max-md:max-w-full">
        <SizeSelector />
        <button className="w-full text-xl text-white font-bold text-center leading-[1.2] bg-[#00262F] mt-4 px-[70px] py-[17px] max-md:px-5">
          Bestel nu!
        </button>
        <div className="flex w-full mt-4 max-md:max-w-full">
          <div className="items-stretch shadow-[0px_-1px_0px_0px_#F5F3F1_inset] flex min-w-60 w-full gap-3 flex-wrap flex-1 shrink basis-[0%] bg-[#1EC0A3] px-5 py-3 max-md:max-w-full">
            <div className="flex gap-2.5 h-full w-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d47ddf5ccfa310bca65fc9f211d243aa1df914c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
                alt="Info icon"
              />
            </div>
            <div className="text-white text-base font-medium leading-none flex-1 shrink basis-[0%] my-auto">
              Dit product is ook pre-owned verkrijgbaar
            </div>
            <div className="flex gap-2.5 h-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d179376152b53da206efb1593c36a42c70d81a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
                alt="Arrow icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full w-[490px] text-base text-[#00262F] font-bold leading-[3] mt-8">
        <div className="border flex w-full flex-col bg-neutral-50 py-[18px] border-solid border-[#CCC] max-md:max-w-full">
          <div className="flex items-stretch gap-3.5 ml-[25px] max-md:ml-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a509693db90c1c674ca7d91d448f1f7c1390ae40?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 shrink-0"
              alt="Verification icon"
            />
            <div className="text-[#00262F] basis-auto grow shrink my-auto">
              Geverifieerd door het Boxstock Authenticatieteam
            </div>
          </div>
          <div className="border self-stretch shrink-0 h-px mt-4 border-[rgba(204,204,204,1)] border-solid max-md:max-w-full" />
          <div className="flex items-stretch gap-3.5 ml-[25px] mt-[19px] max-md:ml-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c091b2fd07f8a0ba829b4787a9d57f263a51b1b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 shrink-0"
              alt="Payment icon"
            />
            <div className="text-[#00262F] basis-auto">
              Veilig online betalen
            </div>
          </div>
          <div className="border self-stretch shrink-0 h-px mt-[17px] border-[rgba(204,204,204,1)] border-solid max-md:max-w-full" />
          <div className="flex items-stretch gap-3.5 ml-[25px] mt-[19px] max-md:ml-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1cc9210f6efd5429a2869691c140d8d12605c4?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 shrink-0"
              alt="Rating icon"
            />
            <div className="text-[#00262F] basis-auto grow shrink my-auto">
              Klanten waarderen ons met 9.2/10
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[143px] max-w-full w-[490px] text-sm font-normal whitespace-nowrap leading-5 mt-8">
        <div className="text-ellipsis bg-clip-text flex-1 max-md:max-w-full">
          Stap in een erfenis met de Jordan XXXIII University Red
          van Air Jordan, een sneaker die iconisch erfgoed
          combineert met modern design. Ontworpen voor mannen die
          uitmuntendheid eisen, levert de University
          Red/Black-Sail-White kleurencombinatie een gedurfde en
          verfijnde esthetiek. Uitgebracht op 14/01/2019, brengt
          het eer aan een klassieke lijn terwijl het innoveert voor
          de toekomst.
          <br />
          Ontworpen met een Air-middenzool, biedt deze sneaker
          uitzonderlijke demping en dynamische prestaties bij elke
          stap. Het ontwerp combineert naadloos atletische precisie
          met stedelijke verfijning, perfect voor degenen die stijl
          en inhoud waarderen. Zet de trend met Boxstock en ervaar
          een schoeiselrevolutie die prestaties in balans brengt met
          iconische stijl.
        </div>
      </div>
      <div className="w-full text-base text-[#00262F] font-medium mt-8 max-md:max-w-full">
        <ExpandableSection title="Kenmerken" />
        <ExpandableSection title="Over Air Jordan" />
        <ExpandableSection title="Klantenservice" />
        <ExpandableSection title="Over Boxstock" />
        <ExpandableSection title="Hoe werkt resell?" />
      </div>
    </div>
  );
};

export default ProductInfo;