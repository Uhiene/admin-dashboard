import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/product/ProductTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart ";
import SalesTrendChart from "../components/product/SalesTrendChart";

const ProductsPage = () => {
  return (
    <motion.div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <StatCard
          name="Total Products"
          icon={Package}
          value={1234}
          color="#6366F1"
        />
        <StatCard
          name="Top Selling"
          icon={TrendingUp}
          value={89}
          color="#10B981"
        />
        <StatCard
          name="Low Stock"
          icon={AlertTriangle}
          value={23}
          color="#F59E0B"
        />
        <StatCard
          name="Total Revenue"
          icon={DollarSign}
          value={"$543,210"}
          color="#EF4444"
        />

        <ProductTable/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <SalesTrendChart/>
          <CategoryDistributionChart/>
        </div>
      </main>
    </motion.div>
  );
};

export default ProductsPage;
