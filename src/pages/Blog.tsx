
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

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
      <div className="w-full bg-gradient-to-br from-[#00262F] via-[#033745] to-[#05414F] py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
            <span className="text-gray-100 text-sm font-medium tracking-wider">BOXSTOCK BLOG</span>
          </div>
          <h1 className="text-white text-5xl font-bold mb-6 tracking-tight">Sneaker Insights & Trends</h1>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Ontdek de nieuwste ontwikkelingen in sneakers, streetwear en collectorsitems
          </p>
        </div>
      </div>
      
      {/* Featured post */}
      <div className="container mx-auto max-w-6xl px-4 -mt-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#E41A36]/90 hover:bg-[#E41A36] text-white px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm">
                  Featured
                </Badge>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-4">
                {blogPosts[0].tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-[#00262F] mt-2 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
              <div className="flex items-center mb-6 text-sm text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <User size={16} className="mr-2" />
                <span>{blogPosts[0].author}</span>
              </div>
              <Button 
                asChild
                className="inline-flex items-center mt-2 bg-[#E41A36] hover:bg-[#c01730] text-white transition-colors"
              >
                <Link to={`/blog/${blogPosts[0].id}`}>
                  Lees artikel <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog grid */}
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-[#00262F]">Recente artikelen</h2>
          <Button 
            variant="ghost" 
            className="flex items-center text-[#00262F] hover:text-[#E41A36]"
            asChild
          >
            <Link to="/blog">
              Alle artikelen <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#00262F] mb-3 line-clamp-2 group-hover:text-[#E41A36] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <User size={14} className="mr-1" />
                  <span className="truncate max-w-[100px]">{post.author}</span>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-sm text-[#E41A36] font-medium hover:underline flex items-center"
                >
                  Lees meer
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-20 bg-gradient-to-br from-[#AEDDE8] to-[#93D0DE] rounded-2xl p-10 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center mb-4">
              <BookOpen size={20} className="text-[#00262F] mr-2" />
              <span className="font-medium text-[#00262F]">BOXSTOCK NEWSLETTER</span>
            </div>
            <h3 className="text-3xl font-bold text-[#00262F] mb-4">Blijf op de hoogte</h3>
            <p className="text-[#00262F] text-lg mb-8">
              Ontvang de nieuwste blogartikelen, sneakertrends en exclusieve releases direct in je inbox.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col md:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Je e-mailadres" 
                className="px-5 py-3 rounded-full border-0 shadow-md flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-[#E41A36]/30"
                required
              />
              <Button 
                type="submit"
                className="bg-[#E41A36] hover:bg-[#c01730] text-white font-medium px-8 py-3 rounded-full shadow-md"
              >
                Aanmelden
              </Button>
            </form>
            <p className="text-xs text-[#00262F]/80 mt-4">
              Door je aan te melden ga je akkoord met onze privacyvoorwaarden.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
