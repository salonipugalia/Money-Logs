const Expense = require("../models/expenseModel")

exports.addExpense = async (req,res)=>{
    const {title, amount, category, description, date} =req.body

    const expense = Expense({
        title,
        amount,
        category,
        description,
        date
    })

    try{

        if(!title || !category || !description || !date)
        {
            return res.status(400).json({message:'all fields are required!'})
        }
        if(amount<=0 || !amount==='number')
            {
                return res.status(400).json({message:'amount must be a positive number!'})
            }
            await expense.save();
            res.status(200).json({message:'Expense Added'});
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
    console.log(expense);

}


exports.getExpense= async(req,res)=>{

    try{
        const expenses= await Expense.find().sort({createdAt:-1});
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteExpense= async(req,res)=>{
    const {id} = req.params;
    Expense.findByIdAndDelete(id).then((expense)=>{
        res.status(500).json({message: 'Expense Deleted'})

    })
    .catch((err)=>{
        res.status(500).json({message: 'Server Error'})
    })
}

