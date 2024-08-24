from django.urls import path
from .views import get_projects, get_skills, get_contact_message_response

urlpatterns = [
    path('projects/', get_projects, name='get_projects'),
    path('skills/', get_skills, name='get_skills'),
    path('contact/', get_contact_message_response, name='get_contact_message_response')
    ]
