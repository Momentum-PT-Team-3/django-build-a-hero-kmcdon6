from django import forms
from mysite.myapi.models import Hero

class HeroForm(forms.ModelForm):
    class Meta:
        model = Hero
        fields = ['name', 'alias']
