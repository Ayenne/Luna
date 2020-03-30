from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.restaurants.models import Restaurant
from apps.restaurants.serializers import RestaurantSerializer


class ListCreateRestaurantsView(ListCreateAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(name__icontains=self.request.query_params.get('search', ''))


class GetUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer