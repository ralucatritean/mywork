import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
    id: string;
    qty: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    increaseQty: (id: string) => void;
    decreaseQty: (id: string) => void;
    getCartTotal: () => number;
    getCartTotalPrice: () => number;
    getCartItemCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'shopping_cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        // Inițializare din localStorage cu validare
        if (typeof window !== 'undefined') {
            try {
                const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
                if (savedData) {
                    const parsed = JSON.parse(savedData);
                    if (Array.isArray(parsed) && parsed.every(item => item.id && item.qty)) {
                        return parsed;
                    }
                }
            } catch (error) {
                console.error('❌ Eroare la încărcarea coșului din localStorage:', error);
            }
        }
        return [];
    });

    // Efect pentru salvarea în localStorage
    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
        } catch (error) {
            console.error('❌ Eroare la salvarea coșului în localStorage:', error);
        }
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === item.id);
            const newCart = exists
                ? prev.map(p =>
                    p.id === item.id ? { ...p, qty: p.qty + item.qty } : p
                )
                : [...prev, item];

            return newCart;
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => {
            const newCart = prev.filter(p => p.id !== id);
            return newCart;
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const increaseQty = (id: string) => {
        setCart(prev => {
            const newCart = prev.map(p =>
                p.id === id ? { ...p, qty: p.qty + 1 } : p
            );
            return newCart;
        });
    };

    const decreaseQty = (id: string) => {
        setCart(prev => {
            const newCart = prev
                .map(p =>
                    p.id === id ? { ...p, qty: Math.max(0, p.qty - 1) } : p
                )
                .filter(p => p.qty > 0);

            return newCart;
        });
    };

    const getCartTotal = () => cart.reduce((sum, item) => sum + item.qty, 0);

    const getCartItemCount = () => cart.reduce((sum, item) => sum + item.qty, 0);

    const getCartTotalPrice = () => {
        return cart.reduce((total, item) => {
            return total + item.qty * 100;
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increaseQty,
            decreaseQty,
            getCartTotal,
            getCartTotalPrice,
            getCartItemCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart trebuie folosit în interiorul unui CartProvider');
    }
    return context;
};
