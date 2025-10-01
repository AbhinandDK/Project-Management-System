from rest_framework import serializers
from .models import *

class projectserializer(serializers.ModelSerializer):
    class Meta:
        model=project
        fields=('id','name','ProjectManager','members','start_date','end_date','comment','status')
        
class projectmanagerserializer(serializers.ModelSerializer):
    class Meta:
        model=ProjectManager
        fields=('id','name')
    
class Memberserializer(serializers.ModelSerializer):
    class Meta:
        model=Members
        fields=('id','name')