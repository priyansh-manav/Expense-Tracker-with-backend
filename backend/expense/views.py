from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt 
import json
from .models import *
from django.db.models import Sum

# Create your views here.


@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        full_name = data.get("fullname")
        Email = data.get("email")
        passw =  data.get("password")

        if UserDetail.objects.filter(email = Email).exists():
            return JsonResponse({'message':'Email already exits'},status=400)
        UserDetail.objects.create(fullname = full_name,email = Email,password = passw)
        return JsonResponse({'message':'User registered Successfully'},status=201)


@csrf_exempt
def login(request):
     print("🔥 LOGIN VIEW HIT")
     print("METHOD:", request.method)

     if request.method == "POST":
        data = json.loads(request.body)
        Email = data.get('email')
        passw = data.get('password')


        try:
            user = UserDetail.objects.get(email=Email,password=passw)
            return JsonResponse({'message':"Login successful",'userid':user.id,'userName':user.fullname},status = 200)
        except:
            return JsonResponse({'message':"Something went wrong! Try again!"},status=400)




@csrf_exempt
def add_expense(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user_id = data.get('Userid')
        expenseItem = data.get('expenseitem')
        expenseCost = data.get('expensecost')
        expenseDate = data.get('expensedate')
        expenseDetail = data.get('expensedetail')

        user = UserDetail.objects.get(id = user_id)

        try:
            Expense.objects.create(UserId = user,expenseitem = expenseItem , expensecost = expenseCost , expensedate = expenseDate , expensedetail = expenseDetail)
            return JsonResponse({'message' : "Expense added Successfully"},status = 201)
        except Exception as e:
            return JsonResponse({"message" : 'Something went wrong', 'error' : str(e)},status = 400)



@csrf_exempt
def manage_expense(request,user_id):
    if request.method =="GET":

        expenses = Expense.objects.filter(UserId = user_id)
        expense_list = list(expenses.values())
        return JsonResponse(expense_list,safe=False)



@csrf_exempt
def update_expense(request,expense_id):
    if request.method == "PUT":
        data = json.loads(request.body)
        try:
            expense = Expense.objects.get(id = expense_id)
            expense.expensedetail = data.get('expensedetail',expense.expensedetail)
            expense.expenseitem = data.get('expenseitem',expense.expenseitem)
            expense.expensecost = data.get('expensecost',expense.expensecost)
            expense.expensedate = data.get('expensedate',expense.expensedate)
            expense.save()
            return JsonResponse({"message":"Expense updated successfully"})
        except:
            return JsonResponse({"message":"Expense updated failed"},status=404)





@csrf_exempt
def delete_expense(request,expense_id):
    if request.method == 'DELETE':
        try:
            expense = Expense.objects.get(id = expense_id)
            expense.delete()
            return JsonResponse({'message':'Expense deleted successfully'},status = 200)
        except:
            return JsonResponse({'message':"Expense not found"},status = 400)




@csrf_exempt
def change_password(request,user_id):
    if request.method == "POST":
        data = json.loads(request.body)
        current_password = data.get('currentPassword')
        new_password = data.get('newPassword')

        try:
            user = UserDetail.objects.get(id = user_id)
            if user.password != current_password:
                return JsonResponse({'message' : "Old password do not match"},status=400)
            user.password = new_password
            user.save()
            return JsonResponse({'message':"Password changed successfully!"},status=200)
        except : 
            return JsonResponse({"message" : "User not found"},status=404)



@csrf_exempt
def search_expense(request,user_id):
    if request.method == "GET":
        from_date = request.GET.get('from')
        to_date = request.GET.get('to')
        expenses = Expense.objects.filter(UserId = user_id,expensedate__range=[from_date,to_date])
        expense_list = list(expenses.values())
        agg = expenses.aggregate(Sum('expensecost'))
        total = agg['expensecost__sum'] or 0
        return JsonResponse({'expenses':expense_list,'total':total,'message':'something went wrong'})