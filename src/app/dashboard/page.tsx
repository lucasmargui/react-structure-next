import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchRevenue , fetchLatestInvoices } from '@/app/lib/data';

import  invoicesData   from '../../../scripts/invoices';
import  customersData   from '../../../scripts/customers';

 
export default async function Page() {
  const revenues = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  const totalInvoices = invoicesData.invoices.length;
  const totalCustomers = customersData.customers.length;


  const customerCountTotalPaid = customersData.total_paid_invoices; 
  const customerCountTotalPending = customersData.total_pending_invoices; 


  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={customerCountTotalPaid} type="collected" />
        <Card title="Pending" value={customerCountTotalPending} type="pending" />
        <Card title="Total Invoices" value={totalInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={totalCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenues}  /> 
        <LatestInvoices latestInvoices={latestInvoices} /> 
      </div>
    </main>
  );
}