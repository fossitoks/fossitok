from django.conf.urls import url

from fossitokdemo import views

urlpatterns = [
    url(r'$', views.index, name='fossitokdemo_index'),
]
