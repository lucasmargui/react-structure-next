import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchRevenue , fetchLatestInvoices, fetchCardData } from '@/app/lib/data';


 
export default async function Page() {
  const revenues = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const data = await fetchCardData();



  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={data[3]} type="collected" />
        <Card title="Pending" value={data[2]} type="pending" />
        <Card title="Total Invoices" value={data[1]} type="invoices" />
        <Card
          title="Total Customers"
          value={data[0]}
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