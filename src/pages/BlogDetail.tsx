
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent } from '@/components/ui/card';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'De geschiedenis van Air Jordan sneakers',
    excerpt: 'Ontdek de rijke geschiedenis achter het iconische Air Jordan merk en hoe het de sneakercultuur voorgoed veranderde.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true',
    date: '3 mei 2025',
    author: 'Sophie van der Berg',
    tags: ['Air Jordan', 'Historie', 'Sneakers'],
    content: `
      <p class="lead">In de wereld van sneakers is er geen naam die evenveel gewicht draagt als Air Jordan. Het merk heeft niet alleen de basketbalwereld veranderd, maar ook een onuitwisbare stempel gedrukt op streetwear en popcultuur.</p>
      
      <h2>Het begin van een legende</h2>
      <p>De eerste Air Jordan sneaker werd in 1985 ontworpen voor een jonge NBA-rookie genaamd Michael Jordan. Nike, destijds nog niet de gigant die het nu is, nam een gok door een gehele sneakerlijn aan één enkele speler toe te wijzen - iets wat voorheen ondenkbaar was.</p>
      <p>De originele Air Jordan I, ontworpen door Peter Moore, brak de strenge NBA-regels omtrent uniforme kleuren. Elke keer dat Jordan ze droeg, kreeg hij een boete van $5.000. Nike betaalde deze boetes met plezier, wetende dat de controverse alleen maar meer aandacht genereerde voor hun product.</p>
      
      <h2>Cultuuricoon</h2>
      <p>De Air Jordan evolueerde snel van een basketbalschoen naar een cultuuricoon. De sneakers werden symbolen van status, stijl en identiteit. Films, muziek en kunst begonnen verwijzingen naar de Air Jordan op te nemen, waardoor de sneaker transcendeerde tot ver buiten de grenzen van sport.</p>
      
      <figure class="image">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true" alt="Classic Air Jordan sneaker" class="rounded-lg">
        <figcaption class="text-sm text-center text-gray-500 mt-2">De iconische Air Jordan silhouette</figcaption>
      </figure>
      
      <h2>Innovatie en design</h2>
      <p>Tinker Hatfield, die vanaf de Air Jordan III de ontwerprol overnam, introduceerde baanbrekende innovaties zoals zichtbare Air-demping, het Jumpman-logo en unieke materiaalcombinaties. Elk nieuw model in de reeks bracht technologische verbeteringen die niet alleen de prestaties verbeterden maar ook esthetisch grensverleggend waren.</p>
      <p>De collectie is nu in zijn 38e iteratie, en heeft ondertussen talloze colorways en speciale edities uitgebracht. Elke release wordt met evenveel, zo niet meer, anticipatie ontvangen als in de begindagen.</p>
      
      <h2>Legacy en toekomst</h2>
      <p>Hoewel Michael Jordan al jaren niet meer actief speelt, blijft zijn sneakerlijn sterker dan ooit. De merkcollaboraties met kunstenaars, ontwerpers en andere atleten hebben het merk relevant gehouden voor nieuwe generaties die Jordan misschien nooit hebben zien spelen.</p>
      <p>In 2025 staat de Air Jordan op een kruispunt van traditie en moderniteit, waarbij het de balans moet vinden tussen het eren van zijn rijke geschiedenis en het innoveren voor de toekomst. Nieuwe materialen, duurzame productiemethoden en digitale integraties zorgen ervoor dat deze iconische lijn relevant blijft in een snel veranderende wereld.</p>
      
      <p>Voor sneakerliefhebbers, verzamelaars en casual dragers wereldwijd blijft de Air Jordan meer dan een schoen - het is een stukje levende geschiedenis dat de tijd heeft doorstaan en blijft inspireren.</p>
    `
  },
  {
    id: 2,
    title: 'Top 10 duurzame sneakermerken van 2025',
    excerpt: 'De sneakerindustrie wordt steeds duurzamer. Bekijk hier de merken die vooroplopen met eco-vriendelijke innovaties.',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true',
    date: '28 april 2025',
    author: 'Max Jansen',
    tags: ['Duurzaamheid', 'Innovatie', 'Trends'],
    content: `
      <p class="lead">De sneakerindustrie maakt een radicale transformatie door op het gebied van duurzaamheid. Merken die voorheen bekend stonden om hun milieubelasting nemen nu het voortouw in eco-innovatie.</p>
      
      <p>Hier zijn de tien merken die in 2025 de standaard zetten voor duurzaamheid in de sneakerwereld:</p>
      
      <ol>
        <li>
          <h3>EcoStep</h3>
          <p>Dit Nederlandse merk gebruikt uitsluitend gerecyclede oceaanplastic en plantaardige materialen. Hun revolutionaire waterloos verfproces heeft de industrie op zijn kop gezet.</p>
        </li>
        <li>
          <h3>Veja</h3>
          <p>Na jaren van pionieren in duurzaamheid heeft Veja nu een volledig circulair productieproces geïmplementeerd waarbij oude sneakers worden omgezet in nieuwe.</p>
        </li>
        <li>
          <h3>Allbirds</h3>
          <p>Hun nieuwste modellen hebben een negatieve koolstofvoetafdruk, wat betekent dat ze tijdens productie meer CO2 opnemen dan uitstoten.</p>
        </li>
        <li>
          <h3>Nike Renew</h3>
          <p>Nike's duurzame sublijn heeft de massaproductie van eco-vriendelijke sneakers geperfectioneerd zonder in te leveren op prestaties.</p>
        </li>
        <li>
          <h3>Adidas Biofabric</h3>
          <p>De volledig biologisch afbreekbare sneakerlijn van Adidas lost binnen 36 maanden op na het composteren.</p>
        </li>
        <li>
          <h3>Roscomar</h3>
          <p>Dit luxemerk combineert handgemaakt vakmanschap met geavanceerde duurzame materialen uit algenkweek.</p>
        </li>
        <li>
          <h3>Nothing New</h3>
          <p>Zoals de naam al suggereert, gebruikt dit merk uitsluitend gerecyclede materialen en heeft nu een koolstofnegatief certificaat.</p>
        </li>
        <li>
          <h3>Cariuma</h3>
          <p>Hun revolutionaire herbebossingsmodel heeft al geleid tot meer dan 2 miljoen nieuwe bomen en een volledig transparante productieketen.</p>
        </li>
        <li>
          <h3>Rens Original</h3>
          <p>Specialisten in koffiegrond-sneakers hebben hun technologie nu uitgebreid naar andere voedselafvalstromen.</p>
        </li>
        <li>
          <h3>Hylo Athletics</h3>
          <p>Sportprestaties ontmoeten duurzaamheid in deze technologisch geavanceerde maar minimaal belastende sportschoenen.</p>
        </li>
      </ol>
      
      <figure class="image">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true" alt="Sustainable sneaker materials" class="rounded-lg">
        <figcaption class="text-sm text-center text-gray-500 mt-2">Innovatieve duurzame materialen revolutioneren de sneakerindustrie</figcaption>
      </figure>
      
      <h2>De technologieën die het verschil maken</h2>
      
      <p>Wat deze merken onderscheidt is niet alleen hun gebruik van gerecyclede materialen, maar hun holistische benadering van duurzaamheid:</p>
      
      <ul>
        <li>Biofabricage - het kweken van materialen met behulp van micro-organismen</li>
        <li>Blockchain-traceerbare toeleveringsketens voor volledige transparantie</li>
        <li>Lokale productie via 3D-print hubs om transportemissies te verminderen</li>
        <li>Abonnementsmodellen waarbij klanten hun sneakers terugsturen voor recycling</li>
        <li>Koolstofvangst in de materialen zelf</li>
      </ul>
      
      <p>De race naar duurzaamheid heeft ook geleid tot onverwachte partnerschappen tussen concurrerende merken die nu technologieën delen om de hele industrie te verbeteren. Dit nieuwe tijdperk van samenwerking laat zien dat de sneakerwereld eindelijk begrijpt dat duurzaamheid geen optie is, maar een noodzaak.</p>
      
      <p>Als consument heb je meer keuze dan ooit om stijl te combineren met verantwoord koopgedrag. Deze tien merken bewijzen dat duurzaamheid niet langer een compromis betekent op gebied van design of functionaliteit.</p>
    `
  },
  // We'll add more posts as needed
];

// Related posts - simplified version that shows 3 related posts
const getRelatedPosts = (currentId: number) => {
  return blogPosts
    .filter(post => post.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '1');
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];
  const relatedPosts = getRelatedPosts(post.id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero image */}
      <div className="w-full h-80 md:h-96 relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="container mx-auto max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white mb-4 hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Terug naar blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-white/90">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-gray-500">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-gray-600">Sneaker Journalist</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#00262F] mb-6">Gerelateerde artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                  <Link 
                    to={`/blog/${relatedPost.id}`}
                    className="text-sm text-[#E41A36] font-medium hover:underline"
                  >
                    Lees meer
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
