from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

PROJECTS = [
    {
        "id": 1,
        "title": "NutriSnap",
        "description": "Developed a user-friendly React based app on AWS cloud for simplified nutrition management by incorporating 10+ AWS services achieving a 40% increase in user engagement featuring image-based food identification and detailed nutritional insights.",
        "technologies": "React, Python, AWS, Terraform",
        "github_link": "https://github.com/sharma-rishi-130198/NutriSnap"
    },
    {
        "id": 2,
        "title": "GoalSync",
        "description": "Created a multi-platform Task Management application using React Native, Express.js, and Node.js as the backbone, with MongoDB for database management, resulting in a 30% increase in user productivity and task completion rates.",
        "technologies": "React Native, Node.js, Express.js, MongoDB",
        "github_link": "https://github.com/AryAgain/StudyBudy"
    },
]

SKILLS = [
    {"id": 1, "name": "Python"},
    {"id": 2, "name": "Java"},
    {"id": 3, "name": "React"},
    {"id": 4, "name": "Django"},
    {"id": 5, "name": "SQL"},
    {"id": 6, "name": "MongoDB"},
    {"id": 7, "name": "AWS"}
]

@api_view(['GET'])
def get_projects(request):
    return Response(PROJECTS)

@api_view(['GET'])
def get_skills(request):
    return Response(SKILLS)

@csrf_exempt
@api_view(['POST'])
def get_contact_message_response(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')
            
            response_data = {'message': 'Your message sent successfully!'}
            return JsonResponse(response_data, status=200)
        except Exception as e:
            print(f'Error: {e}')
            return JsonResponse({'message': 'There was an error sending your message.'}, status=500)
    else:
        return JsonResponse({'message': 'Invalid request method.'}, status=405)
