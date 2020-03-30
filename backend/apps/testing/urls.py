from django.urls import path

from apps.testing.views import ListCreateTestingView

urlpatterns = [
    path('', ListCreateTestingView.as_view()),
]
