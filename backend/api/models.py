from django.db import models

class ProjectManager(models.Model):
    name=models.CharField(unique=True,max_length=100)
    created=models.DateTimeField(auto_now_add=True)
    
    modified=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    
class Members(models.Model):
    name=models.CharField(unique=True,max_length=100)
    created=models.DateTimeField(auto_now_add=True)
    
    modified=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    
    
class project(models.Model):
    name=models.CharField(unique=True,max_length=100)
    
    members=models.ManyToManyField(Members)
    
    ProjectManager=models.ForeignKey(ProjectManager,on_delete = models.CASCADE, blank=True,null=True)
    
    start_date=models.DateField()
    
    end_date=models.DateField()
    
    comment=models.CharField(max_length=500,blank=True,null=True)
    
    status=models.CharField(max_length=100)
    
    created=models.DateTimeField(auto_now_add=True)
    
    modified=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name