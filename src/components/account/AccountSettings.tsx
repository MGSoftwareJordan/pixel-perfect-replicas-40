
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

const AccountSettings: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00262F]">Instellingen</h1>
        <p className="text-gray-500">Bekijk en bewerk je gegevens.</p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-bold text-[#00262F] mb-6">Jouw Account</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
              Voornaam
            </label>
            <Input 
              type="text" 
              id="firstname" 
              defaultValue="Mike" 
              className="w-full border-gray-200"
            />
          </div>
          
          <div>
            <label htmlFor="middlename" className="block text-sm font-medium text-gray-700 mb-1">
              Tussenvoegsel
            </label>
            <Input 
              type="text" 
              id="middlename" 
              className="w-full border-gray-200"
            />
          </div>
          
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
              Achternaam
            </label>
            <Input 
              type="text" 
              id="lastname" 
              defaultValue="Boxstock" 
              className="w-full border-gray-200"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefoon
            </label>
            <Input 
              type="tel" 
              id="phone" 
              defaultValue="0651379230" 
              className="w-full border-gray-200"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <Input 
              type="email" 
              id="email" 
              defaultValue="administrator@mgsoftware.nl" 
              className="w-full border-gray-200"
              disabled
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Wachtwoord
            </label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                className="w-full border-gray-200 pr-10"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Wachtwoord Bevestigen
            </label>
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirm-password" 
                className="w-full border-gray-200 pr-10"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button className="bg-[#1EC0A3] hover:bg-[#18a88f]">
            Wijzigingen Opslaan
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-red-500 mb-6">Gevaarlijke acties</h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-red-50 rounded-lg gap-4">
          <div>
            <h3 className="font-medium text-[#00262F]">Account verwijderen</h3>
            <p className="text-sm text-gray-500">
              Hiermee wordt je account permanent verwijderd. Deze actie kan niet ongedaan worden gemaakt.
            </p>
          </div>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600">
            Account verwijderen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
