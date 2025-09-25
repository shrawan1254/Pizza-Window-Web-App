import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useCart } from '../App';
import type { Page } from '../App';

interface MenuProps {
  onNavigate: (page: Page) => void;
}

export function Menu({ onNavigate }: MenuProps) {
  const { cartItems, addToCart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuItems = [
    // COMBO MEALS
    { id: 101, name: "TREAT MEAL FOR 1 - Pizza Mania", description: "1 Choice of Pizza Mania + 1 French fries + 250 ml 1 Cold drink", price: 154, category: "Combo Meals", image: "https://images.unsplash.com/photo-1705537748124-926009973f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGZhbWlseSUyMGZvb2R8ZW58MXx8fHwxNzU4NzE4Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 102, name: "TREAT MEAL FOR 1 - Delicious", description: "1 Choice of Delicious Pizza + 1 French fries + 250 ml 1 Cold drink", price: 205, category: "Combo Meals", image: "https://images.unsplash.com/photo-1645087524454-651393dbf5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGRyaW5rcyUyMGZyaWVzfGVufDF8fHx8MTc1ODcxODc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 103, name: "TREAT MEAL FOR 2 - Pizza Mania", description: "2 Choice of Pizza Mania + 1 French fries + 250 ml 1 Cold drink", price: 234, category: "Combo Meals", image: "https://images.unsplash.com/photo-1705537748124-926009973f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGZhbWlseSUyMGZvb2R8ZW58MXx8fHwxNzU4NzE4Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 104, name: "TREAT MEAL FOR 2 - Delicious", description: "2 Choice of Delicious Pizza + 1 French fries + 250 ml 1 Cold drink", price: 325, category: "Combo Meals", image: "https://images.unsplash.com/photo-1645087524454-651393dbf5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGRyaW5rcyUyMGZyaWVzfGVufDF8fHx8MTc1ODcxODc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 105, name: "TREAT MEAL FOR 3 - Pizza Mania", description: "3 Choice of Pizza Mania + 1 French fries + 250 ml 2 Cold drink", price: 314, category: "Combo Meals", image: "https://images.unsplash.com/photo-1705537748124-926009973f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGZhbWlseSUyMGZvb2R8ZW58MXx8fHwxNzU4NzE4Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 106, name: "TREAT MEAL FOR 3 - Delicious", description: "3 Choice of Delicious Pizza + 1 French fries + 250 ml 2 Cold drink", price: 455, category: "Combo Meals", image: "https://images.unsplash.com/photo-1645087524454-651393dbf5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGRyaW5rcyUyMGZyaWVzfGVufDF8fHx8MTc1ODcxODc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 107, name: "TREAT MEAL FOR 4 - Pizza Mania", description: "4 Choice of Pizza Mania + 1 French fries + 250 ml 2 Cold drink", price: 384, category: "Combo Meals", image: "https://images.unsplash.com/photo-1705537748124-926009973f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGZhbWlseSUyMGZvb2R8ZW58MXx8fHwxNzU4NzE4Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 108, name: "TREAT MEAL FOR 4 - Delicious", description: "4 Choice of Delicious Pizza + 1 French fries + 250 ml 2 Cold drink", price: 575, category: "Combo Meals", image: "https://images.unsplash.com/photo-1645087524454-651393dbf5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNvbWJvJTIwbWVhbCUyMGRyaW5rcyUyMGZyaWVzfGVufDF8fHx8MTc1ODcxODc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // DELICIOUS PIZZAS
    { id: 1, name: "Double Cheese Margherita", description: "Extra cheese with fresh tomato sauce and basil", price: 119, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 2, name: "Peppy Paneer", description: "Spiced paneer with peppers and onions", price: 119, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 3, name: "Blazing Onion n Paprika", description: "Fiery combination of onions and paprika", price: 119, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 4, name: "Fiery Jaineer Paneer Pizza", description: "Spicy paneer pizza with special jain preparation", price: 129, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 5, name: "Paneer Makhani", description: "Rich and creamy paneer makhani pizza", price: 129, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 6, name: "Schezwan Paneer", description: "Indo-Chinese style paneer with schezwan sauce", price: 129, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 7, name: "Supreme Veggie", description: "Loaded with fresh vegetables and cheese", price: 129, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 8, name: "Veggie Barbeque", description: "Barbecue style vegetables with smoky flavor", price: 139, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 9, name: "Paneer Farm", description: "Fresh farm-style paneer with herbs", price: 139, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 10, name: "Deluxe Veggie", description: "Premium vegetables with exotic toppings", price: 139, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 11, name: "Veg Exotica", description: "Exotic vegetables with unique flavors", price: 139, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 12, name: "Window's Farm", description: "Our signature farm-fresh pizza", price: 139, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 13, name: "Cheese n Mushroom", description: "Rich cheese with fresh mushrooms", price: 149, category: "Delicious Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // SPECIAL PIZZA
    { id: 14, name: "Pizza Window Special Pizza", description: "Our exclusive signature pizza with unique toppings", price: 169, category: "Special Pizza", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // CLASSIC PIZZAS
    { id: 15, name: "Margherita Pizza", description: "Classic tomato sauce, mozzarella, and basil", price: 89, category: "Classic Pizzas", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 16, name: "Veggie Delight", description: "Fresh vegetables with cheese", price: 89, category: "Classic Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 17, name: "Paneer Onion", description: "Paneer with caramelized onions", price: 99, category: "Classic Pizzas", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 18, name: "Schezwan Margherita", description: "Classic margherita with schezwan twist", price: 99, category: "Classic Pizzas", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // PIZZA MANIA
    { id: 19, name: "Corn Pizza", description: "Sweet corn with cheese", price: 79, category: "Pizza Mania", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 20, name: "Capsicum Pizza", description: "Fresh capsicum with herbs", price: 79, category: "Pizza Mania", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 21, name: "Tomato & Onion Pizza", description: "Fresh tomatoes and onions", price: 79, category: "Pizza Mania", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 22, name: "Onion & Corn Pizza", description: "Sweet corn with caramelized onions", price: 79, category: "Pizza Mania", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // NEW ARRIVALS
    { id: 23, name: "Makhani Do Pyaza", description: "Rich makhani with double onions", price: 89, category: "New Arrivals", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 24, name: "Kolhapuri Thaska Pizza", description: "Spicy Kolhapuri style pizza", price: 119, category: "New Arrivals", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 25, name: "Veg Hawaiian Pizza", description: "Vegetarian Hawaiian with pineapple", price: 129, category: "New Arrivals", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 26, name: "Sweet Heat Pizza", description: "Perfect balance of sweet and spicy", price: 129, category: "New Arrivals", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 27, name: "English Retreat Pizza", description: "Continental style pizza", price: 149, category: "New Arrivals", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 28, name: "Las Vegas Hot Pizza", description: "Hot and spicy Vegas style", price: 149, category: "New Arrivals", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // JAIN PIZZAS
    { id: 29, name: "Jain Margherita Pizza", description: "Classic margherita without onion and garlic", price: 89, category: "Jain Pizzas", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 30, name: "Jain Veggie Pizza", description: "Jain-friendly vegetables with cheese", price: 89, category: "Jain Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 31, name: "Jain Supreme Pizza", description: "Supreme vegetables in Jain style", price: 129, category: "Jain Pizzas", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 32, name: "Jain Paneer Peri Peri Pizza", description: "Spicy peri peri paneer in Jain style", price: 129, category: "Jain Pizzas", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 33, name: "Thousand Island Jain Pizza", description: "Thousand island sauce with Jain toppings", price: 149, category: "Jain Pizzas", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // FRIES & SNACKS
    { id: 34, name: "Salted French Fries", description: "Crispy golden fries with salt", price: 70, category: "Fries & Snacks", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 35, name: "Peri Peri French Fries", description: "Spicy peri peri seasoned fries", price: 75, category: "Fries & Snacks", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 36, name: "Peri Peri Mayo Fries", description: "Peri peri fries with mayo", price: 89, category: "Fries & Snacks", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 37, name: "Thousand Island Fries", description: "Fries with thousand island dip", price: 89, category: "Fries & Snacks", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 38, name: "Cheezy French Fries", description: "Loaded with melted cheese", price: 99, category: "Fries & Snacks", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 39, name: "Potato cheezy Shots (8 pcs)", description: "Crispy potato shots with cheese", price: 89, category: "Fries & Snacks", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // GARLIC BREADS
    { id: 40, name: "Garlic Bread Sticks", description: "Classic garlic bread sticks", price: 69, category: "Garlic Breads", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 41, name: "Cheese Garlic Bread", description: "Garlic bread with melted cheese", price: 79, category: "Garlic Breads", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 42, name: "Stuffed Garlic Bread", description: "Stuffed with vegetables and cheese", price: 99, category: "Garlic Breads", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 43, name: "Tandoori Paneer G B", description: "Tandoori paneer garlic bread", price: 124, category: "Garlic Breads", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 44, name: "Paneer peri peri G B", description: "Peri peri paneer garlic bread", price: 124, category: "Garlic Breads", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // ADD ON
    { id: 45, name: "Mozzarella Cheese", description: "Extra mozzarella cheese", price: 30, category: "Add On", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 46, name: "Cheese Dip", description: "Creamy cheese dipping sauce", price: 25, category: "Add On", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 47, name: "Peri Peri Dip", description: "Spicy peri peri sauce", price: 25, category: "Add On", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 48, name: "Thousand Island Dip", description: "Tangy thousand island sauce", price: 25, category: "Add On", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 49, name: "Jalapeno Dip", description: "Spicy jalapeno sauce", price: 25, category: "Add On", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 50, name: "Paneer", description: "Extra paneer topping", price: 25, category: "Add On", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 51, name: "Mushroom", description: "Fresh mushroom topping", price: 25, category: "Add On", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 52, name: "Black Olives", description: "Premium black olives", price: 20, category: "Add On", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 53, name: "Jalapenos", description: "Spicy jalapeno peppers", price: 20, category: "Add On", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 54, name: "Peri Peri Masala", description: "Extra peri peri seasoning", price: 5, category: "Add On", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // BEVERAGES
    { id: 55, name: "Classic Cold Coffee", description: "Refreshing cold coffee", price: 30, category: "Beverages", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 56, name: "Thick Cold coffee", description: "Rich and thick cold coffee", price: 35, category: "Beverages", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 57, name: "Choco Crush", description: "Chocolate flavored drink", price: 10, category: "Beverages", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 58, name: "Choco Chips", description: "Chocolate chips drink", price: 10, category: "Beverages", image: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODYzMzI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 59, name: "Cold Drink", description: "Chilled soft drink", price: 20, category: "Beverages", image: "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc1ODcwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 60, name: "Water Bottle", description: "Mineral water bottle", price: 20, category: "Beverages", image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU4NzE1ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

    // DESSERT
    { id: 61, name: "Choco Lava Cake", description: "Warm chocolate lava cake", price: 70, category: "Dessert", image: "https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbG92ZXJzJTIwcGl6emElMjBiYWNvbiUyMHNhdXNhZ2V8ZW58MXx8fHwxNzU4NzE1ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
  ];

  const categories = ["All", "Combo Meals", "Delicious Pizzas", "Special Pizza", "Classic Pizzas", "Pizza Mania", "New Arrivals", "Jain Pizzas", "Fries & Snacks", "Garlic Breads", "Add On", "Beverages", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our delicious selection of handcrafted pizzas, made with the finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-primary hover:bg-primary/90 text-white" 
                : "border-primary/20 text-foreground hover:bg-primary/5"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pizza Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 right-2 bg-secondary text-secondary-foreground"
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                    <Button 
                      onClick={() => addToCart(item)}
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Floating Cart */}
          <div className="lg:w-80">
            <div className="sticky top-24">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Your Order
                    </span>
                    {totalItems > 0 && (
                      <Badge variant="secondary" className="bg-primary text-white">
                        {totalItems}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Your cart is empty
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-muted/30 p-3 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-primary font-semibold">₹{item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeFromCart(item.id)}
                              className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                {cartItems.length > 0 && (
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center w-full text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-primary">₹{getCartTotal().toFixed(2)}</span>
                    </div>
                    <Button 
                      onClick={() => onNavigate('checkout')}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      size="lg"
                    >
                      Proceed to Checkout
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}