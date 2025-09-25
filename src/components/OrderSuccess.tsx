import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Clock, Home, Pizza } from 'lucide-react';
import type { Page } from '../App';

interface OrderSuccessProps {
  orderNumber: string;
  onNavigate: (page: Page) => void;
}

export function OrderSuccess({ orderNumber, onNavigate }: OrderSuccessProps) {
  const estimatedTime = '25-35 minutes';
  
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for choosing The Pizza Window
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">
              Order #{orderNumber}
            </CardTitle>
            <CardDescription>
              Your delicious pizza is being prepared fresh for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-pizza-beige/30 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Estimated Preparation Time
              </h3>
              <p className="text-2xl font-bold text-primary mb-2">
                {estimatedTime}
              </p>
              <p className="text-sm text-muted-foreground">
                We'll notify you when your order is ready for delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <Pizza className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Fresh Ingredients</h4>
                <p className="text-sm text-muted-foreground">
                  Made with the finest quality ingredients
                </p>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Quality Guaranteed</h4>
                <p className="text-sm text-muted-foreground">
                  100% satisfaction or your money back
                </p>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Your order is being prepared by our expert chefs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Fresh ingredients are being carefully selected
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Your pizza will be baked to perfection in our wood-fired oven
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  We'll deliver it hot and fresh to your doorstep
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Questions about your order? Call us at{' '}
                <span className="font-semibold text-primary">(555) 123-PIZZA</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button 
            onClick={() => onNavigate('home')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <Button 
            onClick={() => onNavigate('menu')}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Pizza className="h-4 w-4 mr-2" />
            Order More Pizza
          </Button>
        </div>
      </div>
    </div>
  );
}