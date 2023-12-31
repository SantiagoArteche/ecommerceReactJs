import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { CarritoContainer } from "./CarritoContainer";
import "/public/css/Carrito.css";

export const Carrito = () => {
const { cart, limpiarCarrito, limpiarProducto, precioTotal } = useContext(CartContext)

return <CarritoContainer cart={cart} limpiarCarrito={limpiarCarrito} limpiarProducto={limpiarProducto} precioTotal={precioTotal} />
};

