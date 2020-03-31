from django.urls import path

from apps.restaurants.views import ListCreateRestaurantsView, GetUpdateDeleteRestaurantView

urlpatterns = [
    path('', ListCreateRestaurantsView.as_view()),
    path('new/', ListCreateRestaurantsView.as_view()),
    path('<int:pk>/', GetUpdateDeleteRestaurantView.as_view()),
]
