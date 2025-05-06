import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col overflow-hidden items-center bg-[#00262F] pt-12 pb-[106px] px-[70px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex mb-[-21px] w-full max-w-[1065px] items-stretch gap-[40px_100px] flex-wrap ml-[17px] max-md:max-w-full max-md:mb-2.5">
        <div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6869f352e753400caac450942ef274c817756173?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-8 shrink-0"
                  alt="Facebook"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fed86126fc147779c6228165864d448b71d7980?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-8 shrink-0"
                  alt="Instagram"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5439b31a8fc3a40ddc72ea95ce3e537f7d157ca?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-8 shrink-0"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-3/12 max-md:w-full max-md:ml-0">
              <div className="text-base whitespace-nowrap max-md:mt-3">
                <h3 className="text-white font-bold">Account</h3>
                <nav className="w-full text-[#C7C7C7] font-normal mt-6">
                  <a href="#" className="block hover:text-white">Favorieten</a>
                  <a href="#" className="block mt-4 hover:text-white">Merken</a>
                  <a href="#" className="block mt-4 hover:text-white">Bestellingen</a>
                  <a href="#" className="block mt-4 hover:text-white">Instellingen</a>
                </nav>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="text-base max-md:mt-3">
                <h3 className="text-white font-bold">Quick links</h3>
                <nav className="w-full text-[#C7C7C7] font-normal mt-6">
                  <a href="#" className="block hover:text-white">Customer Service</a>
                  <a href="#" className="block mt-4 hover:text-white">Privacy Policy</a>
                  <a href="#" className="block mt-4 hover:text-white">Cookies</a>
                  <a href="#" className="block mt-4 hover:text-white">Terms & conditions</a>
                </nav>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="grow text-base whitespace-nowrap max-md:mt-3">
                <h3 className="text-white font-bold">Products</h3>
                <nav className="w-full text-[#C7C7C7] font-normal mt-6">
                  <a href="#" className="block hover:text-white">Sneakers</a>
                  <a href="#" className="block mt-4 hover:text-white">Accessoires</a>
                  <a href="#" className="block mt-4 hover:text-white">Kleding</a>
                  <a href="#" className="block mt-4 hover:text-white">Tassen</a>
                  <a href="#" className="block mt-4 hover:text-white">Merken</a>
                </nav>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="text-base max-md:mt-3">
                <h3 className="text-white font-bold">Our company</h3>
                <nav className="w-full text-[#C7C7C7] font-normal mt-6">
                  <a href="#" className="block hover:text-white">About Boxstock</a>
                  <a href="#" className="block mt-4 hover:text-white">Klantenservice</a>
                  <a href="#" className="block mt-4 hover:text-white">Bestellen & levering</a>
                  <a href="#" className="block mt-4 hover:text-white">Betaling</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;