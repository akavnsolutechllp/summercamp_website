const User = require("../models/User");

const generateInvoiceId = async () => {
  const users = await User.find({ "invoice.invoiceid": { $exists: true } }).select("invoice.invoiceid");

  let maxNumeric = 0;

  users.forEach((user) => {
    const invoiceId = user.invoice?.invoiceid;
    if (invoiceId && invoiceId.startsWith("SSA")) {
      const num = parseInt(invoiceId.slice(3), 10); // SSA00001 -> 1
      if (!isNaN(num) && num > maxNumeric) {
        maxNumeric = num;
      }
    }
  });

  const nextNumericPart = (maxNumeric + 1).toString().padStart(5, "0");
  return `SSA${nextNumericPart}`;
};

module.exports = generateInvoiceId;
