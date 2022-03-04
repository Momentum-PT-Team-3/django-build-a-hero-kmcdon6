from django.core import serializers
from django.shortcuts import render
from django.http import JsonResponse
from .forms import HeroForm
from myapi.models import Hero

# Create your views here.
def index(request):
    hero_form =  HeroForm()
    return render(request, "index.html", {'hero_form': hero_form}) #file name in quotes


# def ajax_create_hero(request):
#     hero_name = request.POST.get('hero_name')
#     # alias = request.POST.get('alias')
#     data = {
#         'my_data':hero_name
#     }
#     return JsonResponse(data)
    
    
    # if request.method == "POST":
        # hero_name = request.POST.get('hero_name')
        # alias = request.POST.get('alias')
    #     new_score = Score.objects.get_or_create(points=score, player=initials)
    #     data = serializers.serialize('json', [new_score[0]])
    #     return JsonResponse(data, safe=False)

    # else:
    #     return JsonResponse({'method': 'error not permitted'})