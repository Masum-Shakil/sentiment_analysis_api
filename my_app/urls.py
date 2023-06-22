from django.urls import path
from .views import sentiment_analysis_view, index_view

urlpatterns = [
    path('', index_view, name='index'),
    path('analyze', sentiment_analysis_view, name='analysis')
]