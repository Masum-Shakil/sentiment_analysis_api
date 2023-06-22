from rest_framework.decorators import api_view
from rest_framework.response import Response
from transformers import pipeline
from django.shortcuts import render

@api_view(['POST'])
def sentiment_analysis_view(request):
    text = request.data.get('text')
    model = pipeline('sentiment-analysis')
    result = model(text)
    label = result[0]['label']   
    return Response({'sentiment': label})

def index_view(request):
    return render(request, 'index.html')