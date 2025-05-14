
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface VerificationCodeInputProps {
  length?: number;
  email?: string;
  onSubmit?: (code: string) => void;
  onResend?: () => void;
  onCancel?: () => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  length = 6,
  email = "your@email.com",
  onSubmit,
  onResend,
  onCancel
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Allow only one digit
    if (value.length > 1) {
      return;
    }
    
    // Update code
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Move to next input if current has value
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // Allow only digits
    if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  };
  
  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain')
      .replace(/\D/g, '')  // Remove non-digits
      .slice(0, length);
    
    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < pastedData.length; i++) {
        if (i < length) {
          newCode[i] = pastedData[i];
        }
      }
      setCode(newCode);
      
      // Focus on the next empty input or the last one
      const nextEmptyIndex = newCode.findIndex(digit => digit === '');
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus();
      } else {
        inputRefs.current[length - 1]?.focus();
      }
    }
  };
  
  // Submit code
  const handleSubmit = () => {
    if (onSubmit && code.every(digit => digit !== '')) {
      onSubmit(code.join(''));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg p-8 shadow">
      <h1 className="text-xl font-semibold text-[#00262F] mb-4">Enter verification code</h1>
      
      <p className="text-gray-600 mb-6">
        To verify your new email address, enter the verification code we've sent to{' '}
        <strong>{email}</strong>. The code will expire in <strong>10 minutes</strong>.
      </p>
      
      <div className="flex justify-between mb-8 gap-2">
        {Array.from({ length }).map((_, index) => (
          <div key={index} className="w-14">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              ref={el => inputRefs.current[index] = el}
              value={code[index]}
              onChange={e => handleChange(e, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="text-center text-xl h-14 border-gray-300 focus:border-[#1EC0A3] focus:ring-1 focus:ring-[#1EC0A3]"
            />
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <Button 
          variant="link" 
          className="text-[#1EC0A3] p-0"
          onClick={onResend}
        >
          Resend Code
        </Button>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="border-gray-300"
            onClick={onCancel}
          >
            Cancel
          </Button>
          
          <Button 
            className="bg-[#1EC0A3] hover:bg-[#18a88f]"
            onClick={handleSubmit}
            disabled={!code.every(digit => digit !== '')}
          >
            Confirm Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeInput;
