import prisma from "@/lib/db";

export default async function getTrendingProducts() {
  try {
    let oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const trendingProducts = await prisma.product.findMany({
      where: {
        updatedAt: {
          gte: oneMonthAgo,
        },
      },
      orderBy: {
        purchasedBy: "desc",
      },
      take: 10,
    });

    return trendingProducts;
  } catch (error) {
    throw new Error("Error getting trending products");
  }
}

// const products = await prisma.product.findMany();

//   const sortedProducts = products.sort((a, b) => {
//     return b.purchasedBy - a.purchasedBy;
//   });

//   if (sortedProducts.length < 10) {
//     return sortedProducts.slice(0, sortedProducts.length);
//   }

//   return sortedProducts.slice(0, 10);
