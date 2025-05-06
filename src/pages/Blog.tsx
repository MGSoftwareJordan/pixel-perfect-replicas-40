import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';

const blogPosts = [
  {
    id: 1,
    title: 'De geschiedenis van Air Jordan sneakers',
    excerpt: 'Ontdek de rijke geschiedenis achter het iconische Air Jordan merk en hoe het de sneakercultuur voorgoed veranderde.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true',
    date: '3 mei 2025',
    author: 'Sophie van der Berg',
    tags: ['Air Jordan', 'Historie', 'Sneakers']
  },
  {
    id: 2,
    title: 'Top 10 duurzame sneakermerken van 2025',
    excerpt: 'De sneakerindustrie wordt steeds duurzamer. Bekijk hier de merken die vooroplopen met eco-vriendelijke innovaties.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true',
    date: '28 april 2025',
    author: 'Max Jansen',
    tags: ['Duurzaamheid', 'Innovatie', 'Trends']
  },
  {
    id: 3,
    title: 'De opkomst van digitale mode en NFT sneakers',
    excerpt: "Hoe digitale mode en NFT's de sneakerwereld transformeren en wat dit betekent voor verzamelaars en investeerders.",
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true',
    date: '15 april 2025',
    author: 'Thomas Visser',
    tags: ['NFT', 'Digitale Mode', 'Technologie']
  },
  {
    id: 4,
    title: 'Zelfreinigend sneakermateriaal: de revolutie is hier',
    excerpt: 'Nieuwe ontwikkelingen in materiaalwetenschap maken zelfreinigende sneakers mogelijk. We testen de nieuwste modellen.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true',
    date: '10 april 2025',
    author: 'Emma de Vries',
    tags: ['Technologie', 'Innovatie', 'Materialen']
  },
  {
    id: 5,
    title: 'Interview met opkomend ontwerper Mila Zegers',
    excerpt: 'Een exclusief gesprek met Mila Zegers over haar doorbraak in de sneakerwereld en samenwerking met grote merken.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0e5727e94ca808e4b40131e58d738956d1b42ea?placeholderIfAbsent=true',
    date: '2 april 2025',
    author: 'Joost Bakker',
    tags: ['Interview', 'Designer', 'Spotlight']
  },
  {
    id: 6,
    title: 'De comeback van jaren 2010 sneakerstijlen',
    excerpt: 'Nostalgische stijlen maken een grote comeback. Ontdek welke modellen uit de jaren 2010 weer helemaal terug zijn.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/06f4469a59271ae4937da76906270c38645c8d93?placeholderIfAbsent=true',
    date: '25 maart 2025',
    author: 'Laura Smits',
    tags: ['Trends', 'Retro', 'Stijl']
  }
];

const Blog: React.FC = () => {
  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Je bent aangemeld voor de nieuwsbrief!");
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero section */}
      <div className="w-full bg-gradient-to-r from-[#00262F] to-[#05414F] py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Boxstock Blog</h1>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto">
            De laatste sneakertrends, releases, en alles wat je moet weten over de sneakerwereld in 2025.
          </p>
        </div>
      </div>
      
      {/* Featured post */}
      <div className="container mx-auto max-w-6xl px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="text-sm font-medium text-[#E41A36]">Featured</div>
              <h2 className="text-3xl font-bold text-[#00262F] mt-2">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mt-4 text-lg">{blogPosts[0].excerpt}</p>
              <div className="flex items-center mt-6">
                <div className="mr-2 text-sm text-gray-500">{blogPosts[0].date}</div>
                <div className="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                <div className="text-sm text-gray-500">{blogPosts[0].author}</div>
              </div>
              <Link 
                to={`/blog/${blogPosts[0].id}`} 
                className="inline-flex items-center mt-6 text-[#E41A36] font-medium hover:underline"
              >
                Lees meer
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog grid */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-[#00262F] mb-8">Nieuwste artikelen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#00262F] mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-sm text-[#E41A36] font-medium hover:underline"
                >
                  Lees meer
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-br from-[#AEDDE8] to-[#93D0DE] rounded-xl p-8 shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#00262F] mb-3">Blijf op de hoogte</h3>
            <p className="text-[#00262F] mb-6">
              Ontvang de nieuwste blogartikelen, sneakertrends en exclusieve releases in je inbox.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col md:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Je e-mailadres" 
                className="px-4 py-3 rounded-md border-0 flex-grow max-w-md"
                required
              />
              <button 
                type="submit"
                className="bg-[#E41A36] text-white font-medium px-6 py-3 rounded-md hover:bg-[#c01730] transition-colors"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
