
export const getTotalExpenses = (expenses) => {
    return expenses.length;
};

export const getTotalExpenseAmount = (expenses) =>{
    let amount=0;
    expenses.map((expense) =>{
        amount+=expense['amount'];
    })
    return amount;
};