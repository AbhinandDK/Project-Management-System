from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router=DefaultRouter()
router.register('project',projectviewset,basename='project')
router.register('ProjectManager',projectmanagerviewset,basename='ProjectManager')
router.register('members',Membersviewset,basename='members')

urlpatterns = router.urls





