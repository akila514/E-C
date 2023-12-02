import prisma from "@/lib/db";

export async function getProduct(productId: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return product;
}
