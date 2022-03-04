## Building a Front End for an API

In this assignment, you are given a pre-made API, created using Django Rest Framework. The source code is based on this [tutorial]( https://medium.com/swlh/build-your-first-rest-api-with-django-rest-framework-e394e39a482c).

Your task is to build the front end to this api in this Django project using HTML, CSS, and JS. 

### Requirements
- One main page that contains the following:
#create home page - html doc
has template, url, and view
-use ajax to get data (fetch): 1. js doc with queryselector and an eventlistener with fetch request with GET method (to send JSON), 2. js doc linked in html doc, 3. ajax view that returns jsonresponse, 4. myapi models.py has a hero class

create object in models.py and then import it into forms ( create form in forms.py, create view for the form, render view "as_p" in template

create hereos and display them in admin
    - A list of all the heroes
    - A form for creating a new hero without refreshing the page
        -see brennan article: -you have define the url api/heroes, get request to get heroes to render on the page
        -form and post request to get a new hero
    - A way to delete a hero without reloading the page  
        -fetch DELETE method. 
        -how to identify the item to delete?  
    - Each hero should be a clickable link to show the hero detail

    ***read DRF article to understand rest frmwrk better

