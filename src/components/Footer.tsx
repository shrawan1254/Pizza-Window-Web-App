import React from 'react';
import { Pizza, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-pizza-red/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Pizza className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary">The Pizza Window</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fresh ingredients, authentic recipes, and passion for pizza. 
              Delivering delicious moments straight from our oven to your window.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">+91 98765 PIZZA</p>
                  <p className="text-xs text-muted-foreground">Call for orders</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">123 Food Street</p>
                  <p className="text-sm text-muted-foreground">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Mon - Thu</p>
                  <p className="text-muted-foreground">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="text-sm ml-7">
                <p className="font-medium text-foreground">Fri - Sat</p>
                <p className="text-muted-foreground">11:00 AM - 11:00 PM</p>
              </div>
              <div className="text-sm ml-7">
                <p className="font-medium text-foreground">Sunday</p>
                <p className="text-muted-foreground">12:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 mb-6">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Delivery Areas
              </a>
            </div>
            
            {/* Embedded Map Placeholder */}
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">
                Interactive Map
              </p>
              <p className="text-xs text-muted-foreground">
                Click to view location
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pizza-red/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 The Pizza Window. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}