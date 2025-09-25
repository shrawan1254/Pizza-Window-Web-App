import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Pizza } from 'lucide-react';
import { useCart } from '../App';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg border-b border-pizza-red/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-primary rounded-full p-2">
              <Pizza className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">The Pizza Window</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className={currentPage === 'home' ? 'bg-primary hover:bg-primary/90' : 'text-foreground hover:text-primary'}
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'menu' ? 'default' : 'ghost'}
              onClick={() => onNavigate('menu')}
              className={currentPage === 'menu' ? 'bg-primary hover:bg-primary/90' : 'text-foreground hover:text-primary'}
            >
              Menu
            </Button>
          </div>

          {/* Cart Icon */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('menu')}
            className="relative border-primary/20 hover:bg-primary/5"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
            {totalItems > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary"
              >
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center space-x-4 pb-4">
          <Button
            variant={currentPage === 'home' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('home')}
            className={currentPage === 'home' ? 'bg-primary hover:bg-primary/90' : 'text-foreground hover:text-primary'}
          >
            Home
          </Button>
          <Button
            variant={currentPage === 'menu' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('menu')}
            className={currentPage === 'menu' ? 'bg-primary hover:bg-primary/90' : 'text-foreground hover:text-primary'}
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
}