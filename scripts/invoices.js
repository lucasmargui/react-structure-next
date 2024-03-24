// Faturas
const invoices = [
    { id: "1", customer_id: "1", amount: 100, date: "2024-03-01", status: "pending" },
    { id: "2", customer_id: "2", amount: 200, date: "2024-03-02", status: "paid" },
    { id: "3", customer_id: "3", amount: 150, date: "2024-03-03", status: "pending" },
    { id: "4", customer_id: "4", amount: 300, date: "2024-03-04", status: "paid" },
    { id: "5", customer_id: "5", amount: 250, date: "2024-03-05", status: "pending" },
    { id: "6", customer_id: "6", amount: 180, date: "2024-03-06", status: "pending" },
    { id: "7", customer_id: "7", amount: 400, date: "2024-03-07", status: "paid" },
    { id: "8", customer_id: "8", amount: 220, date: "2024-03-08", status: "pending" },
    { id: "9", customer_id: "9", amount: 270, date: "2024-03-09", status: "paid" },
    { id: "10", customer_id: "10", amount: 350, date: "2024-03-10", status: "pending" }
  ];

  const latestInvoices = [
    {
      id: "1",
      name: "Alice",
      image_url: "https://example.com/alice.jpg",
      email: "alice@example.com",
      amount: "100.00",
    },
    {
      id: "2",
      name: "Bob",
      image_url: "https://example.com/bob.jpg",
      email: "bob@example.com",
      amount: "200.00",
    },
    {
      id: "3",
      name: "Charlie",
      image_url: "https://example.com/charlie.jpg",
      email: "charlie@example.com",
      amount: "150.00",
    },
    {
      id: "4",
      name: "David",
      image_url: "https://example.com/david.jpg",
      email: "david@example.com",
      amount: "300.00",
    },
    {
      id: "5",
      name: "Eve",
      image_url: "https://example.com/eve.jpg",
      email: "eve@example.com",
      amount: "250.00",
    },
    {
      id: "6",
      name: "Frank",
      image_url: "https://example.com/frank.jpg",
      email: "frank@example.com",
      amount: "180.00",
    },
    {
      id: "7",
      name: "Grace",
      image_url: "https://example.com/grace.jpg",
      email: "grace@example.com",
      amount: "350.00",
    },
    {
      id: "8",
      name: "Hannah",
      image_url: "https://example.com/hannah.jpg",
      email: "hannah@example.com",
      amount: "400.00",
    },
    {
      id: "9",
      name: "Isaac",
      image_url: "https://example.com/isaac.jpg",
      email: "isaac@example.com",
      amount: "220.00",
    },
    {
      id: "10",
      name: "Jack",
      image_url: "https://example.com/jack.jpg",
      email: "jack@example.com",
      amount: "280.00",
    },
  ];


  const latestInvoicesRaw = [
    {
      id: "1",
      name: "Alice",
      image_url: "https://example.com/alice.jpg",
      email: "alice@example.com",
      amount: 100.0,
    },
    {
      id: "2",
      name: "Bob",
      image_url: "https://example.com/bob.jpg",
      email: "bob@example.com",
      amount: 200.00,
    },
    {
      id: "3",
      name: "Charlie",
      image_url: "https://example.com/charlie.jpg",
      email: "charlie@example.com",
      amount: 150.00,
    },
    {
      id: "4",
      name: "David",
      image_url: "https://example.com/david.jpg",
      email: "david@example.com",
      amount: 300.00,
    },
    {
      id: "5",
      name: "Eve",
      image_url: "https://example.com/eve.jpg",
      email: "eve@example.com",
      amount: 250.00,
    },
    {
      id: "6",
      name: "Frank",
      image_url: "https://example.com/frank.jpg",
      email: "frank@example.com",
      amount: 180.00,
    },
    {
      id: "7",
      name: "Grace",
      image_url: "https://example.com/grace.jpg",
      email: "grace@example.com",
      amount: 350.00,
    },
    {
      id: "8",
      name: "Hannah",
      image_url: "https://example.com/hannah.jpg",
      email: "hannah@example.com",
      amount: 400.00,
    },
    {
      id: "9",
      name: "Isaac",
      image_url: "https://example.com/isaac.jpg",
      email: "isaac@example.com",
      amount: 220.00,
    },
    {
      id: "10",
      name: "Jack",
      image_url: "https://example.com/jack.jpg",
      email: "jack@example.com",
      amount: 280.00,
    },
  ];

  const invoicesTable = [
    {
      id: "2",
      customer_id: "2",
      name: "Bob",
      email: "bob@example.com",
      image_url: "https://example.com/bob.jpg",
      date: "2024-03-23",
      amount: 150,
      status: "pending",
    },
    {
      id: "3",
      customer_id: "3",
      name: "Charlie",
      email: "charlie@example.com",
      image_url: "https://example.com/charlie.jpg",
      date: "2024-03-24",
      amount: 200,
      status: "pending",
    },
    {
      id: "4",
      customer_id: "4",
      name: "David",
      email: "david@example.com",
      image_url: "https://example.com/david.jpg",
      date: "2024-03-25",
      amount: 120,
      status: "pending",
    },
    {
      id: "5",
      customer_id: "5",
      name: "Eva",
      email: "eva@example.com",
      image_url: "https://example.com/eva.jpg",
      date: "2024-03-26",
      amount: 180,
      status: "pending",
    },
    {
      id: "6",
      customer_id: "6",
      name: "Frank",
      email: "frank@example.com",
      image_url: "https://example.com/frank.jpg",
      date: "2024-03-27",
      amount: 250,
      status: "pending",
    },
    {
      id: "7",
      customer_id: "7",
      name: "Grace",
      email: "grace@example.com",
      image_url: "https://example.com/grace.jpg",
      date: "2024-03-28",
      amount: 300,
      status: "pending",
    },
    {
      id: "8",
      customer_id: "8",
      name: "Henry",
      email: "henry@example.com",
      image_url: "https://example.com/henry.jpg",
      date: "2024-03-29",
      amount: 90,
      status: "pending",
    },
    {
      id: "9",
      customer_id: "9",
      name: "Ivy",
      email: "ivy@example.com",
      image_url: "https://example.com/ivy.jpg",
      date: "2024-03-30",
      amount: 210,
      status: "pending",
    },
    {
      id: "10",
      customer_id: "10",
      name: "Jack",
      email: "jack@example.com",
      image_url: "https://example.com/jack.jpg",
      date: "2024-03-31",
      amount: 160,
      status: "pending",
    },
    {
      id: "11",
      customer_id: "11",
      name: "Karen",
      email: "karen@example.com",
      image_url: "https://example.com/karen.jpg",
      date: "2024-04-01",
      amount: 280,
      status: "pending",
    },
  ];
  
  const invoiceForm = [
    {
      id: "1",
      customer_id: "1",
      amount: 100,
      status: "pending",
    },
    {
      id: "2",
      customer_id: "2",
      amount: 150,
      status: "pending",
    },
    {
      id: "3",
      customer_id: "3",
      amount: 200,
      status: "pending",
    },
    {
      id: "4",
      customer_id: "4",
      amount: 120,
      status: "pending",
    },
    {
      id: "5",
      customer_id: "5",
      amount: 180,
      status: "pending",
    },
    {
      id: "6",
      customer_id: "6",
      amount: 250,
      status: "pending",
    },
    {
      id: "7",
      customer_id: "7",
      amount: 300,
      status: "pending",
    },
    {
      id: "8",
      customer_id: "8",
      amount: 90,
      status: "pending",
    },
    {
      id: "9",
      customer_id: "9",
      amount: 210,
      status: "pending",
    },
    {
      id: "10",
      customer_id: "10",
      amount: 160,
      status: "pending",
    },
  ];


  const listImages = ['amy-burns','balazs-orban','delba-de-oliveira','emil-kowalski', 'evil-rabbit', 'guillermo-rauch', 'hector-simpson', 'jared-palmer', 'lee-robinson', 'michael-novotny', 'steph-dietz', 'steven-tey'];


  function selectRandomItem(listImages) {
    // Gera um índice aleatório dentro do intervalo do comprimento da lista
    const randomIndex = Math.floor(Math.random() * listImages.length);
    // Retorna o item correspondente ao índice aleatório
    return  "/customers/" + listImages[randomIndex] + ".png"
    
  }
  

  const total_count_invoices = invoices.reduce((total, fatura) => total + fatura.amount, 0);


  const modifiedInvoices = latestInvoices.map(invoice => ({
    ...invoice,
    image_url:selectRandomItem(listImages)
  }));
  
  const modifiedInvoicesRaw = latestInvoicesRaw.map(invoice => ({
    ...invoice,
    image_url:selectRandomItem(listImages)
  }));
  const modifiedInvoicesTable = latestInvoicesRaw.map(invoice => ({
    ...invoice,
    image_url:selectRandomItem(listImages)
  }));

export default { invoices, modifiedInvoicesRaw, modifiedInvoices , modifiedInvoicesTable, invoiceForm, total_count_invoices};