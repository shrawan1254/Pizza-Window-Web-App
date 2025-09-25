import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, User, Lock, Clock, CheckCircle, Package } from 'lucide-react';
import type { Page } from '../App';

interface AdminDashboardProps {
  onNavigate: (page: Page) => void;
}

interface Order {
  id: string;
  customerName: string;
  items: string[];
  total: number;
  status: 'pending' | 'in-progress' | 'completed';
  paymentStatus: 'paid' | 'pending';
  timestamp: string;
  phone: string;
  address: string;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'PW123456',
      customerName: 'Rahul Sharma',
      items: ['Pizza Window Special Pizza x1', 'Peppy Paneer x2'],
      total: 407,
      status: 'pending',
      paymentStatus: 'paid',
      timestamp: '2024-01-20 14:30',
      phone: '+91 98765 43210',
      address: '123 MG Road, Mumbai, Maharashtra 400001'
    },
    {
      id: 'PW123457',
      customerName: 'Priya Patel',
      items: ['Paneer Makhani x1', 'Garlic Bread Sticks x1'],
      total: 198,
      status: 'in-progress',
      paymentStatus: 'paid',
      timestamp: '2024-01-20 14:15',
      phone: '+91 87654 32109',
      address: '456 Park Street, Delhi, Delhi 110001'
    },
    {
      id: 'PW123458',
      customerName: 'Amit Kumar',
      items: ['Margherita Pizza x2', 'Cold Drink x1'],
      total: 198,
      status: 'completed',
      paymentStatus: 'paid',
      timestamp: '2024-01-20 13:45',
      phone: '+91 76543 21098',
      address: '789 Brigade Road, Bangalore, Karnataka 560001'
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'pizza123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use admin/pizza123');
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusBadge = (status: Order['status']) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, icon: Clock, text: 'Pending' },
      'in-progress': { variant: 'default' as const, icon: Package, text: 'In Progress' },
      completed: { variant: 'destructive' as const, icon: CheckCircle, text: 'Completed' }
    };
    
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.text}
      </Badge>
    );
  };

  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  const inProgressOrders = orders.filter(order => order.status === 'in-progress').length;
  const completedOrders = orders.filter(order => order.status === 'completed').length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <User className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <CardDescription>
                Access the restaurant management dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </form>
              <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Demo credentials: <span className="font-mono">admin / pizza123</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage orders and monitor restaurant operations</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsLoggedIn(false)}
            className="border-primary/20"
          >
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{pendingOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{inProgressOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{completedOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <span className="text-sm text-muted-foreground">₹</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">₹{totalRevenue.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Monitor and manage incoming orders in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customerName}</div>
                          <div className="text-sm text-muted-foreground">{order.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          {order.items.map((item, index) => (
                            <div key={index} className="text-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">₹{order.total.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={order.paymentStatus === 'paid' ? 'destructive' : 'secondary'}
                          className={order.paymentStatus === 'paid' ? 'bg-green-600' : ''}
                        >
                          {order.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {order.timestamp}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {order.status === 'pending' && (
                            <Button
                              size="sm"
                              onClick={() => updateOrderStatus(order.id, 'in-progress')}
                              className="bg-primary hover:bg-primary/90 text-white"
                            >
                              Start
                            </Button>
                          )}
                          {order.status === 'in-progress' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateOrderStatus(order.id, 'completed')}
                              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                            >
                              Complete
                            </Button>
                          )}
                          {order.status === 'completed' && (
                            <Badge variant="destructive" className="bg-green-600">
                              Done
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}