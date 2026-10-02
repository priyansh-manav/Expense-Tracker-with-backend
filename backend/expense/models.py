from django.db import models

# Create your models here.


class UserDetail(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100,unique=True)
    password = models.CharField(max_length=100)
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname




class Expense(models.Model):
    UserId = models.ForeignKey(UserDetail,on_delete=models.CASCADE)
    expensedate = models.DateField(null=True,blank=True)
    expenseitem = models.CharField(max_length=100)
    expensecost = models.CharField(max_length=100)
    expensedetail = models.TextField(max_length=250,null=True,blank=True)
    notedate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.expenseitem} - {self.expensecost}"