const customers = [
    { id: "1", name: "Company A", email: "companyA@example.com", image_url: "https://example.com/companyA.jpg" },
    { id: "2", name: "Company B", email: "companyB@example.com", image_url: "https://example.com/companyB.jpg" },
    { id: "3", name: "Company C", email: "companyC@example.com", image_url: "https://example.com/companyC.jpg" },
    { id: "4", name: "Company D", email: "companyD@example.com", image_url: "https://example.com/companyD.jpg" },
    { id: "5", name: "Company E", email: "companyE@example.com", image_url: "https://example.com/companyE.jpg" },
    { id: "6", name: "Company F", email: "companyF@example.com", image_url: "https://example.com/companyF.jpg" },
    { id: "7", name: "Company G", email: "companyG@example.com", image_url: "https://example.com/companyG.jpg" },
    { id: "8", name: "Company H", email: "companyH@example.com", image_url: "https://example.com/companyH.jpg" },
    { id: "9", name: "Company I", email: "companyI@example.com", image_url: "https://example.com/companyI.jpg" },
    { id: "10", name: "Company J", email: "companyJ@example.com", image_url: "https://example.com/companyJ.jpg" }
  ];



  const customerFields = [
    {
      id: "2",
      name: "Bob",
    },
    {
      id: "3",
      name: "Charlie",
    },
    {
      id: "4",
      name: "David",
    },
    {
      id: "5",
      name: "Eva",
    },
    {
      id: "6",
      name: "Frank",
    },
    {
      id: "7",
      name: "Grace",
    },
    {
      id: "8",
      name: "Henry",
    },
    {
      id: "9",
      name: "Ivy",
    },
    {
      id: "10",
      name: "Jack",
    },
    {
      id: "11",
      name: "Karen",
    },
  ];


  const customersTable = [
    {
      id: "2",
      name: "Bob",
      email: "bob@example.com",
      image_url: "https://example.com/bob.jpg",
      total_invoices: 3,
      total_pending: 1,
      total_paid: 2,
    },
    {
      id: "3",
      name: "Charlie",
      email: "charlie@example.com",
      image_url: "https://example.com/charlie.jpg",
      total_invoices: 2,
      total_pending: 0,
      total_paid: 2,
    },
    {
      id: "4",
      name: "David",
      email: "david@example.com",
      image_url: "https://example.com/david.jpg",
      total_invoices: 4,
      total_pending: 2,
      total_paid: 2,
    },
    {
      id: "5",
      name: "Eva",
      email: "eva@example.com",
      image_url: "https://example.com/eva.jpg",
      total_invoices: 2,
      total_pending: 1,
      total_paid: 1,
    },
    {
      id: "6",
      name: "Frank",
      email: "frank@example.com",
      image_url: "https://example.com/frank.jpg",
      total_invoices: 5,
      total_pending: 3,
      total_paid: 2,
    },
    {
      id: "7",
      name: "Grace",
      email: "grace@example.com",
      image_url: "https://example.com/grace.jpg",
      total_invoices: 3,
      total_pending: 2,
      total_paid: 1,
    },
    {
      id: "8",
      name: "Henry",
      email: "henry@example.com",
      image_url: "https://example.com/henry.jpg",
      total_invoices: 1,
      total_pending: 1,
      total_paid: 0,
    },
    {
      id: "9",
      name: "Ivy",
      email: "ivy@example.com",
      image_url: "https://example.com/ivy.jpg",
      total_invoices: 6,
      total_pending: 4,
      total_paid: 2,
    },
    {
      id: "10",
      name: "Jack",
      email: "jack@example.com",
      image_url: "https://example.com/jack.jpg",
      total_invoices: 3,
      total_pending: 1,
      total_paid: 2,
    },
    {
      id: "11",
      name: "Karen",
      email: "karen@example.com",
      image_url: "https://example.com/karen.jpg",
      total_invoices: 2,
      total_pending: 1,
      total_paid: 1,
    },
  ];
  
  const formattedCustomersTable = customersTable.map((customer) => ({
    ...customer,
    total_pending: customer.total_pending.toString(),
    total_paid: customer.total_paid.toString(),
  }));

  const total_pending_invoices = customersTable.reduce((total, fatura) => total + fatura.total_pending, 0);
  const total_paid_invoices = customersTable.reduce((total, fatura) => total + fatura.total_paid, 0);

export default { customers, customerFields, formattedCustomersTable , total_pending_invoices, total_paid_invoices} ;