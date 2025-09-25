import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const featuredPizzas = [
    {
      id: 14,
      name: "Pizza Window Special Pizza",
      description: "Our exclusive signature pizza with unique toppings",
      price: 169,
      image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Peppy Paneer",
      description: "Spiced paneer with peppers and onions",
      price: 119,
      image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      name: "Paneer Makhani",
      description: "Rich and creamy paneer makhani pizza",
      price: 129,
      image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1609070230432-d67e8d57fffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBwaXp6YSUyMHdpbmRvdyUyMHJ1c3RpYyUyMGtpdGNoZW58ZW58MXx8fHwxNzU4NzE1ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hot pizza by window"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Pizza Window
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-200">
            Fresh From the Oven to Your Window
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate('menu')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Featured Pizzas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular creations, made with the finest ingredients and baked to perfection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <Card key={pizza.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{pizza.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pizza.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">₹{pizza.price}</span>
                  <Button 
                    onClick={() => onNavigate('menu')}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('menu')}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-pizza-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              At The Pizza Window, we believe that great pizza starts with great ingredients. 
              Since opening our doors, we've been committed to sourcing the freshest produce, 
              finest cheeses, and most flavorful herbs to create pizzas that are not just meals, 
              but experiences.
            </p>
            <p>
              Our wood-fired ovens and time-honored recipes create the perfect combination of 
              crispy crust and melted cheese that keeps our customers coming back for more. 
              Every pizza is handcrafted with love and attention to detail.
            </p>
            <p>
              Whether you're grabbing a quick slice or ordering for the whole family, 
              we're here to serve you delicious food with a smile, straight from our window to yours.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 px-4 bg-white border-t border-pizza-red/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-primary/10 rounded-full p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">Mon-Thu: 11AM-10PM</p>
                <p className="text-muted-foreground">Fri-Sat: 11AM-11PM</p>
                <p className="text-muted-foreground">Sun: 12PM-9PM</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-primary/10 rounded-full p-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
                <p className="text-muted-foreground">(555) 123-PIZZA</p>
                <p className="text-muted-foreground">info@pizzawindow.com</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-primary/10 rounded-full p-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">123 Pizza Street</p>
                <p className="text-muted-foreground">Foodie Town, FT 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}