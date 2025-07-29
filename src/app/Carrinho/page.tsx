"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/stores/useCartStore";
import NavbarLogin from "@/app/components/NavbarLogin";
import { formatCurrency } from "@/lib/formatter";
import Button from "@/app/components/Button"; 

type User = { id: number; nome: string };

export default function CarrinhoPage() {
  const router = useRouter();
  const { items, addItem, removeItem, clearCart } = useCartStore();
  const [usuario, setUsuario] = useState<User | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("pix");

  useEffect(() => {
    const userData = sessionStorage.getItem("usuario");
    if (userData) setUsuario(JSON.parse(userData));
  }, []);

  const totalPedido = items.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const handleFinalizarCompra = async () => {
    if (!usuario) return alert("Você precisa estar logado.");
    if (items.length === 0) return alert("Seu carrinho está vazio.");

    const payload = {
      usuarioId: usuario.id,
      itens: items.map(item => ({ carroId: item.id, quantidade: item.quantity })),
    };

    try {
      await api.post("/vendas", payload);
      alert("Compra realizada com sucesso!");
      clearCart();
      router.push("/meus-pedidos");
    } catch (error) {
      alert("Houve um erro ao processar sua compra.");
    }
  };

  if (items.length === 0) {
    return (
      <>
        <NavbarLogin />
        <main className="container mx-auto px-4 pt-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
          <Button href="/carros" variant="primary" size="lg">
            Ver carros disponíveis
          </Button>
        </main>
      </>
    );
  }

  return (
    <>
      <NavbarLogin />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-6">Meu Carrinho</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
                <Image src={item.image} alt={item.name} width={120} height={80} className="object-contain rounded" />
                <div className="flex-grow">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{formatCurrency(item.price)} / unidade</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm" variant="outline" onClick={() => removeItem(item.id)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" variant="primary" onClick={() => addItem(item)}>+</Button>
                </div>
                <p className="font-semibold w-24 text-right">{formatCurrency(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <aside className="w-full lg:w-80 bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold border-b pb-3 mb-4">Resumo do Pedido</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total</span>
              <span className="font-bold text-xl">{formatCurrency(totalPedido)}</span>
            </div>
            <div className="mt-6">
               <h3 className="font-semibold mb-3">Método de Pagamento</h3>
               <div className="space-y-2">
                 <label className="flex items-center gap-2 p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-brand-500">
                   <input type="radio" name="paymentMethod" value="pix" checked={paymentMethod === "pix"} onChange={(e) => setPaymentMethod(e.target.value)} />
                   <span>PIX</span>
                 </label>
                 <label className="flex items-center gap-2 p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-brand-500">
                   <input type="radio" name="paymentMethod" value="cartao" checked={paymentMethod === "cartao"} onChange={(e) => setPaymentMethod(e.target.value)} />
                   <span>Cartão de Crédito</span>
                 </label>
               </div>
             </div>
            <Button onClick={handleFinalizarCompra} size="lg" className="w-full mt-6">
              Finalizar Compra
            </Button>
          </aside>
        </div>
      </main>
    </>
  );
}