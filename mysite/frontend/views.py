from .forms import HeroForm
from django.shortcuts import render
from mysite.myapi.models import Hero

# Create your views here.
def index(request):
    return render(request, "index.html", {'hero_form': hero_form}) #file name in quotes