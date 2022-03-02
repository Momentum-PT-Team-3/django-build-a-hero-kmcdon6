from django.shortcuts import render
from .forms import HeroForm
from myapi.models import Hero

# Create your views here.
def index(request):
    return render(request, "index.html", {'hero_form': HeroForm}) #file name in quotes