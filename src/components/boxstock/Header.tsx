import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-5 mr-[118px] max-md:mr-2.5">
        <div className="self-stretch text-sm text-[#00262f] font-bold whitespace-nowrap leading-6 my-auto">
          <div className="flex min-h-10 items-stretch">
            <div className="self-stretch gap-2 h-full py-3 rounded-[20px]">
              Verkopen
            </div>
          </div>
        </div>
        <div className="self-stretch text-sm text-[#00262f] font-bold leading-6 my-auto">
          <div className="flex min-h-10 items-stretch">
            <div className="self-stretch gap-2 h-full py-3 rounded-[20px]">
              Over Boxstock
            </div>
          </div>
        </div>
        <div className="self-stretch text-sm text-[#00262f] font-bold whitespace-nowrap leading-6 my-auto">
          <div className="flex min-h-10 items-stretch">
            <div className="self-stretch gap-2 h-full py-3 rounded-[20px]">
              Klantenservice
            </div>
          </div>
        </div>
        <div className="self-stretch min-h-4 my-auto">
          <div className="flex min-h-2.5" />
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1199px] items-stretch gap-5 text-base text-[rgba(204,204,204,1)] font-medium flex-wrap justify-between mt-3 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ad84d1ff291f4f339854893a1c0bfa59bc73ca?placeholderIfAbsent=true"
          className="aspect-[6.62] object-contain w-[179px] shrink-0 max-w-full my-auto"
          alt="Boxstock logo"
        />
        <div className="justify-center items-stretch border border-[color:var(--Neutrals-Black-200,#C3C5DB)] flex min-h-10 flex-col overflow-hidden bg-white py-[7px] rounded-lg border-solid max-md:max-w-full">
          <div className="flex min-h-[27px] w-full items-center gap-2 flex-wrap px-4 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a957b2d3817d8b4c9b54f32dade64604573bc94?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Search icon"
            />
            <div className="self-stretch w-[229px] min-w-60 gap-2 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              Zoek op model of merk
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col overflow-hidden items-center font-bold whitespace-nowrap bg-white mt-1.5 pt-4 pb-[9px] px-[70px] border-b-[#C7C7C7] border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1202px] gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="flex h-[38px] items-center gap-8 text-lg text-[#00262F] leading-none mt-2 max-md:max-w-full">
            <div className="self-stretch flex min-w-60 items-center gap-6 my-auto max-md:max-w-full">
              <div className="self-stretch flex min-w-60 min-h-10 gap-6 flex-wrap my-auto max-md:max-w-full">
                <div className="flex flex-col items-stretch justify-center">
                  <div className="flex min-h-10 items-stretch">
                    <div className="text-[#00262F] self-stretch gap-2 h-full py-3 rounded-[20px]">
                      Sneakers
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch justify-center">
                  <div className="flex min-h-10 items-stretch">
                    <div className="text-[#00262F] self-stretch gap-2 h-full py-3 rounded-[20px]">
                      Accessoires
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex min-h-10 items-stretch">
                    <div className="text-[#00262F] self-stretch gap-2 h-full py-3 rounded-[20px]">
                      Kleding
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex min-h-10 items-stretch">
                    <div className="text-[#00262F] self-stretch gap-2 h-full py-3 rounded-[20px]">
                      Tassen
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex min-h-10 items-stretch">
                    <div className="text-[#00262F] self-stretch gap-2 h-full py-3 rounded-[20px]">
                      Merken
                    </div>
                  </div>
                </div>
                <div className="text-[#1EC0A3]">
                  <div className="flex min-h-10 items-stretch">
                    <div className="text-[#1EC0A3] self-stretch gap-2 h-full py-3 rounded-[20px]">
                      Pre-owned
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-base text-white">
            <div className="self-stretch flex items-center gap-4 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fddca4e0eb661d266128f94d93a542648e1856fe?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
                alt="User icon"
              />
              <div className="self-stretch flex w-10 shrink-0 h-10 my-auto" />
              <div className="self-stretch flex min-h-10 items-stretch my-auto">
                <div className="text-white self-stretch gap-2 h-full bg-[#E41A36] px-5 py-3 rounded-3xl">
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;